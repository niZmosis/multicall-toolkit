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
  /** Optional custom method names or overrides for the contract's methods. */
  methods?: Partial<TMethods>
}

/**
 * Represents the details of a contract related to a token, which may or may not include an ABI.
 * @template T - A mapping of method names to custom names or overrides for contract methods.
 */
export type ContractDetailToken<TMethods = Record<string, string>> = {
  /** The address of the contract. */
  address: Address
  /** The optional ABI of the contract. */
  abi?: JsonFragment[]
  /** Optional custom method names or overrides for the contract's methods. */
  methods?: Partial<TMethods>
}

/**
 * Represents the details of a contract, including its address, ABI, and optional method mappings.
 * @template T - A mapping of method names to custom names or overrides for contract methods.
 */
export type ContractDetailUnknown<TMethods = Record<string, string>> = {
  /** The ABI of the contract. */
  abi: JsonFragment[]
  /** Optional custom method names or overrides for the contract's methods. */
  methods?: Partial<TMethods>
}
