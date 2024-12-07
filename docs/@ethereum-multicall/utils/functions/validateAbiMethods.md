[**@ethereum-multicall/utils v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/utils](../README.md) / validateAbiMethods

# Function: validateAbiMethods()

> **validateAbiMethods**(`abi`, `methods`): `object`

Validates that an ABI contains all expected methods and identifies any missing ones.
Useful for verifying ABI compatibility before mapping.

## Parameters

• **abi**: (`JsonFragment` \| `AbiItem`)[]

The ABI to validate

• **methods**: `string`[]

Array of required method names

## Returns

`object`

Object containing validation results

### extraMethods

> **extraMethods**: `string`[]

### isValid

> **isValid**: `boolean`

### missingMethods

> **missingMethods**: `string`[]

## Example

```typescript
const result = validateAbiMethods(routerABI, ['WETH', 'swapExactETHForTokens']);
if (!result.isValid) {
  console.error('Missing methods:', result.missingMethods);
}
```

## Defined in

[packages/utils/src/utils/provider.utils.ts:66](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/utils/provider.utils.ts#L66)
