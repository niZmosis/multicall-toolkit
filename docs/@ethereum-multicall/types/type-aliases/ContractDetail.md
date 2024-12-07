[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractDetail

# Type Alias: ContractDetail\<TMethods\>

> **ContractDetail**\<`TMethods`\>: `object`

Represents the details of a contract, including its address, ABI, and optional method mappings.

## Type Parameters

• **TMethods** = `Record`\<`string`, `string`\>

## Type declaration

### abi

> **abi**: `JsonFragment`[]

The ABI of the contract.

### address

> **address**: [`Address`](Address.md)

The address of the contract.

### methods?

> `optional` **methods**: `Partial`\<`TMethods`\>

Optional custom method names or overrides for the contract's methods.
If the ABI differs from the Uniswap ABI, you can use this to map method names to their signatures, for the library to use.
Provide the custom ABI in the `abi` property, if you don't have the ABI, set `options.mapMethodNames` to true.

### options?

> `optional` **options**: `object`

Optional options.

### options.mapMethodNames?

> `optional` **options.mapMethodNames**: `boolean`

Whether to map method names to their signatures in the ABI.
If you don't have the ABI and want to map method names over the default ABI, you can set this to true.

#### Default

```ts
false
```

## Template

A mapping of method names to custom names or overrides for contract methods.

## Defined in

[contract-detail.types.ts:12](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/contract-detail.types.ts#L12)
