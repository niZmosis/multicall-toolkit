import type { AbiItem, AbiOutput } from '@ethereum-abi-types-generator/types'
import type {
  AggregateCallContext,
  AggregateContractResponse,
  AggregateResponse,
  ContractContext,
  ContractContextOptions,
  MulticallResults,
  ContractResults,
  MulticallExecutionType,
  MulticallOptions,
  ReferencedContracts,
  DiscriminatedMethodCalls,
  MethodNames,
} from '@ethereum-multicall/types'
import {
  getContractBasedOnNetwork,
  multicall2ABI,
  isMulticallOptionsWeb3,
  isMulticallOptionsEthers,
  isMulticallOptionsCustomJsonRpcProvider,
  MulticallError,
  ErrorCodes,
} from '@ethereum-multicall/utils'
import type { JsonFragment } from '@ethersproject/abi'
import type { Provider } from '@ethersproject/providers'
import { BigNumber, ethers } from 'ethers'
import { defaultAbiCoder } from 'ethers/lib/utils'

/**
 * Represents a Multicall instance for batching multiple Ethereum contract calls into a single request.
 */
export class Multicall {
  /** The type of execution for this Multicall instance. */
  _executionType: MulticallExecutionType

  /** The options for this Multicall instance. */
  _options: MulticallOptions

  /**
   * Creates a new Multicall instance.
   * @param context - The options for configuring the Multicall instance.
   * @throws Will throw an error if the provided options don't match any of the expected interfaces.
   */
  constructor(context: MulticallOptions) {
    this._options = context

    if (isMulticallOptionsWeb3(this._options)) {
      this._executionType = 'web3'
      return
    }

    if (isMulticallOptionsEthers(this._options)) {
      this._executionType = 'ethers'
      return
    }

    if (isMulticallOptionsCustomJsonRpcProvider(this._options)) {
      this._executionType = 'nodeUrl'
      return
    }

    throw new Error(
      'Your options passed in our incorrect they need to match either `MulticallOptionsEthers`, `MulticallOptionsWeb3` or `MulticallOptionsCustomJsonRpcProvider` interfaces',
    )
  }

  /**
   * Creates a call context for a contract.
   * @template TContract - The type of the contract.
   * @template TCustomData - The type of custom data.
   * @returns A function that creates a call context for the specified contract.
   */
  public createCallContext<
    TContract extends Record<string, any>,
    TCustomData = unknown,
  >() {
    return function <
      TCalls extends Record<
        string,
        DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
      >,
    >(
      context: ContractContext<TContract, TCalls, TCustomData>,
    ): ContractContext<TContract, TCalls, TCustomData> {
      return context
    }
  }

