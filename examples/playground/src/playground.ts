import { Erc20Contract } from '@ethereum-multicall/contracts'
import { Multicall } from '@ethereum-multicall/core'
import { MulticallProvider } from '@ethereum-multicall/provider'
import type {
  ContractCallOverrides,
  Erc20Types,
} from '@ethereum-multicall/types'
import { ethers } from 'ethers'

import type { UniswapPairV2Types } from './pair'
import { PairContractFactory } from './pair/uniswap-pair-v2.factory'

const pairAddress = '0x7b813BB8df019Cb351CdD31151C208E9c02885A1' // UNI-WPLS
const uniswapTokenAddress = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
const walletAddress = '0xAcAe34847aB1c58E61f7CAA8a5f7e755a08195b1'
const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.v4.testnet.pulsechain.com',
  943,
)

// Example type for how you can attach custom data to each contract call
type ExtraContext = {
  extraContext: {
    foo: string
    bar: string
  }
}

// Mock ABI for the contract
const GlobalPositionABI = [
  {
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
      {
        name: '_token',
        type: 'address',
      },
      {
        name: '_values',
        type: 'tuple',
        components: [
          {
            name: 'userAddress',
            type: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
          },
          {
            name: 'isActive',
            type: 'bool',
          },
          {
            name: 'message',
            type: 'string',
          },
        ],
      },
    ],
    name: 'complex',
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'deepValue',
                    type: 'uint256',
                  },
                  {
                    internalType: 'address',
                    name: 'deepOwner',
                    type: 'address',
                  },
                  {
                    components: [
                      {
                        internalType: 'uint256',
                        name: 'levelThreeValue',
                        type: 'uint256',
                      },
                      {
                        internalType: 'string',
                        name: 'levelThreeMessage',
                        type: 'string',
                      },
                    ],
                    internalType: 'struct CustomStruct.LevelThreeData',
                    name: 'levelThreeData',
                    type: 'tuple',
                  },
                ],
                internalType: 'struct CustomStruct.LevelTwoData',
                name: 'nestedLevelTwo',
                type: 'tuple',
              },
              { internalType: 'address', name: 'owner', type: 'address' },
            ],
            internalType: 'struct CustomStruct.NestedData',
            name: 'nestedInfo',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
              {
                components: [
                  { internalType: 'bool', name: 'subValid', type: 'bool' },
                  {
                    internalType: 'string',
                    name: 'subMessage',
                    type: 'string',
                  },
                ],
                internalType: 'struct CustomStruct.SubTimeInfo',
                name: 'subTimeInfo',
                type: 'tuple',
              },
            ],
            internalType: 'struct CustomStruct.TimeData',
            name: 'timeInfo',
            type: 'tuple',
          },
        ],
        internalType: 'struct CustomStruct.ComplexData',
        name: 'complexData',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

// Mock type definition for the contract. You can generate a typings file for your ABI using the `ethereum-abi-types-generator` package.
type GlobalPositionContract = {
  globalPositionData(overrides?: ContractCallOverrides): Promise<{
    totalTokensOutstanding: {
      rawValue: ethers.BigNumber
    }
    rawTotalPositionCollateral: {
      rawValue: ethers.BigNumber
    }
  }>

  totalSupply(overrides?: ContractCallOverrides): Promise<ethers.BigNumber>

  complex(
    _owner: string,
    _token: string,
    _values: [string, ethers.BigNumber, boolean, string],
    overrides?: ContractCallOverrides,
  ): Promise<{
    complexData: {
      nestedInfo: {
        nestedLevelTwo: {
          deepValue: ethers.BigNumber
          deepOwner: string
          levelThreeData: {
            levelThreeValue: ethers.BigNumber
            levelThreeMessage: string
          }
        }
        owner: string
      }
      timeInfo: {
        timestamp: ethers.BigNumber
        subTimeInfo: {
          subValid: boolean
          subMessage: string
        }
      }
    }
  }>
}

