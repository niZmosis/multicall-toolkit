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
 * @template T - The input string type.
 */
export type ExtractMethodName<T extends string> =
  T extends `${infer Name}(${string})` ? Name : T

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
export type HasParameters<
  TContract,
  TMethodName extends MethodNames<TContract>,
> = TContract[TMethodName] extends (overrides?: ContractCallOverrides) => any
  ? false
  : true

/**
 * Extracts parameter types, excluding ContractCallOverrides.
 * @template TMethod - Function type
 */
export type ExtractParams<TMethod> = TMethod extends (
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
export type MethodParameterTypes<
  TContract,
  TMethodName extends MethodNames<TContract>,
> =
  HasParameters<TContract, TMethodName> extends true
    ? ExtractParams<TContract[TMethodName]>
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
  methodParameters: MethodParameterTypes<
    TContract,
    ExtractMethodName<TMethodName & string> & MethodNames<TContract>
  >
}

/**
 * Represents all possible method calls for a contract.
 * @template TContract - The contract type.
 */
export type DiscriminatedMethodCalls<TContract extends Record<string, any>> = {
  [KMethodName in MethodNames<TContract>]: MethodCall<TContract, KMethodName>
}

/**
 * Represents explicitly referenced method calls with overridden result structures.
 * @template TContract - The contract type.
 * @template TContractResultsStructureOverrides - The overridden result structures.
 */
export type ExplicitReferencedMethodCalls<
  TContract extends Record<string, any>,
  TContractResultsStructureOverrides,
> = {
  [KMethodReference in keyof TContractResultsStructureOverrides]: DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
}

/**
 * Represents the context for a contract interaction.
 * @template TContract - The contract type.
 * @template TCalls - The type of calls to be made.
 * @template TContractResultsStructureOverrides - Optional overrides for result structures.
 * @template TCustomData - Optional custom data type.
 */
export type ContractContext<
  TContract extends Record<string, any>,
  TCalls extends Record<
    string,
    DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
  >,
  TContractResultsStructureOverrides = unknown,
  TCustomData = unknown,
> = {
  contractAddress: string
  abi: (AbiItem | JsonFragment)[]
  calls: TContractResultsStructureOverrides extends Record<string, any>
    ? ExplicitReferencedMethodCalls<
        TContract,
        TContractResultsStructureOverrides
      >
    : TCalls
} & (TCustomData extends Record<string, any>
  ? { customData: TCustomData }
  : { customData?: TCustomData })

/**
 * Represents the result of a contract method call.
 * @template TContract - The contract type.
 * @template TCalls - The type of calls made.
 * @template TContractResultsStructureOverrides - Optional overrides for result structures.
 */
export type ContractMethodResult<
  TContract extends Record<string, any>,
  TCalls extends Record<
    string,
    DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
  >,
  TContractResultsStructureOverrides = unknown,
> = {
  [K in keyof TCalls]: {
    methodName: TCalls[K]['methodName']
    methodParameters: TCalls[K]['methodParameters']
    value: TContractResultsStructureOverrides extends Record<string, any>
      ? TContractResultsStructureOverrides[K & string]
      : GetReturnType<
          TContract,
          ExtractMethodName<TCalls[K]['methodName'] & string> & keyof TContract
        >
    success: boolean
    decoded: boolean
  }
}

/**
 * Represents the results of a contract method call.
 * @template TContract - The contract type.
 * @template TCalls - The type of calls made.
 * @template TContractResultsStructureOverrides - Optional overrides for result structures.
 * @template TCustomData - Optional custom data type.
 */
export type ContractResults<
  TContract extends Record<string, any>,
  TCalls extends Record<
    string,
    DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
  >,
  TContractResultsStructureOverrides = unknown,
  TCustomData = unknown,
> = {
  originContext: ContractContext<
    TContract,
    TCalls,
    TContractResultsStructureOverrides,
    TCustomData
  >
  results: ContractMethodResult<
    TContract,
    TCalls,
    TContractResultsStructureOverrides
  >
}

/**
 * Represents a collection of contract calls for multiple contracts.
 */
export type ReferencedContracts = Record<
  string,
  ContractContext<any, any, any, any>
>

/**
 * Represents the results of multiple contract calls.
 * @template TContractContexts - The type of contract contexts.
 */
export type MulticallResults<TContractContexts extends ReferencedContracts> = {
  blockNumber: number
  contracts: {
    [KContractReference in keyof TContractContexts]: TContractContexts[KContractReference] extends ContractContext<
      infer TContract,
      infer TCalls,
      infer TContractResultsStructureOverrides,
      infer TCustomData
    >
      ? ContractResults<
          TContract,
          TCalls,
          TContractResultsStructureOverrides,
          TCustomData
        >
      : never
  }
}
