[**@ethereum-multicall/contracts v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/contracts](../README.md) / Erc721Contract

# Class: Erc721Contract

## Extends

- `MulticallProviderBase`

## Implements

- `Contract`

## Constructors

### new Erc721Contract()

> **new Erc721Contract**(`dexProviderContext`, `contractDetail`): [`Erc721Contract`](Erc721Contract.md)

#### Parameters

• **dexProviderContext**: `MulticallProviderContext`

• **contractDetail**: `ContractDetailToken`

#### Returns

[`Erc721Contract`](Erc721Contract.md)

#### Overrides

`MulticallProviderBase.constructor`

#### Defined in

contracts/src/token/erc721.contract.ts:39

## Properties

### \_contract

> `protected` **\_contract**: `ContractContext`

#### Defined in

contracts/src/token/erc721.contract.ts:35

***

### \_contractDetail

> `protected` **\_contractDetail**: `ContractDetail`

#### Defined in

contracts/src/token/erc721.contract.ts:33

***

### \_methodNames

> `protected` **\_methodNames**: `MethodNameMap`

#### Defined in

contracts/src/token/erc721.contract.ts:37

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

contracts/src/token/erc721.contract.ts:69

***

### erc721Contract

> `get` **erc721Contract**(): `ContractContext`

Get the ERC721 contract

#### Returns

`ContractContext`

#### Defined in

contracts/src/token/erc721.contract.ts:74

***

### methodNames

> `get` **methodNames**(): `MethodNameMap`

Get the method names

#### Returns

`MethodNameMap`

#### Defined in

contracts/src/token/erc721.contract.ts:79

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

### approve()

