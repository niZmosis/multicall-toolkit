[**@ethereum-multicall/contracts v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/contracts](../README.md) / Erc777Contract

# Class: Erc777Contract

## Extends

- `MulticallProviderBase`

## Implements

- `Contract`

## Constructors

### new Erc777Contract()

> **new Erc777Contract**(`multicallProviderContext`, `contractDetail`): [`Erc777Contract`](Erc777Contract.md)

#### Parameters

• **multicallProviderContext**: `MulticallProviderContext`

• **contractDetail**: `ContractDetailToken`

#### Returns

[`Erc777Contract`](Erc777Contract.md)

#### Overrides

`MulticallProviderBase.constructor`

#### Defined in

[contracts/src/token/erc777.contract.ts:36](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L36)

## Properties

### \_contract

> `protected` **\_contract**: `ContractContext`

#### Defined in

[contracts/src/token/erc777.contract.ts:32](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L32)

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

[contracts/src/token/erc777.contract.ts:34](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L34)

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

### erc777Contract

> `get` **erc777Contract**(): `ContractContext`

Get the ERC777 contract

#### Returns

`ContractContext`

#### Defined in

[contracts/src/token/erc777.contract.ts:57](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L57)

***

### methodNames

> `get` **methodNames**(): `MethodNameMap`

Get the method names

#### Returns

`MethodNameMap`

#### Defined in

[contracts/src/token/erc777.contract.ts:62](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L62)

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

### authorizeOperator()

> **authorizeOperator**(`_tokenHolder`, `overrides`?): `Promise`\<`void`\>

Authorizes an operator for a given token holder.

#### Parameters

• **\_tokenHolder**: `string`

The address of the token holder.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`void`\>

A promise that resolves to a void.

#### Implementation of

`Erc777Types.Contract.authorizeOperator`

#### Defined in

[contracts/src/token/erc777.contract.ts:316](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L316)

***

### balanceOf()

> **balanceOf**(`_tokenHolder`): `Promise`\<`BigNumber`\>

Returns the balance of the specified address.

#### Parameters

• **\_tokenHolder**: `string`

The address to query.

#### Returns

`Promise`\<`BigNumber`\>

The balance of the specified address.

#### Implementation of

`Erc777Types.Contract.balanceOf`

#### Defined in

[contracts/src/token/erc777.contract.ts:266](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L266)

***

### balanceOfCallContext()

> **balanceOfCallContext**(`_tokenHolder`): `MethodCall`\<`Contract`, `"balanceOf"`\>

Returns the call context for the balanceOf method.

#### Parameters

• **\_tokenHolder**: `string`

The address to query.

#### Returns

`MethodCall`\<`Contract`, `"balanceOf"`\>

The call context.

#### Defined in

[contracts/src/token/erc777.contract.ts:275](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L275)

***

### call()

> **call**\<`TCalls`\>(`calls`, `options`): `Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

Executes a multicall for the given contract methods.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"symbol"`\> \| `MethodCall`\<`Contract`, `"name"`\> \| `MethodCall`\<`Contract`, `"granularity"`\> \| `MethodCall`\<`Contract`, `"balanceOf"`\> \| `MethodCall`\<`Contract`, `"defaultOperators"`\> \| `MethodCall`\<`Contract`, `"isOperatorFor"`\> \| `MethodCall`\<`Contract`, `"authorizeOperator"`\> \| `MethodCall`\<`Contract`, `"defaultOperatorsSend"`\> \| `MethodCall`\<`Contract`, `"revokeOperator"`\> \| `MethodCall`\<`Contract`, `"operatorSend"`\> \| `MethodCall`\<`Contract`, `"revokeDefaultOperators"`\> \| `MethodCall`\<`Contract`, `"send"`\> \| `MethodCall`\<`Contract`, `"setDefaultOperators"`\>\>

The type of the calls object.

#### Parameters

• **calls**: `TCalls`

An object describing the methods to call and their parameters.

