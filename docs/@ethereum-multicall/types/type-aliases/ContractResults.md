[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractResults

# Type Alias: ContractResults\<TContract, TCalls, TContractResultsStructureOverrides, TCustomData\>

> **ContractResults**\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>: `object`

Represents the results of a contract method call.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls made.

• **TContractResultsStructureOverrides** = `unknown`

Optional overrides for result structures.

• **TCustomData** = `unknown`

Optional custom data type.

## Type declaration

### originContext

> **originContext**: [`ContractContext`](ContractContext.md)\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>

### results

> **results**: [`ContractMethodResult`](ContractMethodResult.md)\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`\>

## Defined in

call.types.ts:189
