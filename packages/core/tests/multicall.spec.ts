import type {
  Erc20Contract,
  EthersProviderContext,
} from '@ethereum-multicall/types'
import { erc20ABI } from '@ethereum-multicall/utils'
import { ethers } from 'ethers'
import { describe, it, expect } from 'vitest'

import {
  MockProviderUrl,
  MockChainId,
  MockWalletAddress,
  MockUniToken,
  MockAaveToken,
} from '../../../test/mocks'
import { Multicall } from '../src/multicall'

describe('Multicall', async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    MockProviderUrl,
    MockChainId,
  )

  const options: EthersProviderContext = {
    ethersProvider: provider,
    tryAggregate: true,
  }
  const multicall = new Multicall(options)

  describe('Full Functionality', () => {
    it('should fetch token data using multicall', async () => {
      const uniTokenCallContext =
        multicall.createCallContext<Erc20Contract.Contract>()({
          contractAddress: MockUniToken.contractAddress,
          abi: erc20ABI,
          calls: {
            balanceOf: {
              methodName: 'balanceOf',
              methodParameters: [MockWalletAddress],
            },
            name: {
              methodName: 'name',
              methodParameters: [],
            },
            symbol: {
              methodName: 'symbol',
              methodParameters: [],
            },
            decimals: {
              methodName: 'decimals',
              methodParameters: [],
            },
          },
        })

      const { blockNumber, contracts } = await multicall.call({
        uniTokenResults: uniTokenCallContext,
      })

      expect(blockNumber).toBeDefined()
      expect(contracts.uniTokenResults).toBeDefined()

      const { balanceOf, name, symbol, decimals } =
        contracts.uniTokenResults.results

      expect(balanceOf.success).toBe(true)
      expect(ethers.BigNumber.isBigNumber(balanceOf.value)).toBe(true)

      expect(name.success).toBe(true)
      expect(name.value).toBe(MockUniToken.name)

      expect(symbol.success).toBe(true)
      expect(symbol.value).toBe(MockUniToken.symbol)

      expect(decimals.success).toBe(true)
      expect(decimals.value).toBe(MockUniToken.decimals)
    })

    it('should handle multiple contracts in a single call', async () => {
      const { blockNumber, contracts } = await multicall.call({
        uniTokenCallContext:
          multicall.createCallContext<Erc20Contract.Contract>()({
            contractAddress: MockUniToken.contractAddress,
            abi: erc20ABI,
            calls: {
              balanceOf: {
                methodName: 'balanceOf',
                methodParameters: [MockWalletAddress],
              },
            },
          }),
        aaveTokenCallContext:
          multicall.createCallContext<Erc20Contract.Contract>()({
            contractAddress: MockAaveToken.contractAddress,
            abi: erc20ABI,
            calls: {
              balanceOf: {
                methodName: 'balanceOf',
                methodParameters: [MockWalletAddress],
              },
            },
          }),
      })

      const { uniTokenCallContext, aaveTokenCallContext } = contracts ?? {}

      expect(blockNumber).toBeDefined()
      expect(uniTokenCallContext).toBeDefined()
      expect(aaveTokenCallContext).toBeDefined()

      expect(uniTokenCallContext.results.balanceOf.success).toBe(true)
      expect(aaveTokenCallContext.results.balanceOf.success).toBe(true)

      expect(
        ethers.BigNumber.isBigNumber(
          uniTokenCallContext.results.balanceOf.value,
        ),
      ).toBe(true)
      expect(
        ethers.BigNumber.isBigNumber(
          aaveTokenCallContext.results.balanceOf.value,
        ),
      ).toBe(true)
    })
  })
})