> **approve**(`to`, `tokenId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Approves the specified token ID for the specified address.

#### Parameters

• **to**: `string`

The address to approve.

• **tokenId**: `BigNumberish`

The token ID to approve.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc721Types.Contract.approve`

#### Defined in

contracts/src/token/erc721.contract.ts:211

***

### balanceOf()

> **balanceOf**(`owner`): `Promise`\<`BigNumber`\>

Returns the balance of tokens owned by the specified address.

#### Parameters

• **owner**: `string`

The address to query.

#### Returns

`Promise`\<`BigNumber`\>

The balance of tokens owned by the specified address.

#### Implementation of

`Erc721Types.Contract.balanceOf`

#### Defined in

contracts/src/token/erc721.contract.ts:238

***

### balanceOfCallContext()

> **balanceOfCallContext**(`owner`): `MethodCall`\<`Contract`, `"balanceOf"`\>

Returns the call context for the balanceOf method.

#### Parameters

• **owner**: `string`

The address to query.

#### Returns

`MethodCall`\<`Contract`, `"balanceOf"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:247

***

### call()

> **call**\<`TCalls`\>(`calls`, `options`): `Promise`\<`object`\>

Executes a multicall for the given contract methods.

#### Type Parameters

• **TCalls** *extends* `Record`\<`string`, `MethodCall`\<`Contract`, `"symbol"`\> \| `MethodCall`\<`Contract`, `"name"`\> \| `MethodCall`\<`Contract`, `"owner"`\> \| `MethodCall`\<`Contract`, `"balanceOf"`\> \| `MethodCall`\<`Contract`, `"isApprovedForAll"`\> \| `MethodCall`\<`Contract`, `"safeTransferFrom"`\> \| `MethodCall`\<`Contract`, `"setApprovalForAll"`\> \| `MethodCall`\<`Contract`, `"supportsInterface"`\> \| `MethodCall`\<`Contract`, `"approve"`\> \| `MethodCall`\<`Contract`, `"transferFrom"`\> \| `MethodCall`\<`Contract`, `"getApproved"`\> \| `MethodCall`\<`Contract`, `"ownerOf"`\> \| `MethodCall`\<`Contract`, `"renounceOwnership"`\> \| `MethodCall`\<`Contract`, `"tokenId"`\> \| `MethodCall`\<`Contract`, `"tokenURI"`\> \| `MethodCall`\<`Contract`, `"transferOwnership"`\> \| `MethodCall`\<`Contract`, `"mintNFT"`\>\>

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

contracts/src/token/erc721.contract.ts:165

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

contracts/src/token/erc721.contract.ts:89

***

### encodeApprove()

> **encodeApprove**(`to`, `tokenId`): `string`

Encodes the function data for approving a token ID.

#### Parameters

• **to**: `string`

The address to approve.

• **tokenId**: `BigNumberish`

The token ID to approve.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc721.contract.ts:229

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

contracts/src/token/erc721.contract.ts:113

***

### encodeMintNFT()

> **encodeMintNFT**(`recipient`, `tokenURI`): `string`

Encodes the function data for minting a new NFT.

#### Parameters

• **recipient**: `string`

The address to receive the minted NFT.

• **tokenURI**: `string`

The URI for the minted NFT's metadata.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc721.contract.ts:668

***

### encodeRenounceOwnership()

> **encodeRenounceOwnership**(`overrides`?): `string`

Encodes the function call to renounce ownership of the contract.

#### Parameters

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`string`

The encoded data as a string.

#### Defined in

contracts/src/token/erc721.contract.ts:404

***

### encodeSafeTransferFrom()

> **encodeSafeTransferFrom**(`from`, `to`, `tokenId`, `dataOrOverrides`?, `overrides`?): `string`

Encodes the function data for the `safeTransferFrom` method of the contract.

#### Parameters

• **from**: `string`

The address to transfer the token from.

• **to**: `string`

The address to transfer the token to.

• **tokenId**: `BigNumberish`

The ID of the token to transfer.

• **dataOrOverrides?**: `BytesLike` \| `ContractTransactionOverrides`

(Optional) Additional data to include with the transfer, or transaction overrides if no additional data is provided.

• **overrides?**: `ContractTransactionOverrides`

(Optional) Transaction overrides for gas, nonce, etc.

#### Returns

`string`

The encoded function data as a string.

#### Defined in

contracts/src/token/erc721.contract.ts:481

***

### encodeSetApprovalForAll()

> **encodeSetApprovalForAll**(`operator`, `approved`): `string`

Encodes the function data for setting or unsetting the approval of a given operator.

#### Parameters

• **operator**: `string`

The operator to set the approval for.

• **approved**: `boolean`

Whether to approve or remove the operator.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc721.contract.ts:537

***

### encodeTransferFrom()

> **encodeTransferFrom**(`from`, `to`, `tokenId`): `string`

Encodes the function data for transferring a token from one address to another.

#### Parameters

• **from**: `string`

The address to transfer from.

• **to**: `string`

The address to transfer to.

• **tokenId**: `BigNumberish`

The token ID to transfer.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc721.contract.ts:610

***

### encodeTransferOwnership()

> **encodeTransferOwnership**(`newOwner`): `string`

Encodes the function data for transferring ownership of the contract to a new owner.

#### Parameters

• **newOwner**: `string`

The address of the new owner.

#### Returns

`string`

The encoded function data.

#### Defined in

contracts/src/token/erc721.contract.ts:639

***

### getApproved()

> **getApproved**(`tokenId`): `Promise`\<`string`\>

Returns the address approved for the specified token ID.

#### Parameters

• **tokenId**: `BigNumberish`

The token ID to query.

#### Returns

`Promise`\<`string`\>

The address approved for the specified token ID.

#### Implementation of

`Erc721Types.Contract.getApproved`

#### Defined in

contracts/src/token/erc721.contract.ts:258

***

### getApprovedCallContext()

> **getApprovedCallContext**(`tokenId`): `MethodCall`\<`Contract`, `"getApproved"`\>

Returns the call context for the getApproved method.

#### Parameters

• **tokenId**: `BigNumberish`

The token ID to query.

#### Returns

`MethodCall`\<`Contract`, `"getApproved"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:267

***

### isApprovedForAll()

> **isApprovedForAll**(`owner`, `operator`): `Promise`\<`boolean`\>

Checks if an operator is approved to manage all tokens of a specified owner.

#### Parameters

• **owner**: `string`

The address of the owner.

• **operator**: `string`

The address of the operator.

#### Returns

`Promise`\<`boolean`\>

True if the operator is approved for all tokens, false otherwise.

#### Implementation of

`Erc721Types.Contract.isApprovedForAll`

#### Defined in

contracts/src/token/erc721.contract.ts:279

***

### isApprovedForAllCallContext()

> **isApprovedForAllCallContext**(`owner`, `operator`): `MethodCall`\<`Contract`, `"isApprovedForAll"`\>

Returns the call context for the isApprovedForAll method.

#### Parameters

• **owner**: `string`

The address of the owner.

• **operator**: `string`

The address of the operator.

#### Returns

`MethodCall`\<`Contract`, `"isApprovedForAll"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:295

***

### mintNFT()

> **mintNFT**(`recipient`, `tokenURI`, `overrides`?): `Promise`\<`ContractTransaction`\>

Mints a new NFT and assigns it to the recipient.

#### Parameters

• **recipient**: `string`

The address to receive the minted NFT.

• **tokenURI**: `string`

The URI for the minted NFT's metadata.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc721Types.Contract.mintNFT`

#### Defined in

contracts/src/token/erc721.contract.ts:650

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

`Erc721Types.Contract.name`

#### Defined in

contracts/src/token/erc721.contract.ts:306

***

### nameCallContext()

> **nameCallContext**(): `MethodCall`\<`Contract`, `"name"`\>

Returns the call context for the name method.

#### Returns

`MethodCall`\<`Contract`, `"name"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:314

***

### owner()

> **owner**(): `Promise`\<`string`\>

Returns the owner of the contract.

#### Returns

`Promise`\<`string`\>

The owner of the contract.

#### Implementation of

`Erc721Types.Contract.owner`

#### Defined in

contracts/src/token/erc721.contract.ts:354

***

### ownerCallContext()

> **ownerCallContext**(): `MethodCall`\<`Contract`, `"owner"`\>

Returns the call context for the owner method.

#### Returns

`MethodCall`\<`Contract`, `"owner"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:362

***

### ownerOf()

> **ownerOf**(`tokenId`): `Promise`\<`string`\>

Returns the owner of the specified token ID.

#### Parameters

• **tokenId**: `BigNumberish`

The token ID to query.

#### Returns

`Promise`\<`string`\>

The owner of the specified token ID.

#### Implementation of

`Erc721Types.Contract.ownerOf`

#### Defined in

contracts/src/token/erc721.contract.ts:371

***

### ownerOfCallContext()

> **ownerOfCallContext**(`tokenId`): `MethodCall`\<`Contract`, `"ownerOf"`\>

Returns the call context for the ownerOf method.

#### Parameters

• **tokenId**: `BigNumberish`

The token ID to query.

#### Returns

`MethodCall`\<`Contract`, `"ownerOf"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:380

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

contracts/src/token/erc721.contract.ts:129

***

### renounceOwnership()

> **renounceOwnership**(`overrides`?): `Promise`\<`ContractTransaction`\>

Renounces ownership of the contract.

#### Parameters

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc721Types.Contract.renounceOwnership`

#### Defined in

contracts/src/token/erc721.contract.ts:391

***

### safeTransferFrom()

#### safeTransferFrom(from, to, tokenId, overrides)

> **safeTransferFrom**(`from`, `to`, `tokenId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Safely transfers a token from one address to another.

##### Parameters

• **from**: `string`

The address to transfer from.

• **to**: `string`

The address to transfer to.

• **tokenId**: `BigNumberish`

The token ID to transfer.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

##### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

##### Implementation of

`Erc721Types.Contract.safeTransferFrom`

##### Defined in

contracts/src/token/erc721.contract.ts:418

#### safeTransferFrom(from, to, tokenId, data, overrides)

> **safeTransferFrom**(`from`, `to`, `tokenId`, `data`, `overrides`?): `Promise`\<`ContractTransaction`\>

Safely transfers a token from one address to another with additional data.

##### Parameters

• **from**: `string`

The address to transfer from.

• **to**: `string`

The address to transfer to.

• **tokenId**: `BigNumberish`

The token ID to transfer.

• **data**: `BytesLike`

Additional data to include with the transfer.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

##### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

##### Implementation of

`Erc721Types.Contract.safeTransferFrom`

##### Defined in

contracts/src/token/erc721.contract.ts:434

***

### setApprovalForAll()

> **setApprovalForAll**(`operator`, `approved`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets or un-sets the approval of a given operator.

#### Parameters

• **operator**: `string`

The operator to set the approval for.

• **approved**: `boolean`

Whether to approve or remove the operator.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc721Types.Contract.setApprovalForAll`

#### Defined in

contracts/src/token/erc721.contract.ts:519

***

### supportsInterface()

> **supportsInterface**(`interfaceId`): `Promise`\<`boolean`\>

Checks if a contract implements an interface.

#### Parameters

• **interfaceId**: `BytesLike`

The interface ID to check.

#### Returns

`Promise`\<`boolean`\>

True if the contract implements the interface, false otherwise.

#### Implementation of

`Erc721Types.Contract.supportsInterface`

#### Defined in

contracts/src/token/erc721.contract.ts:546

***

### supportsInterfaceCallContext()

> **supportsInterfaceCallContext**(`interfaceId`): `MethodCall`\<`Contract`, `"supportsInterface"`\>

Returns the call context for the supportsInterface method.

#### Parameters

• **interfaceId**: `BytesLike`

The interface ID to check.

#### Returns

`MethodCall`\<`Contract`, `"supportsInterface"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:555

***

### symbol()

> **symbol**(): `Promise`\<`string`\>

Returns the symbol of the token.

#### Returns

`Promise`\<`string`\>

The symbol of the token.

#### Implementation of

`Erc721Types.Contract.symbol`

#### Defined in

contracts/src/token/erc721.contract.ts:322

***

### symbolCallContext()

> **symbolCallContext**(): `MethodCall`\<`Contract`, `"symbol"`\>

Returns the call context for the symbol method.

#### Returns

`MethodCall`\<`Contract`, `"symbol"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:330

***

### tokenId()

> **tokenId**(): `Promise`\<`BigNumber`\>

Gets the token ID of the contract.

#### Returns

`Promise`\<`BigNumber`\>

The token ID as a BigNumber.

#### Implementation of

`Erc721Types.Contract.tokenId`

#### Defined in

contracts/src/token/erc721.contract.ts:338

***

### tokenIdCallContext()

> **tokenIdCallContext**(): `MethodCall`\<`Contract`, `"tokenId"`\>

Generates the call context for retrieving the token ID of the contract.

#### Returns

`MethodCall`\<`Contract`, `"tokenId"`\>

The call context for the method.

#### Defined in

contracts/src/token/erc721.contract.ts:346

***

### tokenURI()

> **tokenURI**(`tokenId`): `Promise`\<`string`\>

Returns the token URI for the specified token ID.

#### Parameters

• **tokenId**: `BigNumberish`

The token ID to query.

#### Returns

`Promise`\<`string`\>

The token URI.

#### Implementation of

`Erc721Types.Contract.tokenURI`

#### Defined in

contracts/src/token/erc721.contract.ts:566

***

### tokenURICallContext()

> **tokenURICallContext**(`tokenId`): `MethodCall`\<`Contract`, `"tokenURI"`\>

Returns the call context for the tokenURI method.

#### Parameters

• **tokenId**: `BigNumberish`

The token ID to query.

#### Returns

`MethodCall`\<`Contract`, `"tokenURI"`\>

The call context.

#### Defined in

contracts/src/token/erc721.contract.ts:575

***

### transferFrom()

> **transferFrom**(`from`, `to`, `tokenId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfers a token from one address to another.

#### Parameters

• **from**: `string`

The address to transfer from.

• **to**: `string`

The address to transfer to.

• **tokenId**: `BigNumberish`

The token ID to transfer.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc721Types.Contract.transferFrom`

#### Defined in

contracts/src/token/erc721.contract.ts:589

***

### transferOwnership()

> **transferOwnership**(`newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfers ownership of the contract to a new owner.

#### Parameters

• **newOwner**: `string`

The address of the new owner.

• **overrides?**: `ContractTransactionOverrides`

Optional transaction overrides.

#### Returns

`Promise`\<`ContractTransaction`\>

The contract transaction.

#### Implementation of

`Erc721Types.Contract.transferOwnership`

#### Defined in

contracts/src/token/erc721.contract.ts:624
