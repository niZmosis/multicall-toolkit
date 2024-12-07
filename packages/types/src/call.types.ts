import type { AbiItem } from '@ethereum-abi-types-generator/types'
import type { JsonFragment } from '@ethersproject/abi'

import type { ContractCallOverrides } from './abis'

/**
 * Represents options for contract calls.
 */
export type ContractContextOptions = {
  /**
   * Optional block number to execute the call at.
   */
  blockNumber?: string | number
}

/**
 * Extracts the return type of a contract method.
 * @template TContract - The contract type.
 * @template MethodName - The method name, must be a key of TContract.
 */
export type GetReturnType<
  TContract,
  MethodName extends keyof TContract,
> = TContract[MethodName] extends (...args: any[]) => infer R
  ? Awaited<R>
  : never

/**
 * Extracts the method name before parentheses.
 * @template TMethodName - The input string type.
 */
export type ExtractMethodName<TMethodName extends string> =
  TMethodName extends `${infer Name}(${string})` ? Name : TMethodName

/**
 * Represents the names of methods in a contract.
 * @template TContract - The contract type.
 */
export type MethodNames<TContract> = {
  [KMethodName in keyof TContract]: TContract[KMethodName] extends (
    ...args: any[]
  ) => any
    ? KMethodName
    : never
}[keyof TContract]

/**
 * Determines if a method has parameters (excluding ContractCallOverrides).
 * @template TContract - The contract type.
 * @template TMethodName - The method name.
 */
export type HasMethodParameters<
  TContract,
  TMethodName extends MethodNames<TContract>,
> = TContract[TMethodName] extends (overrides?: ContractCallOverrides) => any
  ? false
  : true

/**
 * Extracts parameter types, excluding ContractCallOverrides.
 * @template TMethod - Function type
 */
export type ExtractMethodParameters<TMethod> = TMethod extends (
  ...args: infer TMethodParameter
) => any
  ? TMethodParameter extends [...infer TMethodArgs, ContractCallOverrides?]
    ? TMethodArgs
    : TMethodParameter
  : never

/**
 * Extracts the parameter types of a method in a contract, preserving the exact types and order.
 * @template TContract - The contract type.
 * @template TMethodName - The method name.
 */
export type MethodParameter<
  TContract,
  TMethodName extends MethodNames<TContract>,
> =
  HasMethodParameters<TContract, TMethodName> extends true
    ? ExtractMethodParameters<TContract[TMethodName]>
    : []

/**
 * Represents the context for a single contract method call.
 * @template TContract - The contract type.
 * @template TMethodName - The method name type.
 */
export type MethodCall<
  TContract extends Record<string, any>,
  TMethodName extends MethodNames<TContract>,
> = {
  /**
   * The name or method signature of the contract method to be called.
   */
  methodName: TMethodName | `${TMethodName & string}(${string})`
  /**
   * Array of parameters to be passed to the method.
   */
  methodParameters: MethodParameter<
    TContract,
    ExtractMethodName<TMethodName & string> & MethodNames<TContract>
  >
}

/**
 * Creates a union type of all possible method calls for a contract's specified methods.
 * This type uses a distributive conditional type to create a union of method calls.
 *
 * @template TContract - The contract type containing the methods.
 * @template TMethods - The subset of method names from the contract to include in the union.
 */
export type MethodCallUnion<
  TContract extends Record<string, any>,
  TMethods extends MethodNames<TContract>,
> = TMethods extends any ? MethodCall<TContract, TMethods> : never

/**
 * Creates a record type mapping strings to method call unions for a contract's specified methods.
 * This type allows referencing multiple method calls by string keys.
 *
 * @template TContract - The contract type containing the methods.
 * @template TMethods - The subset of method names from the contract to include in the record.
 */
export type ReferencedMethodCallUnion<
  TContract extends Record<string, any>,
  TMethods extends MethodNames<TContract>,
> = Record<string, MethodCallUnion<TContract, TMethods>>

/**
 * Represents all possible method calls for a contract.
 * @template TContract - The contract type.
 */
export type DiscriminatedMethodCalls<TContract extends Record<string, any>> = {
  [KMethodName in MethodNames<TContract>]: MethodCall<TContract, KMethodName>
}

/**
 * Represents the context for a contract interaction, encapsulating necessary information for making method calls on the specified contract.
 *
 * @template TContract - The contract type.
 * @template TCalls - The type of calls to be made on the contract.
 * @template TCustomData - Optional type for custom data attached to this contract context.
 */
export type ContractContext<
  TContract extends Record<string, any>,
  TCalls extends Record<
    string,
    DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
  >,
  TCustomData = unknown,
