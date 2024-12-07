[**@ethereum-multicall/contracts v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/contracts](../README.md) / Erc20Contract

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

[contracts/src/token/erc20.contract.ts:31](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L31)

## Properties

### \_contract

> `protected` **\_contract**: `ContractContext`

#### Defined in

[contracts/src/token/erc20.contract.ts:27](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L27)

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

[contracts/src/token/erc20.contract.ts:29](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L29)

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

### erc20Contract

> `get` **erc20Contract**(): `ContractContext`

Get the ERC20 contract

#### Returns

`ContractContext`

#### Defined in

[contracts/src/token/erc20.contract.ts:52](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L52)

***

### methodNames

> `get` **methodNames**(): `MethodNameMap`

Get the method names

#### Returns

`MethodNameMap`

#### Defined in

[contracts/src/token/erc20.contract.ts:57](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L57)

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

[contracts/src/token/erc20.contract.ts:373](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L373)

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

[contracts/src/token/erc20.contract.ts:383](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L383)

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

[contracts/src/token/erc20.contract.ts:208](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L208)

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

[contracts/src/token/erc20.contract.ts:307](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L307)

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

[contracts/src/token/erc20.contract.ts:316](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L316)

***

### call()

> **call**\<`TCalls`\>(`calls`, `options`): `Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

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

`Promise`\<`ExecutionResult`\<`Contract`, `TCalls`\>\>

A promise that resolves to an object containing the block number,
         origin context, and the results of each method call.

#### Remarks

This method allows batch calling of multiple contract methods in a single transaction.
It uses the multicall provider to execute all calls efficiently.
The results are typed according to the return types of the called methods.

#### Defined in

[contracts/src/token/erc20.contract.ts:173](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L173)

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

[contracts/src/token/erc20.contract.ts:67](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L67)

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

[contracts/src/token/erc20.contract.ts:290](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L290)

***

### decimalsCallContext()

> **decimalsCallContext**(): `MethodCall`\<`Contract`, `"decimals"`\>

Returns the call context for the decimals method.

#### Returns

`MethodCall`\<`Contract`, `"decimals"`\>

The call context.

#### Defined in

[contracts/src/token/erc20.contract.ts:298](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L298)

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

[contracts/src/token/erc20.contract.ts:226](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L226)

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

[contracts/src/token/erc20.contract.ts:91](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L91)

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

[contracts/src/token/erc20.contract.ts:363](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L363)

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

[contracts/src/token/erc20.contract.ts:278](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L278)

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

`Erc20Types.Contract.name`

#### Defined in

[contracts/src/token/erc20.contract.ts:189](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L189)

***

### nameCallContext()

> **nameCallContext**(): `MethodCall`\<`Contract`, `"name"`\>

Returns the call context for the name method.

#### Returns

`MethodCall`\<`Contract`, `"name"`\>

The call context.

#### Defined in

[contracts/src/token/erc20.contract.ts:197](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L197)

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

[contracts/src/token/erc20.contract.ts:107](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L107)

***

### prepareContractContext()

> **prepareContractContext**\<`TCalls`, `TCustomData`\>(`calls`, `customData`?): `ContractContext`\<`Contract`, `TCalls`, `TCustomData`\>

Helper function to dynamically prepare a contract context based on custom or default method names.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"symbol"`\> \| `MethodCall`\<`Contract`, `"name"`\> \| `MethodCall`\<`Contract`, `"balanceOf"`\> \| `MethodCall`\<`Contract`, `"approve"`\> \| `MethodCall`\<`Contract`, `"totalSupply"`\> \| `MethodCall`\<`Contract`, `"transferFrom"`\> \| `MethodCall`\<`Contract`, `"decimals"`\> \| `MethodCall`\<`Contract`, `"transfer"`\> \| `MethodCall`\<`Contract`, `"allowance"`\>\>

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

[contracts/src/token/erc20.contract.ts:134](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L134)

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

[contracts/src/token/erc20.contract.ts:326](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L326)

***

### symbolCallContext()

> **symbolCallContext**(): `MethodCall`\<`Contract`, `"symbol"`\>

Returns the call context for the symbol method.

#### Returns

`MethodCall`\<`Contract`, `"symbol"`\>

The call context.

#### Defined in

[contracts/src/token/erc20.contract.ts:334](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L334)

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

[contracts/src/token/erc20.contract.ts:234](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L234)

***

### totalSupplyCallContext()

> **totalSupplyCallContext**(): `MethodCall`\<`Contract`, `"totalSupply"`\>

Returns the call context for the totalSupply method.

#### Returns

`MethodCall`\<`Contract`, `"totalSupply"`\>

The call context.

#### Defined in

[contracts/src/token/erc20.contract.ts:242](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L242)

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

[contracts/src/token/erc20.contract.ts:345](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L345)

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

[contracts/src/token/erc20.contract.ts:257](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/contracts/src/token/erc20.contract.ts#L257)
