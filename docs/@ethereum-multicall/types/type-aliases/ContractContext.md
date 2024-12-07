[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractContext

# Type Alias: ContractContext\<TContract, TCalls, TCustomData\>

> **ContractContext**\<`TContract`, `TCalls`, `TCustomData`\>: `object` & `TCustomData` *extends* `Record`\<`string`, `any`\> ? `object` : `object`

Represents the context for a contract interaction, encapsulating necessary information for making method calls on the specified contract.

## Type declaration

### abi

> **abi**: (`AbiItem` \| `JsonFragment`)[]

The ABI (Application Binary Interface) defining the contract's methods, events, and types.

### calls

> **calls**: `TCalls`

The set of method calls to be executed on the contract, represented as key-value pairs
where each key is a method reference and the value is the method call details.

### contractAddress

> **contractAddress**: `string`

The address of the contract to interact with.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls to be made on the contract.

• **TCustomData** = `unknown`

Optional type for custom data attached to this contract context.

## Defined in

[call.types.ts:145](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L145)
