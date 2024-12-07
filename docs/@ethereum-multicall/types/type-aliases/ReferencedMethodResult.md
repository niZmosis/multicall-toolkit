[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ReferencedMethodResult

# Type Alias: ReferencedMethodResult\<TContract, TCalls\>

> **ReferencedMethodResult**\<`TContract`, `TCalls`\>: `{ [K in keyof TCalls]: MethodResult<TContract, TCalls[K]> }`

Represents the result of multiple contract method calls.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls made.

## Defined in

[call.types.ts:237](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L237)
