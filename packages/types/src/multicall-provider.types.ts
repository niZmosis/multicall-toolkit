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
import type { IMulticall, MulticallOptionsBase } from './multicall.types'
import type { CustomNetwork } from './network.types'

/** Represents the base Ethers provider type. */
export type EthersProvider = BaseProvider

/**
 * Base context for all provider contexts.
 * This extends the `MulticallOptionsBase` type and includes an optional `customNetwork` property in place of the `multicallCustomContractAddress` property.
 */
export type BaseProviderContext = Omit<
  MulticallOptionsBase,
  'customMulticallContractAddress'
> & {
  /** (Optional) The custom network details. */
  customNetwork?: CustomNetwork
}

/** Context for a Provider using a chain ID and RPC URL. */
export type ChainIdAndProviderContext = BaseProviderContext & {
  /** The chain ID of the network. */
  chainId: ChainId
  /** The custom RPC URL for the chain. */
  rpcUrl: string
}

/** Context for an Ethers provider. */
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
   * @template TCustomData - Custom data to be associated with the call context.
   * @returns A function that creates the contract call context.
   */
  createCallContext<
    TContract extends Record<string, any>,
    TCustomData = unknown,
  >(): <
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<TContract>[MethodNames<TContract>]
    >,
  >(
    context: ContractContext<TContract, TCalls, TCustomData>,
  ) => ContractContext<TContract, TCalls, TCustomData>
}
