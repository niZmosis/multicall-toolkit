import { getChainConfig, getAllChainConfigs } from '@chain-toolkit/networks'
import type { ChainConfig, ChainId } from '@chain-toolkit/schemas'

/**
 * Dynamically filter all chain configs to include only those with a known multicall address.
 */
export const multicallChainConfigs: ChainConfig[] = getAllChainConfigs().filter(
  (config) => !!config.contracts.multicall,
)

/**
 * Dynamically filter all chains to include only those with a known multicall address.
 */
export const multicallChainIds: ChainId[] = getAllChainConfigs()
  .filter((config) => !!config.contracts.multicall)
  .map((config) => config.chainId)

/**
 * Get the contract based on the network (chain ID)
 *
 * @param chainId The chain ID
 * @param customMulticallContractAddress The multicall custom contract address
 *
 * @returns The contract address
 */
export function getContractBasedOnNetwork(
  chainId: ChainId,
  customMulticallContractAddress?: string,
): string {
  // If they have overridden the multicall custom contract address then use that
  if (customMulticallContractAddress) {
    return customMulticallContractAddress
  }

  const chainConfig = getChainConfig(chainId)

  if (chainConfig.contracts.multicall) {
    return chainConfig.contracts.multicall
  }

  throw new Error(
    `Chain ID ${chainId} doesn't have a multicall contract address defined. Please check your network or deploy your own contract on it.`,
  )
}
