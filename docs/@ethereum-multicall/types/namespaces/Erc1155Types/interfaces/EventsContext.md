[**@ethereum-multicall/types v1.0.0**](../../../README.md) • **Docs**

***

[Documentation v1.0.0](../../../../../packages.md) / [@ethereum-multicall/types](../../../README.md) / [Erc1155Types](../README.md) / EventsContext

# Interface: EventsContext

## Methods

### ApprovalForAll()

> **ApprovalForAll**(`account`, `operator`, `approved`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **account**: `string`

• **operator**: `string`

• **approved**: `boolean`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc1155.types.ts:27](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc1155.types.ts#L27)

***

### TransferBatch()

> **TransferBatch**(`operator`, `from`, `to`, `ids`, `values`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **operator**: `string`

• **from**: `string`

• **to**: `string`

• **ids**: `BigNumberish`[]

• **values**: `BigNumberish`[]

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc1155.types.ts:32](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc1155.types.ts#L32)

***

### TransferSingle()

> **TransferSingle**(`operator`, `from`, `to`, `id`, `value`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **operator**: `string`

• **from**: `string`

• **to**: `string`

• **id**: `BigNumberish`

• **value**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc1155.types.ts:39](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc1155.types.ts#L39)

***

### URI()

> **URI**(`value`, `id`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **value**: `string`

• **id**: `BigNumberish`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc1155.types.ts:46](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc1155.types.ts#L46)
