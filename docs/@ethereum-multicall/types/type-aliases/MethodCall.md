[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MethodCall

# Type Alias: MethodCall\<TContract, TMethodName\>

> **MethodCall**\<`TContract`, `TMethodName`\>: `object`

Represents the context for a single contract method call.

## Type Parameters

• **TContract** *extends* `Record`\<`string`, `any`\>

The contract type.

• **TMethodName** *extends* [`MethodNames`](MethodNames.md)\<`TContract`\>

The method name type.

## Type declaration

### methodName

> **methodName**: `TMethodName` \| \`$\{TMethodName & string\}($\{string\})\`

The name or method signature of the contract method to be called.

### methodParameters

> **methodParameters**: [`MethodParameter`](MethodParameter.md)\<`TContract`, [`ExtractMethodName`](ExtractMethodName.md)\<`TMethodName` & `string`\> & [`MethodNames`](MethodNames.md)\<`TContract`\>\>

Array of parameters to be passed to the method.

## Defined in

[call.types.ts:89](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/call.types.ts#L89)
