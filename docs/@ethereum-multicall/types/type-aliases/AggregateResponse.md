[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / AggregateResponse

# Type Alias: AggregateResponse

> **AggregateResponse**: `object`

Represents the processed response from an aggregate call, including results for each contract and method.

## Type declaration

### blockNumber

> **blockNumber**: `number`

The block number at which the calls were executed

### results

> **results**: `object`[]

Array of results for each contract involved in the aggregate call

## Defined in

[aggregate.types.ts:30](https://github.com/niZmosis/ethereum-multicall/blob/68ee699eca0cd184d8f0b7213bb6f4fe15a011a1/packages/types/src/aggregate.types.ts#L30)
