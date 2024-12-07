import type { AbiItem } from '@ethereum-abi-types-generator/types'
import type {
  ChainIdAndProviderContext,
  EthersProviderContext,
  IMulticallProvider,
} from '@ethereum-multicall/types'
import type { JsonFragment } from '@ethersproject/abi'

/**
 * Maps function names in an ABI according to a provided naming map while preserving
 * all other properties of the ABI exactly as they are.
 *
 * @param abi - The original ABI to transform
 * @param methodNameMap - Object mapping original function names to new names
 * @returns A new ABI with mapped function names
 *
 * @example
 * ```typescript
 * const methodMap = {
 *   'swapExactETHForTokens': 'swapExactAVAXForTokens',
 *   'WETH': 'WAVAX'
 * };
 * const mappedABI = mapAbiFunctionNames(routerABI, methodMap);
 * ```
 */
export function mapAbiFunctionNames<T>(
  abi: (AbiItem | JsonFragment)[],
  methodNameMap: Partial<Record<keyof T, string>>,
): JsonFragment[] {
  return (abi as JsonFragment[]).map((fragment) => {
    // Only process function entries that have names
    if (fragment.type !== 'function' || !fragment.name) {
      return fragment
    }

    // Check if this function name needs to be mapped
    const newName = methodNameMap[fragment.name as keyof T]
    if (!newName || newName === '') {
      return fragment
    }

    // Create a new fragment with all original properties
    return {
      ...fragment,
      name: newName,
    }
  })
}

/**
 * Validates that an ABI contains all expected methods and identifies any missing ones.
 * Useful for verifying ABI compatibility before mapping.
 *
 * @param abi - The ABI to validate
 * @param methods - Array of required method names
 * @returns Object containing validation results
 *
 * @example
 * ```typescript
 * const result = validateAbiMethods(routerABI, ['WETH', 'swapExactETHForTokens']);
 * if (!result.isValid) {
 *   console.error('Missing methods:', result.missingMethods);
 * }
 * ```
 */
export function validateAbiMethods(
  abi: (AbiItem | JsonFragment)[],
  methods: string[],
): {
  isValid: boolean
  missingMethods: string[]
  extraMethods: string[]
} {
  const abiFunctions = new Set(
    abi
      .filter(
        (fragment): fragment is Required<JsonFragment> =>
          fragment.type === 'function' && typeof fragment.name === 'string',
      )
      .map((fragment) => fragment.name),
  )

  const methodSet = new Set(methods)

  const missingMethods = methods.filter((method) => !abiFunctions.has(method))
  const extraMethods = Array.from(abiFunctions).filter(
    (method) => !methodSet.has(method),
  )

  return {
    isValid: missingMethods.length === 0,
    missingMethods,
    extraMethods,
  }
}

/**
 * Creates a reverse mapping for method names.
 * Useful when you need to convert mapped names back to their original form.
 *
 * @param methodNameMap - The original method name mapping
 * @returns A new mapping with keys and values swapped
 *
 * @example
 * ```typescript
 * const methodMap = { 'WETH': 'WAVAX' };
 * const reverseMap = createReverseMethodMap(methodMap);
 * // reverseMap = { 'WAVAX': 'WETH' }
 * ```
 */
export function createReverseMethodMap(
  methodNameMap: Record<string, string>,
): Record<string, string> {
  return Object.entries(methodNameMap).reduce(
    (acc, [key, value]) => {
      if (value !== '') {
        acc[value] = key
      }
      return acc
    },
    {} as Record<string, string>,
  )
}

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
