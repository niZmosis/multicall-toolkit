[**@ethereum-multicall/types v3.0.0**](../README.md) • **Docs**

***

[Documentation v3.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / AggregateCallContext

# Type Alias: AggregateCallContext

> **AggregateCallContext**: `object`

Represents the context for an aggregate call to a specific contract method.

## Type declaration

### contractContextIndex

> **contractContextIndex**: `number`

Index of the contract in the original contract call contexts array

### contractMethodIndex

> **contractMethodIndex**: `number`

Index of the method in the contract's calls array

### encodedData

> **encodedData**: `string`

The encoded call data for the method

### target

> **target**: `string`

The target contract address

## Defined in

[aggregate.types.ts:6](https://github.com/niZmosis/ethereum-multicall/blob/68ee699eca0cd184d8f0b7213bb6f4fe15a011a1/packages/types/src/aggregate.types.ts#L6)
