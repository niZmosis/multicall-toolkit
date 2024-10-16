[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ExtractParams

# Type Alias: ExtractParams\<TMethod\>

> **ExtractParams**\<`TMethod`\>: `TMethod` *extends* (...`args`) => `any` ? `TMethodParameter` *extends* [`...(infer TMethodArgs)`, `ContractCallOverrides?`] ? `TMethodArgs` : `TMethodParameter` : `never`

Extracts parameter types, excluding ContractCallOverrides.

## Type Parameters

• **TMethod**

Function type

## Defined in

[call.types.ts:63](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/call.types.ts#L63)
