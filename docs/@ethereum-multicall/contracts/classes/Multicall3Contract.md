[**@ethereum-multicall/contracts v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/contracts](../README.md) / Multicall3Contract

# Class: Multicall3Contract

## Extends

- `MulticallProviderBase`

## Implements

- `Contract`

## Constructors

### new Multicall3Contract()

> **new Multicall3Contract**(`multicallProviderContext`, `contractDetail`): [`Multicall3Contract`](Multicall3Contract.md)

#### Parameters

• **multicallProviderContext**: `MulticallProviderContext`

• **contractDetail**: `ContractDetailToken`

#### Returns

[`Multicall3Contract`](Multicall3Contract.md)

#### Overrides

`MulticallProviderBase.constructor`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:31

## Properties

### \_contract

> `protected` **\_contract**: `ContractContext`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:28

***

### \_contractDetail

> `protected` **\_contractDetail**: `ContractDetail`

#### Inherited from

`MulticallProviderBase._contractDetail`

#### Defined in

provider/dist/esm/multicall-provider-base.d.ts:4

***

### \_methodNames

> `protected` **\_methodNames**: `MethodNameMap`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:29

***

### \_multicallProvider

> `protected` **\_multicallProvider**: `MulticallProvider`

#### Inherited from

`MulticallProviderBase._multicallProvider`

#### Defined in

provider/dist/esm/multicall-provider-base.d.ts:5

## Accessors

### contractDetail

> `get` **contractDetail**(): `ContractDetail`

Returns the contract details.

#### Returns

`ContractDetail`

The contract details of the concrete class.

#### Inherited from

`MulticallProviderBase.contractDetail`

#### Defined in

provider/dist/esm/multicall-provider-base.d.ts:18

***

### methodNames

> `get` **methodNames**(): `MethodNameMap`

Get the method names

#### Returns

`MethodNameMap`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:57

***

### multicall3Contract

> `get` **multicall3Contract**(): `ContractContext`

Get the multicall3 contract

#### Returns

`ContractContext`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:52

***

### multicallProvider

> `get` **multicallProvider**(): `MulticallProvider`

Returns the underlying `MulticallProvider`.

#### Returns

`MulticallProvider`

The `MulticallProvider` instance used by this class.

#### Inherited from

`MulticallProviderBase.multicallProvider`

#### Defined in

provider/dist/esm/multicall-provider-base.d.ts:12

## Methods

### aggregate()

> **aggregate**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: `AggregateCallsRequest`[]

Type: tuple[], Indexed: false

• **overrides?**: `ContractTransactionOverrides`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Implementation of

`Multicall3Types.Contract.aggregate`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:140

***

### aggregate3()

> **aggregate3**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: `Aggregate3CallsRequest`[]

Type: tuple[], Indexed: false

• **overrides?**: `ContractTransactionOverrides`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Implementation of

`Multicall3Types.Contract.aggregate3`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:156

***

### aggregate3CallContext()

> **aggregate3CallContext**(`calls`): `MethodCall`\<`Contract`, `"aggregate3"`\>

#### Parameters

• **calls**: `Aggregate3CallsRequest`[]

#### Returns

`MethodCall`\<`Contract`, `"aggregate3"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:166

***

### aggregate3Value()

> **aggregate3Value**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: `Aggregate3ValueCallsRequest`[]

Type: tuple[], Indexed: false

• **overrides?**: `ContractTransactionOverrides`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Implementation of

`Multicall3Types.Contract.aggregate3Value`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:172

***

### aggregate3ValueCallContext()

> **aggregate3ValueCallContext**(`calls`): `MethodCall`\<`Contract`, `"aggregate3Value"`\>

#### Parameters

• **calls**: `Aggregate3ValueCallsRequest`[]

#### Returns

`MethodCall`\<`Contract`, `"aggregate3Value"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:182

***

### aggregateCallContext()

> **aggregateCallContext**(`calls`): `MethodCall`\<`Contract`, `"aggregate"`\>

#### Parameters

• **calls**: `AggregateCallsRequest`[]

#### Returns

`MethodCall`\<`Contract`, `"aggregate"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:150

***

### blockAndAggregate()

> **blockAndAggregate**(`calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: true
Constant: false
StateMutability: payable
Type: function

#### Parameters

• **calls**: `BlockAndAggregateCallsRequest`[]

Type: tuple[], Indexed: false

• **overrides?**: `ContractTransactionOverrides`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Implementation of

`Multicall3Types.Contract.blockAndAggregate`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:332

***

### blockAndAggregateCallContext()

> **blockAndAggregateCallContext**(`calls`): `MethodCall`\<`Contract`, `"blockAndAggregate"`\>

#### Parameters

• **calls**: `BlockAndAggregateCallsRequest`[]

#### Returns