• **options**: `ContractContextOptions` = `{}`

Optional configuration for the contract call.

#### Returns

`Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

#### Remarks

This method allows batch calling of multiple contract methods in a single transaction.
It uses the multicall provider to execute all calls efficiently.
The results are typed according to the return types of the called methods.

#### Defined in

[contracts/src/token/erc777.contract.ts:179](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L179)

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

[contracts/src/token/erc777.contract.ts:72](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L72)

***

### defaultOperators()

> **defaultOperators**(): `Promise`\<`string`[]\>

Returns the list of default operators.

#### Returns

`Promise`\<`string`[]\>

The list of default operators.

#### Implementation of

`Erc777Types.Contract.defaultOperators`

#### Defined in

[contracts/src/token/erc777.contract.ts:246](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L246)

***

### defaultOperatorsCallContext()

> **defaultOperatorsCallContext**(): `MethodCall`\<`Contract`, `"defaultOperators"`\>

Returns the call context for the defaultOperators method.

#### Returns

`MethodCall`\<`Contract`, `"defaultOperators"`\>

The call context.

#### Defined in

[contracts/src/token/erc777.contract.ts:254](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L254)

***

### defaultOperatorsSend()

> **defaultOperatorsSend**(): `Promise`\<`void`\>

Retrieves the default operators send function.

#### Returns

`Promise`\<`void`\>

A promise that resolves to void.

#### Implementation of

`Erc777Types.Contract.defaultOperatorsSend`

#### Defined in

[contracts/src/token/erc777.contract.ts:339](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L339)

***

### defaultOperatorsSendCallContext()

> **defaultOperatorsSendCallContext**(): `MethodCall`\<`Contract`, `"defaultOperatorsSend"`\>

Retrieves the call context for the default operators send function.

#### Returns

`MethodCall`\<`Contract`, `"defaultOperatorsSend"`\>

The call context.

#### Defined in

[contracts/src/token/erc777.contract.ts:347](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L347)

***

### encodeAuthorizeOperator()

> **encodeAuthorizeOperator**(`_tokenHolder`): `string`

Encodes the function data for authorizing an operator.

#### Parameters

• **\_tokenHolder**: `string`

The address of the token holder.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/token/erc777.contract.ts:331](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L331)

***

### encodeFunctionData()

> `protected` **encodeFunctionData**(`methodName`, `values`?): `string`

Encodes the function data for the given method name, using custom method names if provided in the contract detail.

#### Parameters

• **methodName**: `MethodNames`

The method name.

• **values?**: `any`[]

The values to encode.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/token/erc777.contract.ts:96](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L96)

***

### encodeOperatorSend()

> **encodeOperatorSend**(`_from`, `_to`, `_value`, `_data`, `_operatorData`): `string`

Encodes the function data for sending tokens via an operator.

#### Parameters

• **\_from**: `string`

The address to send from.

• **\_to**: `string`

The address to send to.

• **\_value**: `BigNumberish`

The amount to send.

• **\_data**: `BytesLike`

Additional data to include with the send.

• **\_operatorData**: `BytesLike`

Additional operator data to include with the send.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/token/erc777.contract.ts:440](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L440)

***

### encodeRevokeDefaultOperators()

> **encodeRevokeDefaultOperators**(`_defaultOperators`): `string`

Encodes the function data for revoking default operators.

#### Parameters

• **\_defaultOperators**: `string`[]

The array of default operators to revoke.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/token/erc777.contract.ts:477](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L477)

***

### encodeRevokeOperator()

> **encodeRevokeOperator**(`_operatorOrOperators`): `string`

Encodes the function data for revoking an operator.

#### Parameters

• **\_operatorOrOperators**: `string` \| `string`[]

The address(es) of the operator(s) to revoke.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/token/erc777.contract.ts:391](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L391)

***

### encodeSend()

> **encodeSend**(`_from`, `_to`, `_value`, `_data`): `string`

Encodes the function data for sending tokens.

#### Parameters

• **\_from**: `string`

The address to send from.

• **\_to**: `string`

The address to send to.

• **\_value**: `BigNumberish`

The amount to send.

• **\_data**: `BytesLike`

Additional data to include with the send.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/token/erc777.contract.ts:516](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L516)

***

### encodeSetDefaultOperators()

> **encodeSetDefaultOperators**(`_defaultOperators`): `string`

Encodes the function data for setting default operators.

#### Parameters

• **\_defaultOperators**: `string`[]

The array of new default operators.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/token/erc777.contract.ts:546](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L546)

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

### granularity()

> **granularity**(): `Promise`\<`BigNumber`\>

Returns the granularity of the token.

#### Returns

`Promise`\<`BigNumber`\>

The granularity of the token.

#### Implementation of

`Erc777Types.Contract.granularity`

#### Defined in

[contracts/src/token/erc777.contract.ts:227](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L227)

***

### granularityCallContext()

> **granularityCallContext**(): `MethodCall`\<`Contract`, `"granularity"`\>

Returns the call context for the granularity method.

#### Returns

`MethodCall`\<`Contract`, `"granularity"`\>

The call context.

#### Defined in

[contracts/src/token/erc777.contract.ts:235](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L235)

***

### isOperatorFor()

> **isOperatorFor**(`_tokenHolder`, `_operator`): `Promise`\<`boolean`\>

Checks if an operator is authorized for a given token holder.

#### Parameters

• **\_tokenHolder**: `string`

The address of the token holder.

• **\_operator**: `string`

The address of the operator.

#### Returns

`Promise`\<`boolean`\>

True if the operator is authorized, false otherwise.

#### Implementation of

`Erc777Types.Contract.isOperatorFor`

#### Defined in

[contracts/src/token/erc777.contract.ts:287](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L287)

***

### isOperatorForCallContext()

> **isOperatorForCallContext**(`_tokenHolder`, `_operator`): `MethodCall`\<`Contract`, `"isOperatorFor"`\>

Returns the call context for the isOperatorFor method.

#### Parameters

• **\_tokenHolder**: `string`

The address of the token holder.

• **\_operator**: `string`

The address of the operator.

#### Returns

`MethodCall`\<`Contract`, `"isOperatorFor"`\>

The call context.

#### Defined in

[contracts/src/token/erc777.contract.ts:303](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L303)

***

### name()

> **name**(): `Promise`\<`string`\>

Returns the name of the token.

#### Returns

`Promise`\<`string`\>

The name of the token.

#### Implementation of

`Erc777Types.Contract.name`

#### Defined in

[contracts/src/token/erc777.contract.ts:195](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L195)

***

### nameCallContext()

> **nameCallContext**(): `MethodCall`\<`Contract`, `"name"`\>

Returns the call context for the name method.

#### Returns

`MethodCall`\<`Contract`, `"name"`\>

The call context.

#### Defined in

[contracts/src/token/erc777.contract.ts:203](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L203)

***

### operatorSend()

> **operatorSend**(`_from`, `_to`, `_value`, `_data`, `_operatorData`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sends tokens from the caller to a recipient.

#### Parameters

• **\_from**: `string`

The address to send from.

• **\_to**: `string`

The address to send to.

• **\_value**: `BigNumberish`

The amount to send.

• **\_data**: `BytesLike`

Additional data to include with the send.

• **\_operatorData**: `BytesLike`

Additional operator data to include with the send.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves to a contract transaction.

#### Implementation of

`Erc777Types.Contract.operatorSend`

#### Defined in

[contracts/src/token/erc777.contract.ts:413](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L413)

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

[contracts/src/token/erc777.contract.ts:112](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L112)

***

### prepareContractContext()

> **prepareContractContext**\<`TCalls`, `TCustomData`\>(`calls`, `customData`?): `ContractContext`\<`Contract`, `TCalls`, `TCustomData`\>

Helper function to dynamically prepare a contract context based on custom or default method names.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"symbol"`\> \| `MethodCall`\<`Contract`, `"name"`\> \| `MethodCall`\<`Contract`, `"granularity"`\> \| `MethodCall`\<`Contract`, `"balanceOf"`\> \| `MethodCall`\<`Contract`, `"defaultOperators"`\> \| `MethodCall`\<`Contract`, `"isOperatorFor"`\> \| `MethodCall`\<`Contract`, `"authorizeOperator"`\> \| `MethodCall`\<`Contract`, `"defaultOperatorsSend"`\> \| `MethodCall`\<`Contract`, `"revokeOperator"`\> \| `MethodCall`\<`Contract`, `"operatorSend"`\> \| `MethodCall`\<`Contract`, `"revokeDefaultOperators"`\> \| `MethodCall`\<`Contract`, `"send"`\> \| `MethodCall`\<`Contract`, `"setDefaultOperators"`\>\>

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

