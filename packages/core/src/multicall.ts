import type { AbiItem, AbiOutput } from '@abi-toolkit/types'
import type {
  AggregateCallContext,
  AggregateContractResponse,
  AggregateResponse,
  ContractContext,
  ContractContextOptions,
  DiscriminatedMethodCalls,
  MethodNames,
  MulticallResults,
  MulticallExecutionType,
  MulticallOptions,
  ReferencedContracts,
  MethodResult,
} from '@multicall-toolkit/types'
import {
  DEFAULT_CALL_SIZE_LIMIT,
  DEFAULT_MAX_BATCH_SIZE,
  ErrorCodes,
  getContractBasedOnNetwork,
  isMulticallOptionsWeb3,
  isMulticallOptionsEthers,
  isMulticallOptionsCustomJsonRpcProvider,
  multicall3ABI,
  MulticallError,
} from '@multicall-toolkit/utils'
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
   * @param options - The options for configuring the Multicall instance.
   * @throws Will throw an error if the provided options don't match any of the expected interfaces.
   */
  constructor(options: MulticallOptions) {
    this._options = {
      ...options,
      maxCallDataSize: options.maxCallDataSize || DEFAULT_CALL_SIZE_LIMIT,
      maxCallsPerBatch: options.maxCallsPerBatch || DEFAULT_MAX_BATCH_SIZE,
      enableBatching: options.enableBatching ?? true,
    }

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
   * Executes multiple contract calls, with optional batching support.
   */
  public async call<TContractContexts extends ReferencedContracts>(
    contractCallContexts: TContractContexts,
    contractCallOptions: ContractContextOptions = {},
  ): Promise<{
    blockNumber: number
    batchCount: number
    contracts: MulticallResults<TContractContexts>['contracts']
  }> {
    try {
      const contextArray = Object.entries(contractCallContexts)
      if (contextArray.length === 0) {
        // No contexts provided
        return {
          blockNumber: 0,
          batchCount: 0,
          contracts: {} as MulticallResults<TContractContexts>['contracts'],
        }
      }

      const calls = this.buildAggregateCallContext(
        contextArray.map(([, context]) => context),
      )
      const batches = this.createBatches(calls)
      const batchCount = batches.length

      let results: AggregateResponse[] = []

      if (this._options.enableBatching) {
        // Execute all batches concurrently using Promise.allSettled
        const settled = await Promise.allSettled(
          batches.map((batch) => this.execute(batch, contractCallOptions)),
        )

        for (let index = 0; index < settled.length; index++) {
          const result = settled[index]
          const batch = batches[index]

          if (!result) {
            throw new MulticallError(
              'Promise result is undefined',
              ErrorCodes.processingError,
            )
          }

          if (!batch || batch.length === 0) {
            throw new MulticallError(
              'Batch is undefined or empty',
              ErrorCodes.processingError,
            )
          }

          if (result.status === 'fulfilled') {
            results.push(result.value)
          } else {
            // If tryAggregate = false, throw immediately
            if (!this._options.tryAggregate) {
              throw result.reason
            }

            // If tryAggregate = true, synthesize a failed aggregate response for this batch
            const errorMessage =
              result.reason instanceof Error
                ? result.reason.message
                : String(result.reason)

            const failedBatchResponse = this.buildFailureAggregateResponse(
              batch,
              {
                code: ErrorCodes.batchError,
                message: errorMessage,
              },
            )

            results.push(failedBatchResponse)
          }
        }
      } else {
        // Execute batches sequentially
        results = await this.executeBatchesSequentially(
          batches,
          contractCallOptions,
        )
      }

      const combinedResponse = this.combineResponses(results)
      const finalResults = this.processResponse<TContractContexts>(
        combinedResponse,
        contextArray,
      )

      return {
        ...finalResults,
        batchCount,
      }
    } catch (error) {
      if (error instanceof MulticallError) throw error
      throw new MulticallError(
        `Failed to execute multicall: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
        ErrorCodes.executionError,
        error instanceof Error ? error : undefined,
      )
    }
  }

  /**
   * Executes batches of contract calls sequentially, stopping if an error occurs (unless `tryAggregate` is enabled).
   * Each batch is processed one after the other to maintain sequential order and error handling.
   *
   * @param batches - An array of call batches to be executed, each batch containing multiple `AggregateCallContext` items.
   * @param contractCallOptions - Options for each contract call execution, such as block number and aggregation settings.
   * @returns A promise that resolves to an array of `AggregateResponse`.
   */
  async executeBatchesSequentially(
    batches: AggregateCallContext[][],
    contractCallOptions: ContractContextOptions,
  ): Promise<AggregateResponse[]> {
    return batches.reduce<Promise<AggregateResponse[]>>(
      (previousPromise, batch) =>
        previousPromise.then(async (acc) => {
          try {
            const response = await this.execute(batch, contractCallOptions)
            return [...acc, response]
          } catch (error) {
            // If tryAggregate = false, throw immediately
            if (!this._options.tryAggregate) throw error

            // If tryAggregate = true, build a failed response for this batch
            const errorMessage =
              error instanceof Error ? error.message : String(error)
            const failedBatchResponse = this.buildFailureAggregateResponse(
              batch,
              {
                code: ErrorCodes.batchError,
                message: errorMessage,
              },
            )
            return [...acc, failedBatchResponse]
          }
        }),
      Promise.resolve([] as AggregateResponse[]),
    )
  }

  createBatches(calls: AggregateCallContext[]): AggregateCallContext[][] {
    if (!this._options.enableBatching) {
      return [calls]
    }

    const batches: AggregateCallContext[][] = []
    let currentBatch: AggregateCallContext[] = []
    let currentBatchSize = 0

    for (const call of calls) {
      const callSize = Buffer.from(call.encodedData.slice(2), 'hex').length

      const shouldStartNewBatch =
        currentBatchSize + callSize >
          (this._options.maxCallDataSize || DEFAULT_CALL_SIZE_LIMIT) ||
        currentBatch.length >=
          (this._options.maxCallsPerBatch || DEFAULT_MAX_BATCH_SIZE)

      if (shouldStartNewBatch && currentBatch.length > 0) {
        batches.push(currentBatch)
        currentBatch = []
        currentBatchSize = 0
      }

      currentBatch.push(call)
      currentBatchSize += callSize
    }

    if (currentBatch.length > 0) {
      batches.push(currentBatch)
    }

    return batches
  }

  combineResponses(responses: AggregateResponse[]): AggregateResponse {
    if (!responses.length) {
      return {
        blockNumber: 0,
        results: [],
      }
    }

    const blockNumber = Math.max(...responses.map((r) => r.blockNumber))
    const groupedResults: Record<
      number,
      {
        contractContextIndex: number
        methodResults: { result: any; contractMethodIndex: number }[]
      }
    > = {}

    for (const response of responses) {
      for (const contractResult of response.results) {
        const { contractContextIndex, methodResults } = contractResult

        if (!groupedResults[contractContextIndex]) {
          groupedResults[contractContextIndex] = {
            contractContextIndex,
            methodResults: [],
          }
        }

        groupedResults[contractContextIndex].methodResults.push(
          ...methodResults,
        )
      }
    }

    const combinedResults = Object.values(groupedResults).map((contract) => ({
      ...contract,
      methodResults: contract.methodResults.sort(
        (a, b) => a.contractMethodIndex - b.contractMethodIndex,
      ),
    }))

    combinedResults.sort(
      (a, b) => a.contractContextIndex - b.contractContextIndex,
    )

    return {
      blockNumber,
      results: combinedResults,
    }
  }

  processResponse<TContractContexts extends ReferencedContracts>(
    response: AggregateResponse,
    contextArray: [string, ContractContext<any, any, any>][],
  ): MulticallResults<TContractContexts> {
    const returnObject: MulticallResults<TContractContexts> = {
      blockNumber: response.blockNumber,
      contracts: {} as MulticallResults<TContractContexts>['contracts'],
      batchCount: 1,
    }

    for (const contractResult of response.results) {
      const contextEntry = contextArray[contractResult.contractContextIndex]

      if (!contextEntry) {
        throw new MulticallError(
          `Context entry at index ${contractResult.contractContextIndex} is undefined.`,
          ErrorCodes.processingError,
        )
      }

      const [contractKey, context] = contextEntry
      const returnObjectResult = {
        originContext: structuredClone(context),
        results: {} as Record<string, MethodResult<any, any>>,
      }

      for (const methodResult of contractResult.methodResults) {
        const methodReference = Object.keys(context.calls)[
          methodResult.contractMethodIndex
        ]
        if (!methodReference) continue

        const { methodName, methodParameters } = context.calls[methodReference]

        const callReturnContext: MethodResult<any, any> = {
          methodName: String(methodName),
          methodParameters,
          success: this._options.tryAggregate
            ? methodResult.result.success
            : true,
          decoded: false,
          value: undefined,
        }

        if (!callReturnContext.success) {
          // The call failed. If tryAggregate = false, we never reach here; we threw earlier.
          // If we are here, tryAggregate = true and we have an error.
          callReturnContext.error = methodResult.result.error || {
            code: ErrorCodes.executionError,
            message: 'The call failed or reverted.',
          }
        } else {
          // The call succeeded. Attempt to decode the result.
          const outputTypes = this.findOutputTypesFromAbi(
            context.abi,
            String(methodName),
          )
          if (outputTypes && outputTypes.length > 0) {
            const data = this.getReturnDataFromResult(methodResult.result)
            try {
              const decodedReturnValues = defaultAbiCoder.decode(
                outputTypes as any,
                data,
              )
              const value = this.formatReturnValues(decodedReturnValues)
              callReturnContext.value = value
              callReturnContext.decoded = true
            } catch {
              // Attempt fallback decoding
              const fallbackDecoded = this.decodeBytes32IfNecessary(
                data,
                outputTypes,
              )
              callReturnContext.decoded = !!fallbackDecoded
              callReturnContext.value = fallbackDecoded ?? undefined
            }
          } else {
            callReturnContext.value = this.getReturnDataFromResult(
              methodResult.result,
            )
          }
        }

        returnObjectResult.results[methodReference] = callReturnContext
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
          const typedMethodContext =
            methodContext as DiscriminatedMethodCalls<any>[MethodNames<any>]

          let encodedData: string
          try {
            encodedData = executingInterface.encodeFunctionData(
              typedMethodContext.methodName,
              typedMethodContext.methodParameters,
            )
          } catch (error) {
            // We have a local encoding error. Treat this like a revert if tryAggregate=true.
            if (!this._options.tryAggregate) {
              // If not aggregating, throw immediately.
              throw new MulticallError(
                `Failed to encode function data for ${String(typedMethodContext.methodName)}: ${
                  error instanceof Error ? error.message : String(error)
                }`,
                ErrorCodes.executionError,
                error instanceof Error ? error : undefined,
              )
            }

            // If tryAggregate=true, we create a synthetic failed call response.
            // We'll store a placeholder call context with a known "error" to handle later.
            aggregateCallContext.push({
              contractContextIndex: contract,
              contractMethodIndex: methodIndex,
              target: contractContext.contractAddress,
              // We can't really encode data, so leave encodedData as empty "0x"
              encodedData: '0x',
              // We might add a custom flag or handle this scenario later in `execute` or `processResponse`.
              // One approach: Store error info in a map.
            })
            // We'll need to handle this call specially in `execute`. Let's do that next.
            return
          }

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
   * Attempts to decode a value as `bytes32` if standard decoding fails.
   * @param returnData The raw return data from the contract call.
   * @param outputTypes The expected output types from the ABI.
   * @returns The decoded value or `undefined` if decoding fails.
   */
  decodeBytes32IfNecessary(returnData: any, outputTypes: AbiOutput[]): any {
    if (outputTypes[0]?.type === 'string') {
      try {
        return ethers.utils.parseBytes32String(returnData)
      } catch {
        return returnData
      }
    }

    return returnData
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
    // Check for locally failed calls (encodedData='0x' stands for local error scenario)
    const locallyFailedCalls = calls.filter((c) => c.encodedData === '0x')
    const validCalls = calls.filter((c) => c.encodedData !== '0x')

    let aggregateResponse: AggregateResponse = {
      blockNumber: 0,
      results: [],
    }

    if (locallyFailedCalls.length > 0) {
      // Build a failure response for these local failures
      const failedResponse = this.buildFailureAggregateResponse(
        locallyFailedCalls,
        {
          code: ErrorCodes.parameterEncodingError,
          message:
            'Local parameter encoding error or invalid input caused this call to fail.',
        },
      )

      // If there are no valid calls to execute on-chain, return just this failed response
      if (validCalls.length === 0) {
        return failedResponse
      }

      // Otherwise, we must merge the failedResponse with the on-chain response
      const onChainResponse = await this.executeOnChain(validCalls, options)
      // Combine results: failed calls and successful calls into one response
      aggregateResponse = this.combineResponses([
        failedResponse,
        onChainResponse,
      ])
    } else {
      // No local failures, proceed as normal
      aggregateResponse = await this.executeOnChain(calls, options)
    }

    return aggregateResponse
  }

  /**
   * Executes the multicall using Ethers, Web3, or a custom JSON-RPC provider.
   *
   * @param calls - The aggregated call contexts to be executed.
   * @param options - Optional configuration for the contract call.
   * @returns A promise that resolves to an object containing the block number,
   *          origin context, and the results of each method call.
   *
   * @remarks
   * This method allows batch calling of multiple contract methods in a single transaction.
   * It uses the multicall provider to execute all calls efficiently.
   * The results are typed according to the return types of the called methods.
   */
  async executeOnChain(
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

    if (!networkId) {
      throw new MulticallError(
        'Network not found, check that the RPC URL is correct.',
        ErrorCodes.multicallError,
      )
    }

    const contract = new web3Provider.eth.Contract(
      multicall3ABI,
      getContractBasedOnNetwork(
        networkId,
        this._options.customMulticallContractAddress,
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

      return this.buildSuccessfulAggregateResponse(contractResponse, calls)
    } else {
      const contractResponse = (await contract.methods
        .aggregate(this.mapCallContextToMatchContractFormat(calls))
        .call({}, blockNumber)) as AggregateContractResponse

      contractResponse.blockNumber = BigNumber.from(
        contractResponse.blockNumber,
      )

      return this.buildSuccessfulAggregateResponse(contractResponse, calls)
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

    if (!network) {
      throw new MulticallError(
        'Network not found, check that the RPC URL is correct.',
        ErrorCodes.multicallError,
      )
    }

    const contract = new ethers.Contract(
      getContractBasedOnNetwork(
        network.chainId,
        this._options.customMulticallContractAddress,
      ),
      multicall3ABI,
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

        return this.buildSuccessfulAggregateResponse(contractResponse, calls)
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

        return this.buildSuccessfulAggregateResponse(contractResponse, calls)
      } else {
        throw new Error('aggregate method is not available on the contract')
      }
    }
  }

  /**
   * Builds a successful aggregate response from the contract response.
   * @param contractResponse - The response from the contract.
   * @param calls - The original calls made.
   * @returns The built aggregate response.
   */
  buildSuccessfulAggregateResponse(
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
   * Builds a failure aggregate response for a batch that failed entirely.
   * @param calls - The calls that failed.
   * @param error - The error details.
   * @returns The aggregate response.
   */
  buildFailureAggregateResponse(
    calls: AggregateCallContext[],
    error: { code: string | number; message: string },
  ): AggregateResponse {
    const resultsMap: Record<
      number,
      { contractContextIndex: number; methodResults: any[] }
    > = {}

    for (const call of calls) {
      const contractIndex = call.contractContextIndex

      if (!resultsMap[contractIndex]) {
        resultsMap[contractIndex] = {
          contractContextIndex: contractIndex,
          methodResults: [],
        }
      }

      const failedCallResult = {
        success: false,
        returnData: '0x',
        error,
      }

      resultsMap[contractIndex].methodResults.push({
        result: failedCallResult,
        contractMethodIndex: call.contractMethodIndex,
      })
    }

    return {
      blockNumber: 0,
      results: Object.values(resultsMap),
    }
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
