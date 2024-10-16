[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / ChainIdAndProviderContext

# Type Alias: ChainIdAndProviderContext

> **ChainIdAndProviderContext**: [`BaseProviderContext`](BaseProviderContext.md) & `object`

Context for a chain and its provider, including optional custom RPC URL and network details.

## Type declaration

### chainId

> **chainId**: [`ChainId`](ChainId.md)

The chain ID of the network.

### customRpcUrl?

> `optional` **customRpcUrl**: `string`

(Optional) The custom RPC URL for the chain.

## Defined in

[multicall-provider.types.ts:30](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/multicall-provider.types.ts#L30)
