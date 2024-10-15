[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractMethodResult

# Type Alias: ContractMethodResult\<TContract, TCalls, TContractResultsStructureOverrides\>

> **ContractMethodResult**\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`\>: `{ [K in keyof TCalls]: Object }`

Represents the result of a contract method call.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls made.

• **TContractResultsStructureOverrides** = `unknown`

Optional overrides for result structures.

## Defined in

call.types.ts:160
