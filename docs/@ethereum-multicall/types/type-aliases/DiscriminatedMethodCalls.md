[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / DiscriminatedMethodCalls

# Type Alias: DiscriminatedMethodCalls\<TContract\>

> **DiscriminatedMethodCalls**\<`TContract`\>: `{ [KMethodName in MethodNames<TContract>]: MethodCall<TContract, KMethodName> }`

Represents all possible method calls for a contract.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

## Defined in

[call.types.ts:110](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/call.types.ts#L110)
