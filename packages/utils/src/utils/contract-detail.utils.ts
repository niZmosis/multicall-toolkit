import type { ContractDetail } from '@ethereum-multicall/types'

// ------------------------
// Type Guards
// ------------------------

/**
 * Type guard to check if a given object is of type ContractDetail.
 * This function does not check for the presence of the optional 'methods' property.
 *
 * @param obj - The object to check.
 * @returns True if the object is of type ContractDetail, false otherwise.
 */
export function isContractDetail<TOption>(
  obj: any,
): obj is ContractDetail<TOption> {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.address === 'string' &&
    Array.isArray(obj.abi)
  )
}
