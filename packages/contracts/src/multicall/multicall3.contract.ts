import { MulticallProviderBase } from '@multicall-toolkit/provider'
import type {
  MulticallProviderContext,
  ContractTransactionOverrides,
  ContractCallOverrides,
  ContractDetailToken,
  DiscriminatedMethodCalls,
  MethodNames,
  ContractContextOptions,
  MethodCall,
  ExecutionResult,
  ContractContext,
  Multicall3Types,
} from '@multicall-toolkit/types'
import {
  MulticallError,
  ErrorCodes,
  multicall3ABI,
  defaultMulticall3MethodMap,
} from '@multicall-toolkit/utils'
import type { ContractTransaction, BigNumber, BigNumberish } from 'ethers'
import { getAddress } from 'ethers/lib/utils'

export class Multicall3Contract
  extends MulticallProviderBase
  implements Multicall3Types.Contract
{
  protected _contract: Multicall3Types.ContractContext
  protected _methodNames: Multicall3Types.MethodNameMap

  constructor(
    multicallProviderContext: MulticallProviderContext,
    contractDetail: ContractDetailToken,
  ) {
    super(multicallProviderContext, {
      ...contractDetail,
      abi: contractDetail.abi || multicall3ABI,
    })

    this._contract =
      this._multicallProvider.getContract<Multicall3Types.ContractContext>(
        this._contractDetail,
      )

    this._methodNames = {
      ...defaultMulticall3MethodMap,
      ...this._contractDetail.methods,
    }
  }

  /** Get the multicall3 contract */
  public get multicall3Contract(): Multicall3Types.ContractContext {
    return this._contract
  }

  /** Get the method names */
  public get methodNames(): Multicall3Types.MethodNameMap {
    return this._methodNames
  }

  protected async callContractMethod<T>(
    methodName: Multicall3Types.MethodNames,
    values?: any[],
  ): Promise<T> {
    const contractMethodName = this._methodNames[
      methodName
    ] as keyof Multicall3Types.ContractContext

    if (typeof this._contract[contractMethodName] === 'function') {
      return (this._contract[contractMethodName] as any)(...(values || []))
    } else {
      throw new MulticallError(
        `Method ${methodName} does not exist on the contract`,
        ErrorCodes.functionArgumentError,
      )
    }
  }

  protected prepareCallContext<TMethod extends keyof Multicall3Types.Contract>(
    methodName: TMethod,
    methodParameters: any[] = [],
  ): MethodCall<Multicall3Types.Contract, TMethod> {
    const contractMethodName = this._methodNames[
      methodName
    ] as keyof Multicall3Types.Contract

    if (typeof this._contract[contractMethodName] === 'function') {
      return {
        methodName: contractMethodName,
        methodParameters: methodParameters ?? [],
      } as MethodCall<Multicall3Types.Contract, TMethod>
    } else {
      throw new MulticallError(
        `Method ${String(contractMethodName)} does not exist on the contract`,
        ErrorCodes.functionArgumentError,
      )
    }
  }

  prepareContractContext<
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<Multicall3Types.Contract>[MethodNames<Multicall3Types.Contract>]
    >,
    TCustomData = unknown,
  >(
    calls: TCalls,
    customData?: TCustomData,
  ): ContractContext<Multicall3Types.Contract, TCalls, TCustomData> {
    const context: ContractContext<
      Multicall3Types.Contract,
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

  async call<
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<Multicall3Types.Contract>[MethodNames<Multicall3Types.Contract>]
    >,
  >(
    calls: TCalls,
    options: ContractContextOptions = {},
  ): Promise<ExecutionResult<Multicall3Types.Contract, TCalls>> {
    return super.executeCall<Multicall3Types.Contract, TCalls>(calls, options)
  }

  public async aggregate(
    calls: Multicall3Types.AggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('aggregate', [
      calls,
      overrides,
    ])
  }

  public aggregateCallContext(
    calls: Multicall3Types.AggregateCallsRequest[],
  ): MethodCall<Multicall3Types.Contract, 'aggregate'> {
    return this.prepareCallContext('aggregate', [calls])
  }

  public async aggregate3(
    calls: Multicall3Types.Aggregate3CallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('aggregate3', [
      calls,
      overrides,
    ])
  }

  public aggregate3CallContext(
    calls: Multicall3Types.Aggregate3CallsRequest[],
  ): MethodCall<Multicall3Types.Contract, 'aggregate3'> {
    return this.prepareCallContext('aggregate3', [calls])
  }

  public async aggregate3Value(
    calls: Multicall3Types.Aggregate3ValueCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('aggregate3Value', [
      calls,
      overrides,
    ])
  }

  public aggregate3ValueCallContext(
    calls: Multicall3Types.Aggregate3ValueCallsRequest[],
  ): MethodCall<Multicall3Types.Contract, 'aggregate3Value'> {
    return this.prepareCallContext('aggregate3Value', [calls])
  }

  public async getBasefee(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('getBasefee', [overrides])
  }

  public getBasefeeCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getBasefee'
  > {
    return this.prepareCallContext('getBasefee', [])
  }

  public async getBlockHash(
    blockNumber: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<string> {
    return this.callContractMethod<string>('getBlockHash', [
      blockNumber,
      overrides,
    ])
  }

  public getBlockHashCallContext(
    blockNumber: BigNumberish,
  ): MethodCall<Multicall3Types.Contract, 'getBlockHash'> {
    return this.prepareCallContext('getBlockHash', [blockNumber])
  }

  public async getBlockNumber(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('getBlockNumber', [overrides])
  }

  public getBlockNumberCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getBlockNumber'
  > {
    return this.prepareCallContext('getBlockNumber', [])
  }

  public async getChainId(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('getChainId', [overrides])
  }

  public getChainIdCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getChainId'
  > {
    return this.prepareCallContext('getChainId', [])
  }

  public async getCurrentBlockCoinbase(
    overrides?: ContractCallOverrides,
  ): Promise<string> {
    return this.callContractMethod<string>('getCurrentBlockCoinbase', [
      overrides,
    ])
  }

  public getCurrentBlockCoinbaseCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getCurrentBlockCoinbase'
  > {
    return this.prepareCallContext('getCurrentBlockCoinbase', [])
  }

  public async getCurrentBlockDifficulty(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('getCurrentBlockDifficulty', [
      overrides,
    ])
  }

  public getCurrentBlockDifficultyCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getCurrentBlockDifficulty'
  > {
    return this.prepareCallContext('getCurrentBlockDifficulty', [])
  }

  public async getCurrentBlockGasLimit(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('getCurrentBlockGasLimit', [
      overrides,
    ])
  }

  public getCurrentBlockGasLimitCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getCurrentBlockGasLimit'
  > {
    return this.prepareCallContext('getCurrentBlockGasLimit', [])
  }

  public async getCurrentBlockTimestamp(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('getCurrentBlockTimestamp', [
      overrides,
    ])
  }

  public getCurrentBlockTimestampCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getCurrentBlockTimestamp'
  > {
    return this.prepareCallContext('getCurrentBlockTimestamp', [])
  }

  public async getEthBalance(
    addr: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('getEthBalance', [
      addr,
      overrides,
    ])
  }

  public getEthBalanceCallContext(
    addr: string,
  ): MethodCall<Multicall3Types.Contract, 'getEthBalance'> {
    return this.prepareCallContext('getEthBalance', [addr])
  }

  public async getLastBlockHash(
    overrides?: ContractCallOverrides,
  ): Promise<string> {
    return this.callContractMethod<string>('getLastBlockHash', [overrides])
  }

  public getLastBlockHashCallContext(): MethodCall<
    Multicall3Types.Contract,
    'getLastBlockHash'
  > {
    return this.prepareCallContext('getLastBlockHash', [])
  }

  public async blockAndAggregate(
    calls: Multicall3Types.BlockAndAggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('blockAndAggregate', [
      calls,
      overrides,
    ])
  }

  public blockAndAggregateCallContext(
    calls: Multicall3Types.BlockAndAggregateCallsRequest[],
  ): MethodCall<Multicall3Types.Contract, 'blockAndAggregate'> {
    return this.prepareCallContext('blockAndAggregate', [calls])
  }

  public async tryAggregate(
    requireSuccess: boolean,
    calls: Multicall3Types.TryAggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('tryAggregate', [
      requireSuccess,
      calls,
      overrides,
    ])
  }

  public tryAggregateCallContext(
    requireSuccess: boolean,
    calls: Multicall3Types.TryAggregateCallsRequest[],
  ): MethodCall<Multicall3Types.Contract, 'tryAggregate'> {
    return this.prepareCallContext('tryAggregate', [requireSuccess, calls])
  }

  public async tryBlockAndAggregate(
    requireSuccess: boolean,
    calls: Multicall3Types.TryBlockAndAggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>(
      'tryBlockAndAggregate',
      [requireSuccess, calls, overrides],
    )
  }

  public tryBlockAndAggregateCallContext(
    requireSuccess: boolean,
    calls: Multicall3Types.TryBlockAndAggregateCallsRequest[],
  ): MethodCall<Multicall3Types.Contract, 'tryBlockAndAggregate'> {
    return this.prepareCallContext('tryBlockAndAggregate', [
      requireSuccess,
      calls,
    ])
  }
}
