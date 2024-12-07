import { Multicall } from '@ethereum-multicall/core'
import type {
  ProviderContext,
  MulticallProviderContext,
  EthersProvider,
  ContractDetail,
  CustomNetwork,
  ReferencedContracts,
  ContractContextOptions,
  MulticallResults,
  IMulticallProvider,
} from '@ethereum-multicall/types'
import {
  ErrorCodes,
  isExternalProvider,
  isProvider,
  MulticallError,
  isWeb3Provider,
  isChainIdAndProviderContext,
  isEthersProviderContext,
  isMulticallProvider,
  DEFAULT_CALL_SIZE_LIMIT,
  DEFAULT_MAX_BATCH_SIZE,
  mapAbiFunctionNames,
} from '@ethereum-multicall/utils'
import {
  StaticJsonRpcProvider,
  Web3Provider,
  type Network,
} from '@ethersproject/providers'
import { Contract, BigNumber, utils } from 'ethers'
import { isAddress } from 'ethers/lib/utils'

export class MulticallProvider implements IMulticallProvider {
  _ethersProvider: EthersProvider

  _providerContext: ProviderContext

  _multicall: Multicall

  constructor(_providerContext: ProviderContext) {
    if (!_providerContext) {
      throw new MulticallError(
        'providerContext is required',
        ErrorCodes.functionArgumentError,
      )
    }

    this._providerContext = _providerContext

    if (isChainIdAndProviderContext(this._providerContext)) {
      const { chainId, rpcUrl } = this._providerContext ?? {}

      if (!chainId) {
        throw new MulticallError(
          `Can not find a Chain ID, provide a 'chainId' along with the 'rpcUrl'`,
          ErrorCodes.chainIdNotSupported,
        )
      }

      if (!rpcUrl) {
        throw new MulticallError(
          `Can not find a RPC URL for ${chainId}, provide a 'rpcUrl' along with the 'chainId'`,
          ErrorCodes.chainIdNotSupported,
        )
      }

      this._ethersProvider = new StaticJsonRpcProvider(rpcUrl, chainId)
    } else if (isEthersProviderContext(this._providerContext)) {
      const { ethersProvider } = this._providerContext

      if (isProvider(ethersProvider)) {
        this._ethersProvider = ethersProvider
      } else if (isExternalProvider(ethersProvider)) {
        this._ethersProvider = new Web3Provider(ethersProvider)
      } else {
        throw new MulticallError(
          'Ethers Provider is an unknown instance',
          ErrorCodes.invalidMulticallProviderContext,
        )
      }
    } else {
      throw new MulticallError(
        'Unable to determine provider context. Please check the `ProviderContext` type to see what properties are required.',
        ErrorCodes.invalidMulticallProviderContext,
      )
    }

    this._multicall = new Multicall({
      ethersProvider: this._ethersProvider,
      customMulticallContractAddress:
        this._providerContext?.customNetwork?.multicallContractAddress,
      tryAggregate: this._providerContext.tryAggregate ?? false,
      enableBatching: this._providerContext.enableBatching ?? true,
      maxCallDataSize:
        this._providerContext.maxCallDataSize ?? DEFAULT_CALL_SIZE_LIMIT,
      maxCallsPerBatch:
        this._providerContext.maxCallsPerBatch ?? DEFAULT_MAX_BATCH_SIZE,
    })
  }

  public get provider(): EthersProvider {
    return this._ethersProvider
  }

  public get customNetwork(): CustomNetwork | undefined {
    return this._providerContext.customNetwork
  }

  public get network(): Network {
    if (isProvider(this._ethersProvider)) {
      if (this._ethersProvider.network) {
        return this._ethersProvider.network
      }

      if (isWeb3Provider(this._ethersProvider)) {
        const provider = this._ethersProvider.provider

        if ('chainId' in provider && provider.chainId) {
          const chainIdNumber = BigNumber.from(provider.chainId).toNumber()
          const chainName =
            this._providerContext.customNetwork?.name || 'unknown'

          return {
            chainId: chainIdNumber,
            name: chainName,
          }
        } else {
          throw new MulticallError(
            'chainId prop not found on the external provider',
            ErrorCodes.chainIdNotSupported,
          )
        }
      }

      throw new MulticallError(
        'Cannot find a network or external provider (eg: Metamask). If you are passing in a ethers provider (eg: JsonRpcProvider), make sure to pass a `chainId` to its constructors `network` argument',
        ErrorCodes.chainIdNotSupported,
      )
    }

    throw new MulticallError(
      'Provider is an unknown instance',
      ErrorCodes.invalidMulticallProviderContext,
    )
  }

  public getContract<TGeneratedTypedContext>(
    contractDetail: ContractDetail,
  ): TGeneratedTypedContext {
    const { address, abi, methods } = contractDetail ?? {}

    if (!isAddress(address)) {
      throw new MulticallError(
        'Contract address not found',
        ErrorCodes.contractAddressNotFound,
      )
    }

    if (!abi) {
      throw new MulticallError(
        'Contract abi not found',
        ErrorCodes.contractAbiNotFound,
      )
    }

    const mappedAbi = methods
      ? mapAbiFunctionNames<Record<string, string>>(abi, methods)
      : abi

    const contract = new Contract(
      utils.getAddress(address),
      mappedAbi,
      this._ethersProvider,
    )

    return contract as unknown as TGeneratedTypedContext
  }

  public createCallContext<
    TContract extends Record<string, any>,
    TCustomData = unknown,
  >() {
    return this._multicall.createCallContext<TContract, TCustomData>()
  }

  public async call<TContractContexts extends ReferencedContracts>(
    contractCallContexts: TContractContexts,
    contractCallOptions: ContractContextOptions = {},
  ): Promise<MulticallResults<TContractContexts>> {
    return this._multicall.call<TContractContexts>(
      contractCallContexts,
      contractCallOptions,
    )
  }
}

/**
 * Parses the given `dexContext` and returns an instance of `MulticallProvider`.
 *
 * - If the context already contains an `IMulticallProvider`, it is returned as is.
 * - If the context includes a chain ID and optional custom network or RPC URL, a new `MulticallProvider` is created for that chain.
 * - If the context includes an `ethersProvider`, a new `MulticallProvider` is created using that provider.
 *
 * @param multicallProviderContext - The context which can either be an object with a `multicallProvider`, or a `ProviderContext`.
 *
 * @returns An instance of `MulticallProvider` based on the provided context.
 *
 * @throws MulticallError - Throws an error if the `dexContext` is not supported, or if the chain ID provided is unsupported.
 */
export function parseMulticallProviderFromContext(
  multicallProviderContext: MulticallProviderContext,
): MulticallProvider {
  if (isMulticallProvider(multicallProviderContext)) {
    return multicallProviderContext
  }

  return new MulticallProvider(multicallProviderContext)
}