`MethodCall`\<`Contract`, `"blockAndAggregate"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:342

***

### call()

> **call**\<`TCalls`\>(`calls`, `options`): `Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"getBlockNumber"`\> \| `MethodCall`\<`Contract`, `"aggregate"`\> \| `MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\> \| `MethodCall`\<`Contract`, `"aggregate3"`\> \| `MethodCall`\<`Contract`, `"aggregate3Value"`\> \| `MethodCall`\<`Contract`, `"blockAndAggregate"`\> \| `MethodCall`\<`Contract`, `"getBasefee"`\> \| `MethodCall`\<`Contract`, `"getBlockHash"`\> \| `MethodCall`\<`Contract`, `"getChainId"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockCoinbase"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockDifficulty"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockGasLimit"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockTimestamp"`\> \| `MethodCall`\<`Contract`, `"getEthBalance"`\> \| `MethodCall`\<`Contract`, `"getLastBlockHash"`\> \| `MethodCall`\<`Contract`, `"tryAggregate"`\>\>

#### Parameters

• **calls**: `TCalls`

• **options**: `ContractContextOptions` = `{}`

#### Returns

`Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:128

***

### callContractMethod()

> `protected` **callContractMethod**\<`T`\>(`methodName`, `values`?): `Promise`\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **methodName**: `MethodNames`

• **values?**: `any`[]

#### Returns

`Promise`\<`T`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:61

***

### executeCall()

> `protected` **executeCall**\<`TContract`, `TCalls`\>(`calls`, `options`?): `Promise`\<`ExecutionResult`\<`TContract`, `TCalls`\>\>

Executes a multicall for the given contract methods.

#### Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, `DiscriminatedMethodCalls`\<`TContract`\>\[`MethodNames`\<`TContract`\>\]\>

The type of the calls object.

#### Parameters

• **calls**: `TCalls`

An object describing the methods to call and their parameters.

• **options?**: `ContractContextOptions`

Optional configuration for the contract call.

#### Returns

`Promise`\<`ExecutionResult`\<`TContract`, `TCalls`\>\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

#### Inherited from

`MulticallProviderBase.executeCall`

#### Defined in

provider/dist/esm/multicall-provider-base.d.ts:31

***

### getBasefee()

> **getBasefee**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Implementation of

`Multicall3Types.Contract.getBasefee`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:188

***

### getBasefeeCallContext()

> **getBasefeeCallContext**(): `MethodCall`\<`Contract`, `"getBasefee"`\>

#### Returns

`MethodCall`\<`Contract`, `"getBasefee"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:194

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

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`string`\>

#### Implementation of

`Multicall3Types.Contract.getBlockHash`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:201

***

### getBlockHashCallContext()

> **getBlockHashCallContext**(`blockNumber`): `MethodCall`\<`Contract`, `"getBlockHash"`\>

#### Parameters

• **blockNumber**: `BigNumberish`

#### Returns

`MethodCall`\<`Contract`, `"getBlockHash"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:211

***

### getBlockNumber()

> **getBlockNumber**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Implementation of

`Multicall3Types.Contract.getBlockNumber`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:217

***

### getBlockNumberCallContext()

> **getBlockNumberCallContext**(): `MethodCall`\<`Contract`, `"getBlockNumber"`\>

#### Returns

`MethodCall`\<`Contract`, `"getBlockNumber"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:223

***

### getChainId()

> **getChainId**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Implementation of

`Multicall3Types.Contract.getChainId`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:230

***

### getChainIdCallContext()

> **getChainIdCallContext**(): `MethodCall`\<`Contract`, `"getChainId"`\>

#### Returns

`MethodCall`\<`Contract`, `"getChainId"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:236

***

### getCurrentBlockCoinbase()

> **getCurrentBlockCoinbase**(`overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`string`\>

#### Implementation of

`Multicall3Types.Contract.getCurrentBlockCoinbase`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:243

***

### getCurrentBlockCoinbaseCallContext()

> **getCurrentBlockCoinbaseCallContext**(): `MethodCall`\<`Contract`, `"getCurrentBlockCoinbase"`\>

#### Returns

`MethodCall`\<`Contract`, `"getCurrentBlockCoinbase"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:251

***

### getCurrentBlockDifficulty()

> **getCurrentBlockDifficulty**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Implementation of

`Multicall3Types.Contract.getCurrentBlockDifficulty`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:258

***

### getCurrentBlockDifficultyCallContext()

> **getCurrentBlockDifficultyCallContext**(): `MethodCall`\<`Contract`, `"getCurrentBlockDifficulty"`\>

#### Returns

`MethodCall`\<`Contract`, `"getCurrentBlockDifficulty"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:266

***

### getCurrentBlockGasLimit()

> **getCurrentBlockGasLimit**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Implementation of

`Multicall3Types.Contract.getCurrentBlockGasLimit`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:273

