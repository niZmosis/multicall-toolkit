[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / HasParameters

# Type Alias: HasParameters\<TContract, TMethodName\>

> **HasParameters**\<`TContract`, `TMethodName`\>: `TContract`\[`TMethodName`\] *extends* (`overrides`?) => `any` ? `false` : `true`

Determines if a method has parameters (excluding ContractCallOverrides).

## Type Parameters

• **TContract**

The contract type.

• **TMethodName** *extends* [`MethodNames`](MethodNames.md)\<`TContract`\>

The method name.

## Defined in

[call.types.ts:52](https://github.com/niZmosis/ethereum-multicall/blob/68ee699eca0cd184d8f0b7213bb6f4fe15a011a1/packages/types/src/call.types.ts#L52)
