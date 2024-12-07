[**@ethereum-multicall/utils v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/utils](../README.md) / MulticallError

# Class: MulticallError

Custom error class for DEX-related errors with additional context and typing

## Extends

- `Error`

## Constructors

### new MulticallError()

> **new MulticallError**(`message`, `code`, `context`?, `originalError`?): [`MulticallError`](MulticallError.md)

#### Parameters

• **message**: `string`

• **code**: [`ErrorCodes`](../enumerations/ErrorCodes.md)

• **context?**: `Error` \| [`MulticallErrorContext`](../type-aliases/MulticallErrorContext.md)

• **originalError?**: `Error`

#### Returns

[`MulticallError`](MulticallError.md)

#### Overrides

`Error.constructor`

#### Defined in

[packages/utils/src/errors/multicall-error.ts:34](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L34)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### code

> `readonly` **code**: [`ErrorCodes`](../enumerations/ErrorCodes.md)

Error code identifying the type of error

#### Defined in

[packages/utils/src/errors/multicall-error.ts:17](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L17)

***

### context?

> `readonly` `optional` **context**: [`MulticallErrorContext`](../type-aliases/MulticallErrorContext.md)

Additional context about the error

#### Defined in

[packages/utils/src/errors/multicall-error.ts:22](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L22)

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> `readonly` **name**: `"MulticallError"` = `'MulticallError'`

#### Overrides

`Error.name`

#### Defined in

[packages/utils/src/errors/multicall-error.ts:12](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L12)

***

### originalError?

> `readonly` `optional` **originalError**: `Error`

Original error if this error wrapped another error

#### Defined in

[packages/utils/src/errors/multicall-error.ts:32](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L32)

***

### originalStack?

> `readonly` `optional` **originalStack**: `string`

Stack trace if available

#### Defined in

[packages/utils/src/errors/multicall-error.ts:27](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L27)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@22.6.1/node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/.pnpm/@types+node@22.6.1/node\_modules/@types/node/globals.d.ts:145

## Methods

### toJSON()

> **toJSON**(): `Record`\<`string`, `unknown`\>

Creates a plain object representation of the error

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[packages/utils/src/errors/multicall-error.ts:88](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L88)

***

### toString()

> **toString**(): `string`

Creates a string representation of the error including context

#### Returns

`string`

#### Defined in

[packages/utils/src/errors/multicall-error.ts:71](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L71)

***

### withContext()

> **withContext**(`additionalContext`): [`MulticallError`](MulticallError.md)

Adds additional context to an existing error

#### Parameters

• **additionalContext**: [`MulticallErrorContext`](../type-aliases/MulticallErrorContext.md)

#### Returns

[`MulticallError`](MulticallError.md)

#### Defined in

[packages/utils/src/errors/multicall-error.ts:109](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L109)

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@22.6.1/node\_modules/@types/node/globals.d.ts:136

***

### isMulticallError()

> `static` **isMulticallError**(`error`): `error is MulticallError`

Helper method to determine if an unknown error is a MulticallError

#### Parameters

• **error**: `unknown`

#### Returns

`error is MulticallError`

#### Defined in

[packages/utils/src/errors/multicall-error.ts:121](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/multicall-error.ts#L121)
