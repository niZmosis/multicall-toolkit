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

abis/wrapped.types.ts:18

***

### Deposit()

> **Deposit**(`dst`, `wad`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **dst**: `string`

• **wad**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

abis/wrapped.types.ts:20

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

abis/wrapped.types.ts:19

***

### Withdrawal()

> **Withdrawal**(`src`, `wad`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **src**: `string`

• **wad**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

abis/wrapped.types.ts:21
