[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractResults

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

### results

> **results**: [`ContractMethodResult`](ContractMethodResult.md)\<`TContract`, `TCalls`\>

## Defined in

[call.types.ts:165](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/call.types.ts#L165)