  /**
   * Executes a multicall for the given contract contexts.
   * @template TContractContexts - The type of the contract contexts.
   * @param contractCallContexts - The contract call contexts to execute.
   * @param contractCallOptions - The options for the contract call.
   * @returns A promise that resolves to the multicall results.
   */
  public async call<
    TContractContexts extends ReferencedContracts = ReferencedContracts,
  >(
    contractCallContexts: TContractContexts,
    contractCallOptions: ContractContextOptions = {},
  ): Promise<MulticallResults<TContractContexts>> {
    const contextArray = Object.entries(contractCallContexts)

    const aggregateResponse = await this.execute(
      this.buildAggregateCallContext(
        contextArray.map(([, context]) => context),
      ),
      contractCallOptions,
    )

    const returnObject: MulticallResults<TContractContexts> = {
      contracts: {} as MulticallResults<TContractContexts>['contracts'],
      blockNumber: aggregateResponse.blockNumber,
    }

    for (
      let response = 0;
      response < aggregateResponse.results.length;
      response++
    ) {
      const contractCallsResults = aggregateResponse.results[response]

      if (!contractCallsResults) {
        throw new MulticallError(
          `Contract call at index ${response} failed. Please check the contract address and method signature.`,
          ErrorCodes.multicallError,
        )
      }

      const contextEntry =
        contextArray[contractCallsResults.contractContextIndex]

      if (!contextEntry) {
        throw new MulticallError(
          `Context entry at index ${contractCallsResults.contractContextIndex} is undefined.`,
          ErrorCodes.multicallError,
        )
      }

      const [contractKey, context] = contextEntry

      const returnObjectResult: ContractResults<any, any> = {
        originContext: structuredClone(context),
        results: {},
      }

      for (
        let method = 0;
        method < contractCallsResults.methodResults.length;
        method++
      ) {
        const methodContext = contractCallsResults.methodResults[method]

        if (!methodContext) {
          throw new MulticallError(
            `Method context at index ${method} is undefined.`,
            ErrorCodes.multicallError,
          )
        }

        const methodName = Object.keys(context.calls)[
          methodContext.contractMethodIndex
        ]
        const originalContractCallMethodContext =
          context.calls[methodName as keyof typeof context.calls]

        const outputTypes = this.findOutputTypesFromAbi(
          context.abi,
          String(originalContractCallMethodContext.methodName),
        )

        const callReturnContext = {
          methodName: originalContractCallMethodContext.methodName,
          methodParameters: originalContractCallMethodContext.methodParameters,
          success: this._options.tryAggregate
            ? methodContext.result.success
            : true,
          decoded: false,
          value: undefined,
        }

        if (!this._options.tryAggregate || methodContext.result.success) {
          if (outputTypes && outputTypes.length > 0) {
            try {
              const decodedReturnValues = defaultAbiCoder.decode(
                outputTypes as any,
                this.getReturnDataFromResult(methodContext.result),
              )

              callReturnContext.decoded = true
              callReturnContext.value =
                this.formatReturnValues(decodedReturnValues)
            } catch (e) {
              if (!this._options.tryAggregate) {
                throw e
              }
              callReturnContext.success = false
            }
          } else {
            callReturnContext.value = this.getReturnDataFromResult(
              methodContext.result,
            )
          }
        }

        if (methodName !== undefined) {
          returnObjectResult.results[methodName] = callReturnContext
        }
      }

      returnObject.contracts[contractKey as keyof TContractContexts] =
        returnObjectResult as any
    }

    return returnObject
  }

  /**
   * Builds the aggregate call context from the given contract call contexts.
   * @template TContractContexts - The type of the contract contexts.
   * @param contractCallContexts - The contract call contexts to build from.
   * @returns An array of aggregate call contexts.
   */
  buildAggregateCallContext<TContractContexts extends ReferencedContracts>(
    contractCallContexts: TContractContexts[keyof TContractContexts][],
  ): AggregateCallContext[] {
    const aggregateCallContext: AggregateCallContext[] = []

    for (let contract = 0; contract < contractCallContexts.length; contract++) {
      const contractContext = contractCallContexts[contract]

      if (!contractContext) {
        throw new MulticallError(
          `Contract context at index ${contract} is undefined.`,
          ErrorCodes.multicallError,
        )
      }

      const executingInterface = new ethers.utils.Interface(
        JSON.stringify(contractContext.abi),
      )

      Object.entries(contractContext.calls).forEach(
        ([, methodContext], methodIndex) => {
          // Type assertion for methodContext
          const typedMethodContext =
            methodContext as DiscriminatedMethodCalls<any>[MethodNames<any>]

          const encodedData = executingInterface.encodeFunctionData(
            typedMethodContext.methodName,
            typedMethodContext.methodParameters,
          )

          aggregateCallContext.push({
            contractContextIndex: contract,
            contractMethodIndex: methodIndex,
            target: contractContext.contractAddress,
            encodedData,
          })
        },
      )
    }

    return aggregateCallContext
  }

  /**
   * Gets the return data from a result.
   * @param result - The result to get the return data from.
   * @returns The return data.
   */
  getReturnDataFromResult(result: any): any {
    if (this._options.tryAggregate) {
      return result.returnData
    }

    return result
  }

