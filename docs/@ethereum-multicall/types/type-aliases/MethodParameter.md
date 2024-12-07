[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MethodParameter

# Type Alias: MethodParameter\<TContract, TMethodName\>

> **MethodParameter**\<`TContract`, `TMethodName`\>: [`HasMethodParameters`](HasMethodParameters.md)\<`TContract`, `TMethodName`\> *extends* `true` ? [`ExtractMethodParameters`](ExtractMethodParameters.md)\<`TContract`\[`TMethodName`\]\> : []

Extracts the parameter types of a method in a contract, preserving the exact types and order.

## Type Parameters

• **TContract**

The contract type.

• **TMethodName** *extends* [`MethodNames`](MethodNames.md)\<`TContract`\>

The method name.

## Defined in

[call.types.ts:76](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L76)
