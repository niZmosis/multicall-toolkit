[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractContext

# Type Alias: ContractContext\<TContract, TCalls, TContractResultsStructureOverrides, TCustomData\>

> **ContractContext**\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>: `object` & `TCustomData` *extends* `Record`\<`string`, `any`\> ? `object` : `object`

Represents the context for a contract interaction.

## Type declaration

### abi

> **abi**: (`AbiItem` \| `JsonFragment`)[]

### calls

> **calls**: `TContractResultsStructureOverrides` *extends* `Record`\<`string`, `any`\> ? [`ExplicitReferencedMethodCalls`](ExplicitReferencedMethodCalls.md)\<`TContract`, `TContractResultsStructureOverrides`\> : `TCalls`

### contractAddress

> **contractAddress**: `string`

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls to be made.

• **TContractResultsStructureOverrides** = `unknown`

Optional overrides for result structures.

• **TCustomData** = `unknown`

Optional custom data type.

## Defined in

call.types.ts:133
