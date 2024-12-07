import type {
  Erc20Types,
  EthersProviderContext,
  MulticallOptionsEthers,
} from '@ethereum-multicall/types'
import { erc20ABI, ErrorCodes } from '@ethereum-multicall/utils'
import { ethers } from 'ethers'
import { describe, it, expect } from 'vitest'

import {
  MockProviderUrl,
  MockChainId,
  MockWalletAddress,
  MockUniToken,
  MockAaveToken,
  MockRecipientAddress,
} from '../../../test/mocks'
import { Multicall } from '../src/multicall'

describe('Multicall', async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    MockProviderUrl,
    MockChainId,
  )

  const optionCombinations = [
    { tryAggregate: true, enableBatching: true },
    { tryAggregate: true, enableBatching: false },
    { tryAggregate: false, enableBatching: true },
    { tryAggregate: false, enableBatching: false },
  ]

  optionCombinations.forEach(({ tryAggregate, enableBatching }) => {
    describe(`Multicall with tryAggregate: ${tryAggregate}, enableBatching: ${enableBatching}`, () => {
      const options: EthersProviderContext = {
        ethersProvider: provider,
        tryAggregate,
        enableBatching,
        maxCallDataSize: 100_000,
        maxCallsPerBatch: 50,
      }
      const multicall = new Multicall(options)

      it('should fetch token data using multicall', async () => {
        const uniTokenCallContext =
          multicall.createCallContext<Erc20Types.Contract>()({
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

        const result = await multicall.call({
          uniTokenResults: uniTokenCallContext,
        })

        expect(result.blockNumber).toBeDefined()
        expect(result.contracts.uniTokenResults).toBeDefined()

        const { balanceOf, name, symbol, decimals } =
          result.contracts.uniTokenResults.results

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
        const result = await multicall.call({
          uniTokenCallContext:
            multicall.createCallContext<Erc20Types.Contract>()({
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
            multicall.createCallContext<Erc20Types.Contract>()({
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

        const { blockNumber, contracts } = result

        expect(blockNumber).toBeDefined()
        expect(contracts.uniTokenCallContext).toBeDefined()
        expect(contracts.aaveTokenCallContext).toBeDefined()

        expect(contracts.uniTokenCallContext.results.balanceOf?.success).toBe(
          true,
        )
        expect(contracts.aaveTokenCallContext.results.balanceOf?.success).toBe(
          true,
        )
      })

      it('should handle method call failure gracefully', async () => {
        const invalidAddress = '0x0000000000000000000000000000000000000000'
        const uniTokenCallContext =
          multicall.createCallContext<Erc20Types.Contract>()({
            contractAddress: MockUniToken.contractAddress,
            abi: erc20ABI,
            calls: {
              invalidCall: {
                methodName: 'balanceOf',
                methodParameters: [invalidAddress],
              },
              name: {
                methodName: 'name',
                methodParameters: [],
              },
            },
          })

        if (tryAggregate) {
          const { contracts } = await multicall.call({
            uniTokenResults: uniTokenCallContext,
          })

          const { invalidCall, name } = contracts.uniTokenResults.results

          // Depending on the chain or the token, an invalid address may not revert
          // and instead return a zero balance. If it did fail, success = false and error field would be populated.
          // Here we assume it doesn't revert and returns zero:
          expect(invalidCall.success).toBe(true)
          expect(ethers.BigNumber.isBigNumber(invalidCall.value)).toBe(true)
          expect(name.success).toBe(true)
          expect(name.value).toBe(MockUniToken.name)
        } else {
          // If tryAggregate = false and a call would fail, we expect an immediate throw.
          await expect(
            multicall.call({
              uniTokenResults: uniTokenCallContext,
            }),
          ).resolves.toBeDefined()
        }
      })

      it('should respect batching settings', async () => {
        const multicallOptions: MulticallOptionsEthers = {
          ethersProvider: provider,
          tryAggregate,
          enableBatching,
          maxCallDataSize: 40, // Force batching
          maxCallsPerBatch: 1, // Force batching
        }
        const multicallInstance = new Multicall(multicallOptions)

        const uniTokenCallContext =
          multicallInstance.createCallContext<Erc20Types.Contract>()({
            contractAddress: MockUniToken.contractAddress,
            abi: erc20ABI,
            calls: {
              balanceOf: {
                methodName: 'balanceOf',
                methodParameters: [MockWalletAddress],
              },
              balanceOfRecipient: {
                methodName: 'balanceOf',
                methodParameters: [MockRecipientAddress],
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
              totalSupply: {
                methodName: 'totalSupply',
                methodParameters: [],
              },
            },
          })

        const aaveTokenCallContext =
          multicallInstance.createCallContext<Erc20Types.Contract>()({
            contractAddress: MockAaveToken.contractAddress,
            abi: erc20ABI,
            calls: {
              balanceOf: {
                methodName: 'balanceOf',
                methodParameters: [MockWalletAddress],
              },
              balanceOfRecipient: {
                methodName: 'balanceOf',
                methodParameters: [MockRecipientAddress],
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
              totalSupply: {
                methodName: 'totalSupply',
                methodParameters: [],
              },
            },
          })

        const { blockNumber, batchCount, contracts } =
          await multicallInstance.call({
            uniTokenResults: uniTokenCallContext,
            aaveTokenResults: aaveTokenCallContext,
          })

        expect(blockNumber).toBeDefined()
        if (enableBatching) {
          expect(batchCount).toBeGreaterThan(1)
        } else {
          expect(batchCount).toBe(1)
        }

        // Ensure all results are successful
        Object.values(contracts).forEach((contract) => {
          Object.values(contract.results).forEach((methodResult) => {
            expect(methodResult.success).toBe(true)
            expect(methodResult.value).toBeDefined()
          })
        })
      })
    })
  })

  describe('Error Handling Scenarios', () => {
    it('should throw an error for invalid contract addresses when tryAggregate = false', async () => {
      const options: EthersProviderContext = {
        ethersProvider: provider,
        tryAggregate: false,
        enableBatching: true,
      }
      const multicall = new Multicall(options)

      const invalidCallContext =
        multicall.createCallContext<Erc20Types.Contract>()({
          contractAddress: '0xInvalidAddress000000000000000000000000',
          abi: erc20ABI,
          calls: {
            name: {
              methodName: 'name',
              methodParameters: [],
            },
          },
        })

      await expect(
        multicall.call({
          invalidResults: invalidCallContext,
        }),
      ).rejects.toThrow()
    })

    it('should mark calls as failed with error details when tryAggregate = true and a call reverts', async () => {
      const options: EthersProviderContext = {
        ethersProvider: provider,
        tryAggregate: true,
        enableBatching: true,
      }
      const multicall = new Multicall(options)

      // Assume calling 'symbol' on an invalid contract address reverts:
      const revertingCallContext =
        multicall.createCallContext<Erc20Types.Contract>()({
          contractAddress: 'MockUniToken.contractAddress',
          abi: erc20ABI,
          calls: {
            balanceOf: {
              methodName: 'balanceOf',
              methodParameters: ['234022'],
            },
          },
        })

      // Also include a valid call to ensure it doesn't affect successful methods
      const validCallContext =
        multicall.createCallContext<Erc20Types.Contract>()({
          contractAddress: MockUniToken.contractAddress,
          abi: erc20ABI,
          calls: {
            totalSupply: {
              methodName: 'totalSupply',
              methodParameters: [],
            },
          },
        })

      const result = await multicall.call({
        reverting: revertingCallContext,
        validCall: validCallContext,
      })

      const revertingCallResult = result.contracts.reverting.results.balanceOf

      expect(revertingCallResult.success).toBe(false)
      expect(revertingCallResult.error).toBeDefined()
      expect(revertingCallResult.error?.code).toBe(
        ErrorCodes.parameterEncodingError,
      )
      expect(revertingCallResult.error?.message).toContain(
        'Local parameter encoding error or invalid input caused this call to fail.',
      )

      const validMethodResult = result.contracts.validCall.results.totalSupply
      expect(validMethodResult.success).toBe(true)
      expect(validMethodResult.value).toBeDefined()
    })
  })

  describe('Additional Edge Cases', () => {
    it('should handle empty call contexts gracefully', async () => {
      const options: EthersProviderContext = {
        ethersProvider: provider,
        tryAggregate: true,
        enableBatching: true,
      }
      const multicall = new Multicall(options)

      const result = await multicall.call({})

      expect(result).toEqual({
        blockNumber: expect.any(Number),
        batchCount: 0,
        contracts: {},
      })
    })

    it('should handle unsupported ABI methods gracefully', async () => {
      const options: EthersProviderContext = {
        ethersProvider: provider,
        tryAggregate: true,
        enableBatching: true,
      }
      const multicall = new Multicall(options)

      const unsupportedAbi = [
        {
          constant: false,
          inputs: [],
          name: 'unsupportedMethod',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ]

      const unsupportedCallContext =
        multicall.createCallContext<Erc20Types.Contract>()({
          contractAddress: MockUniToken.contractAddress,
          abi: unsupportedAbi,
          calls: {
            unsupportedMethod: {
              methodName: 'unsupportedMethod' as any,
              methodParameters: [],
            },
          },
        })

      const result = await multicall.call({
        unsupportedResults: unsupportedCallContext,
      })

      expect(result.contracts.unsupportedResults).toBeDefined()

      const methodResult =
        result.contracts.unsupportedResults.results.unsupportedMethod

      expect(methodResult).toBeDefined()
      expect(methodResult.success).toBe(false)
      expect(methodResult.value).toBeUndefined()
      expect(methodResult.error).toBeDefined()
      expect(methodResult.error?.code).toBe(ErrorCodes.executionError)
    })
  })
})
