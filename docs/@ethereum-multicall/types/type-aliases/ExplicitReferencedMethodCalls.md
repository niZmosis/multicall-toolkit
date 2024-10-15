[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ExplicitReferencedMethodCalls

# Type Alias: ExplicitReferencedMethodCalls\<TContract, TContractResultsStructureOverrides\>

> **ExplicitReferencedMethodCalls**\<`TContract`, `TContractResultsStructureOverrides`\>: `{ [KMethodReference in keyof TContractResultsStructureOverrides]: DiscriminatedMethodCalls<TContract>[MethodNames<TContract>] }`

Represents explicitly referenced method calls with overridden result structures.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TContractResultsStructureOverrides**

The overridden result structures.

## Defined in

call.types.ts:119
