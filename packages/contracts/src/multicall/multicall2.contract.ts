import { MulticallProviderBase } from '@ethereum-multicall/provider'
import type {
  MulticallProviderContext,
  ContractTransactionOverrides,
  ContractDetailToken,
  DiscriminatedMethodCalls,
  MethodNames,
  ContractContextOptions,
  MethodCall,
  ExecutionResult,
  ContractContext,
  Multicall2Types,
} from '@ethereum-multicall/types'
import {
  MulticallError,
  ErrorCodes,
  multicall2ABI,
  defaultMulticall2MethodMap,
} from '@ethereum-multicall/utils'
import type { ContractTransaction } from 'ethers'
import { getAddress } from 'ethers/lib/utils'

export class Multicall2Contract
  extends MulticallProviderBase
  implements Multicall2Types.Contract
{
  protected _contract: Multicall2Types.ContractContext
  protected _methodNames: Multicall2Types.MethodNameMap

  constructor(
    multicallProviderContext: MulticallProviderContext,
    contractDetail: ContractDetailToken,
  ) {
    super(multicallProviderContext, {
      ...contractDetail,
      abi: contractDetail.abi || multicall2ABI,
    })

    this._contract =
      this._multicallProvider.getContract<Multicall2Types.ContractContext>(
        this._contractDetail,
      )

    this._methodNames = {
      ...defaultMulticall2MethodMap,
      ...this._contractDetail.methods,
    }
  }

  /** Get the multicall2 contract */
  public get multicall2Contract(): Multicall2Types.ContractContext {
    return this._contract
  }

  /** Get the method names */
  public get methodNames(): Multicall2Types.MethodNameMap {
    return this._methodNames
  }

  /**
   * Helper function to dynamically invoke a contract method based on custom or default method names.
   * @param methodName - The name of the method to invoke.
   * @param values - An array of values to pass as arguments to the method.
   * @returns The result of the contract method invocation with the appropriate return type.
   */
  protected async callContractMethod<T>(
    methodName: Multicall2Types.MethodNames,
    values?: any[],
  ): Promise<T> {
    const contractMethodName = this._methodNames[
      methodName
    ] as keyof Multicall2Types.ContractContext

    if (typeof this._contract[contractMethodName] === 'function') {
      return (this._contract[contractMethodName] as any)(...(values || []))
    } else {
      throw new MulticallError(
        `Method ${methodName} does not exist on the contract`,
        ErrorCodes.functionArgumentError,
      )
    }
  }

  /**
   * Helper function to dynamically prepare a call context based on custom or default method names.
   * @param methodName - The name of the method to invoke.
   * @param methodParameters - The method parameters.
   * @returns The call context.
   */
  protected prepareCallContext<TMethod extends keyof Multicall2Types.Contract>(
    methodName: TMethod,
    methodParameters: any[] = [],
  ): MethodCall<Multicall2Types.Contract, TMethod> {
    const contractMethodName = this._methodNames[
      methodName
    ] as keyof Multicall2Types.Contract

    if (typeof this._contract[contractMethodName] === 'function') {
      return {
        methodName: contractMethodName,
        methodParameters: methodParameters ?? [],
      } as MethodCall<Multicall2Types.Contract, TMethod>
    } else {
      throw new MulticallError(
        `Method ${String(contractMethodName)} does not exist on the contract`,
        ErrorCodes.functionArgumentError,
      )
    }
  }

  /**
   * Helper function to dynamically prepare a contract context based on custom or default method names.
   * @param calls - An object containing method calls, each mapped to its parameters.
   * @param customData - Optional custom data to include in the context.
   * @returns The contract context, including the address, ABI, calls, and optional custom data.
   */
  prepareContractContext<
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<Multicall2Types.Contract>[MethodNames<Multicall2Types.Contract>]
    >,
    TCustomData = unknown,
  >(
    calls: TCalls,
    customData?: TCustomData,
  ): ContractContext<Multicall2Types.Contract, TCalls, TCustomData> {
    const context: ContractContext<
      Multicall2Types.Contract,
      TCalls,
      TCustomData
    > = {
      contractAddress: getAddress(this._contractDetail.address),
      abi: this._contractDetail.abi,
      calls,
      ...((customData !== undefined
        ? { customData }
        : {}) as TCustomData extends Record<string, any>
        ? { customData: TCustomData }
        : { customData?: TCustomData }),
    }

    return context
  }

  /**
   * Executes a multicall for the given contract methods.
   * @param calls - An object describing the methods to call and their parameters.
   * @param options - Optional configuration for the contract call.
   * @returns A promise that resolves to an object containing the results of each method call.
   */
  async call<
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<Multicall2Types.Contract>[MethodNames<Multicall2Types.Contract>]
    >,
  >(
    calls: TCalls,
    options: ContractContextOptions = {},
  ): Promise<ExecutionResult<Multicall2Types.Contract, TCalls>> {
    return super.executeCall<Multicall2Types.Contract, TCalls>(calls, options)
  }

  /**
   * Aggregates multiple contract calls into a single transaction.
   * @param calls - Array of calls to aggregate.
   * @param overrides - Optional transaction overrides.
   * @returns The contract transaction.
   */
  public async aggregate(
    calls: Multicall2Types.AggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('aggregate', [
      calls,
      overrides,
    ])
  }

  /**
   * Returns the call context for the aggregate method.
   * @param calls - Array of calls to aggregate.
   * @returns The call context.
   */
  public aggregateCallContext(
    calls: Multicall2Types.AggregateCallsRequest[],
  ): MethodCall<Multicall2Types.Contract, 'aggregate'> {
    return this.prepareCallContext('aggregate', [calls])
  }

  /**
   * Aggregates multiple contract calls into a single transaction with block info.
   * @param requireSuccess - Whether to require all calls to succeed.
   * @param calls - Array of calls to aggregate.
   * @param overrides - Optional transaction overrides.
   * @returns The contract transaction.
   */
  public async tryBlockAndAggregate(
    requireSuccess: boolean,
    calls: Multicall2Types.TryBlockAndAggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>(
      'tryBlockAndAggregate',
      [requireSuccess, calls, overrides],
    )
  }

  /**
   * Returns the call context for the tryBlockAndAggregate method.
   * @param requireSuccess - Whether to require all calls to succeed.
   * @param calls - Array of calls to aggregate.
   * @returns The call context.
   */
  public tryBlockAndAggregateCallContext(
    requireSuccess: boolean,
    calls: Multicall2Types.TryBlockAndAggregateCallsRequest[],
  ): MethodCall<Multicall2Types.Contract, 'tryBlockAndAggregate'> {
    return this.prepareCallContext('tryBlockAndAggregate', [
      requireSuccess,
      calls,
    ])
  }
}
