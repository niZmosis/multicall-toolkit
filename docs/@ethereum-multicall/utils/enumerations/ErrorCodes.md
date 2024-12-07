[**@ethereum-multicall/utils v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@ethereum-multicall/utils](../README.md) / ErrorCodes

# Enumeration: ErrorCodes

Represents distinct error codes used within the multicall library for easier debugging and handling of errors.

## Enumeration Members

### batchError

> **batchError**: `1006`

Signals that an entire batch of calls failed. This might happen if `tryAggregate` is true and the batch
contained a call that reverted, or if a batch could not be executed properly.

#### Defined in

[packages/utils/src/errors/error-codes.ts:43](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L43)

***

### chainIdNotSupported

> **chainIdNotSupported**: `2001`

The specified chain ID is not supported. This might occur if the user provides a chain ID that
the multicall library or underlying network logic does not recognize.

#### Defined in

[packages/utils/src/errors/error-codes.ts:60](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L60)

***

### contractAbiNotFound

> **contractAbiNotFound**: `4002`

The specified contract ABI could not be found or is invalid.
This might happen if the user neglects to provide the ABI, or if the ABI array is empty or malformed.

#### Defined in

[packages/utils/src/errors/error-codes.ts:86](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L86)

***

### contractAddressNotFound

> **contractAddressNotFound**: `4001`

The specified contract address could not be found or is invalid.
This usually occurs if the user provides a non-checksummed, empty, or non-string value where an address was expected.

#### Defined in

[packages/utils/src/errors/error-codes.ts:80](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L80)

***

### executionError

> **executionError**: `1004`

Represents a failure that occurred during the execution phase. For example, if a blockchain call
cannot be completed or a provider error occurs while executing the calls.

#### Defined in

[packages/utils/src/errors/error-codes.ts:31](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L31)

***

### functionArgumentError

> **functionArgumentError**: `1002`

Indicates that a function received invalid arguments, such as incorrect data types,
missing required properties, or out-of-range values.

#### Defined in

[packages/utils/src/errors/error-codes.ts:19](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L19)

***

### internalError

> **internalError**: `1001`

A generic internal error that doesn't fall under a more specific category.
Use this when something unexpected occurs internally without a clearer cause.

#### Defined in

[packages/utils/src/errors/error-codes.ts:13](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L13)

***

### invalidMulticallProviderContext

> **invalidMulticallProviderContext**: `3001`

The provided provider context (e.g., RPC URL or provider) is invalid or not supported.
This could happen if the user passes in a wrong provider object or fails to meet the required conditions.

#### Defined in

[packages/utils/src/errors/error-codes.ts:70](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L70)

***

### multicallError

> **multicallError**: `1003`

A general multicall-related error that doesn't neatly fit into other specific error types.
This may be triggered by issues like invalid multicall contract addresses or unexpected state in the multicall flow.

#### Defined in

[packages/utils/src/errors/error-codes.ts:25](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L25)

***

### parameterEncodingError

> **parameterEncodingError**: `1007`

Indicates a local parameter encoding error. This is triggered when function data
cannot be encoded due to invalid inputs (e.g., passing a non-hex string as an address),
preventing the call from even reaching the blockchain.

#### Defined in

[packages/utils/src/errors/error-codes.ts:50](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L50)

***

### processingError

> **processingError**: `1005`

An error that occurs while processing results after execution. For instance, if decoding return values fails
or combining batch responses encounters unexpected data structures.

#### Defined in

[packages/utils/src/errors/error-codes.ts:37](https://github.com/niZmosis/ethereum-multicall/blob/2a2d077a99c23b464a4e40dd6375d06ce98594bd/packages/utils/src/errors/error-codes.ts#L37)
