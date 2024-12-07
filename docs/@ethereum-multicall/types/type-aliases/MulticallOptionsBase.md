[**@ethereum-multicall/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/types](../README.md) / MulticallOptionsBase

# Type Alias: MulticallOptionsBase

> **MulticallOptionsBase**: `object`

Base options for Multicall configuration.

## Type declaration

### customMulticallContractAddress?

> `optional` **customMulticallContractAddress**: `string`

Custom address for the Multicall contract.
If not specified, the default contract address is used.

### enableBatching?

> `optional` **enableBatching**: `boolean`

Whether to enable batching when calls exceed configured size or count limits.
When enabled, calls that exceed `maxCallDataSize` or `maxCallsPerBatch` are split into multiple batches, resulting in multiple calls to the blockchain.
Defaults to `true`.

### maxCallDataSize?

> `optional` **maxCallDataSize**: `number`

Maximum allowed call data size (in bytes) for a single batch of calls.
Batches are split if the combined return data size exceeds this limit.
Defaults to `100000` bytes.

### maxCallsPerBatch?

> `optional` **maxCallsPerBatch**: `number`

Maximum number of calls allowed in a single batch.
Ensures that each batch stays within a manageable number of calls.
Defaults to `500` calls.

### tryAggregate?

> `optional` **tryAggregate**: `boolean`

Whether to use the `tryAggregate` function for error handling.
If `true`, individual call failures do not cause the entire batch to fail.
Defaults to `false`.

## Defined in

[multicall.types.ts:32](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/types/src/multicall.types.ts#L32)
