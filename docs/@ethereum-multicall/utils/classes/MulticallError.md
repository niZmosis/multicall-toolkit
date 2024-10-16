[**@ethereum-multicall/utils v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/utils](../README.md) / MulticallError

# Class: MulticallError

## Extends

- `Error`

## Constructors

### new MulticallError()

> **new MulticallError**(`message`, `code`): [`MulticallError`](MulticallError.md)

#### Parameters

• **message**: `string`

• **code**: [`ErrorCodes`](../enumerations/ErrorCodes.md)

#### Returns

[`MulticallError`](MulticallError.md)

#### Overrides

`Error.constructor`

#### Defined in

[packages/utils/src/errors/multicall-error.ts:7](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/utils/src/errors/multicall-error.ts#L7)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### code

> **code**: [`ErrorCodes`](../enumerations/ErrorCodes.md)

#### Defined in

[packages/utils/src/errors/multicall-error.ts:5](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/utils/src/errors/multicall-error.ts#L5)

***

### message

> **message**: `string`

#### Overrides

`Error.message`

#### Defined in

[packages/utils/src/errors/multicall-error.ts:6](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/utils/src/errors/multicall-error.ts#L6)

***

### name

> **name**: `string` = `'MulticallError'`

#### Overrides

`Error.name`

#### Defined in

[packages/utils/src/errors/multicall-error.ts:4](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/utils/src/errors/multicall-error.ts#L4)

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
