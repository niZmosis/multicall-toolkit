// ------------------------
// Main keys for testing configurations
// ------------------------

export const MockChainId = 943
export const MockDexType = 'PULSEX'

// ------------------------
// Derived configurations
// ------------------------

export const MockProviderUrl = 'https://rpc.v4.testnet.pulsechain.com'

if (!MockProviderUrl) {
  throw new Error(`No provider url found`)
}

// ------------------------
// Tokens
// ------------------------

export const MockWrapped = {
  contractAddress: '0x70499adEBB11Efd915E3b69E700c331778628707',
  name: 'Wrapped Pulse',
  symbol: 'WPLS',
  decimals: 18,
  standard: 'ERC20',
}
export const MockFunToken = {
  contractAddress: '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b',
  name: 'FunFair',
  symbol: 'FUN',
  decimals: 8,
  standard: 'ERC20',
}
export const MockAaveToken = {
  contractAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  name: 'Aave Token',
  symbol: 'AAVE',
  decimals: 18,
  standard: 'ERC20',
}
export const MockUniToken = {
  contractAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  name: 'Uniswap',
  symbol: 'UNI',
  decimals: 18,
  standard: 'ERC20',
}
export const MockSklToken = {
  contractAddress: '0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7',
  name: 'SKALE',
  symbol: 'SKL',
  decimals: 18,
  standard: 'ERC777',
}

// TODO
export const MockTokenId = '1'
export const MockNFT721: undefined = undefined

export const MockNFT1155: undefined = undefined

// ------------------------
// Wallets
// ------------------------

// NOTE: All wallets have been generated and shall not be used for any other purposes other than testing.
export const MockWalletAddress = '0xAcAe34847aB1c58E61f7CAA8a5f7e755a08195b1'
export const MockRecipientAddress = '0xA716c8E0C48bd97CB9e90c6BDD3b09957F88A13F'
export const MockOperatorAddress = '0xCc48e5B1739A07555444CB1D5619b653F9AFcaB3'
export const MockOperatorAddress2 = '0xeAa0C398919F5De744aC8c67f59db8B894ca112E'
