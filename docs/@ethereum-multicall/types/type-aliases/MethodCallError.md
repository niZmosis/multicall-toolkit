[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MethodCallError

# Type Alias: MethodCallError

> **MethodCallError**: `object`

Represents an error encountered during a specific contract method call within a multicall execution.

## Type declaration

### contractReference

> **contractReference**: `string`

The reference identifier of the contract where the error occurred, typically
corresponding to a key in the original contract context.

### error

> **error**: `any`

The error details, capturing the specific error object or message returned from the failed
call. This can vary based on the provider and nature of the failure.

### methodReference

> **methodReference**: `string`

The reference identifier for the method that triggered the error. This is usually
the method name or signature as specified in the contract call context.

## Defined in

[call.types.ts:279](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L279)
