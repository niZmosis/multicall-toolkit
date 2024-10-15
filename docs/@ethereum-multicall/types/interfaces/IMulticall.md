[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / IMulticall

# Interface: IMulticall

Interface for Multicall operations, providing methods to aggregate multiple contract calls
and handle different execution environments (Web3, Ethers, or custom providers).

## Properties

### \_executionType

> **\_executionType**: [`MulticallExecutionType`](../type-aliases/MulticallExecutionType.md)

The type of execution environment being used (web3, ethers, or custom JSON-RPC).

#### Defined in

multicall.types.ts:81

***

### \_options

> **\_options**: [`MulticallOptionsWeb3`](../type-aliases/MulticallOptionsWeb3.md) \| [`MulticallOptionsEthers`](../type-aliases/MulticallOptionsEthers.md) \| [`MulticallOptionsCustomJsonRpcProvider`](../type-aliases/MulticallOptionsCustomJsonRpcProvider.md)

The options for the Multicall instance.

#### Defined in

multicall.types.ts:86

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

multicall.types.ts:155

***

### buildUpAggregateResponse()

> **buildUpAggregateResponse**(`contractResponse`, `calls`): [`AggregateResponse`](../type-aliases/AggregateResponse.md)

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

multicall.types.ts:214

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

multicall.types.ts:99

***

### createCallContext()

> **createCallContext**\<`TContract`, `TContractResultsStructureOverrides`, `TCustomData`\>(): (`context`) => [`ContractContext`](../type-aliases/ContractContext.md)\<`TContract`, `Record`\<`string`, [`DiscriminatedMethodCalls`](../type-aliases/DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](../type-aliases/MethodNames.md)\<`TContract`\>\]\>, `TContractResultsStructureOverrides`, `TCustomData`\>

Creates and returns a contract call context to be used in multicall executions.

#### Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The type of the contract being interacted with.

• **TContractResultsStructureOverrides** = `unknown`

Custom overrides for the results structure.

• **TCustomData** = `unknown`

Custom data to be associated with the call context.

#### Returns

`Function`

A function that creates the contract call context.

##### Parameters

• **context**: [`ContractContext`](../type-aliases/ContractContext.md)\<`TContract`, `Record`\<`string`, [`DiscriminatedMethodCalls`](../type-aliases/DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](../type-aliases/MethodNames.md)\<`TContract`\>\]\>, `TContractResultsStructureOverrides`, `TCustomData`\>

##### Returns

[`ContractContext`](../type-aliases/ContractContext.md)\<`TContract`, `Record`\<`string`, [`DiscriminatedMethodCalls`](../type-aliases/DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](../type-aliases/MethodNames.md)\<`TContract`\>\]\>, `TContractResultsStructureOverrides`, `TCustomData`\>

#### Defined in

multicall.types.ts:112

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

multicall.types.ts:178

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

multicall.types.ts:202

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

multicall.types.ts:190

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

multicall.types.ts:166

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

multicall.types.ts:147

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

multicall.types.ts:139

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

multicall.types.ts:225
