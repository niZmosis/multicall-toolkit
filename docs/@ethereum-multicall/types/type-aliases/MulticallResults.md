[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MulticallResults

# Type Alias: MulticallResults\<TContractContexts\>

> **MulticallResults**\<`TContractContexts`\>: `object`

Represents the results from executing a multicall batch request, capturing contract call outcomes,
batch metadata, and any errors that occurred.

## Type Parameters

• **TContractContexts** *extends* [`ReferencedContracts`](ReferencedContracts.md)

The types of contract contexts being processed, representing each contract and its respective call contexts.

## Type declaration

### batchCount

> **batchCount**: `number`

The count of batched calls executed in the multicall.
This represents the total number of separate batched calls required to stay within any constraints on size or batch limits.

### blockNumber

> **blockNumber**: `number`

The block number at which the multicall was executed.
Reflects the state at the block number when all batched calls completed, providing data consistency across contracts.

### contracts

> **contracts**: `{ [KContractReference in keyof TContractContexts]: TContractContexts[KContractReference] extends ContractContext<infer TContract, infer TCalls, infer TCustomData> ? ContractResults<TContract, TCalls, TCustomData> : never }`

Contains the results of each contract call, organized by contract reference.
Each entry is keyed by the original contract reference from the contract context, with results grouped by contract.

- `KContractReference`: Key corresponding to a contract reference within `TContractContexts`.
- `ContractResults<TContract, TCalls, TCustomData>`: The result structure for each contract.

## Defined in

[call.types.ts:305](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L305)
