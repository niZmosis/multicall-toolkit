[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ReferencedMethodCallUnion

# Type Alias: ReferencedMethodCallUnion\<TContract, TMethods\>

> **ReferencedMethodCallUnion**\<`TContract`, `TMethods`\>: `Record`\<`string`, [`MethodCallUnion`](MethodCallUnion.md)\<`TContract`, `TMethods`\>\>

Creates a record type mapping strings to method call unions for a contract's specified methods.
This type allows referencing multiple method calls by string keys.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type containing the methods.

• **TMethods** *extends* [`MethodNames`](MethodNames.md)\<`TContract`\>

The subset of method names from the contract to include in the record.

## Defined in

[call.types.ts:125](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L125)
