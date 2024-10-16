[**@ethereum-multicall/types v3.0.0**](../../../README.md) • **Docs**

***

[Documentation v3.0.0](../../../../../packages.md) / [@ethereum-multicall/types](../../../README.md) / [Erc20Types](../README.md) / EventsContext

# Interface: EventsContext

## Methods

### Approval()

> **Approval**(`owner`, `spender`, `value`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **owner**: `string`

• **spender**: `string`

• **value**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc20.types.ts:18](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/abis/erc20.types.ts#L18)

***

### Transfer()

> **Transfer**(`from`, `to`, `value`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **from**: `string`

• **to**: `string`

• **value**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc20.types.ts:19](https://github.com/niZmosis/ethereum-multicall/blob/759805f36c7ddb05e5fad0eb8478dcf22871af59/packages/types/src/abis/erc20.types.ts#L19)