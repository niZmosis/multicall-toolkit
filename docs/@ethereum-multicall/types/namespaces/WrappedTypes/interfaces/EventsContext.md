[**@ethereum-multicall/types v3.0.0**](../../../README.md) • **Docs**

***

[Documentation v3.0.0](../../../../../packages.md) / [@ethereum-multicall/types](../../../README.md) / [WrappedTypes](../README.md) / EventsContext

# Interface: EventsContext

## Methods

### Approval()

> **Approval**(`src`, `guy`, `wad`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **src**: `string`

• **guy**: `string`

• **wad**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/wrapped.types.ts:18](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/abis/wrapped.types.ts#L18)

***

### Deposit()

> **Deposit**(`dst`, `wad`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **dst**: `string`

• **wad**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/wrapped.types.ts:20](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/abis/wrapped.types.ts#L20)

***

### Transfer()

> **Transfer**(`src`, `dst`, `wad`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **src**: `string`

• **dst**: `string`

• **wad**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/wrapped.types.ts:19](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/abis/wrapped.types.ts#L19)

***

### Withdrawal()

> **Withdrawal**(`src`, `wad`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **src**: `string`

• **wad**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/wrapped.types.ts:21](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/abis/wrapped.types.ts#L21)
