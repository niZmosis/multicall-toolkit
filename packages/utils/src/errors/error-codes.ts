/**
 * Represents distinct error codes used within the multicall library for easier debugging and handling of errors.
 */
export enum ErrorCodes {
  // ------------------------
  // General Errors (1000-1999)
  // ------------------------

  /**
   * A generic internal error that doesn't fall under a more specific category.
   * Use this when something unexpected occurs internally without a clearer cause.
   */
  internalError = 1001,

  /**
   * Indicates that a function received invalid arguments, such as incorrect data types,
   * missing required properties, or out-of-range values.
   */
  functionArgumentError = 1002,

  /**
   * A general multicall-related error that doesn't neatly fit into other specific error types.
   * This may be triggered by issues like invalid multicall contract addresses or unexpected state in the multicall flow.
   */
  multicallError = 1003,

  /**
   * Represents a failure that occurred during the execution phase. For example, if a blockchain call
   * cannot be completed or a provider error occurs while executing the calls.
   */
  executionError = 1004,

  /**
   * An error that occurs while processing results after execution. For instance, if decoding return values fails
   * or combining batch responses encounters unexpected data structures.
   */
  processingError = 1005,

  /**
   * Signals that an entire batch of calls failed. This might happen if `tryAggregate` is true and the batch
   * contained a call that reverted, or if a batch could not be executed properly.
   */
  batchError = 1006,

  /**
   * Indicates a local parameter encoding error. This is triggered when function data
   * cannot be encoded due to invalid inputs (e.g., passing a non-hex string as an address),
   * preventing the call from even reaching the blockchain.
   */
  parameterEncodingError = 1007,

  // ------------------------
  // Chain Errors (2000-2999)
  // ------------------------

  /**
   * The specified chain ID is not supported. This might occur if the user provides a chain ID that
   * the multicall library or underlying network logic does not recognize.
   */
  chainIdNotSupported = 2001,

  // ------------------------
  // Provider Errors (3000-3999)
  // ------------------------

  /**
   * The provided provider context (e.g., RPC URL or provider) is invalid or not supported.
   * This could happen if the user passes in a wrong provider object or fails to meet the required conditions.
   */
  invalidMulticallProviderContext = 3001,

  // ------------------------
  // Contract Errors (4000-4999)
  // ------------------------

  /**
   * The specified contract address could not be found or is invalid.
   * This usually occurs if the user provides a non-checksummed, empty, or non-string value where an address was expected.
   */
  contractAddressNotFound = 4001,

  /**
   * The specified contract ABI could not be found or is invalid.
   * This might happen if the user neglects to provide the ABI, or if the ABI array is empty or malformed.
   */
  contractAbiNotFound = 4002,
}
