[**@ethereum-multicall/core v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/core](../README.md) / Multicall

# Class: Multicall

Represents a Multicall instance for batching multiple Ethereum contract calls into a single request.

## Constructors

### new Multicall()

> **new Multicall**(`options`): [`Multicall`](Multicall.md)

Creates a new Multicall instance.

#### Parameters

• **options**: `MulticallOptions`

The options for configuring the Multicall instance.

#### Returns

[`Multicall`](Multicall.md)

#### Throws

Will throw an error if the provided options don't match any of the expected interfaces.

#### Defined in

[multicall.ts:47](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L47)

## Properties

### \_executionType

> **\_executionType**: `MulticallExecutionType`

The type of execution for this Multicall instance.

#### Defined in

[multicall.ts:37](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L37)

***

### \_options

> **\_options**: `MulticallOptions`

The options for this Multicall instance.

#### Defined in

[multicall.ts:40](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L40)

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

[multicall.ts:430](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L430)

***

### buildFailureAggregateResponse()

> **buildFailureAggregateResponse**(`calls`, `error`): `AggregateResponse`

Builds a failure aggregate response for a batch that failed entirely.

#### Parameters

• **calls**: `AggregateCallContext`[]

The calls that failed.

• **error**

The error details.

• **error.code**: `string` \| `number`

• **error.message**: `string`

#### Returns

`AggregateResponse`

The aggregate response.

#### Defined in

[multicall.ts:876](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L876)

***

### buildSuccessfulAggregateResponse()

> **buildSuccessfulAggregateResponse**(`contractResponse`, `calls`): `AggregateResponse`

Builds a successful aggregate response from the contract response.

#### Parameters

• **contractResponse**: `AggregateContractResponse`

The response from the contract.

• **calls**: `AggregateCallContext`[]

The original calls made.

#### Returns

`AggregateResponse`

The built aggregate response.

#### Defined in

[multicall.ts:826](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L826)

***

### call()

> **call**\<`TContractContexts`\>(`contractCallContexts`, `contractCallOptions`): `Promise`\<`object`\>

Executes multiple contract calls, with optional batching support.

#### Type Parameters

• **TContractContexts** *extends* `ReferencedContracts`

#### Parameters

• **contractCallContexts**: `TContractContexts`

• **contractCallOptions**: `ContractContextOptions` = `{}`

#### Returns

`Promise`\<`object`\>

##### batchCount

> **batchCount**: `number`

##### blockNumber

> **blockNumber**: `number`

##### contracts

> **contracts**: \{ \[KContractReference in string \| number \| symbol\]: TContractContexts\[KContractReference\] extends ContractContext\<TContract, TCalls, TCustomData\> ? ContractResults\<TContract, TCalls, TCustomData\> : never \}

#### Defined in

[multicall.ts:100](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L100)

***

### combineResponses()

> **combineResponses**(`responses`): `AggregateResponse`

#### Parameters

• **responses**: `AggregateResponse`[]

#### Returns

`AggregateResponse`

#### Defined in

[multicall.ts:280](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L280)

***

### createBatches()

> **createBatches**(`calls`): `AggregateCallContext`[][]

#### Parameters

• **calls**: `AggregateCallContext`[]

#### Returns

`AggregateCallContext`[][]

#### Defined in

[multicall.ts:245](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L245)

***

### createCallContext()

> **createCallContext**\<`TContract`, `TCustomData`\>(): \<`TCalls`\>(`context`) => `ContractContext`\<`TContract`, `TCalls`, `TCustomData`\>

Creates a call context for a contract.

#### Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The type of the contract.

• **TCustomData** = `unknown`

The type of custom data.

#### Returns

`Function`

A function that creates a call context for the specified contract.

##### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `DiscriminatedMethodCalls`\<`TContract`\>\[`MethodNames`\<`TContract`\>\]\>

##### Parameters

• **context**: `ContractContext`\<`TContract`, `TCalls`, `TCustomData`\>

##### Returns

`ContractContext`\<`TContract`, `TCalls`, `TCustomData`\>

#### Defined in

[multicall.ts:81](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L81)

***

### decodeBytes32IfNecessary()

> **decodeBytes32IfNecessary**(`returnData`, `outputTypes`): `any`

Attempts to decode a value as `bytes32` if standard decoding fails.

#### Parameters

• **returnData**: `any`

The raw return data from the contract call.

• **outputTypes**: `AbiOutput`[]

The expected output types from the ABI.

#### Returns

`any`

The decoded value or `undefined` if decoding fails.

#### Defined in

[multicall.ts:538](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L538)

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

[multicall.ts:604](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L604)

***

### executeBatchesSequentially()

> **executeBatchesSequentially**(`batches`, `contractCallOptions`): `Promise`\<`AggregateResponse`[]\>

Executes batches of contract calls sequentially, stopping if an error occurs (unless `tryAggregate` is enabled).
Each batch is processed one after the other to maintain sequential order and error handling.

#### Parameters

• **batches**: `AggregateCallContext`[][]

An array of call batches to be executed, each batch containing multiple `AggregateCallContext` items.

• **contractCallOptions**: `ContractContextOptions`

Options for each contract call execution, such as block number and aggregation settings.

#### Returns

`Promise`\<`AggregateResponse`[]\>

A promise that resolves to an array of `AggregateResponse`.

#### Defined in

[multicall.ts:214](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L214)

***

### executeOnChain()

> **executeOnChain**(`calls`, `options`): `Promise`\<`AggregateResponse`\>

Executes the multicall using Ethers, Web3, or a custom JSON-RPC provider.

#### Parameters

• **calls**: `AggregateCallContext`[]

The aggregated call contexts to be executed.

• **options**: `ContractContextOptions`

Optional configuration for the contract call.

#### Returns

`Promise`\<`AggregateResponse`\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

#### Remarks

This method allows batch calling of multiple contract methods in a single transaction.
It uses the multicall provider to execute all calls efficiently.
The results are typed according to the return types of the called methods.

#### Defined in

[multicall.ts:661](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L661)

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

[multicall.ts:746](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L746)

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

[multicall.ts:682](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L682)

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

[multicall.ts:556](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L556)

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

[multicall.ts:519](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L519)

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

[multicall.ts:506](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L506)

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

[multicall.ts:918](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L918)

***

### processResponse()

> **processResponse**\<`TContractContexts`\>(`response`, `contextArray`): `MulticallResults`\<`TContractContexts`\>

#### Type Parameters

• **TContractContexts** *extends* `ReferencedContracts`

#### Parameters

• **response**: `AggregateResponse`

• **contextArray**: [`string`, `ContractContext`\<`any`, `any`, `any`\>][]

#### Returns

`MulticallResults`\<`TContractContexts`\>

#### Defined in

[multicall.ts:331](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/core/src/multicall.ts#L331)