***

### getCurrentBlockGasLimitCallContext()

> **getCurrentBlockGasLimitCallContext**(): `MethodCall`\<`Contract`, `"getCurrentBlockGasLimit"`\>

#### Returns

`MethodCall`\<`Contract`, `"getCurrentBlockGasLimit"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:281

***

### getCurrentBlockTimestamp()

> **getCurrentBlockTimestamp**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Implementation of

`Multicall3Types.Contract.getCurrentBlockTimestamp`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:288

***

### getCurrentBlockTimestampCallContext()

> **getCurrentBlockTimestampCallContext**(): `MethodCall`\<`Contract`, `"getCurrentBlockTimestamp"`\>

#### Returns

`MethodCall`\<`Contract`, `"getCurrentBlockTimestamp"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:296

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

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Implementation of

`Multicall3Types.Contract.getEthBalance`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:303

***

### getEthBalanceCallContext()

> **getEthBalanceCallContext**(`addr`): `MethodCall`\<`Contract`, `"getEthBalance"`\>

#### Parameters

• **addr**: `string`

#### Returns

`MethodCall`\<`Contract`, `"getEthBalance"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:313

***

### getLastBlockHash()

> **getLastBlockHash**(`overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: `ContractCallOverrides`

#### Returns

`Promise`\<`string`\>

#### Implementation of

`Multicall3Types.Contract.getLastBlockHash`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:319

***

### getLastBlockHashCallContext()

> **getLastBlockHashCallContext**(): `MethodCall`\<`Contract`, `"getLastBlockHash"`\>

#### Returns

`MethodCall`\<`Contract`, `"getLastBlockHash"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:325

***

### prepareCallContext()

> `protected` **prepareCallContext**\<`TMethod`\>(`methodName`, `methodParameters`): `MethodCall`\<`Contract`, `TMethod`\>

#### Type Parameters

• **TMethod** *extends* keyof `Contract`

#### Parameters

• **methodName**: `TMethod`

• **methodParameters**: `any`[] = `[]`

#### Returns

`MethodCall`\<`Contract`, `TMethod`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:79

***

### prepareContractContext()

> **prepareContractContext**\<`TCalls`, `TCustomData`\>(`calls`, `customData`?): `ContractContext`\<`Contract`, `TCalls`, `TCustomData`\>

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"getBlockNumber"`\> \| `MethodCall`\<`Contract`, `"aggregate"`\> \| `MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\> \| `MethodCall`\<`Contract`, `"aggregate3"`\> \| `MethodCall`\<`Contract`, `"aggregate3Value"`\> \| `MethodCall`\<`Contract`, `"blockAndAggregate"`\> \| `MethodCall`\<`Contract`, `"getBasefee"`\> \| `MethodCall`\<`Contract`, `"getBlockHash"`\> \| `MethodCall`\<`Contract`, `"getChainId"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockCoinbase"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockDifficulty"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockGasLimit"`\> \| `MethodCall`\<`Contract`, `"getCurrentBlockTimestamp"`\> \| `MethodCall`\<`Contract`, `"getEthBalance"`\> \| `MethodCall`\<`Contract`, `"getLastBlockHash"`\> \| `MethodCall`\<`Contract`, `"tryAggregate"`\>\>

• **TCustomData** = `unknown`

#### Parameters

• **calls**: `TCalls`

• **customData?**: `TCustomData`

#### Returns

`ContractContext`\<`Contract`, `TCalls`, `TCustomData`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:100

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

• **calls**: `TryAggregateCallsRequest`[]

Type: tuple[], Indexed: false

• **overrides?**: `ContractTransactionOverrides`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Implementation of

`Multicall3Types.Contract.tryAggregate`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:348

***

### tryAggregateCallContext()

> **tryAggregateCallContext**(`requireSuccess`, `calls`): `MethodCall`\<`Contract`, `"tryAggregate"`\>

#### Parameters

• **requireSuccess**: `boolean`

• **calls**: `TryAggregateCallsRequest`[]

#### Returns

`MethodCall`\<`Contract`, `"tryAggregate"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:360

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

• **calls**: `TryBlockAndAggregateCallsRequest`[]

Type: tuple[], Indexed: false

• **overrides?**: `ContractTransactionOverrides`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Implementation of

`Multicall3Types.Contract.tryBlockAndAggregate`

#### Defined in

contracts/src/multicall/multicall3.contract.ts:367

***

### tryBlockAndAggregateCallContext()

> **tryBlockAndAggregateCallContext**(`requireSuccess`, `calls`): `MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\>

#### Parameters

• **requireSuccess**: `boolean`

• **calls**: `TryBlockAndAggregateCallsRequest`[]

#### Returns

`MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\>

#### Defined in

contracts/src/multicall/multicall3.contract.ts:378
