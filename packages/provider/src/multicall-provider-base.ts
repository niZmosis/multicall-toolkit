import type {
  ContractContext,
  ContractContextOptions,
  ContractDetail,
  DiscriminatedMethodCalls,
  MethodNames,
  MulticallProviderContext,
  ExecutionResult,
} from '@multicall-toolkit/types'
import {
  ErrorCodes,
  isContractDetail,
  mapAbiFunctionNames,
  MulticallError,
} from '@multicall-toolkit/utils'

import {
  MulticallProvider,
  parseMulticallProviderFromContext,
} from './multicall-provider'

export abstract class MulticallProviderBase {
  protected _contractDetail!: ContractDetail

  protected _multicallProvider: MulticallProvider

  constructor(
    multicallProviderContext: MulticallProviderContext,
    contractDetail?: ContractDetail,
  ) {
    this._multicallProvider = parseMulticallProviderFromContext(
      multicallProviderContext,
    )
    if (isContractDetail(contractDetail)) {
      const { abi, methods } = contractDetail ?? {}

      if (!abi) {
        throw new MulticallError(
          'contractDetail.abi is required',
          ErrorCodes.functionArgumentError,
        )
      }

      const mappedAbi =
        methods && contractDetail?.options?.mapMethodNames
          ? mapAbiFunctionNames<Record<string, string>>(abi, methods)
          : abi

      this._contractDetail = {
        ...contractDetail,
        abi: mappedAbi,
      }
    }
  }

  /**
   * Returns the underlying `MulticallProvider`.
   *
   * @returns The `MulticallProvider` instance used by this class.
   */
  public get multicallProvider(): MulticallProvider {
    return this._multicallProvider
  }

  /**
   * Returns the contract details.
   *
   * @returns The contract details of the concrete class.
   */
  public get contractDetail(): ContractDetail {
    if (!this._contractDetail) {
      throw new MulticallError(
        'contractDetail was not provided',
        ErrorCodes.functionArgumentError,
      )
    }

    return this._contractDetail
  }

  /**
   * Executes a multicall for the given contract methods.
   *
   * @template TContract - The contract type.
   * @template TCalls - The type of the calls object.
   *
   * @param calls - An object describing the methods to call and their parameters.
   * @param options - Optional configuration for the contract call.
   *
   * @returns A promise that resolves to an object containing the block number,
   *          origin context, and the results of each method call.
   */
  protected async executeCall<
    TContract extends Record<string, any>,
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
    >,
  >(
    calls: TCalls,
    options: ContractContextOptions = {},
  ): Promise<ExecutionResult<TContract, TCalls>> {
    const contractCallContext: ContractContext<TContract, TCalls> = {
      contractAddress: this.contractDetail.address,
      abi: this.contractDetail.abi,
      calls,
    }

    const { contracts, blockNumber, batchCount } =
      await this._multicallProvider.call(
        {
          contractReference: contractCallContext,
        },
        options,
      )

    const { originContext, results } = contracts.contractReference ?? {}

    return {
      blockNumber,
      batchCount,
      originContext,
      results,
    }
  }
}