  /**
   * Formats the decoded return values.
   * @param decodedReturnValues - The decoded return values to format.
   * @returns The formatted return values.
   */
  formatReturnValues(decodedReturnValues: any): any {
    let decodedReturnResults = decodedReturnValues
    if (decodedReturnValues.length === 1) {
      decodedReturnResults = decodedReturnValues[0]
    }

    if (Array.isArray(decodedReturnResults)) {
      return decodedReturnResults
    }

    return decodedReturnResults
  }

  /**
   * Finds the output types from an ABI for a given method name.
   * @param abi - The ABI to search.
   * @param methodName - The name of the method to find output types for.
   * @returns An array of ABI outputs or undefined if not found.
   */
  findOutputTypesFromAbi(
    abi: (AbiItem | JsonFragment)[],
    methodName: string,
  ): AbiOutput[] | undefined {
    const contract = new ethers.Contract(
      ethers.constants.AddressZero,
      abi as JsonFragment[],
    )
    methodName = methodName.trim()

    const functionFragment = contract.interface.functions[methodName]

    if (functionFragment) {
      return functionFragment.outputs as AbiOutput[]
    }

    for (let i = 0; i < abi.length; i++) {
      const item = abi[i]

      if (!item) {
        throw new MulticallError(
          `ABI item at index ${i} is undefined.`,
          ErrorCodes.multicallError,
        )
      }

      if (item.name?.trim() === methodName) {
        const outputs = item.outputs

        if (outputs) {
          return Array.isArray(outputs)
            ? ([...outputs] as AbiOutput[])
            : undefined
        }

        return undefined
      }
    }

    return undefined
  }

  /**
   * Executes the multicall based on the execution type.
   * @param calls - The calls to execute.
   * @param options - The options for the execution.
   * @returns A promise that resolves to the aggregate response.
   */
  async execute(
    calls: AggregateCallContext[],
    options: ContractContextOptions,
  ): Promise<AggregateResponse> {
    switch (this._executionType) {
      case 'web3':
        return this.executeWithWeb3(calls, options)
      case 'ethers':
      case 'nodeUrl':
        return this.executeWithEthersOrNodeUrl(calls, options)
      default:
        throw new Error(`${this._executionType} is not defined`)
    }
  }

  /**
   * Executes the multicall using Web3.
   * @param calls - The calls to execute.
   * @param options - The options for the execution.
   * @returns A promise that resolves to the aggregate response.
   */
  async executeWithWeb3(
    calls: AggregateCallContext[],
    options: ContractContextOptions,
  ): Promise<AggregateResponse> {
    if (!isMulticallOptionsWeb3(this._options)) {
      throw new Error('Invalid options: Expected MulticallOptionsWeb3.')
    }

    const { web3Provider } = this._options

    const networkId = await web3Provider.eth.net.getId()
    const contract = new web3Provider.eth.Contract(
      multicall2ABI,
      getContractBasedOnNetwork(
        networkId,
        this._options.multicallCustomContractAddress,
      ),
    )

    let blockNumber = 'latest'
    if (options.blockNumber) {
      blockNumber = String(options.blockNumber)
    }
    if (this._options.tryAggregate) {
      const contractResponse = (await contract.methods
        .tryBlockAndAggregate(
          false,
          this.mapCallContextToMatchContractFormat(calls),
        )
        .call({}, blockNumber)) as AggregateContractResponse

      contractResponse.blockNumber = BigNumber.from(
        contractResponse.blockNumber,
      )

      return this.buildUpAggregateResponse(contractResponse, calls)
    } else {
      const contractResponse = (await contract.methods
        .aggregate(this.mapCallContextToMatchContractFormat(calls))
        .call({}, blockNumber)) as AggregateContractResponse

      contractResponse.blockNumber = BigNumber.from(
        contractResponse.blockNumber,
      )

      return this.buildUpAggregateResponse(contractResponse, calls)
    }
  }

