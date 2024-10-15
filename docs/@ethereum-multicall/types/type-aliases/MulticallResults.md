[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MulticallResults

# Type Alias: MulticallResults\<TContractContexts\>

> **MulticallResults**\<`TContractContexts`\>: `object`

Represents the results of multiple contract calls.

## Type Parameters

• **TContractContexts** *extends* [`ReferencedContracts`](ReferencedContracts.md)

The type of contract contexts.

## Type declaration

### blockNumber

> **blockNumber**: `number`

### contracts

> **contracts**: `{ [KContractReference in keyof TContractContexts]: TContractContexts[KContractReference] extends ContractContext<infer TContract, infer TCalls, infer TContractResultsStructureOverrides, infer TCustomData> ? ContractResults<TContract, TCalls, TContractResultsStructureOverrides, TCustomData> : never }`

## Defined in

call.types.ts:223
