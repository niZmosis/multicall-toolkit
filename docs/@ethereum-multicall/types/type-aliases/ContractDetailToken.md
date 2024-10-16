[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractDetailToken

# Type Alias: ContractDetailToken\<TMethods\>

> **ContractDetailToken**\<`TMethods`\>: `object`

Represents the details of a contract related to a token, which may or may not include an ABI.

## Type Parameters

• **TMethods** = `Record`\<`string`, `string`\>

## Type declaration

### abi?

> `optional` **abi**: `JsonFragment`[]

The optional ABI of the contract.

### address

> **address**: [`Address`](Address.md)

The address of the contract.

### methods?

> `optional` **methods**: `Partial`\<`TMethods`\>

Optional custom method names or overrides for the contract's methods.

## Template

A mapping of method names to custom names or overrides for contract methods.

## Defined in

[contract-detail.types.ts:25](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/contract-detail.types.ts#L25)