[contracts/src/token/erc777.contract.ts:139](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L139)

***

### revokeDefaultOperators()

> **revokeDefaultOperators**(`_defaultOperators`, `overrides`?): `Promise`\<`ContractTransaction`\>

Revokes default operators.

#### Parameters

• **\_defaultOperators**: `string`[]

The array of default operators to revoke.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves to a contract transaction.

#### Implementation of

`Erc777Types.Contract.revokeDefaultOperators`

#### Defined in

[contracts/src/token/erc777.contract.ts:462](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L462)

***

### revokeOperator()

#### revokeOperator(_operator, overrides)

> **revokeOperator**(`_operator`, `overrides`?): `Promise`\<`ContractTransaction`\>

Revokes an operator for the caller.

##### Parameters

• **\_operator**: `string`

The address of the operator to revoke.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

##### Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves to a contract transaction.

##### Implementation of

`Erc777Types.Contract.revokeOperator`

##### Defined in

[contracts/src/token/erc777.contract.ts:360](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L360)

#### revokeOperator(_newDefaultOperators, overrides)

> **revokeOperator**(`_newDefaultOperators`, `overrides`?): `Promise`\<`ContractTransaction`\>

Revokes a set of default operators.

##### Parameters

• **\_newDefaultOperators**: `string`[]

