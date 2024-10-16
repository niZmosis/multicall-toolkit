[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ContractMethodResult

# Type Alias: ContractMethodResult\<TContract, TCalls\>

> **ContractMethodResult**\<`TContract`, `TCalls`\>: `{ [K in keyof TCalls]: Object }`

Represents the result of a contract method call.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCalls** *extends* `Record`\<`string`, [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]\>

The type of calls made.

## Defined in

[call.types.ts:140](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/call.types.ts#L140)
