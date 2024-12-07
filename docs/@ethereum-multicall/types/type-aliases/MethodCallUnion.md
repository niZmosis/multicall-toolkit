[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MethodCallUnion

# Type Alias: MethodCallUnion\<TContract, TMethods\>

> **MethodCallUnion**\<`TContract`, `TMethods`\>: `TMethods` *extends* `any` ? [`MethodCall`](MethodCall.md)\<`TContract`, `TMethods`\> : `never`

Creates a union type of all possible method calls for a contract's specified methods.
This type uses a distributive conditional type to create a union of method calls.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type containing the methods.

• **TMethods** *extends* [`MethodNames`](MethodNames.md)\<`TContract`\>

The subset of method names from the contract to include in the union.

## Defined in

[call.types.ts:113](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L113)
