[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MethodNames

# Type Alias: MethodNames\<TContract\>

> **MethodNames**\<`TContract`\>: `{ [KMethodName in keyof TContract]: TContract[KMethodName] extends Function ? KMethodName : never }`\[keyof `TContract`\]

Represents the names of methods in a contract.

## Type Parameters

• **TContract**

The contract type.

## Defined in

[call.types.ts:39](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L39)