> = {
  /**
   * The address of the contract to interact with.
   */
  contractAddress: string

  /**
   * The ABI (Application Binary Interface) defining the contract's methods, events, and types.
   */
  abi: (AbiItem | JsonFragment)[]

  /**
   * The set of method calls to be executed on the contract, represented as key-value pairs
   * where each key is a method reference and the value is the method call details.
   */
  calls: TCalls
} & (TCustomData extends Record<string, any>
  ? {
      /**
       * Custom data optionally provided for this contract context, useful for attaching
       * metadata or contextual information.
       */
      customData: TCustomData
    }
  : {
      /**
       * Optional custom data provided for this contract context.
       */
      customData?: TCustomData
    })

/**
 * Represents the result of executing a single contract method call, including details of the method name, parameters, and call outcome.
 *
 * @template TContract - The contract type.
 * @template TCall - The specific type of call made to the contract.
 */
export type MethodResult<
  TContract extends Record<string, any>,
  TCall extends DiscriminatedMethodCalls<TContract>[MethodNames<TContract>],
> = {
  /**
   * The name of the contract method called.
   */
  methodName: TCall['methodName']

  /**
   * An array of parameters provided for the method call.
   */
  methodParameters: TCall['methodParameters']

  /**
   * Populated if `success` is true.
   * The return value from the method call, decoded if applicable to the expected return type.
   */
  value: GetReturnType<
    TContract,
    ExtractMethodName<TCall['methodName'] & string> & keyof TContract
  >

  /**
   * Populated if `success` is false.
   * Details of the error that occurred during the method call.
   */
  error?: {
    code: string | number
    message: string
  }

  /**
   * Boolean indicating whether the method call was successful.
   */
  success: boolean

  /**
   * Boolean indicating whether the return data was successfully decoded to the expected type.
   */
  decoded: boolean
}

/**
 * Represents the result of multiple contract method calls.
 * @template TContract - The contract type.
 * @template TCalls - The type of calls made.
 */
export type ReferencedMethodResult<
  TContract extends Record<string, any>,
  TCalls extends Record<
    string,
    DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
  >,
> = {
  [K in keyof TCalls]: MethodResult<TContract, TCalls[K]>
}

/**
 * Represents the results of a contract method call.
 * @template TContract - The contract type.
 * @template TCalls - The type of calls made.
 * @template TCustomData - Optional custom data type.
 */
export type ContractResults<
  TContract extends Record<string, any>,
  TCalls extends Record<
    string,
    DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
  >,
  TCustomData = unknown,
> = {
  /**
   * The original contract context of the multicall, including the ABI, contract address, and calls.
   */
  originContext: ContractContext<TContract, TCalls, TCustomData>
  /**
   * The results of each method call made in the multicall.
   */
  results: ReferencedMethodResult<TContract, TCalls>
}

/**
 * Represents a collection of contract calls for multiple contracts.
 */
export type ReferencedContracts = Record<string, ContractContext<any, any, any>>

/**
 * Represents an error encountered during a specific contract method call within a multicall execution.
 */
export type MethodCallError = {
  /**
   * The reference identifier of the contract where the error occurred, typically
   * corresponding to a key in the original contract context.
   */
  contractReference: string

  /**
   * The reference identifier for the method that triggered the error. This is usually
   * the method name or signature as specified in the contract call context.
   */
  methodReference: string

  /**
   * The error details, capturing the specific error object or message returned from the failed
   * call. This can vary based on the provider and nature of the failure.
   */
  error: any
}

/**
 * Represents the results from executing a multicall batch request, capturing contract call outcomes,
 * batch metadata, and any errors that occurred.
 *
 * @template TContractContexts - The types of contract contexts being processed, representing each contract and its respective call contexts.
 */
export type MulticallResults<TContractContexts extends ReferencedContracts> = {
  /**
   * The block number at which the multicall was executed.
   * Reflects the state at the block number when all batched calls completed, providing data consistency across contracts.
   */
  blockNumber: number

  /**
   * The count of batched calls executed in the multicall.
   * This represents the total number of separate batched calls required to stay within any constraints on size or batch limits.
   */
  batchCount: number

  /**
   * Contains the results of each contract call, organized by contract reference.
   * Each entry is keyed by the original contract reference from the contract context, with results grouped by contract.
   *
   * - `KContractReference`: Key corresponding to a contract reference within `TContractContexts`.
   * - `ContractResults<TContract, TCalls, TCustomData>`: The result structure for each contract.
   */
  contracts: {
    [KContractReference in keyof TContractContexts]: TContractContexts[KContractReference] extends ContractContext<
      infer TContract,
      infer TCalls,
      infer TCustomData
    >
      ? ContractResults<TContract, TCalls, TCustomData>
      : never
  }
}

/**
 * Represents the result of executing a multicall for a set of contract method calls.
 *
 * @template TContract - The contract type.
 * @template TCalls - The type of the calls object.
 */
export type ExecutionResult<
  TContract extends Record<string, any>,
  TCalls extends Record<
    string,
    DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
  >,
> = Pick<MulticallResults<ReferencedContracts>, 'blockNumber' | 'batchCount'> &
  ContractResults<TContract, TCalls>
