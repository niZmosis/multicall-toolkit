import type {
  MulticallOptionsBase,
  MulticallOptionsCustomJsonRpcProvider,
  MulticallOptionsEthers,
  MulticallOptionsWeb3,
} from '@ethereum-multicall/types'

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
