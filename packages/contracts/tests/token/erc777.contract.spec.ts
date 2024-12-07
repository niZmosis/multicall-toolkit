import { MulticallProvider } from '@ethereum-multicall/provider'
import { BigNumber, ethers } from 'ethers'
import { describe, it, expect } from 'vitest'

import {
  MockChainId,
  MockWalletAddress,
  MockRecipientAddress,
  MockSklToken,
  MockOperatorAddress,
  MockOperatorAddress2,
  MockProviderUrl,
} from '../../../../test/mocks'
import { Erc777Contract } from '../../src/token/erc777.contract'

if (MockSklToken) {
  describe.skip('Erc777Contract', () => {
    const mockMulticallProvider = new MulticallProvider({
      chainId: MockChainId,
      rpcUrl: MockProviderUrl,
    })

    if (!mockMulticallProvider) {
      throw new Error(`No dex provider found`)
    }

    const contract = new Erc777Contract(mockMulticallProvider, {
      address: MockSklToken.contractAddress,
    })

    // ------------------------
    // Testing read methods
    // ------------------------

    it('should return the correct token name', async () => {
      const result = await contract.name()
      expect(result).toBe(MockSklToken.name)
    })

    it('should return the correct token symbol', async () => {
      const result = await contract.symbol()
      expect(result).toBe(MockSklToken.symbol)
    })

    it('should return the correct granularity', async () => {
      const result = await contract.granularity()
      expect(result).toBeInstanceOf(BigNumber)
      // expect(result.gt(0)).toBe(true)
    })

    it('should return the list of default operators', async () => {
      const result = await contract.defaultOperators()
      expect(Array.isArray(result)).toBe(true)
    })

    it('should return the correct balanceOf a specified address', async () => {
      const result = await contract.balanceOf(MockWalletAddress)
      expect(result).toBeInstanceOf(BigNumber)
      // expect(result.gt(0)).toBe(true)
    })

    it('should return boolean for is operator check', async () => {
      const result = await contract.isOperatorFor(
        MockWalletAddress,
        MockOperatorAddress,
      )
      expect(typeof result).toBe('boolean')
    })

    // ------------------------
    // Testing encode methods
    // ------------------------

    it('should correctly encode the authorizeOperator function', () => {
      const result =
        contract.encodeAuthorizeOperator(MockOperatorAddress)
      expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
    })

    it('should correctly encode the revokeOperator function for a single address', () => {
      const result = contract.encodeRevokeOperator(MockOperatorAddress)
      expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
    })

    it('should correctly encode the revokeOperator function for multiple addresses', () => {
      const multipleOperators = [MockOperatorAddress, MockOperatorAddress2]
      const result = contract.encodeRevokeOperator(multipleOperators)
      expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
    })

    it('should correctly encode the operatorSend function', () => {
      const result = contract.encodeOperatorSend(
        MockWalletAddress,
        MockRecipientAddress,
        BigNumber.from(1000),
        '0x00',
        '0x00',
      )
      expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
    })

    it('should correctly encode the send function', () => {
      const result = contract.encodeSend(
        MockWalletAddress,
        MockRecipientAddress,
        BigNumber.from(1000),
        '0x00',
      )
      expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
    })

    // ------------------------
    // Testing Multicall
    // ------------------------

    it('should create valid CallContexts and retrieve results using multicall', async () => {
      const { results } = await contract.call({
        name: contract.nameCallContext(),
        symbol: contract.symbolCallContext(),
        balanceOf: contract.balanceOfCallContext(MockWalletAddress),
        granularity: contract.granularityCallContext(),
      })

      expect(results).toBeDefined()

      expect(results.name.value).toBe(MockSklToken.name)
      expect(results.symbol.value).toBe(MockSklToken.symbol)
      expect(ethers.BigNumber.isBigNumber(results.balanceOf.value)).toEqual(
        true,
      )
      expect(ethers.BigNumber.isBigNumber(results.granularity.value)).toEqual(
        true,
      )
    })
  })
} else {
  describe.skip('Erc777Contract')
}
