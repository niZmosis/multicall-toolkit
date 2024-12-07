[**@ethereum-multicall/types v1.0.0**](../../../README.md) • **Docs**

***

[Documentation v1.0.0](../../../../../packages.md) / [@ethereum-multicall/types](../../../README.md) / [Multicall2Types](../README.md) / Contract

# Interface: Contract

## Methods

### aggregate()

> **aggregate**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **calls**: [`AggregateCallsRequest`](AggregateCallsRequest.md)[]

Type: tuple[], Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[abis/multicall2.types.ts:34](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall2.types.ts#L34)

***

### tryBlockAndAggregate()

> **tryBlockAndAggregate**(`requireSuccess`, `calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **requireSuccess**: `boolean`

Type: bool, Indexed: false

• **calls**: [`TryBlockAndAggregateCallsRequest`](TryBlockAndAggregateCallsRequest.md)[]

Type: tuple[], Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[abis/multicall2.types.ts:46](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall2.types.ts#L46)
