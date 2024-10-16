[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractContext

# Type Alias: ContractContext\<TContract, TCalls, TCustomData\>

> **ContractContext**\<`TContract`, `TCalls`, `TCustomData`\>: `object` & `TCustomData` *extends* `Record`\<`string`, `any`\> ? `object` : `object`

Represents the context for a contract interaction.

## Type declaration

### abi

> **abi**: (`AbiItem` \| `JsonFragment`)[]

### calls

> **calls**: `TCalls`

### contractAddress

> **contractAddress**: `string`

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls to be made.

• **TCustomData** = `unknown`

Optional custom data type.

## Defined in

[call.types.ts:120](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/call.types.ts#L120)
