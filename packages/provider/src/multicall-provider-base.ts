import type {
  ContractContext,
  ContractContextOptions,
  ContractDetail,
  ContractResults,
  DiscriminatedMethodCalls,
  MethodNames,
  MulticallProviderContext,
} from '@ethereum-multicall/types'

import {
  MulticallProvider,
  parseMulticallProviderFromContext,
} from './multicall-provider'

export abstract class MulticallProviderBase {
  protected _multicallProvider: MulticallProvider

  constructor(multicallProviderContext: MulticallProviderContext) {
    this._multicallProvider = parseMulticallProviderFromContext(
      multicallProviderContext,
    )
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
  abstract get contractDetail(): ContractDetail

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
  protected async multicall<
    TContract extends Record<string, any>,
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
    >,
  >(
    calls: TCalls,
    options: ContractContextOptions = {},
  ): Promise<{
    blockNumber: number
    originContext: ContractResults<TContract, TCalls>['originContext']
    results: ContractResults<TContract, TCalls>['results']
  }> {
    const contractCallContext: ContractContext<TContract, TCalls> = {
      contractAddress: this.contractDetail.address,
      abi: this.contractDetail.abi,
      calls,
    }

    const { contracts, blockNumber } = await this._multicallProvider.call(
      {
        contractReference: contractCallContext,
      },
      options,
    )

    const { originContext, results } = contracts.contractReference

    return {
      blockNumber,
      originContext,
      results,
    }
  }
}
