[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / HasMethodParameters

# Type Alias: HasMethodParameters\<TContract, TMethodName\>

> **HasMethodParameters**\<`TContract`, `TMethodName`\>: `TContract`\[`TMethodName`\] *extends* (`overrides`?) => `any` ? `false` : `true`

Determines if a method has parameters (excluding ContractCallOverrides).

## Type Parameters

• **TContract**

The contract type.

• **TMethodName** *extends* [`MethodNames`](MethodNames.md)\<`TContract`\>

The method name.

## Defined in

[call.types.ts:52](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L52)
