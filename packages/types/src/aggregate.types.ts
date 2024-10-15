import { BigNumber } from 'ethers/lib/ethers'

/**
 * Represents the context for an aggregate call to a specific contract method.
 */
export type AggregateCallContext = {
  /** Index of the contract in the original contract call contexts array */
  contractContextIndex: number
  /** Index of the method in the contract's calls array */
  contractMethodIndex: number
  /** The target contract address */
  target: string
  /** The encoded call data for the method */
  encodedData: string
}

/**
 * Represents the response from an aggregate contract call.
 */
export type AggregateContractResponse = {
  /** The block number at which the call was executed */
  blockNumber: BigNumber
  /** Array of return data strings for each method call */
  returnData: string[]
}

/**
 * Represents the processed response from an aggregate call, including results for each contract and method.
 */
export type AggregateResponse = {
  /** The block number at which the calls were executed */
  blockNumber: number
  /** Array of results for each contract involved in the aggregate call */
  results: Array<{
    /** Index of the contract in the original contract call contexts array */
    contractContextIndex: number
    /** Array of results for each method called on this contract */
    methodResults: Array<{
      /** Index of the method in the contract's calls array */
      contractMethodIndex: number
      /** The result of the method call */
      result: any
    }>
  }>
}
