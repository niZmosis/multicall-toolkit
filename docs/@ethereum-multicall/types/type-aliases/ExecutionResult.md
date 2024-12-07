[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ExecutionResult

# Type Alias: ExecutionResult\<TContract, TCalls\>

> **ExecutionResult**\<`TContract`, `TCalls`\>: `Pick`\<[`MulticallResults`](MulticallResults.md)\<[`ReferencedContracts`](ReferencedContracts.md)\>, `"blockNumber"` \| `"batchCount"`\> & [`ContractResults`](ContractResults.md)\<`TContract`, `TCalls`\>

Represents the result of executing a multicall for a set of contract method calls.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of the calls object.

## Defined in

[call.types.ts:342](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L342)
