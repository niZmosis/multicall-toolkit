[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / IMulticallProvider

# Interface: IMulticallProvider

Interface representing a DEX provider, which manages interaction with a blockchain provider.

## Properties

### \_ethersProvider

> **\_ethersProvider**: `BaseProvider`

The internal blockchain provider.

#### Defined in

[multicall-provider.types.ts:56](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L56)

***

### \_multicall

> **\_multicall**: [`IMulticall`](IMulticall.md)

The Multicall instance.

#### Defined in

[multicall-provider.types.ts:62](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L62)

***

### \_providerContext

> **\_providerContext**: [`ProviderContext`](../type-aliases/ProviderContext.md)

The provider context, which includes chain and network details.

#### Defined in

[multicall-provider.types.ts:59](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L59)

## Accessors

### customNetwork

> `get` **customNetwork**(): `undefined` \| [`CustomNetwork`](../type-aliases/CustomNetwork.md)

Retrieves the custom network configuration, if any.

#### Returns

`undefined` \| [`CustomNetwork`](../type-aliases/CustomNetwork.md)

#### Defined in

[multicall-provider.types.ts:68](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L68)

***

### network

> `get` **network**(): `Network`

Retrieves the network details for the blockchain provider.

#### Returns

`Network`

#### Defined in

[multicall-provider.types.ts:71](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L71)

***

### provider

> `get` **provider**(): `BaseProvider`

Retrieves the blockchain provider instance.

#### Returns

`BaseProvider`

#### Defined in

[multicall-provider.types.ts:65](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L65)

## Methods

### call()

> **call**\<`TContractContexts`\>(`contractCallContexts`, `contractCallOptions`): `Promise`\<[`MulticallResults`](../type-aliases/MulticallResults.md)\<`TContractContexts`\>\>

Executes multiple contract calls in a single transaction using the Multicall pattern.
This method aggregates multiple calls to different contracts or methods and returns
their results in a structured format.

#### Type Parameters

• **TContractContexts** *extends* [`ReferencedContracts`](../type-aliases/ReferencedContracts.md)

#### Parameters

• **contractCallContexts**: `TContractContexts`

• **contractCallOptions**: [`ContractContextOptions`](../type-aliases/ContractContextOptions.md)

#### Returns

`Promise`\<[`MulticallResults`](../type-aliases/MulticallResults.md)\<`TContractContexts`\>\>

#### Defined in

[multicall-provider.types.ts:88](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L88)

***

### createCallContext()

> **createCallContext**\<`TContract`, `TCustomData`\>(): \<`TCalls`\>(`context`) => [`ContractContext`](../type-aliases/ContractContext.md)\<`TContract`, `TCalls`, `TCustomData`\>

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

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](../type-aliases/DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](../type-aliases/MethodNames.md)\<`TContract`\>\]\>

##### Parameters

• **context**: [`ContractContext`](../type-aliases/ContractContext.md)\<`TContract`, `TCalls`, `TCustomData`\>

##### Returns

[`ContractContext`](../type-aliases/ContractContext.md)\<`TContract`, `TCalls`, `TCustomData`\>

#### Defined in

[multicall-provider.types.ts:100](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L100)

***

### getContract()

> **getContract**\<`TGeneratedTypedContext`\>(`contractDetail`): `TGeneratedTypedContext`

Creates and returns a contract instance based on the provided contract details.

#### Type Parameters

• **TGeneratedTypedContext**

#### Parameters

• **contractDetail**: [`ContractDetail`](../type-aliases/ContractDetail.md)

The details of the contract to interact with.

#### Returns

`TGeneratedTypedContext`

The generated contract instance of the specified type.

#### Defined in

[multicall-provider.types.ts:79](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L79)
