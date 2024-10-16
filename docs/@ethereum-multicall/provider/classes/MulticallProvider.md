[**@ethereum-multicall/provider v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/provider](../README.md) / MulticallProvider

# Class: MulticallProvider

## Implements

- `IMulticallProvider`

## Constructors

### new MulticallProvider()

> **new MulticallProvider**(`_providerContext`): [`MulticallProvider`](MulticallProvider.md)

#### Parameters

• **\_providerContext**: `ProviderContext`

#### Returns

[`MulticallProvider`](MulticallProvider.md)

#### Defined in

[provider/src/multicall-provider.ts:37](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L37)

## Properties

### \_ethersProvider

> **\_ethersProvider**: `BaseProvider`

The internal blockchain provider.

#### Implementation of

`IMulticallProvider._ethersProvider`

#### Defined in

[provider/src/multicall-provider.ts:31](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L31)

***

### \_multicall

> **\_multicall**: `Multicall`

The Multicall instance.

#### Implementation of

`IMulticallProvider._multicall`

#### Defined in

[provider/src/multicall-provider.ts:35](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L35)

***

### \_providerContext

> **\_providerContext**: `ProviderContext`

The provider context, which includes chain and network details.

#### Implementation of

`IMulticallProvider._providerContext`

#### Defined in

[provider/src/multicall-provider.ts:33](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L33)

## Accessors

### customNetwork

> `get` **customNetwork**(): `undefined` \| `CustomNetwork`

Retrieves the custom network configuration, if any.

#### Returns

`undefined` \| `CustomNetwork`

#### Implementation of

`IMulticallProvider.customNetwork`

#### Defined in

[provider/src/multicall-provider.ts:97](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L97)

***

### network

> `get` **network**(): `Network`

Retrieves the network details for the blockchain provider.

#### Returns

`Network`

#### Implementation of

`IMulticallProvider.network`

#### Defined in

[provider/src/multicall-provider.ts:101](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L101)

***

### provider

> `get` **provider**(): `BaseProvider`

Retrieves the blockchain provider instance.

#### Returns

`BaseProvider`

#### Implementation of

`IMulticallProvider.provider`

#### Defined in

[provider/src/multicall-provider.ts:93](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L93)

## Methods

### call()

> **call**\<`TContractContexts`\>(`contractCallContexts`, `contractCallOptions`): `Promise`\<`MulticallResults`\<`TContractContexts`\>\>

Executes multiple contract calls in a single transaction using the Multicall pattern.
This method aggregates multiple calls to different contracts or methods and returns
their results in a structured format.

#### Type Parameters

• **TContractContexts** *extends* `ReferencedContracts`

#### Parameters

• **contractCallContexts**: `TContractContexts`

• **contractCallOptions**: `ContractContextOptions` = `{}`

#### Returns

`Promise`\<`MulticallResults`\<`TContractContexts`\>\>

#### Implementation of

`IMulticallProvider.call`

#### Defined in

[provider/src/multicall-provider.ts:174](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L174)

***

### createCallContext()

> **createCallContext**\<`TContract`, `TCustomData`\>(): \<`TCalls`\>(`context`) => `ContractContext`\<`TContract`, `TCalls`, `TCustomData`\>

Creates and returns a contract call context to be used in multicall executions.

#### Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The type of the contract being interacted with.

• **TCustomData** = `unknown`

Custom data to be associated with the call context.

#### Returns

`Function`

A function that creates the contract call context.

##### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `DiscriminatedMethodCalls`\<`TContract`\>\[`MethodNames`\<`TContract`\>\]\>

##### Parameters

• **context**: `ContractContext`\<`TContract`, `TCalls`, `TCustomData`\>

##### Returns

`ContractContext`\<`TContract`, `TCalls`, `TCustomData`\>

#### Implementation of

`IMulticallProvider.createCallContext`

#### Defined in

[provider/src/multicall-provider.ts:167](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L167)

***

### getContract()

> **getContract**\<`TGeneratedTypedContext`\>(`contractDetail`): `TGeneratedTypedContext`

Creates and returns a contract instance based on the provided contract details.

#### Type Parameters

• **TGeneratedTypedContext**

#### Parameters

• **contractDetail**: `ContractDetail`

The details of the contract to interact with.

#### Returns

`TGeneratedTypedContext`

The generated contract instance of the specified type.

#### Implementation of

`IMulticallProvider.getContract`

#### Defined in

[provider/src/multicall-provider.ts:139](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/provider/src/multicall-provider.ts#L139)
