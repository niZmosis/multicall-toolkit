import type { EthersProvider } from '@multicall-toolkit/types'
import {
  type ExternalProvider,
  JsonRpcProvider,
  Web3Provider,
  Provider,
} from '@ethersproject/providers'

// ------------------------
// Type Guards
// ------------------------

/**
 * Checks if the provided object is an instance of `Provider`.
 *
 * @param provider - The object to check.
 * @returns True if the object is a `Provider`, otherwise false.
 */
export function isProvider(provider: any): provider is Provider {
  return provider instanceof Provider && provider?._isProvider
}

/**
 * Checks if the provided `EthersProvider` is an instance of `JsonRpcProvider`.
 *
 * @param provider - The provider to check.
 * @returns True if the provider is a `JsonRpcProvider`, otherwise false.
 */
export function isJsonRpcProvider(
  provider: EthersProvider,
): provider is JsonRpcProvider {
  return provider instanceof JsonRpcProvider && 'connection' in provider
}

/**
 * Checks if the provided `EthersProvider` is an instance of `Web3Provider`.
 *
 * @param provider - The provider to check.
 * @returns True if the provider is a `Web3Provider`, otherwise false.
 */
export function isWeb3Provider(
  provider: EthersProvider,
): provider is Web3Provider {
  return provider instanceof Web3Provider && 'provider' in provider
}

/**
 * Checks if the provided object is an `ExternalProvider`.
 *
 * @param provider - The object to check.
 * @returns True if the object is an `ExternalProvider`, otherwise false.
 */
export function isExternalProvider(
  provider: any,
): provider is ExternalProvider {
  return (
    typeof provider === 'object' &&
    'host' in provider &&
    !('_isProvider' in provider)
  )
}
