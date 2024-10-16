[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / BaseProviderContext

# Type Alias: BaseProviderContext

> **BaseProviderContext**: `object`

## Type declaration

### customNetwork?

> `optional` **customNetwork**: [`CustomNetwork`](CustomNetwork.md)

(Optional) The custom network details.

### tryAggregate?

> `optional` **tryAggregate**: `boolean`

When true, allows the multicall to continue even if individual calls fail, returning partial results instead of reverting the entire transaction.
Defaults to true.

## Defined in

[multicall-provider.types.ts:16](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/multicall-provider.types.ts#L16)
