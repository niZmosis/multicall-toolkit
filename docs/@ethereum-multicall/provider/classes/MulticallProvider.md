[**@ethereum-multicall/provider v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/provider](../README.md) / MulticallProvider

# Class: MulticallProvider

## Constructors

### new MulticallProvider()

> **new MulticallProvider**(`_providerContext`): [`MulticallProvider`](MulticallProvider.md)

#### Parameters

• **\_providerContext**: `ProviderContext`

#### Returns

[`MulticallProvider`](MulticallProvider.md)

#### Defined in

provider/src/multicall-provider.ts:36

## Properties

### \_ethersProvider

> **\_ethersProvider**: `BaseProvider`

#### Defined in

provider/src/multicall-provider.ts:30

***

### \_multicall

> **\_multicall**: `Multicall`

#### Defined in

provider/src/multicall-provider.ts:34

***

### \_providerContext

> **\_providerContext**: `ProviderContext`

#### Defined in

provider/src/multicall-provider.ts:32

## Accessors

### customNetwork

> `get` **customNetwork**(): `undefined` \| `CustomNetwork`

#### Returns

`undefined` \| `CustomNetwork`

#### Defined in

provider/src/multicall-provider.ts:96

***

### network

> `get` **network**(): `Network`

#### Returns

`Network`

#### Defined in

provider/src/multicall-provider.ts:100

***

### provider

> `get` **provider**(): `BaseProvider`

#### Returns

`BaseProvider`

#### Defined in

provider/src/multicall-provider.ts:92

## Methods

### call()

> **call**\<`TContractContexts`\>(`contractCallContexts`, `contractCallOptions`): `Promise`\<`MulticallResults`\<`TContractContexts`\>\>

#### Type Parameters

• **TContractContexts** *extends* `ReferencedContracts`

#### Parameters

• **contractCallContexts**: `TContractContexts`

• **contractCallOptions**: `ContractContextOptions` = `{}`

#### Returns

`Promise`\<`MulticallResults`\<`TContractContexts`\>\>

#### Defined in

provider/src/multicall-provider.ts:178

***

### createCallContext()

> **createCallContext**\<`TContract`, `TContractResultsStructureOverrides`, `TCustomData`\>(): \<`TCalls`\>(`context`) => `ContractContext`\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>

#### Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

• **TContractResultsStructureOverrides** = `unknown`

• **TCustomData** = `unknown`

#### Returns

`Function`

##### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `DiscriminatedMethodCalls`\<`TContract`\>\[`MethodNames`\<`TContract`\>\]\>

##### Parameters

• **context**: `ContractContext`\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>

##### Returns

`ContractContext`\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>

#### Defined in

provider/src/multicall-provider.ts:166

***

### getContract()

> **getContract**\<`TGeneratedTypedContext`\>(`contractDetail`): `TGeneratedTypedContext`

#### Type Parameters

• **TGeneratedTypedContext**

#### Parameters

• **contractDetail**: `ContractDetail`

#### Returns

`TGeneratedTypedContext`

#### Defined in

provider/src/multicall-provider.ts:138
