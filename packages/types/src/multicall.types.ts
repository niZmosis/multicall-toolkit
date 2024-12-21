import type { AbiItem, AbiOutput } from '@abi-toolkit/types'
import type { ChainId } from '@chain-toolkit/schemas'
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
  /**
   * Custom address for the Multicall contract.
   * If not specified, the default contract address is used.
   */
  customMulticallContractAddress?: string
  /**
   * Whether to use the `tryAggregate` function for error handling.
   * If `true`, individual call failures do not cause the entire batch to fail.
   * Defaults to `false`.
   */
  tryAggregate?: boolean
  /**
   * Whether to enable batching when calls exceed configured size or count limits.
   * When enabled, calls that exceed `maxCallDataSize` or `maxCallsPerBatch` are split into multiple batches, resulting in multiple calls to the blockchain.
   * Defaults to `true`.
   */
  enableBatching?: boolean
  /**
   * Maximum allowed call data size (in bytes) for a single batch of calls.
   * Batches are split if the combined return data size exceeds this limit.
   * Defaults to `100000` bytes.
   */
  maxCallDataSize?: number
  /**
   * Maximum number of calls allowed in a single batch.
   * Ensures that each batch stays within a manageable number of calls.
   * Defaults to `500` calls.
   */
  maxCallsPerBatch?: number
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
   * Creates and returns a contract call context to be used in multicall executions.
   *
   * @template TContract - The type of the contract being interacted with.
   * @template TCustomData - Custom data to be associated with the call context.
   * @returns A function that creates the contract call context.
   */
  createCallContext<
    TContract extends Record<string, any>,
    TCustomData = unknown,
  >(): <
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
    >,
  >(
    context: ContractContext<TContract, TCalls, TCustomData>,
  ) => ContractContext<TContract, TCalls, TCustomData>

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
   * Splits the provided calls into multiple batches based on configured size limits.
   * Batches are created to ensure that each batch stays within the byte size limit
   * and adheres to the maximum batch size.
   *
   * @param calls - An array of `AggregateCallContext` representing the individual contract calls.
   * @returns An array of call batches, where each batch is an array of `AggregateCallContext` objects.
   */
  createBatches(calls: AggregateCallContext[]): AggregateCallContext[][]

  /**
   * Executes batches of contract calls sequentially, stopping if an error occurs (unless `tryAggregate` is enabled).
   * Each batch is processed one after the other to maintain sequential order and error handling.
   *
   * @param batches - An array of call batches to be executed, each batch containing multiple `AggregateCallContext` items.
   * @param contractCallOptions - Options for each contract call execution, such as block number and aggregation settings.
   * @returns A promise that resolves to an array of `AggregateResponse`, containing responses from each successful batch.
   */
  executeBatchesSequentially(
    batches: AggregateCallContext[][],
    contractCallOptions: ContractContextOptions,
  ): Promise<AggregateResponse[]>

  /**
   * Combines the results from multiple batch responses into a single aggregated response.
   * This method merges the block number and results from each batch to produce a consolidated output.
   *
   * @param responses - An array of `AggregateResponse` from each executed batch.
   * @returns A single `AggregateResponse` that combines data from all the provided batch responses.
   */
  combineResponses(responses: AggregateResponse[]): AggregateResponse

  /**
   * Maps aggregated responses from contract calls back to their original context,
   * ensuring results are structured according to the input call contexts.
   *
   * @typeParam TContractContexts - The types of the referenced contracts, used to type the returned results.
   * @param response - The aggregated response containing results for all contract calls.
   * @param contextArray - An array of contract context entries, where each entry contains the contract name and its call context.
   * @returns A `MulticallResults` object that contains the structured responses for each referenced contract.
   */
  processResponse<TContractContexts extends ReferencedContracts>(
    response: AggregateResponse,
    contextArray: [string, ContractContext<any, any, any>][],
  ): MulticallResults<TContractContexts>

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
   * Attempts to decode a value as `bytes32` if standard decoding fails.
   * @param returnData The raw return data from the contract call.
   * @param outputTypes The expected output types from the ABI.
   * @returns The decoded value or `undefined` if decoding fails.
   */
  decodeBytes32IfNecessary(returnData: any, outputTypes: AbiOutput[]): any

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
  executeOnChain(
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
  buildSuccessfulAggregateResponse(
    contractResponse: AggregateContractResponse,
    calls: AggregateCallContext[],
  ): AggregateResponse

  /**
   * Builds a failure aggregate response for a batch that failed entirely.
   * @param calls - The calls that failed.
   * @param error - The error details.
   * @returns The aggregate response.
   */
  buildFailureAggregateResponse(
    calls: AggregateCallContext[],
    error: { code: string; message: string },
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
