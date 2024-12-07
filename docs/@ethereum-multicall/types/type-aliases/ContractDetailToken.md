[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractDetailToken

# Type Alias: ContractDetailToken\<TMethods\>

> **ContractDetailToken**\<`TMethods`\>: `Omit`\<[`ContractDetail`](ContractDetail.md)\<`TMethods`\>, `"abi"`\> & `object`

Represents the details of a contract related to a token, which may or may not include an ABI.

## Type declaration

### abi?

> `optional` **abi**: `JsonFragment`[]

The optional ABI of the contract.

## Type Parameters

• **TMethods** = `Record`\<`string`, `string`\>

## Template

A mapping of method names to custom names or overrides for contract methods.

## Defined in

[contract-detail.types.ts:39](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/contract-detail.types.ts#L39)
