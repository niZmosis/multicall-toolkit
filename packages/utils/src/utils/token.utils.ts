import type {
  Erc1155Types,
  Erc721Types,
  Erc777Types,
  Erc20Types,
  WrappedTypes,
} from '@ethereum-multicall/types'

// ------------------------
// Method Names
// ------------------------

export const base777MethodMap: Omit<Erc777Types.MethodNameMap, 'granularity'> =
  {
    name: 'name',
    symbol: 'symbol',
    defaultOperators: 'defaultOperators',
    balanceOf: 'balanceOf',
    isOperatorFor: 'isOperatorFor',
    authorizeOperator: 'authorizeOperator',
    defaultOperatorsSend: 'defaultOperatorsSend',
    revokeOperator: 'revokeOperator',
    operatorSend: 'operatorSend',
    revokeDefaultOperators: 'revokeDefaultOperators',
    send: 'send',
    setDefaultOperators: 'setDefaultOperators',
  } as const

// ERC

export const defaultErc20MethodMap: Erc20Types.MethodNameMap = {
  name: 'name',
  approve: 'approve',
  totalSupply: 'totalSupply',
  transferFrom: 'transferFrom',
  decimals: 'decimals',
  balanceOf: 'balanceOf',
  symbol: 'symbol',
  transfer: 'transfer',
  allowance: 'allowance',
} as const

export const defaultErc777MethodMap: Erc777Types.MethodNameMap = {
  ...base777MethodMap,
  granularity: 'granularity',
} as const

export const defaultErc721MethodMap: Erc721Types.MethodNameMap = {
  approve: 'approve',
  balanceOf: 'balanceOf',
  getApproved: 'getApproved',
  isApprovedForAll: 'isApprovedForAll',
  name: 'name',
  owner: 'owner',
  ownerOf: 'ownerOf',
  renounceOwnership: 'renounceOwnership',
  safeTransferFrom: 'safeTransferFrom',
  setApprovalForAll: 'setApprovalForAll',
  supportsInterface: 'supportsInterface',
  symbol: 'symbol',
  tokenId: 'tokenId',
  tokenURI: 'tokenURI',
  transferFrom: 'transferFrom',
  transferOwnership: 'transferOwnership',
  mintNFT: 'mintNFT',
} as const

export const defaultErc1155MethodMap: Erc1155Types.MethodNameMap = {
  balanceOf: 'balanceOf',
  balanceOfBatch: 'balanceOfBatch',
  isApprovedForAll: 'isApprovedForAll',
  safeBatchTransferFrom: 'safeBatchTransferFrom',
  safeTransferFrom: 'safeTransferFrom',
  setApprovalForAll: 'setApprovalForAll',
  supportsInterface: 'supportsInterface',
  uri: 'uri',
} as const

// Wrapped

export const defaultWrappedMethodMap: WrappedTypes.MethodNameMap = {
  name: 'name',
  approve: 'approve',
  totalSupply: 'totalSupply',
  transferFrom: 'transferFrom',
  withdraw: 'withdraw',
  decimals: 'decimals',
  balanceOf: 'balanceOf',
  symbol: 'symbol',
  transfer: 'transfer',
  deposit: 'deposit',
  allowance: 'allowance',
} as const