  /**
   * Executes the multicall using Ethers or a custom JSON-RPC provider.
   * @param calls - The calls to execute.
   * @param options - The options for the execution.
   * @returns A promise that resolves to the aggregate response.
   */
  async executeWithEthersOrNodeUrl(
    calls: AggregateCallContext[],
    options: ContractContextOptions,
  ): Promise<AggregateResponse> {
    let ethersProvider: Provider | undefined

    if (isMulticallOptionsEthers(this._options)) {
      ethersProvider = this._options.ethersProvider
    } else if (isMulticallOptionsCustomJsonRpcProvider(this._options)) {
      ethersProvider = new ethers.providers.JsonRpcProvider(
        this._options.nodeUrl,
        this._options.chainId,
      )
    }

    if (!ethersProvider) {
      throw new Error('Provider is not defined')
    }

    const network = await ethersProvider.getNetwork()

    const contract = new ethers.Contract(
      getContractBasedOnNetwork(
        network.chainId,
        this._options.multicallCustomContractAddress,
      ),
      multicall2ABI,
      ethersProvider,
    )

    let overrideOptions = {}
    if (options.blockNumber) {
      overrideOptions = {
        ...overrideOptions,
        blockTag: Number(options.blockNumber),
      }
    }

    if (this._options.tryAggregate) {
      if (typeof contract.callStatic.tryBlockAndAggregate === 'function') {
        const contractResponse =
          (await contract.callStatic.tryBlockAndAggregate(
            false,
            this.mapCallContextToMatchContractFormat(calls),
            overrideOptions,
          )) as AggregateContractResponse

        return this.buildUpAggregateResponse(contractResponse, calls)
      } else {
        throw new Error(
          'tryBlockAndAggregate method is not available on the contract',
        )
      }
    } else {
      if (typeof contract.callStatic?.aggregate === 'function') {
        const contractResponse = (await contract.callStatic.aggregate(
          this.mapCallContextToMatchContractFormat(calls),
          overrideOptions,
        )) as AggregateContractResponse

        return this.buildUpAggregateResponse(contractResponse, calls)
      } else {
        throw new Error('aggregate method is not available on the contract')
      }
    }
  }

  /**
   * Builds up the aggregate response from the contract response and calls.
   * @param contractResponse - The response from the contract.
   * @param calls - The original calls made.
   * @returns The built aggregate response.
   */
  buildUpAggregateResponse(
    contractResponse: AggregateContractResponse,
    calls: AggregateCallContext[],
  ): AggregateResponse {
    const aggregateResponse: AggregateResponse = {
      blockNumber: contractResponse.blockNumber.toNumber(),
      results: [],
    }

    for (let i = 0; i < contractResponse.returnData.length; i++) {
      const item = calls[i]

      if (!item) {
        throw new MulticallError(
          `Call context at index ${i} is undefined.`,
          ErrorCodes.multicallError,
        )
      }

      const existingResponse = aggregateResponse.results.find(
        (c) => c.contractContextIndex === item.contractContextIndex,
      )

      if (existingResponse) {
        existingResponse.methodResults.push({
          result: contractResponse.returnData[i],
          contractMethodIndex: item.contractMethodIndex,
        })
      } else {
        aggregateResponse.results.push({
          methodResults: [
            {
              result: contractResponse.returnData[i],
              contractMethodIndex: item.contractMethodIndex,
            },
          ],
          contractContextIndex: item.contractContextIndex,
        })
      }
    }

    return aggregateResponse
  }

  /**
   * Maps the call context to match the contract format.
   * @param calls - The calls to map.
   * @returns An array of objects with target and callData properties.
   */
  mapCallContextToMatchContractFormat(calls: AggregateCallContext[]): Array<{
    target: string
    callData: string
  }> {
    return calls.map((call) => ({
      target: call.target,
      callData: call.encodedData,
    }))
  }
}
