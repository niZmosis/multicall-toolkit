# ethereum-multicall

[![npm version](https://badge.fury.io/js/ethereum-multicall.svg)](https://badge.fury.io/js/ethereum-multicall)
![downloads](https://img.shields.io/npm/dw/ethereum-multicall)

A lightweight library for interacting with the [`Multicall3`](https://github.com/mds1/multicall) smart contract, allowing multiple smart contract constant function calls to be grouped into a single call and the results aggregated into a single result. This reduces the number of separate JSON RPC requests that need to be sent over the network if using a remote node like Infura, and provides the guarantee that all values returned are from the same block. The block number which the multicall was executed on is also returned along with the aggregated results.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Import Examples](#import-examples)
- [Initialization](#initialization)
  - [Ethers](#ethers)
  - [Web3](#web3)
  - [ChainId/URL](#chainidurl)
  - [Custom Network](#custom-network)
- [Usage](#usage)
  - [Overloaded Methods](#overloaded-methods)
  - [Ethers Usage Example](#ethers-usage-example)
  - [Web3 Usage Example](#web3-usage-example)
  - [Specifying Call Block Number](#specifying-call-block-number)
  - [Attaching Custom Data](#attaching-custom-data)
  - [Try Aggregate](#try-aggregate)
  - [Custom JSON-RPC Provider Usage](#custom-json-rpc-provider-usage)
- [Advanced Usage](#advanced-usage)
  - [MulticallProvider](#multicallprovider)
  - [Contract Factory](#contract-factory)
- [Supported Networks](#supported-networks)
- [Issues](#issues)
- [Thanks And Support](#thanks-and-support)
- [License](#license)

## Features

🚀 **Lightweight**: Minimal dependencies for efficient performance.

🔧 **Flexible**: Works with Ethers and Web3 providers.

🔢 **Type-safe**: Fully written in TypeScript for compile-time support.

🧩 **Modular**: Use it with various blockchain interactions and libraries.

🔍 **Detailed Results**: Get comprehensive return data, including success status and decoded values.

⏳ **Block-Specific Queries**: Ability to query at specific block numbers.

🔁 **Try Aggregate**: Option to continue execution even if some calls fail.

🏭 **Contract Factories**: Simplified interaction with standard contracts like ERC20, ERC721, Wrapped, and more.

💎 **Open Source and Community-Driven**: Join the community on GitHub to contribute, report issues, or request features.

## Installation

Choose the package that best fits your needs. Dependencies will be installed automatically.

### For using Contract Factories (e.g., Erc20ContractFactory)

This installation includes all functionalities:

```bash
npm install @ethereum-multicall/contracts
# or
yarn add @ethereum-multicall/contracts
# or
pnpm add @ethereum-multicall/contracts
# or
bun add @ethereum-multicall/contracts
```

### For using MulticallProvider

If you only need the MulticallProvider to wrap your existing provider:

```bash
npm install @ethereum-multicall/provider
# or
yarn add @ethereum-multicall/provider
# or
pnpm add @ethereum-multicall/provider
# or
bun add @ethereum-multicall/provider
```

### For using Multicall class directly

If you only want to use the Multicall class directly:

```bash
npm install @ethereum-multicall/core
# or
yarn add @ethereum-multicall/core
# or
pnpm add @ethereum-multicall/core
# or
bun add @ethereum-multicall/core
```

Note: Installing any of these packages will automatically install the necessary dependencies. For example:

- Installing `@ethereum-multicall/contracts` will also install `core`, `provider`, `utils`, and `types`.
- Installing `@ethereum-multicall/provider` will install `core`, `utils`, and `types`.
- Installing `@ethereum-multicall/core` will install `utils` and `types`.

Choose the installation method that best suits your project's needs and package manager preference.

## Import examples

### JavaScript (ES3)

```js
var ethereumMulticall = require('ethereum-multicall')
```

### JavaScript (ES5 or ES6)

```js
const ethereumMulticall = require('ethereum-multicall')
```

### JavaScript (ES6) / TypeScript

```js
import {
  Multicall,
  type Results,
  type ContractContext,
} from 'ethereum-multicall'
```

## Initialization

There are multiple ways to initialize the library

### Ethers

```typescript
import { Multicall } from 'ethereum-multicall';

const provider = new ethers.providers.JsonRpcProvider(
  'https://some.local-or-remote.node:8546',
  1,
)

const multicall = new Multicall({
  ethersProvider: provider,
  tryAggregate: true,
});
```

### Web3

```typescript
import { Multicall } from 'ethereum-multicall';

const web3 = new Web3('https://some.local-or-remote.node:8546');

const multicall = new Multicall({
  web3Provider: web3,
  tryAggregate: true,
});
```

### ChainId/URL

Will use Ethers behind the scenes

```typescript
import { Multicall } from 'ethereum-multicall';

const multicall = new Multicall({
  chainId: 1,
  customRpcUrl: 'https://some.local-or-remote.node:8546',
  tryAggregate: true,
});
```

### Custom Network

By default, the library uses the known multicall contract address `0xcA11bde05977b3631167028862bE2a173976CA11`.

You can specify a custom address in the `customNetwork` option.

```typescript
import { Multicall } from 'ethereum-multicall';

const multicall = new Multicall({
  tryAggregate: true,
  customNetwork: {
    multicallContractAddress: '0x1234...',
    name: 'NetworkName'
  }

  // You could pass an Ethers or Web3 provider here as well
  chainId: 1,
  customRpcUrl: 'https://some.local-or-remote.node:8546',
});
```

## Usage

### Overloaded methods

As the [official docs mentions here](https://docs.ethers.io/v3/api-contract.html#prototype):

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

### Ethers Usage Example

```typescript
import { Multicall, Results, ContractContext } from 'ethereum-multicall';
import { ethers } from 'ethers';

const provider = ethers.getDefaultProvider();
const multicall = new Multicall({ ethersProvider: provider, tryAggregate: true });

const contractCallContext =
    multicallProvider.createCallContext<VirtualPrice.Contract>()({
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
        // ... more contract calls
      },
    })

const { contracts }: MulticallResults = await multicall.call({
  contractCallContext,
  // ... more contract contexts
});

console.log(contracts);
```

### Web3 Usage Example

```typescript
import { Multicall, Results, ContractContext } from 'ethereum-multicall';
import Web3 from 'web3';

const web3 = new Web3('https://some.local-or-remote.node:8546');
const multicall = new Multicall({ web3Provider: web3, tryAggregate: true });

// ... (similar setup as Ethers example)

const { contracts }: MulticallResults = await multicall.call({ contractCallContext });

console.log(contracts);
```

### Specifying Call Block Number

You can specify a block number for your multicall:

```typescript
const { contracts, blockNumber }: MulticallResults = await multicall.call({ contractCallContext }, {
  blockNumber: '14571050'
});
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
    unknown,
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

### Try Aggregate

Enable `tryAggregate` to continue execution even if some calls fail:

```typescript
const multicall = new Multicall({ nodeUrl: 'https://some.node:8546', tryAggregate: true });
```

### Custom JSON-RPC Provider Usage

```typescript
const multicall = new Multicall({ nodeUrl: 'https://some.local-or-remote.node:8546', tryAggregate: true });

// ... (setup contract call contexts)

const results: MulticallResults = await multicall.call(contractCallContext);
```

## Advanced Usage

### MulticallProvider

The `MulticallProvider` allows for more complex multicall operations:

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

### Contract Factory

You can use contract factories for simplified interactions:

```typescript
const tokenContractFactory = new Erc20ContractFactory(
  { ethersProvider: provider },
  { address: uniswapTokenAddress }
);

const { blockNumber, results, originContext } =
    await tokenContractFactory.call({
      balanceOf: {
        methodName: 'balanceOf',
        methodParameters: [walletAddress],
      },
      otherBalanceOf: tokenContractFactory.balanceOfCallContext(walletAddress)
      name: tokenContractFactory.nameCallContext(),
      symbol: tokenContractFactory.symbolCallContext(),
      totalSupply: tokenContractFactory.totalSupplyCallContext(),
    })

console.log(results.balanceOf.value, results.otherBalanceOf.value, results.name.value, results.symbol.value, results.totalSupply.value);
```

## Supported Networks

The below networks are supported by default. You may provide a custom network configuration to support additional networks and/or multicall contracts.

| Chain Name                 | Chain ID   |
|----------------------------|------------|
| Amoy                       | 80002      |
| Arbitrum                   | 42161      |
| Arbitrum Sepolia           | 421614     |
| Astar                      | 592        |
| Aurora                     | 1313161554 |
| Avalanche                  | 43114      |
| Avalanche Fuji             | 43113      |
| Base                       | 8453       |
| Base Testnet               | 84531      |
| Blast                      | 81457      |
| Blast Sepolia              | 168587773  |
| Boba                       | 288        |
| Bob                        | 60808      |
| BSC                        | 56         |
| BSC Testnet                | 97         |
| Celo                       | 42220      |
| Celo Alfajores             | 44787      |
| Cronos                     | 25         |
| Energi Mainnet             | 39797      |
| Energi Testnet             | 49797      |
| Ethereum Mainnet           | 1          |
| Ethereum Sepolia           | 11155111   |
| Etherlite                  | 111        |
| Evmos                      | 9001       |
| Evmos Testnet              | 9000       |
| Fantom                     | 250        |
| Fantom Testnet             | 4002       |
| Flare                      | 14         |
| Fuse                       | 122        |
| Godwoken                   | 71402      |
| Godwoken Testnet           | 71401      |
| Harmony                    | 1666600000 |
| Heco                       | 128        |
| Klaytn                     | 8217       |
| Kovan                      | 42         |
| Kovan Optimism             | 69         |
| KCC                        | 321        |
| Linea                      | 59144      |
| Linea Testnet              | 59140      |
| Manta Pacific              | 169        |
| Mantle                     | 5000       |
| Mantle Testnet             | 5001       |
| Metis                      | 1088       |
| Milkomeda                  | 2001       |
| Mode                       | 34443      |
| Mode Testnet               | 919        |
| Moonbase Alpha Testnet     | 1287       |
| Moonbeam                   | 1284       |
| Moonriver                  | 1285       |
| Optimism                   | 10         |
| Optimism Goerli            | 420        |
| Optimism Sepolia           | 11155420   |
| Oasis                      | 26863      |
| OKC                        | 66         |
| Polygon                    | 137        |
| Polygon Mumbai             | 80001      |
| Polygon zkEVM              | 1101       |
| Polygon zkEVM Testnet      | 1442       |
| Pulsechain                 | 369        |
| Pulsechain Testnet         | 943        |
| Rinkeby Arbitrum           | 421611     |
| RSK                        | 30         |
| RSK Testnet                | 31         |
| Sapphire                   | 23294      |
| Scroll                     | 534352     |
| Scroll Sepolia             | 534351     |
| Shibarium                  | 109        |
| Songbird Canary Network    | 19         |
| Thundercore                | 108        |
| Thundercore Testnet        | 18         |
| xDai                       | 100        |
| xDai Testnet               | 10200      |
| zkSync Era                 | 324        |
| zkSync Era Sepolia Testnet | 300        |
| zkSync Era Testnet         | 280        |
| Zora                       | 7777777    |
| Zora Testnet               | 999999999  |

## Issues

Please raise any issues in the [GitHub repository](https://github.com/joshstevens19/ethereum-multicall/issues).

## Thanks And Support

This package is brought to you by [Josh Stevens](https://github.com/joshstevens19). If you want to support the development of this and other packages, or if this package has saved you a lot of development time, donations are welcome. By donating, you are supporting the maintenance and development of tools that make the Ethereum ecosystem better.

### Direct donations

Direct donations (any token accepted) - Eth address: `0x699c2daD091ffcF18f3cd9E8495929CA3a64dFe1`

### Github sponsors

[Sponsor me](https://github.com/sponsors/joshstevens19) via GitHub using fiat money.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
