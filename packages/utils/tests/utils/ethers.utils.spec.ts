import { ethers } from 'ethers'
import { describe, it, expect } from 'vitest'

import {
  isExternalProvider,
  isJsonRpcProvider,
  isProvider,
} from '../../src/utils/ethers.utils'

describe('ethers.utils', () => {
  describe('Provider Utilities', () => {
    it('should identify a Provider', () => {
      const mockProvider = new ethers.providers.JsonRpcProvider()
      expect(isProvider(mockProvider)).toBe(true)
    })

    it('should identify a JsonRpcProvider', () => {
      const mockProvider = new ethers.providers.JsonRpcProvider()
      expect(isJsonRpcProvider(mockProvider)).toBe(true)
    })

    it('should identify an ExternalProvider', () => {
      const mockProvider = {
        host: 'localhost',
        isMetaMask: true,
      }
      expect(isExternalProvider(mockProvider)).toBe(true)
    })
  })
})
