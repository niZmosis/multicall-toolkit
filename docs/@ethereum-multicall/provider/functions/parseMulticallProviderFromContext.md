[**@ethereum-multicall/provider v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/provider](../README.md) / parseMulticallProviderFromContext

# Function: parseMulticallProviderFromContext()

> **parseMulticallProviderFromContext**(`multicallProviderContext`): [`MulticallProvider`](../classes/MulticallProvider.md)

Parses the given `dexContext` and returns an instance of `MulticallProvider`.

- If the context already contains an `IMulticallProvider`, it is returned as is.
- If the context includes a chain ID and optional custom network or RPC URL, a new `MulticallProvider` is created for that chain.
- If the context includes an `ethersProvider`, a new `MulticallProvider` is created using that provider.

## Parameters

• **multicallProviderContext**: `MulticallProviderContext`

The context which can either be an object with a `multicallProvider`, or a `ProviderContext`.

## Returns

[`MulticallProvider`](../classes/MulticallProvider.md)

An instance of `MulticallProvider` based on the provided context.

## Throws

MulticallError - Throws an error if the `dexContext` is not supported, or if the chain ID provided is unsupported.

## Defined in

[provider/src/multicall-provider.ts:211](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/provider/src/multicall-provider.ts#L211)
