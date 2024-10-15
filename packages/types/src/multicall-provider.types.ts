import type { BaseProvider, Network } from '@ethersproject/providers'

import type {
  ContractContext,
  ContractContextOptions,
  DiscriminatedMethodCalls,
  MethodNames,
  MulticallResults,
  ReferencedContracts,
} from './call.types'
import type { ChainId } from './chain.types'
import type { ContractDetail } from './contract-detail.types'
import type { IMulticall } from './multicall.types'
import type { CustomNetwork } from './network.types'

export type BaseProviderContext = {
  /** (Optional) The custom network details. */
  customNetwork?: CustomNetwork
  /**
   * When true, allows the multicall to continue even if individual calls fail, returning partial results instead of reverting the entire transaction.
   * Defaults to true.
   */
  tryAggregate?: boolean
}

/** Represents a blockchain provider type. */
export type EthersProvider = BaseProvider

/** Context for a chain and its provider, including optional custom RPC URL and network details. */
export type ChainIdAndProviderContext = BaseProviderContext & {
  /** The chain ID of the network. */
  chainId: ChainId
  /** (Optional) The custom RPC URL for the chain. */
  customRpcUrl?: string
}

/** Context for a blockchain provider, including optional custom network details. */
export type EthersProviderContext = BaseProviderContext & {
  /** The blockchain provider instance. */
  ethersProvider: EthersProvider
}

/** Provider context, which can be either a chain and provider context or a blockchain provider context. */
export type ProviderContext = ChainIdAndProviderContext | EthersProviderContext

/** DEX provider context, which can be an IMulticallProvider instance or a provider context. */
export type MulticallProviderContext = IMulticallProvider | ProviderContext

/**
 * Interface representing a DEX provider, which manages interaction with a blockchain provider.
 */
export interface IMulticallProvider {
  /** The internal blockchain provider. */
  _ethersProvider: EthersProvider

  /** The provider context, which includes chain and network details. */
  _providerContext: ProviderContext

  /** The Multicall instance. */
  _multicall: IMulticall

  /** Retrieves the blockchain provider instance. */
  get provider(): EthersProvider

  /** Retrieves the custom network configuration, if any. */
  get customNetwork(): CustomNetwork | undefined

  /** Retrieves the network details for the blockchain provider. */
  get network(): Network

  /**
   * Creates and returns a contract instance based on the provided contract details.
   *
   * @param contractDetail - The details of the contract to interact with.
   * @returns The generated contract instance of the specified type.
   */
  getContract<TGeneratedTypedContext>(
    contractDetail: ContractDetail,
  ): TGeneratedTypedContext

  /**
   * Executes multiple contract calls in a single transaction using the Multicall pattern.
   * This method aggregates multiple calls to different contracts or methods and returns
   * their results in a structured format.
   */
  call<TContractContexts extends ReferencedContracts>(
    contractCallContexts: TContractContexts,
    contractCallOptions: ContractContextOptions,
  ): Promise<MulticallResults<TContractContexts>>

  /**
   * Creates and returns a contract call context to be used in multicall executions.
   *
   * @template TContract - The type of the contract being interacted with.
   * @template TContractResultsStructureOverrides - Custom overrides for the results structure.
   * @template TCustomData - Custom data to be associated with the call context.
   * @returns A function that creates the contract call context.
   */
  createCallContext<
    TContract extends Record<string, any>,
    TContractResultsStructureOverrides = unknown,
    TCustomData = unknown,
  >(): <
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
    >,
  >(
    context: ContractContext<
      TContract,
      TCalls,
      TContractResultsStructureOverrides,
      TCustomData
    >,
  ) => ContractContext<
    TContract,
    TCalls,
    TContractResultsStructureOverrides,
    TCustomData
  >
}
