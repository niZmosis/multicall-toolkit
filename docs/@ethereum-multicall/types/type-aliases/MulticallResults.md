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

> **contracts**: `{ [KContractReference in keyof TContractContexts]: TContractContexts[KContractReference] extends ContractContext<infer TContract, infer TCalls, infer TCustomData> ? ContractResults<TContract, TCalls, TCustomData> : never }`

## Defined in

[call.types.ts:186](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/call.types.ts#L186)
