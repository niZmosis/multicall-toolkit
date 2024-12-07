[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractResults

# Type Alias: ContractResults\<TContract, TCalls, TCustomData\>

> **ContractResults**\<`TContract`, `TCalls`, `TCustomData`\>: `object`

Represents the results of a contract method call.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls made.

• **TCustomData** = `unknown`

Optional custom data type.

## Type declaration

### originContext

> **originContext**: [`ContractContext`](ContractContext.md)\<`TContract`, `TCalls`, `TCustomData`\>

The original contract context of the multicall, including the ABI, contract address, and calls.

### results

> **results**: [`ReferencedMethodResult`](ReferencedMethodResult.md)\<`TContract`, `TCalls`\>

The results of each method call made in the multicall.

## Defined in

[call.types.ts:253](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L253)
