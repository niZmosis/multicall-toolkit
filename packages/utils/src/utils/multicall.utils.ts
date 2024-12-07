import type {
  Multicall2Types,
  Multicall3Types,
  MulticallOptionsBase,
  MulticallOptionsCustomJsonRpcProvider,
  MulticallOptionsEthers,
  MulticallOptionsWeb3,
} from '@ethereum-multicall/types'

export const defaultMulticall2MethodMap: Multicall2Types.MethodNameMap = {
  aggregate: 'aggregate',
  tryBlockAndAggregate: 'tryBlockAndAggregate',
} as const

export const defaultMulticall3MethodMap: Multicall3Types.MethodNameMap = {
  aggregate: 'aggregate',
  aggregate3: 'aggregate3',
  aggregate3Value: 'aggregate3Value',
  blockAndAggregate: 'blockAndAggregate',
  getBasefee: 'getBasefee',
  getBlockHash: 'getBlockHash',
  getBlockNumber: 'getBlockNumber',
  getChainId: 'getChainId',
  getCurrentBlockCoinbase: 'getCurrentBlockCoinbase',
  getCurrentBlockDifficulty: 'getCurrentBlockDifficulty',
  getCurrentBlockGasLimit: 'getCurrentBlockGasLimit',
  getCurrentBlockTimestamp: 'getCurrentBlockTimestamp',
  getEthBalance: 'getEthBalance',
  getLastBlockHash: 'getLastBlockHash',
  tryAggregate: 'tryAggregate',
  tryBlockAndAggregate: 'tryBlockAndAggregate',
} as const

/**
 * Type guard for MulticallOptionsWeb3.
 */
export function isMulticallOptionsWeb3(
  options: MulticallOptionsBase,
): options is MulticallOptionsWeb3 {
  return (options as MulticallOptionsWeb3).web3Provider !== undefined
}

/**
 * Type guard for MulticallOptionsEthers.
 */
export function isMulticallOptionsEthers(
  options: MulticallOptionsBase,
): options is MulticallOptionsEthers {
  return (options as MulticallOptionsEthers).ethersProvider !== undefined
}

/**
 * Type guard for MulticallOptionsCustomJsonRpcProvider.
 */
export function isMulticallOptionsCustomJsonRpcProvider(
  options: MulticallOptionsBase,
): options is MulticallOptionsCustomJsonRpcProvider {
  return (
    (options as MulticallOptionsCustomJsonRpcProvider).nodeUrl !== undefined
  )
}
