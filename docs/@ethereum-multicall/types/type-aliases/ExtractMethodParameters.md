[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ExtractMethodParameters

# Type Alias: ExtractMethodParameters\<TMethod\>

> **ExtractMethodParameters**\<`TMethod`\>: `TMethod` *extends* (...`args`) => `any` ? `TMethodParameter` *extends* [`...(infer TMethodArgs)`, `ContractCallOverrides?`] ? `TMethodArgs` : `TMethodParameter` : `never`

Extracts parameter types, excluding ContractCallOverrides.

## Type Parameters

• **TMethod**

Function type

## Defined in

[call.types.ts:63](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L63)
