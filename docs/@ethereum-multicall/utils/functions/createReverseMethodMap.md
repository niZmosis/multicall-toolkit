[**@ethereum-multicall/utils v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/utils](../README.md) / createReverseMethodMap

# Function: createReverseMethodMap()

> **createReverseMethodMap**(`methodNameMap`): `Record`\<`string`, `string`\>

Creates a reverse mapping for method names.
Useful when you need to convert mapped names back to their original form.

## Parameters

• **methodNameMap**: `Record`\<`string`, `string`\>

The original method name mapping

## Returns

`Record`\<`string`, `string`\>

A new mapping with keys and values swapped

## Example

```typescript
const methodMap = { 'WETH': 'WAVAX' };
const reverseMap = createReverseMethodMap(methodMap);
// reverseMap = { 'WAVAX': 'WETH' }
```

## Defined in

[packages/utils/src/utils/provider.utils.ts:111](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/utils/provider.utils.ts#L111)
