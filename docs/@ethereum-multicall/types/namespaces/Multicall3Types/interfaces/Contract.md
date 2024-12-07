[**@ethereum-multicall/types v1.0.0**](../../../README.md) • **Docs**

***

[Documentation v1.0.0](../../../../../packages.md) / [@ethereum-multicall/types](../../../README.md) / [Multicall3Types](../README.md) / Contract

# Interface: Contract

## Methods

### aggregate()

> **aggregate**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: [`AggregateCallsRequest`](AggregateCallsRequest.md)[]

Type: tuple[], Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[abis/multicall3.types.ts:95](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L95)

***

### aggregate3()

> **aggregate3**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: [`Aggregate3CallsRequest`](Aggregate3CallsRequest.md)[]

Type: tuple[], Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[abis/multicall3.types.ts:106](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L106)

***

### aggregate3Value()

> **aggregate3Value**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: [`Aggregate3ValueCallsRequest`](Aggregate3ValueCallsRequest.md)[]

Type: tuple[], Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[abis/multicall3.types.ts:117](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L117)

***

### blockAndAggregate()

> **blockAndAggregate**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: [`BlockAndAggregateCallsRequest`](BlockAndAggregateCallsRequest.md)[]

Type: tuple[], Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[abis/multicall3.types.ts:128](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L128)

***

### getBasefee()

> **getBasefee**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[abis/multicall3.types.ts:138](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L138)

***

### getBlockHash()

> **getBlockHash**(`blockNumber`, `overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **blockNumber**: `BigNumberish`

Type: uint256, Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[abis/multicall3.types.ts:146](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L146)

***

### getBlockNumber()

> **getBlockNumber**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[abis/multicall3.types.ts:156](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L156)

***

### getChainId()

> **getChainId**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[abis/multicall3.types.ts:163](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L163)

***

### getCurrentBlockCoinbase()

> **getCurrentBlockCoinbase**(`overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[abis/multicall3.types.ts:170](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L170)

***

### getCurrentBlockDifficulty()

> **getCurrentBlockDifficulty**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[abis/multicall3.types.ts:177](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L177)

***

### getCurrentBlockGasLimit()

> **getCurrentBlockGasLimit**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[abis/multicall3.types.ts:186](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L186)

***

### getCurrentBlockTimestamp()

> **getCurrentBlockTimestamp**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[abis/multicall3.types.ts:193](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L193)

***

### getEthBalance()

> **getEthBalance**(`addr`, `overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **addr**: `string`

Type: address, Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[abis/multicall3.types.ts:203](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L203)

***

### getLastBlockHash()

> **getLastBlockHash**(`overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[abis/multicall3.types.ts:213](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L213)

***

### tryAggregate()

> **tryAggregate**(`requireSuccess`, `calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **requireSuccess**: `boolean`

Type: bool, Indexed: false

• **calls**: [`TryAggregateCallsRequest`](TryAggregateCallsRequest.md)[]

Type: tuple[], Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[abis/multicall3.types.ts:222](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L222)

***

### tryBlockAndAggregate()

> **tryBlockAndAggregate**(`requireSuccess`, `calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
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

[abis/multicall3.types.ts:235](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/multicall3.types.ts#L235)
