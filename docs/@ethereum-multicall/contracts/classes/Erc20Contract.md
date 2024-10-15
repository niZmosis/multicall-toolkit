[**@ethereum-multicall/contracts v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/contracts](../README.md) / Erc20Contract

# Class: Erc20Contract

## Extends

- `MulticallProviderBase`

## Implements

- `Contract`

## Constructors

### new Erc20Contract()

> **new Erc20Contract**(`multicallProviderContext`, `contractDetail`): [`Erc20Contract`](Erc20Contract.md)

#### Parameters

• **multicallProviderContext**: `MulticallProviderContext`

• **contractDetail**: `ContractDetailToken`

#### Returns

[`Erc20Contract`](Erc20Contract.md)

#### Overrides

`MulticallProviderBase.constructor`

#### Defined in

contracts/src/token/erc20.contract.ts:32

## Properties

### \_contract

> `protected` **\_contract**: `ContractContext`

#### Defined in

contracts/src/token/erc20.contract.ts:28

***

### \_contractDetail

> `protected` **\_contractDetail**: `ContractDetail`

#### Defined in

contracts/src/token/erc20.contract.ts:26

***

### \_methodNames

> `protected` **\_methodNames**: `MethodNameMap`

#### Defined in

contracts/src/token/erc20.contract.ts:30

***

### \_multicallProvider

> `protected` **\_multicallProvider**: `MulticallProvider`

#### Inherited from

`MulticallProviderBase._multicallProvider`

#### Defined in

provider/dist/esm/multicall-provider-base.d.ts:4

## Accessors

### contractDetail

> `get` **contractDetail**(): `ContractDetail`

Get the contract detail

#### Returns

`ContractDetail`

#### Overrides

`MulticallProviderBase.contractDetail`

#### Defined in

contracts/src/token/erc20.contract.ts:69

***

### erc20Contract

> `get` **erc20Contract**(): `ContractContext`

Get the ERC20 contract

#### Returns

`ContractContext`

#### Defined in

contracts/src/token/erc20.contract.ts:74

***

### methodNames

> `get` **methodNames**(): `MethodNameMap`

Get the method names

#### Returns

`MethodNameMap`

#### Defined in

contracts/src/token/erc20.contract.ts:79

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

provider/dist/esm/multicall-provider-base.d.ts:11

## Methods

### allowance()

> **allowance**(`_owner`, `_spender`): `Promise`\<`BigNumber`\>

Returns the amount of tokens that an owner allowed to a spender.

#### Parameters

• **\_owner**: `string`

The address of the owner.

• **\_spender**: `string`

The address of the spender.

#### Returns

`Promise`\<`BigNumber`\>

The amount of tokens that are allowed to be spent.

#### Implementation of

`Erc20Types.Contract.allowance`

#### Defined in

contracts/src/token/erc20.contract.ts:369

***

### allowanceCallContext()

> **allowanceCallContext**(`_owner`, `_spender`): `MethodCall`\<`Contract`, `"allowance"`\>

Returns the call context for the allowance method.

#### Parameters

• **\_owner**: `string`

The address of the owner.

• **\_spender**: `string`

The address of the spender.

#### Returns

`MethodCall`\<`Contract`, `"allowance"`\>

The call context.

#### Defined in

contracts/src/token/erc20.contract.ts:379

***

### approve()

