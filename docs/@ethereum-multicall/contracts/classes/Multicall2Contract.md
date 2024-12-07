[**@ethereum-multicall/contracts v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/contracts](../README.md) / Multicall2Contract

# Class: Multicall2Contract

## Extends

- `MulticallProviderBase`

## Implements

- `Contract`

## Constructors

### new Multicall2Contract()

> **new Multicall2Contract**(`multicallProviderContext`, `contractDetail`): [`Multicall2Contract`](Multicall2Contract.md)

#### Parameters

• **multicallProviderContext**: `MulticallProviderContext`

• **contractDetail**: `ContractDetailToken`

#### Returns

[`Multicall2Contract`](Multicall2Contract.md)

#### Overrides

`MulticallProviderBase.constructor`

#### Defined in

contracts/src/multicall/multicall2.contract.ts:30

## Properties

### \_contract

> `protected` **\_contract**: `ContractContext`

#### Defined in

contracts/src/multicall/multicall2.contract.ts:27

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

contracts/src/multicall/multicall2.contract.ts:28

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

contracts/src/multicall/multicall2.contract.ts:56

***

### multicall2Contract

> `get` **multicall2Contract**(): `ContractContext`

Get the multicall2 contract

#### Returns

`ContractContext`

#### Defined in

contracts/src/multicall/multicall2.contract.ts:51

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

Aggregates multiple contract calls into a single transaction.

#### Parameters

• **calls**: `AggregateCallsRequest`[]

Array of calls to aggregate.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Multicall2Types.Contract.aggregate`

#### Defined in

contracts/src/multicall/multicall2.contract.ts:169

***

### aggregateCallContext()

> **aggregateCallContext**(`calls`): `MethodCall`\<`Contract`, `"aggregate"`\>

Returns the call context for the aggregate method.

#### Parameters

• **calls**: `AggregateCallsRequest`[]

Array of calls to aggregate.

#### Returns

`MethodCall`\<`Contract`, `"aggregate"`\>

The call context.

#### Defined in

contracts/src/multicall/multicall2.contract.ts:184

***

### call()

> **call**\<`TCalls`\>(`calls`, `options`): `Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

Executes a multicall for the given contract methods.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"aggregate"`\> \| `MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\>\>

#### Parameters

• **calls**: `TCalls`

An object describing the methods to call and their parameters.

• **options**: `ContractContextOptions` = `{}`

Optional configuration for the contract call.

#### Returns

`Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

A promise that resolves to an object containing the results of each method call.

#### Defined in

contracts/src/multicall/multicall2.contract.ts:151

***

### callContractMethod()

> `protected` **callContractMethod**\<`T`\>(`methodName`, `values`?): `Promise`\<`T`\>

Helper function to dynamically invoke a contract method based on custom or default method names.

#### Type Parameters

• **T**

#### Parameters

• **methodName**: `MethodNames`

The name of the method to invoke.

• **values?**: `any`[]

An array of values to pass as arguments to the method.

#### Returns

`Promise`\<`T`\>

The result of the contract method invocation with the appropriate return type.

#### Defined in

contracts/src/multicall/multicall2.contract.ts:66

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

### prepareCallContext()

> `protected` **prepareCallContext**\<`TMethod`\>(`methodName`, `methodParameters`): `MethodCall`\<`Contract`, `TMethod`\>

Helper function to dynamically prepare a call context based on custom or default method names.

#### Type Parameters

• **TMethod** *extends* keyof `Contract`

#### Parameters

• **methodName**: `TMethod`

The name of the method to invoke.

• **methodParameters**: `any`[] = `[]`

The method parameters.

#### Returns

`MethodCall`\<`Contract`, `TMethod`\>

The call context.

#### Defined in

contracts/src/multicall/multicall2.contract.ts:90

***

### prepareContractContext()

> **prepareContractContext**\<`TCalls`, `TCustomData`\>(`calls`, `customData`?): `ContractContext`\<`Contract`, `TCalls`, `TCustomData`\>

Helper function to dynamically prepare a contract context based on custom or default method names.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"aggregate"`\> \| `MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\>\>

• **TCustomData** = `unknown`

#### Parameters

• **calls**: `TCalls`

An object containing method calls, each mapped to its parameters.

• **customData?**: `TCustomData`

Optional custom data to include in the context.

#### Returns

`ContractContext`\<`Contract`, `TCalls`, `TCustomData`\>

The contract context, including the address, ABI, calls, and optional custom data.

#### Defined in

contracts/src/multicall/multicall2.contract.ts:117

***

### tryBlockAndAggregate()

> **tryBlockAndAggregate**(`requireSuccess`, `calls`, `overrides`?): `Promise`\<`ContractTransaction`\>

Aggregates multiple contract calls into a single transaction with block info.

#### Parameters

• **requireSuccess**: `boolean`

Whether to require all calls to succeed.

• **calls**: `TryBlockAndAggregateCallsRequest`[]

Array of calls to aggregate.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Multicall2Types.Contract.tryBlockAndAggregate`

#### Defined in

contracts/src/multicall/multicall2.contract.ts:197

***

### tryBlockAndAggregateCallContext()

> **tryBlockAndAggregateCallContext**(`requireSuccess`, `calls`): `MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\>

Returns the call context for the tryBlockAndAggregate method.

#### Parameters

• **requireSuccess**: `boolean`

Whether to require all calls to succeed.

• **calls**: `TryBlockAndAggregateCallsRequest`[]

Array of calls to aggregate.

#### Returns

`MethodCall`\<`Contract`, `"tryBlockAndAggregate"`\>

The call context.

#### Defined in

contracts/src/multicall/multicall2.contract.ts:214