The array of operator addresses to revoke.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

##### Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves to a contract transaction.

##### Implementation of

`Erc777Types.Contract.revokeOperator`

##### Defined in

[contracts/src/token/erc777.contract.ts:371](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L371)

***

### send()

> **send**(`_from`, `_to`, `_value`, `_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sends tokens to a recipient.

#### Parameters

• **\_from**: `string`

The address to send from.

• **\_to**: `string`

The address to send to.

• **\_value**: `BigNumberish`

The amount to send.

• **\_data**: `BytesLike`

Additional data to include with the send.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves to a contract transaction.

#### Implementation of

`Erc777Types.Contract.send`

#### Defined in

[contracts/src/token/erc777.contract.ts:492](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L492)

***

### setDefaultOperators()

> **setDefaultOperators**(`_defaultOperators`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets default operators.

#### Parameters

• **\_defaultOperators**: `string`[]

The array of new default operators.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves to a contract transaction.

#### Implementation of

`Erc777Types.Contract.setDefaultOperators`

#### Defined in

[contracts/src/token/erc777.contract.ts:531](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L531)

***

### symbol()

> **symbol**(): `Promise`\<`string`\>

Returns the symbol of the token.

#### Returns

`Promise`\<`string`\>

The symbol of the token.

#### Implementation of

`Erc777Types.Contract.symbol`

#### Defined in

[contracts/src/token/erc777.contract.ts:211](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L211)

***

### symbolCallContext()

> **symbolCallContext**(): `MethodCall`\<`Contract`, `"symbol"`\>

Returns the call context for the symbol method.

#### Returns

`MethodCall`\<`Contract`, `"symbol"`\>

The call context.

#### Defined in

[contracts/src/token/erc777.contract.ts:219](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc777.contract.ts#L219)
