[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MethodResult

# Type Alias: MethodResult\<TContract, TCall\>

> **MethodResult**\<`TContract`, `TCall`\>: `object`

Represents the result of executing a single contract method call, including details of the method name, parameters, and call outcome.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TCall** *extends* [`DiscriminatedMethodCalls`](DiscriminatedMethodCalls.md)\<`TContract`\>\[[`MethodNames`](MethodNames.md)\<`TContract`\>\]

The specific type of call made to the contract.

## Type declaration

### decoded

> **decoded**: `boolean`

Boolean indicating whether the return data was successfully decoded to the expected type.

### error?

> `optional` **error**: `object`

Populated if `success` is false.
Details of the error that occurred during the method call.

### error.code

> **error.code**: `string` \| `number`

### error.message

> **error.message**: `string`

### methodName

> **methodName**: `TCall`\[`"methodName"`\]

The name of the contract method called.

### methodParameters

> **methodParameters**: `TCall`\[`"methodParameters"`\]

An array of parameters provided for the method call.

### success

> **success**: `boolean`

Boolean indicating whether the method call was successful.

### value

> **value**: [`GetReturnType`](GetReturnType.md)\<`TContract`, [`ExtractMethodName`](ExtractMethodName.md)\<`TCall`\[`"methodName"`\] & `string`\> & keyof `TContract`\>

Populated if `success` is true.
The return value from the method call, decoded if applicable to the expected return type.

## Defined in

[call.types.ts:189](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L189)
