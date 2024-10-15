export enum ErrorCodes {
  // General Errors
  internalError = 1001,
  functionArgumentError = 1002,
  multicallError = 1003,

  // Chain Errors
  chainIdNotSupported = 2001,

  // Provider Errors
  invalidMulticallProviderContext = 3001,

  // Contract Errors
  contractAddressNotFound = 4001,
  contractAbiNotFound = 4002,
}
