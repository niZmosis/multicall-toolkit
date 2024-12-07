[**@ethereum-multicall/provider v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/provider](../README.md) / MulticallProviderBase

# Class: `abstract` MulticallProviderBase

## Constructors

### new MulticallProviderBase()

> **new MulticallProviderBase**(`multicallProviderContext`, `contractDetail`?): [`MulticallProviderBase`](MulticallProviderBase.md)

#### Parameters

• **multicallProviderContext**: `MulticallProviderContext`

• **contractDetail?**: `ContractDetail`

#### Returns

[`MulticallProviderBase`](MulticallProviderBase.md)

#### Defined in

[provider/src/multicall-provider-base.ts:27](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/provider/src/multicall-provider-base.ts#L27)

## Properties

### \_contractDetail

> `protected` **\_contractDetail**: `ContractDetail`

#### Defined in

[provider/src/multicall-provider-base.ts:23](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/provider/src/multicall-provider-base.ts#L23)

***

### \_multicallProvider

> `protected` **\_multicallProvider**: [`MulticallProvider`](MulticallProvider.md)

#### Defined in

[provider/src/multicall-provider-base.ts:25](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/provider/src/multicall-provider-base.ts#L25)

## Accessors

### contractDetail

> `get` **contractDetail**(): `ContractDetail`

Returns the contract details.

#### Returns

`ContractDetail`

The contract details of the concrete class.

#### Defined in

[provider/src/multicall-provider-base.ts:70](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/provider/src/multicall-provider-base.ts#L70)

***

### multicallProvider

> `get` **multicallProvider**(): [`MulticallProvider`](MulticallProvider.md)

Returns the underlying `MulticallProvider`.

#### Returns

[`MulticallProvider`](MulticallProvider.md)

The `MulticallProvider` instance used by this class.

#### Defined in

[provider/src/multicall-provider-base.ts:61](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/provider/src/multicall-provider-base.ts#L61)

## Methods

### executeCall()

> `protected` **executeCall**\<`TContract`, `TCalls`\>(`calls`, `options`): `Promise`\<`ExecutionResult`\<`TContract`, `TCalls`\>\>

Executes a multicall for the given contract methods.

#### Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, `DiscriminatedMethodCalls`\<`TContract`\>\[`MethodNames`\<`TContract`\>\]\>

The type of the calls object.

#### Parameters

• **calls**: `TCalls`

An object describing the methods to call and their parameters.

• **options**: `ContractContextOptions` = `{}`

Optional configuration for the contract call.

#### Returns

`Promise`\<`ExecutionResult`\<`TContract`, `TCalls`\>\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

#### Defined in

[provider/src/multicall-provider-base.ts:93](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/provider/src/multicall-provider-base.ts#L93)
