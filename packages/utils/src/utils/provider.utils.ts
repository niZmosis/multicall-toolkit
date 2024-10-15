import type {
  ChainIdAndProviderContext,
  EthersProviderContext,
  IMulticallProvider,
} from '@ethereum-multicall/types'

// ------------------------
// Type Guards
// ------------------------

/**
 * Checks if the provided context is a `ChainIdAndProviderContext`.
 *
 * @param context - The context to check.
 * @returns True if the context is a `ChainIdAndProviderContext`, otherwise false.
 */
export function isChainIdAndProviderContext(
  context: any,
): context is ChainIdAndProviderContext {
  return 'chainId' in context
}

/**
 * Checks if the provided context is an `EthersProviderContext`.
 *
 * @param context - The context to check.
 * @returns True if the context is an `EthersProviderContext`, otherwise false.
 */
export function isEthersProviderContext(
  context: any,
): context is EthersProviderContext {
  return 'ethersProvider' in context
}

/**
 * Checks if the provided object is an instance of `IMulticallProvider`.
 *
 * @param provider - The object to check.
 * @returns True if the object is a `IMulticallProvider`, otherwise false.
 */
export function isMulticallProvider(
  provider: any,
): provider is IMulticallProvider {
  return (
    '_ethersProvider' in provider &&
    '_providerContext' in provider &&
    '_multicall' in provider
  )
}
