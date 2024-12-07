[**@ethereum-multicall/types v1.0.0**](../../../README.md) • **Docs**

***

[Documentation v1.0.0](../../../../../packages.md) / [@ethereum-multicall/types](../../../README.md) / [Erc777Types](../README.md) / EventsContext

# Interface: EventsContext

## Methods

### AuthorizedOperator()

> **AuthorizedOperator**(`operator`, `tokenHolder`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **operator**: `string`

• **tokenHolder**: `string`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc777.types.ts:27](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc777.types.ts#L27)

***

### DefaultOperatorsSet()

> **DefaultOperatorsSet**(`operator`, `tokenHolder`, `newDefaultOperators`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **operator**: `string`

• **tokenHolder**: `string`

• **newDefaultOperators**: `string`[]

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc777.types.ts:36](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc777.types.ts#L36)

***

### RevokedOperator()

> **RevokedOperator**(`operator`, `tokenHolder`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **operator**: `string`

• **tokenHolder**: `string`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc777.types.ts:28](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc777.types.ts#L28)

***

### Sent()

> **Sent**(`from`, `to`, `value`, `data`, `operatorData`): [`EventFilter`](../../../type-aliases/EventFilter.md)

#### Parameters

• **from**: `string`

• **to**: `string`

• **value**: `BigNumberish`

• **data**: `BytesLike`

• **operatorData**: `BytesLike`

#### Returns

[`EventFilter`](../../../type-aliases/EventFilter.md)

#### Defined in

[abis/erc777.types.ts:29](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/abis/erc777.types.ts#L29)
