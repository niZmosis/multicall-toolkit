[**@ethereum-multicall/contracts v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/contracts](../README.md) / WrappedContract

# Class: WrappedContract

## Extends

- `MulticallProviderBase`

## Implements

- `Contract`

## Constructors

### new WrappedContract()

> **new WrappedContract**(`multicallProviderContext`, `contractDetail`): [`WrappedContract`](WrappedContract.md)

#### Parameters

• **multicallProviderContext**: `MulticallProviderContext`

• **contractDetail**: `ContractDetailToken`

#### Returns

[`WrappedContract`](WrappedContract.md)

#### Overrides

`MulticallProviderBase.constructor`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:31](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L31)

## Properties

### \_contract

> `protected` **\_contract**: `ContractContext`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:27](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L27)

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

[contracts/src/wrapped/wrapped.contract.ts:29](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L29)

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

[contracts/src/wrapped/wrapped.contract.ts:57](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L57)

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

***

### wrappedContract

> `get` **wrappedContract**(): `ContractContext`

Get the wrapped contract

#### Returns

`ContractContext`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:52](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L52)

## Methods

### allowance()

> **allowance**(`parameter0`, `parameter1`): `Promise`\<`BigNumber`\>

Returns the amount of tokens that an owner allowed to a spender.

#### Parameters

• **parameter0**: `string`

The address of the owner.

• **parameter1**: `string`

The address of the spender.

#### Returns

`Promise`\<`BigNumber`\>

The amount of tokens that are allowed to be spent.

#### Implementation of

`WrappedTypes.Contract.allowance`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:418](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L418)

***

### allowanceCallContext()

> **allowanceCallContext**(`parameter0`, `parameter1`): `MethodCall`\<`Contract`, `"allowance"`\>

Returns the call context for the allowance method.

#### Parameters

• **parameter0**: `string`

The address of the owner.

• **parameter1**: `string`

The address of the spender.

#### Returns

`MethodCall`\<`Contract`, `"allowance"`\>

The call context.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:434](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L434)

***

### approve()

> **approve**(`guy`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Approves the specified amount of tokens to the specified address.

#### Parameters

• **guy**: `string`

The address to approve.

• **wad**: `BigNumberish`

The amount of tokens to approve.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`WrappedTypes.Contract.approve`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:209](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L209)

***

### balanceOf()

> **balanceOf**(`parameter0`): `Promise`\<`BigNumber`\>

Returns the balance of the specified address.

#### Parameters

• **parameter0**: `string`

The address to query.

#### Returns

`Promise`\<`BigNumber`\>

The balance of the specified address.

#### Implementation of

`WrappedTypes.Contract.balanceOf`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:333](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L333)

***

### balanceOfCallContext()

> **balanceOfCallContext**(`parameter0`): `MethodCall`\<`Contract`, `"balanceOf"`\>

Returns the call context for the balanceOf method.

#### Parameters

• **parameter0**: `string`

The address to query.

#### Returns

`MethodCall`\<`Contract`, `"balanceOf"`\>

The call context.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:342](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L342)

***

### call()

> **call**\<`TCalls`\>(`calls`, `options`): `Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

Executes a multicall for the given contract methods.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"symbol"`\> \| `MethodCall`\<`Contract`, `"name"`\> \| `MethodCall`\<`Contract`, `"balanceOf"`\> \| `MethodCall`\<`Contract`, `"approve"`\> \| `MethodCall`\<`Contract`, `"totalSupply"`\> \| `MethodCall`\<`Contract`, `"transferFrom"`\> \| `MethodCall`\<`Contract`, `"decimals"`\> \| `MethodCall`\<`Contract`, `"transfer"`\> \| `MethodCall`\<`Contract`, `"allowance"`\> \| `MethodCall`\<`Contract`, `"withdraw"`\> \| `MethodCall`\<`Contract`, `"deposit"`\>\>

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

[contracts/src/wrapped/wrapped.contract.ts:174](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L174)

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

[contracts/src/wrapped/wrapped.contract.ts:67](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L67)

***

### decimals()

> **decimals**(): `Promise`\<`number`\>

Returns the number of decimals used by the token.

#### Returns

`Promise`\<`number`\>

The number of decimals.

#### Implementation of

`WrappedTypes.Contract.decimals`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:316](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L316)

***

### decimalsCallContext()

> **decimalsCallContext**(): `MethodCall`\<`Contract`, `"decimals"`\>

Returns the call context for the decimals method.

#### Returns

`MethodCall`\<`Contract`, `"decimals"`\>

The call context.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:324](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L324)

***

### deposit()

> **deposit**(`overrides`?): `Promise`\<`ContractTransaction`\>

Deposits the specified amount of ETH into the contract and mints wrapped tokens.

#### Parameters

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`WrappedTypes.Contract.deposit`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:398](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L398)

***

### encodeApprove()

> **encodeApprove**(`guy`, `wad`): `string`

Encodes the function data for approving tokens.

#### Parameters

• **guy**: `string`

