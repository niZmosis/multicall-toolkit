import { MulticallProvider } from '@ethereum-multicall/provider'
import { BigNumber, ethers } from 'ethers'
import { describe, it, expect } from 'vitest'

import {
  MockChainId,
  MockRecipientAddress,
  MockFunToken,
  MockWalletAddress,
  MockProviderUrl,
} from '../../../../test/mocks'
import { Erc20Contract } from '../../src/token/erc20.contract'

describe('Erc20Contract', () => {
  const mockMulticallProvider = new MulticallProvider({
    chainId: MockChainId,
    customRpcUrl: MockProviderUrl,
  })

  if (!mockMulticallProvider) {
    throw new Error(`No dex provider found`)
  }

  const contractFactory = new Erc20Contract(mockMulticallProvider, {
    address: MockFunToken.contractAddress,
  })

  const spenderAddress = MockRecipientAddress

  // ------------------------
  // Testing read methods
  // ------------------------

  it('should return the correct token name', async () => {
    const result = await contractFactory.name()
    expect(result).toBe(MockFunToken.name)
  })

  it('should return the correct token symbol', async () => {
    const result = await contractFactory.symbol()
    expect(result).toBe(MockFunToken.symbol)
  })

  it('should return the correct number of decimals', async () => {
    const result = await contractFactory.decimals()
    expect(result).toBe(MockFunToken.decimals)
  })

  it('should return the correct total supply', async () => {
    const result = await contractFactory.totalSupply()
    expect(result).toBeInstanceOf(BigNumber)
    expect(result.gt(0)).toBe(true)
  })

  it('should return the correct balanceOf a specified address', async () => {
    const result = await contractFactory.balanceOf(MockWalletAddress)
    expect(result).toBeInstanceOf(BigNumber)
  })

  it('should return the correct allowance for a spender', async () => {
    const result = await contractFactory.allowance(
      MockWalletAddress,
      spenderAddress,
    )
    expect(result).toBeInstanceOf(BigNumber)
  })

  // ------------------------
  // Testing encode methods
  // ------------------------

  it('should correctly encode the approve function', () => {
    const result = contractFactory.encodeApprove(spenderAddress, 1000)
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  it('should correctly encode the transfer function', () => {
    const result = contractFactory.encodeTransfer(spenderAddress, 1000)
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  it('should correctly encode the transferFrom function', () => {
    const result = contractFactory.encodeTransferFrom(
      MockWalletAddress,
      spenderAddress,
      1000,
    )
    expect(result).toMatch(/^0x[a-fA-F0-9]+$/)
  })

  // ------------------------
  // Testing CallContext with ethereum-multicall
  // ------------------------

  it('should create valid CallContexts and retrieve results using multicall', async () => {
    const { results } = await contractFactory.call({
      name: contractFactory.nameCallContext(),
      symbol: contractFactory.symbolCallContext(),
      totalSupply: contractFactory.totalSupplyCallContext(),
      balanceOf: contractFactory.balanceOfCallContext(MockWalletAddress),
    })

    expect(results).toBeDefined()

    const name = results.name.value
    const symbol = results.symbol.value
    const totalSupply = results.totalSupply.value
    const balance = results.balanceOf.value

    expect(name).toBe(MockFunToken.name)
    expect(symbol).toBe(MockFunToken.symbol)
    expect(ethers.BigNumber.isBigNumber(balance)).toBe(true)
    expect(ethers.BigNumber.isBigNumber(totalSupply)).toBe(true)
  })
})
