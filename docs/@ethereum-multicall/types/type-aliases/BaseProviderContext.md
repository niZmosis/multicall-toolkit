[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / BaseProviderContext

# Type Alias: BaseProviderContext

> **BaseProviderContext**: `Omit`\<[`MulticallOptionsBase`](MulticallOptionsBase.md), `"customMulticallContractAddress"`\> & `object`

Base context for all provider contexts.
This extends the `MulticallOptionsBase` type and includes an optional `customNetwork` property in place of the `multicallCustomContractAddress` property.

## Type declaration

### customNetwork?

> `optional` **customNetwork**: [`CustomNetwork`](CustomNetwork.md)

(Optional) The custom network details.

## Defined in

[multicall-provider.types.ts:23](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall-provider.types.ts#L23)