> **approve**(`_spender`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

Approves the specified amount of tokens to the specified address.

#### Parameters

• **\_spender**: `string`

The address to approve.

• **\_value**: `BigNumberish`

The amount of tokens to approve.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc20Types.Contract.approve`

#### Defined in

contracts/src/token/erc20.contract.ts:204

***

### balanceOf()

> **balanceOf**(`_owner`): `Promise`\<`BigNumber`\>

Returns the balance of the specified address.

#### Parameters

• **\_owner**: `string`

The address to query.

#### Returns

`Promise`\<`BigNumber`\>

The balance of the specified address.

#### Implementation of

`Erc20Types.Contract.balanceOf`

#### Defined in

contracts/src/token/erc20.contract.ts:303

***

### balanceOfCallContext()

> **balanceOfCallContext**(`_owner`): `MethodCall`\<`Contract`, `"balanceOf"`\>

Returns the call context for the balanceOf method.

#### Parameters

• **\_owner**: `string`

The address to query.

#### Returns

`MethodCall`\<`Contract`, `"balanceOf"`\>

The call context.

#### Defined in

contracts/src/token/erc20.contract.ts:312

***

### call()

> **call**\<`TCalls`\>(`calls`, `options`): `Promise`\<`object`\>

Executes a multicall for the given contract methods.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"symbol"`\> \| `MethodCall`\<`Contract`, `"name"`\> \| `MethodCall`\<`Contract`, `"balanceOf"`\> \| `MethodCall`\<`Contract`, `"approve"`\> \| `MethodCall`\<`Contract`, `"totalSupply"`\> \| `MethodCall`\<`Contract`, `"transferFrom"`\> \| `MethodCall`\<`Contract`, `"decimals"`\> \| `MethodCall`\<`Contract`, `"transfer"`\> \| `MethodCall`\<`Contract`, `"allowance"`\>\>

The type of the calls object.

#### Parameters

• **calls**: `TCalls`

An object describing the methods to call and their parameters.

• **options**: `ContractContextOptions` = `{}`

Optional configuration for the contract call.

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

##### blockNumber

> **blockNumber**: `number`

##### originContext

> **originContext**: `ContractContext`\<`Contract`, `TCalls`, `unknown`\>

##### results

> **results**: `ContractMethodResult`\<`Contract`, `TCalls`\>

#### Remarks

This method allows batch calling of multiple contract methods in a single transaction.
It uses the multicall provider to execute all calls efficiently.
The results are typed according to the return types of the called methods.

#### Defined in

contracts/src/token/erc20.contract.ts:165

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

contracts/src/token/erc20.contract.ts:89

***

### decimals()

> **decimals**(): `Promise`\<`number`\>

Returns the number of decimals used by the token.

#### Returns

`Promise`\<`number`\>

The number of decimals.

#### Implementation of

`Erc20Types.Contract.decimals`

#### Defined in

contracts/src/token/erc20.contract.ts:286

***

### decimalsCallContext()

> **decimalsCallContext**(): `MethodCall`\<`Contract`, `"decimals"`\>

Returns the call context for the decimals method.

#### Returns

`MethodCall`\<`Contract`, `"decimals"`\>

The call context.

#### Defined in

contracts/src/token/erc20.contract.ts:294

***

### encodeApprove()

> **encodeApprove**(`_spender`, `_value`): `string`

Encodes the function data for approving tokens.

#### Parameters

• **\_spender**: `string`

The address to approve.

• **\_value**: `BigNumberish`

The amount of tokens to approve.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc20.contract.ts:222

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

contracts/src/token/erc20.contract.ts:113

***

### encodeTransfer()

> **encodeTransfer**(`_to`, `_value`): `string`

Encodes the function data for transferring tokens to a specified address.

#### Parameters

• **\_to**: `string`

The address to transfer to.

• **\_value**: `BigNumberish`

The amount of tokens to transfer.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc20.contract.ts:359

***

### encodeTransferFrom()

> **encodeTransferFrom**(`_from`, `_to`, `_value`): `string`

Encodes the function data for transferring tokens from one address to another.

#### Parameters

• **\_from**: `string`

The source address.

• **\_to**: `string`

The destination address.

• **\_value**: `BigNumberish`

The amount of tokens to transfer.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc20.contract.ts:274

***

### multicall()

> `protected` **multicall**\<`TContract`, `TCalls`\>(`calls`, `options`?): `Promise`\<`object`\>

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

`Promise`\<`object`\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

##### blockNumber

> **blockNumber**: `number`

##### originContext

> **originContext**: `ContractContext`\<`TContract`, `TCalls`, `unknown`\>

##### results

> **results**: `ContractMethodResult`\<`TContract`, `TCalls`\>

#### Inherited from

`MulticallProviderBase.multicall`

#### Defined in

provider/dist/esm/multicall-provider-base.d.ts:30

***

### name()

> **name**(): `Promise`\<`string`\>

Returns the name of the token.

#### Returns

`Promise`\<`string`\>

The name of the token.

#### Implementation of

`Erc20Types.Contract.name`

#### Defined in

contracts/src/token/erc20.contract.ts:185

***

### nameCallContext()

> **nameCallContext**(): `MethodCall`\<`Contract`, `"name"`\>

Returns the call context for the name method.

#### Returns

`MethodCall`\<`Contract`, `"name"`\>

The call context.

#### Defined in

contracts/src/token/erc20.contract.ts:193

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

contracts/src/token/erc20.contract.ts:129

***

### symbol()

> **symbol**(): `Promise`\<`string`\>

Returns the symbol of the token.

#### Returns

`Promise`\<`string`\>

The symbol of the token.

#### Implementation of

`Erc20Types.Contract.symbol`

#### Defined in

contracts/src/token/erc20.contract.ts:322

***

### symbolCallContext()

> **symbolCallContext**(): `MethodCall`\<`Contract`, `"symbol"`\>

Returns the call context for the symbol method.

#### Returns

`MethodCall`\<`Contract`, `"symbol"`\>

The call context.

#### Defined in

contracts/src/token/erc20.contract.ts:330

***

### totalSupply()

> **totalSupply**(): `Promise`\<`BigNumber`\>

Returns the total supply of the token.

#### Returns

`Promise`\<`BigNumber`\>

The total supply of the token.

#### Implementation of

`Erc20Types.Contract.totalSupply`

#### Defined in

contracts/src/token/erc20.contract.ts:230

***

### totalSupplyCallContext()

> **totalSupplyCallContext**(): `MethodCall`\<`Contract`, `"totalSupply"`\>

Returns the call context for the totalSupply method.

#### Returns

`MethodCall`\<`Contract`, `"totalSupply"`\>

The call context.

#### Defined in

contracts/src/token/erc20.contract.ts:238

***

### transfer()

> **transfer**(`_to`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfers tokens to a specified address.

#### Parameters

• **\_to**: `string`

The address to transfer to.

• **\_value**: `BigNumberish`

The amount of tokens to transfer.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc20Types.Contract.transfer`

#### Defined in

contracts/src/token/erc20.contract.ts:341

***

### transferFrom()

> **transferFrom**(`_from`, `_to`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfers tokens from one address to another.

#### Parameters

• **\_from**: `string`

The source address.

• **\_to**: `string`

The destination address.

• **\_value**: `BigNumberish`

The amount of tokens to transfer.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc20Types.Contract.transferFrom`

#### Defined in

contracts/src/token/erc20.contract.ts:253
