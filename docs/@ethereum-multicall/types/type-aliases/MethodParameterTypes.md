[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MethodParameterTypes

# Type Alias: MethodParameterTypes\<TContract, TMethodName\>

> **MethodParameterTypes**\<`TContract`, `TMethodName`\>: [`HasParameters`](HasParameters.md)\<`TContract`, `TMethodName`\> *extends* `true` ? [`ExtractParams`](ExtractParams.md)\<`TContract`\[`TMethodName`\]\> : []

Extracts the parameter types of a method in a contract, preserving the exact types and order.

## Type Parameters

• **TContract**

The contract type.

• **TMethodName** *extends* [`MethodNames`](MethodNames.md)\<`TContract`\>

The method name.

## Defined in

[call.types.ts:76](https://github.com/niZmosis/ethereum-multicall/blob/68ee699eca0cd184d8f0b7213bb6f4fe15a011a1/packages/types/src/call.types.ts#L76)
