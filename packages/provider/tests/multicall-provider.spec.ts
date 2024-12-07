import type { Erc20Types } from '@ethereum-multicall/types'
import { erc20ABI, ErrorCodes, MulticallError } from '@ethereum-multicall/utils'
import { describe, it, expect } from 'vitest'

import { MockProviderUrl, MockChainId, MockUniToken } from '../../../test/mocks'
import { MulticallProvider } from '../src/multicall-provider'

describe('MulticallProvider', () => {
  describe('with chain id', () => {
    const multicallProvider = new MulticallProvider({
      chainId: MockChainId,
      rpcUrl: MockProviderUrl,
    })
    const address = '0x2906D377Cc622FD63fb888aDeCD39a433a89E0DA'

    it('getContract', () => {
      const result = multicallProvider.getContract<Erc20Types.ContractContext>({
        address,
        abi: erc20ABI,
      })

      expect(result).toBeDefined()
    })

    it('network', () => {
      const result = multicallProvider.network

      expect(result.chainId).toEqual(MockChainId)
    })

    it('provider', () => {
      const result = multicallProvider.provider

      expect(result.network.chainId).toEqual(MockChainId)
    })
  })

  describe('with chain id and rpcUrl', () => {
    it('should throw error if chainId is not found', () => {
      expect(() => {
        new MulticallProvider({
          // @ts-ignore
          chainId: undefined,
          rpcUrl: MockProviderUrl,
        })
      }).toThrowError(
        new MulticallError(
          `Can not find a Chain ID, provide a 'chainId' along with the 'rpcUrl'`,
          ErrorCodes.chainIdNotSupported,
        ),
      )
    })
    it('should throw error if rpcUrl is not found', () => {
      expect(() => {
        new MulticallProvider({
          chainId: MockChainId,
          // @ts-ignore
          rpcUrl: undefined,
        })
      }).toThrowError(
        new MulticallError(
          `Can not find a RPC URL for ${MockChainId}, provide a 'rpcUrl' along with the 'chainId'`,
          ErrorCodes.chainIdNotSupported,
        ),
      )
    })

    const multicallProvider = new MulticallProvider({
      chainId: MockChainId,
      rpcUrl: MockProviderUrl,
    })

    it('getContract', () => {
      const result = multicallProvider.getContract<Erc20Types.ContractContext>({
        address: MockUniToken.contractAddress,
        abi: erc20ABI,
      })

      expect(result).toBeDefined()
    })

    it('network', () => {
      const result = multicallProvider.network

      expect(result.chainId).toEqual(MockChainId)
    })

    it('provider', () => {
      const result = multicallProvider.provider

      expect(result.network.chainId).toEqual(MockChainId)
    })
  })
})
