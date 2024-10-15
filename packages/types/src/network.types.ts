import type { Address } from './address.types'

/**
 * Represents a custom network configuration.
 */
export type CustomNetwork = {
  /** The name of the custom network. */
  name: string
  /** The address of the multicall contract for the network. */
  multicallContractAddress: Address
}
