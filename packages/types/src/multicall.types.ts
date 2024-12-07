import type { AbiItem, AbiOutput } from '@abi-toolkit/types'
import type { JsonFragment } from '@ethersproject/abi'
import type { Provider } from '@ethersproject/providers'

import type {
  AggregateCallContext,
  AggregateContractResponse,
  AggregateResponse,
} from './aggregate.types'
import type {
  ContractContext,
  ContractContextOptions,
  DiscriminatedMethodCalls,
  MethodNames,
  MulticallResults,
  ReferencedContracts,
} from './call.types'
import type { ChainId } from './chain.types'

/**
 * Represents the different types of execution environments available.
 *
 * - `'web3'`: Utilizes a Web3 provider for blockchain interactions.
 * - `'ethers'`: Utilizes an Ethers.js provider for blockchain interactions.
 * - `'nodeUrl'`: Utilizes a custom URL, making an Ethers.js provider for blockchain interactions.
 */
export type MulticallExecutionType = 'web3' | 'ethers' | 'nodeUrl'

/**
 * Base options for Multicall configuration.
 */
export type MulticallOptionsBase = {
  /** Custom address for the Multicall contract */
  multicallCustomContractAddress?: string
  /** Whether to use the tryAggregate function */
  tryAggregate?: boolean
}

/**
 * Multicall options for Web3.js usage.
 */
export type MulticallOptionsWeb3 = MulticallOptionsBase & {
  /** Web3.js instance (any version) */
  web3Provider: any
}

/**
 * Multicall options for Ethers.js usage.
 */
export type MulticallOptionsEthers = MulticallOptionsBase & {
  /** Ethers.js provider instance */
  ethersProvider: Provider
}

/**
 * Multicall options for custom JSON-RPC provider usage.
 */
export type MulticallOptionsCustomJsonRpcProvider = MulticallOptionsBase & {
  /** URL of the JSON-RPC node */
  nodeUrl: string
  /** Chain ID of the network */
  chainId?: ChainId
}

/**
 * Multicall options for all supported execution environments.
 */
export type MulticallOptions =
  | MulticallOptionsWeb3
  | MulticallOptionsEthers
  | MulticallOptionsCustomJsonRpcProvider

/**
 * Interface for Multicall operations, providing methods to aggregate multiple contract calls
 * and handle different execution environments (Web3, Ethers, or custom providers).
 */
export interface IMulticall {
  /**
   * The type of execution environment being used (web3, ethers, or custom JSON-RPC).
   */
  _executionType: MulticallExecutionType

  /**
   *  The options for the Multicall instance.
   */
  _options:
    | MulticallOptionsWeb3
    | MulticallOptionsEthers
    | MulticallOptionsCustomJsonRpcProvider

  /**
   * Executes multiple contract calls and aggregates the results into a single response.
   *
   * @typeParam TResult - The structure of the result object.
   * @param contractCallContexts - The context(s) for the contract calls, containing details about the contracts, methods, and parameters.
   * @param contractCallOptions - Optional settings for the contract call, such as block number or specific options.
   * @returns A promise that resolves to the aggregated results of the contract calls.
   */
  call<TContractContexts extends ReferencedContracts>(
    contractCallContexts: TContractContexts,
    contractCallOptions: ContractContextOptions,
  ): Promise<MulticallResults<TContractContexts>>

  /**
   * Creates and returns a contract call context to be used in multicall executions.
   *
   * @template TContract - The type of the contract being interacted with.
   * @template TCustomData - Custom data to be associated with the call context.
   * @returns A function that creates the contract call context.
   */
  createCallContext<
    TContract extends Record<string, any>,
    TCustomData = unknown,
  >(): (
    context: ContractContext<
      TContract,
      Record<
        string,
        DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
      >,
      TCustomData
    >,
  ) => ContractContext<
    TContract,
    Record<string, DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]>,
    TCustomData
  >

  /**
   * Extracts the return data from a given result.
   *
   * @param result - The result from which the return data should be extracted.
   * @returns The extracted return data.
   */
  getReturnDataFromResult(result: any): any

  /**
   * Formats the decoded return values, ensuring they are always returned as an array.
   *
   * @param decodedReturnValues - The values decoded from the ABI response.
   * @returns The formatted return values, always in array form.
   */
  formatReturnValues(decodedReturnValues: any): any

  /**
   * Builds the aggregate call context, which prepares the contract call details for execution.
   *
   * @param contractCallContexts - The contexts for each contract call.
   * @returns An array of aggregate call contexts ready to be executed.
   */
  buildAggregateCallContext<TContractContexts extends ReferencedContracts>(
    contractCallContexts: TContractContexts[keyof TContractContexts][],
  ): AggregateCallContext[]

  /**
   * Finds the output types for a given method from the contract's ABI.
   *
   * @param abi - The ABI of the contract.
   * @param methodName - The name of the method to retrieve output types for.
   * @returns An array of output types, or undefined if the method is not found.
   */
  findOutputTypesFromAbi(
    abi: (AbiItem | JsonFragment)[],
    methodName: string,
  ): AbiOutput[] | undefined

  /**
   * Executes the multicall using the provided call contexts and options.
   *
   * @param calls - The aggregated call contexts to be executed.
   * @param options - Additional options to customize the contract call execution.
   * @returns A promise that resolves to the aggregated response from the contract calls.
   */
  execute(
    calls: AggregateCallContext[],
    options: ContractContextOptions,
  ): Promise<AggregateResponse>

  /**
   * Executes the contract calls using a Web3 provider.
   *
   * @param calls - The aggregated call contexts to be executed.
   * @param options - Additional options for the contract calls, such as block number.
   * @returns A promise that resolves to the aggregated response.
   */
  executeWithWeb3(
    calls: AggregateCallContext[],
    options: ContractContextOptions,
  ): Promise<AggregateResponse>

  /**
   * Executes the contract calls using an Ethers provider or a custom JSON-RPC provider.
   *
   * @param calls - The aggregated call contexts to be executed.
   * @param options - Additional options for the contract calls.
   * @returns A promise that resolves to the aggregated response.
   */
  executeWithEthersOrNodeUrl(
    calls: AggregateCallContext[],
    options: ContractContextOptions,
  ): Promise<AggregateResponse>

  /**
   * Builds the final aggregated response by mapping contract call results to their respective contexts.
   *
   * @param contractResponse - The response from the contract call execution.
   * @param calls - The original call contexts used for the contract call.
   * @returns An aggregated response containing the results for all contract calls.
   */
  buildUpAggregateResponse(
    contractResponse: AggregateContractResponse,
    calls: AggregateCallContext[],
  ): AggregateResponse

  /**
   * Maps the contract call context to the contract format expected by the multicall contract.
   *
   * @param calls - The aggregated call contexts to be mapped.
   * @returns An array of target contracts and encoded data for each call.
   */
  mapCallContextToMatchContractFormat(
    calls: AggregateCallContext[],
  ): Array<{ target: string; callData: string }>
}
