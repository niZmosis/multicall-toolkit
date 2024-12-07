[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / DiscriminatedMethodCalls

# Type Alias: DiscriminatedMethodCalls\<TContract\>

> **DiscriminatedMethodCalls**\<`TContract`\>: `{ [KMethodName in MethodNames<TContract>]: MethodCall<TContract, KMethodName> }`

Represents all possible method calls for a contract.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

## Defined in

[call.types.ts:134](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L134)
