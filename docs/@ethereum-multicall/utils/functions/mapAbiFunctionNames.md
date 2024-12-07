[**@ethereum-multicall/utils v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/utils](../README.md) / mapAbiFunctionNames

# Function: mapAbiFunctionNames()

> **mapAbiFunctionNames**\<`T`\>(`abi`, `methodNameMap`): `JsonFragment`[]

Maps function names in an ABI according to a provided naming map while preserving
all other properties of the ABI exactly as they are.

## Type Parameters

• **T**

## Parameters

• **abi**: (`JsonFragment` \| `AbiItem`)[]

The original ABI to transform

• **methodNameMap**: `Partial`\<`Record`\<keyof `T`, `string`\>\>

Object mapping original function names to new names

## Returns

`JsonFragment`[]

A new ABI with mapped function names

## Example

```typescript
const methodMap = {
  'swapExactETHForTokens': 'swapExactAVAXForTokens',
  'WETH': 'WAVAX'
};
const mappedABI = mapAbiFunctionNames(routerABI, methodMap);
```

## Defined in

[packages/utils/src/utils/provider.utils.ts:26](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/utils/provider.utils.ts#L26)
