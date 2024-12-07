import { MulticallProvider } from '@ethereum-multicall/provider'
import { ethers } from 'ethers'
import { describe, it, expect } from 'vitest'

import {
  MockChainId,
  MockProviderUrl,
  MockRecipientAddress,
  MockWalletAddress,
  MockWrapped,
} from '../../../../test/mocks'
import { WrappedContract } from '../../src/wrapped/wrapped.contract'

describe('WrappedContract', () => {
  const mockMulticallProvider = new MulticallProvider({
    chainId: MockChainId,
    rpcUrl: MockProviderUrl,
  })

  if (!mockMulticallProvider) {
    throw new Error(`No dex provider found`)
  }

  const contract = new WrappedContract(mockMulticallProvider, {
    address: MockWrapped.contractAddress,
  })

  const spenderAddress = MockRecipientAddress

  // ------------------------
  // Testing read methods
  // ------------------------

  it('should return the correct token name', async () => {
    const result = await contract.name()
    expect(result).toBe(MockWrapped.name)
  })

  it('should return the correct total supply', async () => {
    const result = await contract.totalSupply()
    expect(result._isBigNumber).toEqual(true)
  })

  it('should return the correct number of decimals', async () => {
    const result = await contract.decimals()
    expect(result).toBe(MockWrapped.decimals)
  })

  it('should return the correct symbol', async () => {
    const result = await contract.symbol()
    expect(result).toBe(MockWrapped.symbol)
  })

  it('should return the correct balanceOf address', async () => {
    const result = await contract.balanceOf(MockWalletAddress)
    expect(result._isBigNumber).toEqual(true)
  })

  it('should return the correct allowance', async () => {
    const result = await contract.allowance(
      MockWalletAddress,
      spenderAddress,
    )
    expect(result._isBigNumber).toEqual(true)
  })

  // ------------------------
  // Testing encode methods
  // ------------------------

  it('should correctly encode the approve function', () => {
    const result = contract.encodeApprove(
      spenderAddress,
      '1000000000000000000',
    )
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  it('should correctly encode the transferFrom function', () => {
    const result = contract.encodeTransferFrom(
      MockWalletAddress,
      MockRecipientAddress,
      '1000000000000000000',
    )
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  it('should correctly encode the withdraw function', () => {
    const result = contract.encodeWithdraw('1000000000000000000')
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  it('should correctly encode the deposit function', () => {
    const result = contract.encodeDeposit()
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  it('should correctly encode the transfer function', () => {
    const result = contract.encodeTransfer(
      MockRecipientAddress,
      '1000000000000000000',
    )
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  // ------------------------
  // Testing Multicall
  // ------------------------

  it('should create valid CallContexts and retrieve results using multicall', async () => {
    const { results } = await contract.call({
      name: contract.nameCallContext(),
      decimals: contract.decimalsCallContext(),
      symbol: contract.symbolCallContext(),
      totalSupply: contract.totalSupplyCallContext(),
      balanceOf: contract.balanceOfCallContext(MockWalletAddress),
      allowance: contract.allowanceCallContext(
        MockWalletAddress,
        spenderAddress,
      ),
    })

    expect(results).toBeDefined()

    expect(results.name.value).toBe(MockWrapped.name)
    expect(results.decimals.value).toBe(MockWrapped.decimals)
    expect(results.symbol.value).toBe(MockWrapped.symbol)
    expect(ethers.BigNumber.isBigNumber(results.totalSupply.value)).toEqual(
      true,
    )
    expect(ethers.BigNumber.isBigNumber(results.balanceOf.value)).toEqual(true)
    expect(ethers.BigNumber.isBigNumber(results.allowance.value)).toEqual(true)
  })
})
