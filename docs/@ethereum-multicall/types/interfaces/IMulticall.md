[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / IMulticall

# Interface: IMulticall

Interface for Multicall operations, providing methods to aggregate multiple contract calls
and handle different execution environments (Web3, Ethers, or custom providers).

## Properties

### \_executionType

> **\_executionType**: [`MulticallExecutionType`](../type-aliases/MulticallExecutionType.md)

The type of execution environment being used (web3, ethers, or custom JSON-RPC).

#### Defined in

[multicall.types.ts:106](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L106)

***

### \_options

> **\_options**: [`MulticallOptionsWeb3`](../type-aliases/MulticallOptionsWeb3.md) \| [`MulticallOptionsEthers`](../type-aliases/MulticallOptionsEthers.md) \| [`MulticallOptionsCustomJsonRpcProvider`](../type-aliases/MulticallOptionsCustomJsonRpcProvider.md)

The options for the Multicall instance.

#### Defined in

[multicall.types.ts:111](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L111)

## Methods

### buildAggregateCallContext()

> **buildAggregateCallContext**\<`TContractContexts`\>(`contractCallContexts`): [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

Builds the aggregate call context, which prepares the contract call details for execution.

#### Type Parameters

• **TContractContexts** *extends* [`ReferencedContracts`](../type-aliases/ReferencedContracts.md)

#### Parameters

• **contractCallContexts**: `TContractContexts`\[keyof `TContractContexts`\][]

The contexts for each contract call.

#### Returns

[`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

An array of aggregate call contexts ready to be executed.

#### Defined in

[multicall.types.ts:224](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L224)

***

### buildFailureAggregateResponse()

> **buildFailureAggregateResponse**(`calls`, `error`): [`AggregateResponse`](../type-aliases/AggregateResponse.md)

Builds a failure aggregate response for a batch that failed entirely.

#### Parameters

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

The calls that failed.

• **error**

The error details.

• **error.code**: `string`

• **error.message**: `string`

#### Returns

[`AggregateResponse`](../type-aliases/AggregateResponse.md)

The aggregate response.

#### Defined in

[multicall.types.ts:312](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L312)

***

### buildSuccessfulAggregateResponse()

> **buildSuccessfulAggregateResponse**(`contractResponse`, `calls`): [`AggregateResponse`](../type-aliases/AggregateResponse.md)

Builds the final aggregated response by mapping contract call results to their respective contexts.

#### Parameters

• **contractResponse**: [`AggregateContractResponse`](../type-aliases/AggregateContractResponse.md)

The response from the contract call execution.

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

The original call contexts used for the contract call.

#### Returns

[`AggregateResponse`](../type-aliases/AggregateResponse.md)

An aggregated response containing the results for all contract calls.

#### Defined in

[multicall.types.ts:301](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L301)

***

### call()

> **call**\<`TContractContexts`\>(`contractCallContexts`, `contractCallOptions`): `Promise`\<[`MulticallResults`](../type-aliases/MulticallResults.md)\<`TContractContexts`\>\>

Executes multiple contract calls and aggregates the results into a single response.

#### Type Parameters

• **TContractContexts** *extends* [`ReferencedContracts`](../type-aliases/ReferencedContracts.md)

#### Parameters

• **contractCallContexts**: `TContractContexts`

The context(s) for the contract calls, containing details about the contracts, methods, and parameters.

• **contractCallOptions**: [`ContractContextOptions`](../type-aliases/ContractContextOptions.md)

Optional settings for the contract call, such as block number or specific options.

#### Returns

`Promise`\<[`MulticallResults`](../type-aliases/MulticallResults.md)\<`TContractContexts`\>\>

A promise that resolves to the aggregated results of the contract calls.

#### Defined in

[multicall.types.ts:143](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L143)

***

### combineResponses()

> **combineResponses**(`responses`): [`AggregateResponse`](../type-aliases/AggregateResponse.md)

Combines the results from multiple batch responses into a single aggregated response.
This method merges the block number and results from each batch to produce a consolidated output.

#### Parameters

• **responses**: [`AggregateResponse`](../type-aliases/AggregateResponse.md)[]

An array of `AggregateResponse` from each executed batch.

#### Returns

[`AggregateResponse`](../type-aliases/AggregateResponse.md)

A single `AggregateResponse` that combines data from all the provided batch responses.

#### Defined in

[multicall.types.ts:178](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L178)

***

### createBatches()

> **createBatches**(`calls`): [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[][]

Splits the provided calls into multiple batches based on configured size limits.
Batches are created to ensure that each batch stays within the byte size limit
and adheres to the maximum batch size.

#### Parameters

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

An array of `AggregateCallContext` representing the individual contract calls.

#### Returns

[`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[][]

An array of call batches, where each batch is an array of `AggregateCallContext` objects.

#### Defined in

[multicall.types.ts:156](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L156)

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

[multicall.types.ts:123](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L123)

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

[multicall.types.ts:216](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L216)

***

### execute()

> **execute**(`calls`, `options`): `Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

Executes the multicall using the provided call contexts and options.

#### Parameters

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

The aggregated call contexts to be executed.

• **options**: [`ContractContextOptions`](../type-aliases/ContractContextOptions.md)

Additional options to customize the contract call execution.

#### Returns

`Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

A promise that resolves to the aggregated response from the contract calls.

#### Defined in

[multicall.types.ts:247](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L247)

***

### executeBatchesSequentially()

> **executeBatchesSequentially**(`batches`, `contractCallOptions`): `Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)[]\>

Executes batches of contract calls sequentially, stopping if an error occurs (unless `tryAggregate` is enabled).
Each batch is processed one after the other to maintain sequential order and error handling.

#### Parameters

• **batches**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[][]

An array of call batches to be executed, each batch containing multiple `AggregateCallContext` items.

• **contractCallOptions**: [`ContractContextOptions`](../type-aliases/ContractContextOptions.md)

Options for each contract call execution, such as block number and aggregation settings.

#### Returns

`Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)[]\>

A promise that resolves to an array of `AggregateResponse`, containing responses from each successful batch.

#### Defined in

[multicall.types.ts:166](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L166)

***

### executeOnChain()

> **executeOnChain**(`calls`, `options`): `Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

Executes the multicall using Ethers, Web3, or a custom JSON-RPC provider.

#### Parameters

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

The aggregated call contexts to be executed.

• **options**: [`ContractContextOptions`](../type-aliases/ContractContextOptions.md)

Optional configuration for the contract call.

#### Returns

`Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

#### Remarks

This method allows batch calling of multiple contract methods in a single transaction.
It uses the multicall provider to execute all calls efficiently.
The results are typed according to the return types of the called methods.

#### Defined in

[multicall.types.ts:265](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L265)

***

### executeWithEthersOrNodeUrl()

> **executeWithEthersOrNodeUrl**(`calls`, `options`): `Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

Executes the contract calls using an Ethers provider or a custom JSON-RPC provider.

#### Parameters

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

The aggregated call contexts to be executed.

• **options**: [`ContractContextOptions`](../type-aliases/ContractContextOptions.md)

Additional options for the contract calls.

#### Returns

`Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

A promise that resolves to the aggregated response.

#### Defined in

[multicall.types.ts:289](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L289)

***

### executeWithWeb3()

> **executeWithWeb3**(`calls`, `options`): `Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

Executes the contract calls using a Web3 provider.

#### Parameters

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

The aggregated call contexts to be executed.

• **options**: [`ContractContextOptions`](../type-aliases/ContractContextOptions.md)

Additional options for the contract calls, such as block number.

#### Returns

`Promise`\<[`AggregateResponse`](../type-aliases/AggregateResponse.md)\>

A promise that resolves to the aggregated response.

#### Defined in

[multicall.types.ts:277](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L277)

***

### findOutputTypesFromAbi()

> **findOutputTypesFromAbi**(`abi`, `methodName`): `undefined` \| `AbiOutput`[]

Finds the output types for a given method from the contract's ABI.

#### Parameters

• **abi**: (`JsonFragment` \| `AbiItem`)[]

The ABI of the contract.

• **methodName**: `string`

The name of the method to retrieve output types for.

#### Returns

`undefined` \| `AbiOutput`[]

An array of output types, or undefined if the method is not found.

#### Defined in

[multicall.types.ts:235](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L235)

***

### formatReturnValues()

> **formatReturnValues**(`decodedReturnValues`): `any`

Formats the decoded return values, ensuring they are always returned as an array.

#### Parameters

• **decodedReturnValues**: `any`

The values decoded from the ABI response.

#### Returns

`any`

The formatted return values, always in array form.

#### Defined in

[multicall.types.ts:208](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L208)

***

### getReturnDataFromResult()

> **getReturnDataFromResult**(`result`): `any`

Extracts the return data from a given result.

#### Parameters

• **result**: `any`

The result from which the return data should be extracted.

#### Returns

`any`

The extracted return data.

#### Defined in

[multicall.types.ts:200](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L200)

***

### mapCallContextToMatchContractFormat()

> **mapCallContextToMatchContractFormat**(`calls`): `object`[]

Maps the contract call context to the contract format expected by the multicall contract.

#### Parameters

• **calls**: [`AggregateCallContext`](../type-aliases/AggregateCallContext.md)[]

The aggregated call contexts to be mapped.

#### Returns

`object`[]

An array of target contracts and encoded data for each call.

#### Defined in

[multicall.types.ts:323](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L323)

***

### processResponse()

> **processResponse**\<`TContractContexts`\>(`response`, `contextArray`): [`MulticallResults`](../type-aliases/MulticallResults.md)\<`TContractContexts`\>

Maps aggregated responses from contract calls back to their original context,
ensuring results are structured according to the input call contexts.

#### Type Parameters

• **TContractContexts** *extends* [`ReferencedContracts`](../type-aliases/ReferencedContracts.md)

The types of the referenced contracts, used to type the returned results.

#### Parameters

• **response**: [`AggregateResponse`](../type-aliases/AggregateResponse.md)

The aggregated response containing results for all contract calls.

• **contextArray**: [`string`, [`ContractContext`](../type-aliases/ContractContext.md)\<`any`, `any`, `any`\>][]

An array of contract context entries, where each entry contains the contract name and its call context.

#### Returns

[`MulticallResults`](../type-aliases/MulticallResults.md)\<`TContractContexts`\>

A `MulticallResults` object that contains the structured responses for each referenced contract.

#### Defined in

[multicall.types.ts:189](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L189)