// Raw example of how you can use the multicall contract
export const multicallRaw = async () => {
  // Multicall setup
  const multicall = new Multicall({
    ethersProvider: provider,
    tryAggregate: true,
  })

  const contractCallContext = multicall.createCallContext<
    GlobalPositionContract,
    ExtraContext
  >()({
    contractAddress: '0xD21d3A321eDc8ca5FEA387A4D082a349c86CCfE5',
    abi: GlobalPositionABI,
    calls: {
      globalPositionDataCall: {
        methodName: 'globalPositionData',
        methodParameters: [],
      },
      totalSupply: {
        methodName: 'totalSupply',
        methodParameters: [],
      },
      complex: {
        methodName: 'complex',
        methodParameters: [
          '0x1234567890123456789012345678901234567890',
          '0x1234567890123456789012345678901234567890',
          [
            '0x1234567890123456789012345678901234567890',
            ethers.utils.parseEther('1'),
            true,
            'Hello, World!',
          ],
        ],
      },
    },
    // Optionally pass in any data you want to keep with the contract call context to extract later
    customData: {
      extraContext: {
        foo: 'foo',
        bar: 'bar',
      },
    },
  })

  // Execute the multicall
  const { contracts, blockNumber } = await multicall.call({
    globalPositionContext: contractCallContext,
    // NOTE: You can add as many contract call contexts as you want here
  })

  console.log(blockNumber)

  // Get our globalPosition contracts
  const {
    globalPositionContext: {
      originContext: {
        customData: { extraContext },
      },
      results: { globalPositionDataCall, totalSupply, complex },
    },
    // NOTE: If any other contract call contexts were made, the contracts would be here
  } = contracts

  const { foo, bar } = extraContext

  // Type-safe access to the contracts
  const { rawTotalPositionCollateral, totalTokensOutstanding } =
    globalPositionDataCall.value

  const {
    complexData: {
      timeInfo: {
        timestamp,
        subTimeInfo: { subMessage, subValid },
      },
      nestedInfo: {
        owner,
        nestedLevelTwo: {
          deepOwner,
          deepValue,
          levelThreeData: { levelThreeMessage, levelThreeValue },
        },
      },
    },
  } = complex.value

  console.log(
    foo,
    bar,
    rawTotalPositionCollateral.rawValue.toString(),
    totalTokensOutstanding.rawValue.toString(),
    totalSupply.value.toString(),
    timestamp.toString(),
    subMessage,
    subValid,
    owner,
    deepOwner,
    deepValue.toString(),
    levelThreeMessage,
    levelThreeValue.toString(),
  )
}

// You can use the MulticallProvider to execute multiple contract calls as it has multicall built in
export async function multicallProviderExample() {
  const multicallProvider = new MulticallProvider({
    ethersProvider: provider,
  })

  // You can also pass in a custom RPC URL
  // const multicallProvider = new MulticallProvider({
  //   chainId: 943,
  //   customRpcUrl: 'https://rpc.v4.testnet.pulsechain.com',
  // })

  // Setup our token
  const tokenContractFactory = new Erc20Contract(multicallProvider, {
    address: uniswapTokenAddress,
  })
  const pairContractFactory = new PairContractFactory(multicallProvider, {
    address: pairAddress,
  })

  const multicall = new Multicall({
    ethersProvider: provider,
    tryAggregate: true,
  })

  const tokenCallContext = multicall.createCallContext<Erc20Types.Contract>()({
    contractAddress: tokenContractFactory.contractDetail.address,
    abi: tokenContractFactory.contractDetail.abi,
    calls: {
      // You can use the contracts helper methods to generate the call context
      balanceOf: tokenContractFactory.balanceOfCallContext(walletAddress),
      name: tokenContractFactory.nameCallContext(),
      // Or you can pass in the method name and parameters
      symbol: {
        methodName: 'symbol()',
        methodParameters: [],
      },
    },
  })

  const pairCallContext =
    multicall.createCallContext<UniswapPairV2Types.Contract>()({
      contractAddress: pairContractFactory.contractDetail.address,
      abi: pairContractFactory.contractDetail.abi,
      calls: {
        // This is keyed to the PairContractResults and must match a key in the PairContractResults
        myCustomBalanceOfKey: {
          methodName: 'balanceOf',
          methodParameters: [walletAddress],
        },
        myCustomBalanceOfKey3: {
          methodName: 'balanceOf(address)',
          methodParameters: [walletAddress],
        },
        name: pairContractFactory.nameCallContext(),
        symbol: pairContractFactory.symbolCallContext(),
        totalSupply: pairContractFactory.totalSupplyCallContext(),
        getReserves: pairContractFactory.getReservesCallContext(),
      },
    })

  const globalPositionContext = multicall.createCallContext<
    GlobalPositionContract,
    ExtraContext
  >()({
    contractAddress: '0xD21d3A321eDc8ca5FEA387A4D082a349c86CCfE5',
    abi: GlobalPositionABI,
    calls: {
      globalPositionDataCall1: {
        methodName: 'globalPositionData',
        methodParameters: [],
      },
      globalPositionDataCall2: {
        methodName: 'globalPositionData',
        methodParameters: [],
      },
    },
    // Optionally pass in any data you want to keep with the contract call context to extract later
    customData: {
      extraContext: {
        foo: 'foo',
        bar: 'bar',
      },
    },
  })

  // NOTE we want this to accept both and use the keys to know what is what
  const multicallResults = await multicall.call(
    {
      // This is keyed to the Results
      tokenContractResults: tokenCallContext,
      pairContractResults: pairCallContext,
      globalPositionResults: globalPositionContext,
    },
    {
      blockNumber: '14571050',
    },
  )

  // Extract our contracts
  const { tokenContractResults, pairContractResults, globalPositionResults } =
    multicallResults.contracts

  console.log(
    globalPositionResults.results.globalPositionDataCall1.value
      .rawTotalPositionCollateral.rawValue,
  )

  // Token contracts
  const { balanceOf, name, symbol } = tokenContractResults.results
  console.log(balanceOf.value, name.value, symbol.value)

  // Pair contracts
  const { _reserve0, _reserve1 } = pairContractResults.results.getReserves.value
  console.log(_reserve0, _reserve1)

  // GlobalPosition contracts
  const {
    originContext: {
      calls: { globalPositionDataCall2 },
      customData: { extraContext },
    },
    results: { globalPositionDataCall1 },
  } = globalPositionResults

  console.log(globalPositionDataCall2)

  const { rawTotalPositionCollateral, totalTokensOutstanding } =
    globalPositionDataCall1.value
  console.log(
    rawTotalPositionCollateral.rawValue,
    totalTokensOutstanding.rawValue,
  )

  const { foo, bar } = extraContext
  console.log(foo, bar)
}

