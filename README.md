# multicall-toolkit

[![npm version](https://badge.fury.io/js/multicall-toolkit.svg)](https://badge.fury.io/js/multicall-toolkit)
![downloads](https://img.shields.io/npm/dw/multicall-toolkit)

A lightweight library for interacting with the [`Multicall3`](https://github.com/mds1/multicall) smart contract, allowing multiple smart contract constant function calls to be grouped into a single call and the results aggregated into a single result. This reduces the number of separate JSON RPC requests that need to be sent over the network if using a remote node like Infura, and provides the guarantee that all values returned are from the same block. The block number which the multicall was executed on is also returned along with the aggregated results.

## Table of Contents

- **[Features](#features)**
- **[Supported Libraries](#supported-libraries)**
- **[Packages](#packages)**
- **[Installation](#installation)**
  - [For Using Multicall Directly](#for-using-multicall-directly)
  - [For Using MulticallProvider](#for-using-multicallprovider)
  - [For Using Multicall Contracts](#for-using-multicall-contracts-eg-erc20contract)
- **[Import Examples](#import-examples)**
- **[Initialization](#initialization)**
  - [Ethers](#ethers)
  - [Web3](#web3)
  - [ChainId/URL](#chainidurl)
  - [Custom Multicall Contract Address](#custom-multicall-contract-address)
  - [Aggregation](#aggregation)
  - [Batching](#batching)
- **[Usage](#usage)**
  - [Ethers Usage Example](#ethers-usage-example)
  - [Specifying Call Block Number](#specifying-call-block-number)
  - [Accessing Original Context Data](#accessing-original-context-data)
  - [Attaching Custom Data](#attaching-custom-data)
  - [Overloaded Methods](#overloaded-methods)
- **[Multicall Provider](#multicall-provider)**
  - [Custom Network and Multicall Contract Address](#custom-network-and-multicall-contract-address)
- **[Multicall Compatible Contracts](#multicall-compatible-contracts)**
  - [Batching ETH Balance Checks with Multicall3](#batching-eth-balance-checks-with-multicall3)
- **[Supported Networks](#supported-networks)**
- **[Tests](#tests)**
- **[Related Toolkits](#related-toolkits)**
- **[Issues](#issues)**
- **[Contributing](#contributing)**
- **[License](#license)**

## Features

🪶 **Lightweight**: Minimal dependencies for efficient performance.

🔌 **Flexible**: Works with Ethers and Web3 providers.

🧩 **Modular**: Use it with various blockchain interactions and libraries.

🔍 **Detailed Results**: Get comprehensive return data, including success status and decoded values.

🌀 **Try Aggregate**: Option to continue execution even if some calls fail.

⏳ **Block-Specific Queries**: Ability to query at specific block numbers.

🔢 **Type-safe**: Comprehensive TypeScript support with full typings for contract results and method calls, ensuring compile-time validation of parameters and return types.

📦 **Batching Support**: Automatically batches calls based on configurable size or count limits, optimizing large-scale requests.

🌐 **Multicall Provider**: Enhanced provider that wraps existing providers with advanced features like auto-batching, block-specific queries, and error resilience for multicall requests.

🧱 **Multicall Ready Contracts**: Simplified interaction with standard contracts like ERC20, ERC721, Wrapped, and more.

💎 **Open Source and Community-Driven**: Join the community on GitHub to contribute, report issues, or request features.

## Supported Libraries

- Web3 1.x and 2.x
- Ethers 4.x, 5.x, and 6.x

## Packages

| Package | Description |
| --- | --- |
| [`@multicall-toolkit/core`](/packages/core) | Core module for interacting with the Multicall contract. |
| [`@multicall-toolkit/types`](/packages/types) | Type definitions for the entire toolkit. |
| [`@multicall-toolkit/utils`](/packages/utils) | A collection of helper functions and utilities. |
| [`@multicall-toolkit/provider`](/packages/provider) | A wrapper around a provider that allows for multicall requests. |
| [`@multicall-toolkit/contracts`](/packages/contracts) | A set of classes of common ABIs for seamless Multicall interaction, including ERC20, ERC777, ERC721, ERC1155, and Wrapped contracts. |

## Installation

Choose the package that best fits your needs. Dependencies will be installed automatically.

### For using Multicall directly

If you only want to use the Multicall class directly:

```bash
npm install @multicall-toolkit/core
# or
yarn add @multicall-toolkit/core
# or
pnpm add @multicall-toolkit/core
# or
bun add @multicall-toolkit/core
```

### For using MulticallProvider

If you want the MulticallProvider to wrap your existing provider:

```bash
npm install @multicall-toolkit/provider
# or
yarn add @multicall-toolkit/provider
# or
pnpm add @multicall-toolkit/provider
# or
bun add @multicall-toolkit/provider
```

### For using Multicall Contracts (e.g., Erc20Contract)

If you want to use the Multicall Contracts for seamless Multicall interaction:

```bash
npm install @multicall-toolkit/contracts
# or
yarn add @multicall-toolkit/contracts
# or
pnpm add @multicall-toolkit/contracts
# or
bun add @multicall-toolkit/contracts
```

Note: Installing any of these packages will automatically install the necessary dependencies. For example:

- Installing `@multicall-toolkit/contracts` will also install `core`, `provider`, `utils`, and `types`.
- Installing `@multicall-toolkit/provider` will install `core`, `utils`, and `types`.
- Installing `@multicall-toolkit/core` will install `utils` and `types`.

Choose the installation method that best suits your project's needs and package manager preference.

## Import examples

### JavaScript (ES3)

```js
var ethereumMulticall = require('@multicall-toolkit/core')
```

### JavaScript (ES5 or ES6)

```js
const ethereumMulticall = require('@multicall-toolkit/core')
```

### JavaScript (ES6) / TypeScript

```js
import { Multicall } from '@multicall-toolkit/core'
import type {
  Results,
  ContractContext,
} from '@multicall-toolkit/types'
```

## Initialization

There are multiple ways to initialize the library

### Ethers

```typescript
import { Multicall } from '@multicall-toolkit/core';

const provider = new ethers.providers.JsonRpcProvider(
  'https://some.local-or-remote.node:8546',
  1,
)

const multicall = new Multicall({
  ethersProvider: provider,
});
```

### Web3

```typescript
import { Multicall } from '@multicall-toolkit/core';

const web3 = new Web3('https://some.local-or-remote.node:8546');

const multicall = new Multicall({
  web3Provider: web3,
});
```

### ChainId/URL

Will use Ethers.js behind the scenes

```typescript
import { Multicall } from '@multicall-toolkit/core';

const multicall = new Multicall({
  chainId: 1,
  rpcUrl: 'https://some.local-or-remote.node:8546',
});
```

### Custom Multicall Contract Address

By default, the library uses the known multicall contract address `0xcA11bde05977b3631167028862bE2a173976CA11`.

```typescript
import { Multicall } from '@multicall-toolkit/core';

const multicall = new Multicall({
  // You could pass an Ethers or Web3 provider here as well
  chainId: 1,
  rpcUrl: 'https://some.local-or-remote.node:8546',

  // Provide a custom multicall contract address for the corresponding network
  customMulticallContractAddress: '0x1234...',
});
```

### Aggregation

Enabling `tryAggregate` will allow the multicall to continue even if individual calls fail, returning partial results instead of reverting the entire transaction.

`tryAggregate` is `false` by default.

```typescript
import { Multicall } from '@multicall-toolkit/core';

const provider = new ethers.providers.JsonRpcProvider(
  'https://some.local-or-remote.node:8546',
  1,
)

const multicall = new Multicall({
  ethersProvider: provider,
  tryAggregate: true,
});
```

### Batching

Most nodes have a callData limit, you may set this limit in options which will batch the calls made. For example, say the node has a callData limit of 50,000 Bytes, and you send a multicall that has a callData size of 128,000 Bytes, it will batch the calls into 3 batches. This results in an extra calls to the blockchain (one per batch).

If `tryAggregate` is `false` while there are multiple batches, any batch that was sent prior to the batch that had the error, will have went though, while addition batches won't be called.

```typescript
export type MulticallOptionsBase = {
  // ... other options

  /**
   * Whether to enable batching when calls exceed configured size or count limits.
   * When enabled, calls that exceed `maxCallDataSize` or `maxCallsPerBatch` are split into multiple batches, resulting in multiple calls to the blockchain.
   * Defaults to `true`.
   */
  enableBatching?: boolean
  /**
   * Maximum allowed call data size (in bytes) for a single batch of calls.
   * Batches are split if the combined return data size exceeds this limit.
   * Defaults to `100000` bytes.
   */
  maxCallDataSize?: number
  /**
   * Maximum number of calls allowed in a single batch.
   * Ensures that each batch stays within a manageable number of calls.
   * Defaults to `500` calls.
   */
  maxCallsPerBatch?: number
}
```

```typescript
import { Multicall } from '@multicall-toolkit/core';

const provider = new ethers.providers.JsonRpcProvider(
  'https://some.local-or-remote.node:8546',
  1,
)

const multicall = new Multicall({
  ethersProvider: provider,
  tryAggregate: true,
  enableBatching: true,
  maxCallDataSize: 100_000,
  maxCallsPerBatch: 500,
});
```

## Usage

See [examples](./examples/playground/src/playground.ts) for more usage examples.

### Ethers Usage Example

```typescript
import { Multicall, Results, ContractContext } from '@multicall-toolkit/core';
import { ethers } from 'ethers';

const provider = ethers.getDefaultProvider();
const multicall = new Multicall({ ethersProvider: provider, tryAggregate: true });

// Passing in the TContract generic will allow for full typings and autocomplete
// You can make typings for your ABI's using `abi-toolkit`
const uniswapCallContext =
    multicallProvider.createCallContext<Erc20Types.Contract>()({
      contractAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      abi: [
          {
              inputs: [],
              name: "name",
              outputs: [
                  {
                      internalType: "string",
                      name: "",
                      type: "string"
                  }
              ],
              stateMutability: "view",
              type: "function"
          },
          {
              inputs: [],
              name: "symbol",
              outputs: [
                  {
                      internalType: "string",
                      name: "",
                      type: "string"
                  }
              ],
              stateMutability: "view",
              type: "function"
          },
          {
              inputs: [],
              name: "decimals",
              outputs: [
                  {
                      internalType: "uint8",
                      name: "",
                      type: "uint8"
                  }
              ],
              stateMutability: "view",
              type: "function"
          },
          {
              inputs: [
                  {
                      internalType: "address",
                      name: "account",
                      type: "address"
                  }
              ],
              name: "balanceOf",
              outputs: [
                  {
                      internalType: "uint256",
                      name: "",
                      type: "uint256"
                  }
              ],
              stateMutability: "view",
              type: "function"
          },
          {
              inputs: [],
              name: "totalSupply",
              outputs: [
                  {
                      internalType: "uint256",
                      name: "",
                      type: "uint256"
                  }
              ],
              stateMutability: "view",
              type: "function"
          }
      ],
      calls: {
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
        balanceOf: {
          methodName: 'balanceOf',
          methodParameters: ['0x1234...'],
        },
        // You can reference method calls however you'd like
        balanceOfFriend: {
          methodName: 'balanceOf',
          methodParameters: ['0x5678...'],
        },
        totalSupply: {
          methodName: 'totalSupply',
          methodParameters: [],
        },
        // ... more method calls
      },
    })


const {
  // Contains all contract results keyed to the contract call context name
  contracts,
  // The block number that the multicall was executed on
  // If calls were batched, this will be the block number of the last batch
  blockNumber,
  // The number of batches that were executed
  batchCount,
} = await multicall.call({
  // You can reference contract calls however you'd like
  uniswapToken: uniswapCallContext,
  // ... more contract contexts
});

// Easily access all results with full type safety
const uniswapResults = contracts.uniswapToken.results

const name = uniswapResults.name.value
const symbol = uniswapResults.symbol.value
const decimals = uniswapResults.decimals.value
const balance = uniswapResults.balanceOf.value
const balanceOfFriend = uniswapResults.balanceOfFriend.value
const totalSupply = uniswapResults.totalSupply.value
```

### Specifying Call Block Number

You can specify a block number in which to execute the multicall:

```typescript
const { contracts, blockNumber }: MulticallResults = await multicall.call({ contractCallContext }, {
  blockNumber: '14571050'
});
```

### Accessing Original Context Data

Each contract result has an `originContext` property that contains the original context data:

```typescript
const { contracts } = await multicall.call({
  uniswapToken: uniswapCallContext,
})

const { originContext, results } = contracts.uniswapToken

const {
  abi,
  contractAddress,
  calls: { balanceOf, balanceOfFriend, name, symbol, totalSupply },
} = originContext
```

### Attaching Custom Data

You can pass customData with each contract context to keep track of additional information:

```typescript
type ExtraContext = {
  foo: string
  bar: boolean
}

const contractCallContext = multicall.createCallContext<
    GlobalPositionContract,
    // Pass you custom data typings here
    ExtraContext
  >()({
    // ... other properties
    customData: {
      foo: 'fooValue',
      bar: true
    },
  })

const { contracts }: MulticallResults = await multicall.call({ contractCallContext });
const { foo, bar } = contracts.contractCallContext.originContext.customData

console.log(foo, bar);
```

### Overloaded methods

As the [official docs mention here](https://docs.ethers.io/v3/api-contract.html#prototype):

> Due to signature overloading, multiple functions can have the same name. The first function specified in the ABI will be bound to its name. To access overloaded functions, use the full typed signature of the functions (e.g. contract["foobar(address,uint256)"]).

So, when creating the contract call context, under the calls array property we should have that in mind and use the method signature rather than the method name.

```typescript
const contractCallContext =
    multicall.createCallContext<VirtualPrice.Contract>()({
      contractAddress: '0x19891DdF6F393C02E484D7a942d4BF8C0dB1d001',
      abi: [
        {
          inputs: [],
          name: 'getVirtualPrice',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'sentValue',
              type: 'uint256',
            },
          ],
          name: 'getVirtualPrice',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ],
      calls: {
        priceWithoutInputReference: {
          methodName: 'getVirtualPrice',
          methodParameters: [],
        },
        priceWithInputReference: {
          methodName: 'getVirtualPrice(uint256)',
          methodParameters: ['0xFFFFFFFFFFFFF'],
        },
      },
    })
```

## Multicall Provider

The `MulticallProvider` wraps a given provider and multicall for ease of use:

```typescript
const multicallProvider = new MulticallProvider({
  ethersProvider: provider,
});

// ... (setup contract calls)

const { results } = await multicallProvider.call({
  tokenContract: tokenCallContext,
  pairContract: pairCallContext,
});
```

### Custom Network and Multicall Contract Address

By default, the library uses the known multicall contract address `0xcA11bde05977b3631167028862bE2a173976CA11`.

```typescript
import { MulticallProvider } from '@multicall-toolkit/provider';

const multicallProvider = new MulticallProvider({
  ethersProvider: provider,
  customNetwork: {
    // Provide a custom multicall contract address for the corresponding network
    multicallAddress: '0x1234...',
    name: 'customNetwork',
  }
});
```

## Multicall Compatible Contracts

You can use contract classes for simplified interactions:

```typescript
const tokenContract = new Erc20Contract(
  { ethersProvider: provider },
  { address: uniswapTokenAddress }
);

const { blockNumber, results, originContext } =
    await tokenContract.call({
      // Manually specify the method call
      balanceOf: {
        methodName: 'balanceOf',
        methodParameters: [walletAddress],
      },
      // Or use helpers from the contract class
      otherBalanceOf: tokenContract.balanceOfCallContext(walletAddress)
      name: tokenContract.nameCallContext(),
      symbol: tokenContract.symbolCallContext(),
      totalSupply: tokenContract.totalSupplyCallContext(),
    })

console.log(results.balanceOf.value, results.otherBalanceOf.value, results.name.value, results.symbol.value, results.totalSupply.value);
```

## Batching ETH Balance Checks with Multicall3

The Multicall3Contract is particularly useful for checking ETH balances of multiple addresses in a single call:

```typescript
const multicall3 = new Multicall3Contract(
  { ethersProvider: provider },
  { address: MULTICALL3_ADDRESS }
);

// List of addresses to check balances for
const addresses = [
  '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  // ... more addresses
];

// Create call contexts for each balance check
const { blockNumber, results } = await multicall3.call({
  // Create unique keys for each balance check
  ...addresses.reduce((acc, address, index) => ({
    ...acc,
    [`balance${index}`]: multicall3.getEthBalanceCallContext(address)
  }), {})
});

// Process results into a more usable format
const balances = addresses.map((address, index) => ({
  address,
  balance: results[`balance${index}`].value,
  // Get block number when the check was performed
  blockNumber
}));

// Example output:
// [
//   { 
//     address: '0x742d...f44e',
//     balance: BigNumber { _hex: '0x1234...', _isBigNumber: true },
//     blockNumber: 12345678
//   },
//   ...
// ]
```

This is much more gas-efficient than making separate RPC calls for each balance check. You can also combine balance checks with other Multicall3 features in the same call:

```typescript
const { results } = await multicall3.call({
  // Balance checks
  ...addresses.reduce((acc, address, index) => ({
    ...acc,
    [`balance${index}`]: multicall3.getEthBalanceCallContext(address)
  }), {}),
  // Chain state checks
  blockNumber: multicall3.getBlockNumberCallContext(),
  gasPrice: multicall3.getBasefeeCallContext(),
  chainId: multicall3.getChainIdCallContext()
});

// Access results
const balances = addresses.map((address, index) => ({
  address,
  balance: results[`balance${index}`].value
}));
const currentBlock = results.blockNumber.value;
const currentGasPrice = results.gasPrice.value;
const currentChainId = results.chainId.value;
```

## Supported Networks

The below networks are supported by default. You may provide a `customNetwork` configuration to support additional networks and/or multicall contracts.

The common multicall address `0xcA11bde05977b3631167028862bE2a173976CA11`

| Chain Name | Chain ID | Multicall Address |
|------------|----------|-------------------|
| Arbitrum | 42161 | common |
| Arbitrum Rinkeby | 421611 | common |
| Arbitrum Sepolia | 421614 | common |
| Astar | 592 | common |
| Aurora | 1313161554 | common |
| Avalanche | 43114 | common |
| Avalanche Fuji | 43113 | common |
| Base | 8453 | common |
| Base Sepolia | 84532 | common |
| Blast | 81457 | common |
| Blast Sepolia | 168587773 | common |
| Boba | 288 | common |
| Bob | 60808 | common |
| BSC | 56 | common |
| BSC Testnet | 97 | common |
| Celo | 42220 | common |
| Celo Alfajores | 44787 | common |
| Cronos | 25 | common |
| Energi Mainnet | 39797 | 0xbD6706747a7B6C8868Cf48735f48C341ea386d07 |
| Ethereum Mainnet | 1 | common |
| Ethereum Holesky | 17000 | common |
| Ethereum Sepolia | 11155111 | common |
| Etherlite | 111 | 0x21681750D7ddCB8d1240eD47338dC984f94AF2aC |
| Evmos | 9001 | common |
| Evmos Testnet | 9000 | common |
| Fantom | 250 | common |
| Fantom Testnet | 4002 | common |
| Flare | 14 | common |
| Fuse | 122 | common |
| Godwoken | 71402 | common |
| Godwoken Testnet | 71401 | common |
| Harmony | 1666600000 | common |
| Heco | 128 | common |
| Klatyn | 8217 | common |
| KCC | 321 | common |
| Linea | 59144 | common |
| Linea Testnet | 59140 | common |
| Manta Pacific | 169 | common |
| Mantle | 5000 | common |
| Mantle Testnet | 5001 | common |
| Metis | 1088 | common |
| Milkomeda | 2001 | common |
| Mode | 34443 | common |
| Mode Testnet | 919 | 0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF |
| Moonbase Alpha Testnet | 1287 | common |
| Moonbeam | 1284 | common |
| Moonriver | 1285 | common |
| Optimism | 10 | common |
| Optimism Goerli | 420 | common |
| Optimism Sepolia | 11155420 | common |
| Oasis | 26863 | common |
| OKC | 66 | common |
| Polygon | 137 | common |
| Polygon Amoy | 80002 | common |
| Pulsechain | 369 | common |
| Pulsechain Testnet | 943 | common |
| RSK | 30 | common |
| RSK Testnet | 31 | common |
| Sapphire | 23294 | common |
| Scroll | 534352 | common |
| Scroll Sepolia | 534351 | common |
| Shibarium | 109 | 0xd1727fC8F78aBA7DD6294f6033D74c72Ccd3D3B0 |
| Songbird Canary Network | 19 | common |
| Thundercore | 108 | common |
| Thundercore Testnet | 18 | common |
| xDai | 100 | common |
| xDai Testnet | 10200 | common |
| zkEvm | 1101 | common |
| zkEvm Cardona | 2442 | common |
| zkSync Era | 324 | 0xF9cda624FBC7e059355ce98a31693d299FACd963 |
| zkSync Era Sepolia Testnet | 300 | 0xF9cda624FBC7e059355ce98a31693d299FACd963 |
| zkSync Era Testnet | 280 | 0xF9cda624FBC7e059355ce98a31693d299FACd963 |
| Zora | 7777777 | common |
| Zora Testnet | 999999999 | common |

## Tests

The whole repo is covered in tests output below.

```shell
Test Files  6 passed | 1 skipped (7)
Tests  38 passed | 12 skipped (50)
Start at  13:27:08
Duration  3.17s (transform 362ms, setup 0ms, collect 1.89s, tests 7.46s, environment 1ms, prepare 535ms)
```

## Related Toolkits

Check out my other projects and forks for blockchain development!

| Toolkit | Description |
|---------|-------------|
| [chain-toolkit](https://github.com/niZmosis/chain-toolkit) | Blockchain network management and configuration utilities |
| [abi-toolkit](https://github.com/niZmosis/abi-toolkit) | Smart contract ABI management and interaction utilities |
| [provider-toolkit](https://github.com/niZmosis/provider-toolkit) | Web3 provider management and configuration tools |
| [dex-toolkit](https://github.com/niZmosis/dex-toolkit) | A powerful and flexible toolkit designed for seamless integration with multiple decentralized exchanges (DEXs) across various blockchain networks |
| [transaction-toolkit](https://github.com/niZmosis/transaction-toolkit) | Transaction building, simulation, and management tools |
| [connector-toolkit](https://github.com/niZmosis/connector-toolkit) | Wallet connection and account management utilities |

## Issues

Please raise any issues in the [GitHub repository](https://github.com/niZmosis/multicall-toolkit/issues).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Check out the TODO.md file for a list of future features and improvements.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
