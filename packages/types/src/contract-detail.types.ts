import type { JsonFragment } from '@ethersproject/abi'

import type { Address } from './address.types'

// ------------------------
// Contract Detail
// ------------------------
/**
 * Represents the details of a contract, including its address, ABI, and optional method mappings.
 * @template T - A mapping of method names to custom names or overrides for contract methods.
 */
export type ContractDetail<TMethods = Record<string, string>> = {
  /** The address of the contract. */
  address: Address
  /** The ABI of the contract. */
  abi: JsonFragment[]
  /**
   * Optional custom method names or overrides for the contract's methods.
   * If the ABI differs from the Uniswap ABI, you can use this to map method names to their signatures, for the library to use.
   * Provide the custom ABI in the `abi` property, if you don't have the ABI, set `options.mapMethodNames` to true.
   */
  methods?: Partial<TMethods>
  /** Optional options. */
  options?: {
    /**
     * Whether to map method names to their signatures in the ABI.
     * If you don't have the ABI and want to map method names over the default ABI, you can set this to true.
     *
     * @default false
     */
    mapMethodNames?: boolean
  }
}

/**
 * Represents the details of a contract related to a token, which may or may not include an ABI.
 * @template T - A mapping of method names to custom names or overrides for contract methods.
 */
export type ContractDetailToken<TMethods = Record<string, string>> = Omit<
  ContractDetail<TMethods>,
  'abi'
> & {
  /** The optional ABI of the contract. */
  abi?: JsonFragment[]
}