The address to approve.

• **wad**: `BigNumberish`

The amount of tokens to approve.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:227](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L227)

***

### encodeDeposit()

> **encodeDeposit**(): `string`

Encodes the function data for depositing ETH and minting wrapped tokens.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:408](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L408)

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

[contracts/src/wrapped/wrapped.contract.ts:91](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L91)

***

### encodeTransfer()

> **encodeTransfer**(`dst`, `wad`): `string`

Encodes the function data for transferring tokens to a specified address.

#### Parameters

• **dst**: `string`

The address to transfer to.

• **wad**: `BigNumberish`

The amount of tokens to transfer.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:389](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L389)

***

### encodeTransferFrom()

> **encodeTransferFrom**(`src`, `dst`, `wad`): `string`

Encodes the function data for transferring tokens from one address to another.

#### Parameters

• **src**: `string`

The source address.

• **dst**: `string`

The destination address.

• **wad**: `BigNumberish`

The amount of tokens to transfer.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:279](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L279)

***

### encodeWithdraw()

> **encodeWithdraw**(`wad`): `string`

Encodes the function data for withdrawing tokens.

#### Parameters

• **wad**: `BigNumberish`

The amount of tokens to withdraw.

#### Returns

`string`

The encoded function data.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:308](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L308)

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

### name()

> **name**(): `Promise`\<`string`\>

Returns the name of the token.

#### Returns

`Promise`\<`string`\>

The name of the token.

#### Implementation of

`WrappedTypes.Contract.name`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:190](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L190)

***

### nameCallContext()

> **nameCallContext**(): `MethodCall`\<`Contract`, `"name"`\>

Returns the call context for the name method.

#### Returns

`MethodCall`\<`Contract`, `"name"`\>

The call context.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:198](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L198)

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

[contracts/src/wrapped/wrapped.contract.ts:107](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L107)

***

### prepareContractContext()

> **prepareContractContext**\<`TCalls`, `TCustomData`\>(`calls`, `customData`?): `ContractContext`\<`Contract`, `TCalls`, `TCustomData`\>

Helper function to dynamically prepare a contract context based on custom or default method names.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"symbol"`\> \| `MethodCall`\<`Contract`, `"name"`\> \| `MethodCall`\<`Contract`, `"balanceOf"`\> \| `MethodCall`\<`Contract`, `"approve"`\> \| `MethodCall`\<`Contract`, `"totalSupply"`\> \| `MethodCall`\<`Contract`, `"transferFrom"`\> \| `MethodCall`\<`Contract`, `"decimals"`\> \| `MethodCall`\<`Contract`, `"transfer"`\> \| `MethodCall`\<`Contract`, `"allowance"`\> \| `MethodCall`\<`Contract`, `"withdraw"`\> \| `MethodCall`\<`Contract`, `"deposit"`\>\>

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

[contracts/src/wrapped/wrapped.contract.ts:134](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L134)

***

### symbol()

> **symbol**(): `Promise`\<`string`\>

Returns the symbol of the token.

#### Returns

`Promise`\<`string`\>

The symbol of the token.

#### Implementation of

`WrappedTypes.Contract.symbol`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:352](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L352)

***

### symbolCallContext()

> **symbolCallContext**(): `MethodCall`\<`Contract`, `"symbol"`\>

Returns the call context for the symbol method.

#### Returns

`MethodCall`\<`Contract`, `"symbol"`\>

The call context.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:360](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L360)

***

### totalSupply()

> **totalSupply**(): `Promise`\<`BigNumber`\>

Returns the total supply of the token.

#### Returns

`Promise`\<`BigNumber`\>

The total supply of the token.

#### Implementation of

`WrappedTypes.Contract.totalSupply`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:235](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L235)

***

### totalSupplyCallContext()

> **totalSupplyCallContext**(): `MethodCall`\<`Contract`, `"totalSupply"`\>

Returns the call context for the totalSupply method.

#### Returns

`MethodCall`\<`Contract`, `"totalSupply"`\>

The call context.

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:243](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L243)

***

### transfer()

> **transfer**(`dst`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfers tokens to a specified address.

#### Parameters

• **dst**: `string`

The address to transfer to.

• **wad**: `BigNumberish`

The amount of tokens to transfer.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`WrappedTypes.Contract.transfer`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:371](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L371)

***

### transferFrom()

> **transferFrom**(`src`, `dst`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfers tokens from one address to another.

#### Parameters

• **src**: `string`

The source address.

• **dst**: `string`

The destination address.

• **wad**: `BigNumberish`

The amount of tokens to transfer.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`WrappedTypes.Contract.transferFrom`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:258](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L258)

***

### withdraw()

> **withdraw**(`wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Withdraws the specified amount of tokens.

#### Parameters

• **wad**: `BigNumberish`

The amount of tokens to withdraw.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`WrappedTypes.Contract.withdraw`

#### Defined in

[contracts/src/wrapped/wrapped.contract.ts:293](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/wrapped/wrapped.contract.ts#L293)
