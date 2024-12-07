import type { EthersContractContextV5 } from '@abi-toolkit/converter-typescript'
import type {
  ContractTransaction,
  BytesLike,
  BigNumber,
  BigNumberish,
} from 'ethers'

import type {
  ContractTransactionOverrides,
  ContractCallOverrides,
} from './common.types'

export type ContractContext = EthersContractContextV5<
  Contract,
  MethodNames,
  EventsContext,
  Events
>
export type Events = undefined
export interface EventsContext {}
export type MethodNames =
  | 'aggregate'
  | 'aggregate3'
  | 'aggregate3Value'
  | 'blockAndAggregate'
  | 'getBasefee'
  | 'getBlockHash'
  | 'getBlockNumber'
  | 'getChainId'
  | 'getCurrentBlockCoinbase'
  | 'getCurrentBlockDifficulty'
  | 'getCurrentBlockGasLimit'
  | 'getCurrentBlockTimestamp'
  | 'getEthBalance'
  | 'getLastBlockHash'
  | 'tryAggregate'
  | 'tryBlockAndAggregate'
export type MethodNameMap = {
  [key in MethodNames]: string
}
export interface AggregateCallsRequest {
  target: string
  callData: BytesLike
}
export interface Aggregate3CallsRequest {
  target: string
  allowFailure: boolean
  callData: BytesLike
}
export interface Aggregate3ReturnDataResponse {
  success: boolean
  0: boolean
  returnData: string
  1: string
}
export interface Aggregate3ValueCallsRequest {
  target: string
  allowFailure: boolean
  value: BigNumberish
  callData: BytesLike
}
export interface Aggregate3ValueReturnDataResponse {
  success: boolean
  0: boolean
  returnData: string
  1: string
}
export interface BlockAndAggregateCallsRequest {
  target: string
  callData: BytesLike
}
export interface TryAggregateCallsRequest {
  target: string
  callData: BytesLike
}
export interface TryAggregateReturnDataResponse {
  success: boolean
  0: boolean
  returnData: string
  1: string
}
export interface TryBlockAndAggregateCallsRequest {
  target: string
  callData: BytesLike
}
export interface Contract {
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param calls Type: tuple[], Indexed: false
   */
  aggregate(
    calls: AggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param calls Type: tuple[], Indexed: false
   */
  aggregate3(
    calls: Aggregate3CallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param calls Type: tuple[], Indexed: false
   */
  aggregate3Value(
    calls: Aggregate3ValueCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param calls Type: tuple[], Indexed: false
   */
  blockAndAggregate(
    calls: BlockAndAggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getBasefee(overrides?: ContractCallOverrides): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param blockNumber Type: uint256, Indexed: false
   */
  getBlockHash(
    blockNumber: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getBlockNumber(overrides?: ContractCallOverrides): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getChainId(overrides?: ContractCallOverrides): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockCoinbase(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockDifficulty(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockGasLimit(overrides?: ContractCallOverrides): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockTimestamp(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param addr Type: address, Indexed: false
   */
  getEthBalance(
    addr: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getLastBlockHash(overrides?: ContractCallOverrides): Promise<string>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param requireSuccess Type: bool, Indexed: false
   * @param calls Type: tuple[], Indexed: false
   */
  tryAggregate(
    requireSuccess: boolean,
    calls: TryAggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param requireSuccess Type: bool, Indexed: false
   * @param calls Type: tuple[], Indexed: false
   */
  tryBlockAndAggregate(
    requireSuccess: boolean,
    calls: TryBlockAndAggregateCallsRequest[],
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>
}