// You can specify a block number to execute the multicall at
export async function multicallDelayOnBlock() {
  const multicallProvider = new MulticallProvider({
    ethersProvider: provider,
  })

  const tokenContractFactory = new Erc20Contract(multicallProvider, {
    address: uniswapTokenAddress,
  })

  const { address, abi } = tokenContractFactory.contractDetail

  const tokenContract =
    multicallProvider.createCallContext<Erc20Types.Contract>()({
      contractAddress: address,
      abi,
      calls: {
        daBalance: {
          methodName: 'balanceOf',
          methodParameters: [walletAddress],
        },
        name: tokenContractFactory.nameCallContext(),
        symbol: tokenContractFactory.symbolCallContext(),
      },
    })

  const callResults = await multicallProvider.call({
    tokenContract,
  })

  const { blockNumber, contracts } = callResults

  console.log(blockNumber)

  const { originContext, results } = contracts.tokenContract

  console.log(originContext)

  const { daBalance, name, symbol } = results

  console.log(daBalance.value, name.value, symbol.value)
}

// You can use a contract factory to directly execute multiple calls
export async function multicallCompact() {
  const tokenContractFactory = new Erc20Contract(
    {
      chainId: 943,
      customRpcUrl: 'https://rpc.v4.testnet.pulsechain.com',
    },
    {
      address: uniswapTokenAddress,
    },
  )

  const { blockNumber, results, originContext } =
    await tokenContractFactory.call({
      customBalanceOf: {
        methodName: 'balanceOf',
        methodParameters: [walletAddress],
      },
      customBalanceOf2: {
        methodName: 'balanceOf(address)',
        methodParameters: [walletAddress],
      },
      nameTest: {
        methodName: 'name',
        methodParameters: [],
      },
      name: tokenContractFactory.nameCallContext(),
      symbol: tokenContractFactory.symbolCallContext(),
      totalSupply: tokenContractFactory.totalSupplyCallContext(),
    })

  const balance = results.customBalanceOf.value
  const name = results.name.value
  const symbol = results.symbol.value
  const totalSupply = results.totalSupply.value

  console.log({
    originContext,
    blockNumber,
    balance,
    name,
    symbol,
    totalSupply,
  })
}

export async function multicallCompactPair() {
  const pairContractFactory = new PairContractFactory(
    {
      ethersProvider: provider,
    },
    {
      address: pairAddress,
    },
  )

  const { blockNumber, results, originContext } =
    await pairContractFactory.call({
      customBalanceOf: {
        methodName: 'balanceOf',
        methodParameters: [walletAddress],
      },
      customBalanceOf2: {
        methodName: 'balanceOf(address)',
        methodParameters: [walletAddress],
      },
      reserves: {
        methodName: 'getReserves',
        methodParameters: [],
      },
      name: pairContractFactory.nameCallContext(),
      symbol: pairContractFactory.symbolCallContext(),
      totalSupply: pairContractFactory.totalSupplyCallContext(),
    })

  const contractAddress = originContext.contractAddress

  const balance = results.customBalanceOf.success
  const { _reserve0, _reserve1 } = results.reserves.value
  const name = results.name.value
  const symbol = results.symbol.value
  const totalSupply = results.totalSupply.value

  console.log({
    contractAddress,
    originContext,
    blockNumber,
    balance,
    _reserve0: _reserve0.toString(),
    _reserve1: _reserve1.toString(),
    name,
    symbol,
    totalSupply: totalSupply.toString(),
  })
}
