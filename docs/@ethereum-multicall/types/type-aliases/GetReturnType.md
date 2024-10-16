[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / GetReturnType

# Type Alias: GetReturnType\<TContract, MethodName\>

> **GetReturnType**\<`TContract`, `MethodName`\>: `TContract`\[`MethodName`\] *extends* (...`args`) => infer R ? `Awaited`\<`R`\> : `never`

Extracts the return type of a contract method.

## Type Parameters

• **TContract**

The contract type.

• **MethodName** *extends* keyof `TContract`

The method name, must be a key of TContract.

## Defined in

[call.types.ts:21](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/call.types.ts#L21)
