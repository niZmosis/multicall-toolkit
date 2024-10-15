[**@ethereum-multicall/core v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/core](../README.md) / Multicall

# Class: Multicall

Represents a Multicall instance for batching multiple Ethereum contract calls into a single request.

## Constructors

### new Multicall()

> **new Multicall**(`context`): [`Multicall`](Multicall.md)

Creates a new Multicall instance.

#### Parameters

• **context**: `MulticallOptions`

The options for configuring the Multicall instance.

#### Returns

[`Multicall`](Multicall.md)

#### Throws

Will throw an error if the provided options don't match any of the expected interfaces.

#### Defined in

multicall.ts:43

## Properties

### \_executionType

> **\_executionType**: `MulticallExecutionType`

The type of execution for this Multicall instance.

#### Defined in

multicall.ts:33

***

### \_options

> **\_options**: `MulticallOptions`

The options for this Multicall instance.

#### Defined in

multicall.ts:36

## Methods

### buildAggregateCallContext()

> **buildAggregateCallContext**\<`TContractContexts`\>(`contractCallContexts`): `AggregateCallContext`[]

Builds the aggregate call context from the given contract call contexts.

#### Type Parameters

• **TContractContexts** *extends* `ReferencedContracts`

The type of the contract contexts.

#### Parameters

• **contractCallContexts**: `TContractContexts`\[keyof `TContractContexts`\][]

The contract call contexts to build from.

#### Returns

`AggregateCallContext`[]

An array of aggregate call contexts.

#### Defined in

multicall.ts:208

***

### buildUpAggregateResponse()

> **buildUpAggregateResponse**(`contractResponse`, `calls`): `AggregateResponse`

Builds up the aggregate response from the contract response and calls.

#### Parameters

• **contractResponse**: `AggregateContractResponse`

The response from the contract.

• **calls**: `AggregateCallContext`[]

The original calls made.

#### Returns

`AggregateResponse`

The built aggregate response.

#### Defined in

multicall.ts:455

***

### call()

> **call**\<`TContractContexts`\>(`contractCallContexts`, `contractCallOptions`): `Promise`\<`MulticallResults`\<`TContractContexts`\>\>

Executes a multicall for the given contract contexts.

#### Type Parameters

• **TContractContexts** *extends* `ReferencedContracts` = `ReferencedContracts`

The type of the contract contexts.

#### Parameters

• **contractCallContexts**: `TContractContexts`

The contract call contexts to execute.

• **contractCallOptions**: `ContractContextOptions` = `{}`

The options for the contract call.

#### Returns

`Promise`\<`MulticallResults`\<`TContractContexts`\>\>

A promise that resolves to the multicall results.

#### Defined in

multicall.ts:107

***

### createCallContext()

> **createCallContext**\<`TContract`, `TContractResultsStructureOverrides`, `TCustomData`\>(): \<`TCalls`\>(`context`) => `ContractContext`\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>

Creates a call context for a contract.

#### Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The type of the contract.

• **TContractResultsStructureOverrides** = `unknown`

The type of contract results structure overrides.

• **TCustomData** = `unknown`

The type of custom data.

#### Returns

`Function`

A function that creates a call context for the specified contract.

##### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `DiscriminatedMethodCalls`\<`TContract`\>\[`MethodNames`\<`TContract`\>\]\>

##### Parameters

• **context**: `ContractContext`\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>

##### Returns

`ContractContext`\<`TContract`, `TCalls`, `TContractResultsStructureOverrides`, `TCustomData`\>

#### Defined in

multicall.ts:73

***

### execute()

> **execute**(`calls`, `options`): `Promise`\<`AggregateResponse`\>

Executes the multicall based on the execution type.

#### Parameters

• **calls**: `AggregateCallContext`[]

The calls to execute.

• **options**: `ContractContextOptions`

The options for the execution.

#### Returns

`Promise`\<`AggregateResponse`\>

A promise that resolves to the aggregate response.

#### Defined in

multicall.ts:317

***

### executeWithEthersOrNodeUrl()

> **executeWithEthersOrNodeUrl**(`calls`, `options`): `Promise`\<`AggregateResponse`\>

Executes the multicall using Ethers or a custom JSON-RPC provider.

#### Parameters

• **calls**: `AggregateCallContext`[]

The calls to execute.

• **options**: `ContractContextOptions`

The options for the execution.

#### Returns

`Promise`\<`AggregateResponse`\>

A promise that resolves to the aggregate response.

#### Defined in

multicall.ts:393

***

### executeWithWeb3()

> **executeWithWeb3**(`calls`, `options`): `Promise`\<`AggregateResponse`\>

Executes the multicall using Web3.

#### Parameters

• **calls**: `AggregateCallContext`[]

The calls to execute.

• **options**: `ContractContextOptions`

The options for the execution.

#### Returns

`Promise`\<`AggregateResponse`\>

A promise that resolves to the aggregate response.

#### Defined in

multicall.ts:338

***

### findOutputTypesFromAbi()

> **findOutputTypesFromAbi**(`abi`, `methodName`): `undefined` \| `AbiOutput`[]

Finds the output types from an ABI for a given method name.

#### Parameters

• **abi**: (`AbiItem` \| `JsonFragment`)[]

The ABI to search.

• **methodName**: `string`

The name of the method to find output types for.

#### Returns

`undefined` \| `AbiOutput`[]

An array of ABI outputs or undefined if not found.

#### Defined in

multicall.ts:280

***

### formatReturnValues()

> **formatReturnValues**(`decodedReturnValues`): `any`

Formats the decoded return values.

#### Parameters

• **decodedReturnValues**: `any`

The decoded return values to format.

#### Returns

`any`

The formatted return values.

#### Defined in

multicall.ts:261

***

### getReturnDataFromResult()

> **getReturnDataFromResult**(`result`): `any`

Gets the return data from a result.

#### Parameters

• **result**: `any`

The result to get the return data from.

#### Returns

`any`

The return data.

#### Defined in

multicall.ts:248

***

### mapCallContextToMatchContractFormat()

> **mapCallContextToMatchContractFormat**(`calls`): `object`[]

Maps the call context to match the contract format.

#### Parameters

• **calls**: `AggregateCallContext`[]

The calls to map.

#### Returns

`object`[]

An array of objects with target and callData properties.

#### Defined in

multicall.ts:494
