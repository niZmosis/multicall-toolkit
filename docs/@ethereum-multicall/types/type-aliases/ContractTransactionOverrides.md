[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractTransactionOverrides

# Type Alias: ContractTransactionOverrides

> **ContractTransactionOverrides**: `object`

## Type declaration

### chainId?

> `optional` **chainId**: `number`

The chain ID (or network ID) to use

### gasLimit?

> `optional` **gasLimit**: `number`

The maximum units of gas for the transaction to use

### gasPrice?

> `optional` **gasPrice**: `BigNumber` \| `string` \| `number` \| `Promise`\<`any`\>

The price (in wei) per unit of gas

### nonce?

> `optional` **nonce**: `number`

The nonce to use in the transaction

### value?

> `optional` **value**: `BigNumber` \| `string` \| `number` \| `Promise`\<`any`\>

The amount to send with the transaction (i.e. msg.value)

## Defined in

[abis/common.types.ts:10](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/common.types.ts#L10)
