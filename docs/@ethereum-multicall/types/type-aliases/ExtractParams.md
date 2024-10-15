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

call.types.ts:63
