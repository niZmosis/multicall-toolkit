**Documentation v3.0.0** • [**Docs**](packages.md)

***

# ethereum-multicall

[![npm version](https://badge.fury.io/js/ethereum-multicall.svg)](https://badge.fury.io/js/ethereum-multicall)
![downloads](https://img.shields.io/npm/dw/ethereum-multicall)

A lightweight library for interacting with the [`Multicall3`](https://github.com/mds1/multicall) smart contract, allowing multiple smart contract constant function calls to be grouped into a single call and the results aggregated into a single result. This reduces the number of separate JSON RPC requests that need to be sent over the network if using a remote node like Infura, and provides the guarantee that all values returned are from the same block. The block number which the multicall was executed on is also returned along with the aggregated results.

## Table of Contents

- [Features](#features)
- [Supported Libraries](#supported-libraries)
- [Packages](#packages)
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
- [Tests](#tests)
- [Issues](#issues)
- [Thanks And Support](#thanks-and-support)
- [Contributing](#contributing)
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

## Supported Libraries

- Web3.js
- Ethers.js

## Packages

| Package | Description |
| --- | --- |
| [`@ethereum-multicall/core`](/packages/core) | Core module for interacting with the Multicall contract. |
| [`@ethereum-multicall/types`](/packages/types) | Type definitions for the entire toolkit. |
| [`@ethereum-multicall/utils`](/packages/utils) | A collection of helper functions and utilities. |
| [`@ethereum-multicall/provider`](/packages/provider) | A collection of helper functions and utilities. |
| [`@ethereum-multicall/contracts`](/packages/contracts) | A set of classes of common ABIs for seamless Multicall interaction, including ERC20, ERC777, ERC721, ERC1155, and Wrapped. |

## Installation

Choose the package that best fits your needs. Dependencies will be installed automatically.

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

### For using MulticallProvider

If you want the MulticallProvider to wrap your existing provider:

```bash
npm install @ethereum-multicall/provider
# or
yarn add @ethereum-multicall/provider
# or
pnpm add @ethereum-multicall/provider
# or
bun add @ethereum-multicall/provider
```

### For using Contract Factories (e.g., Erc20ContractFactory)

If you want to use the Contract Factories for seamless Multicall interaction:

```bash
npm install @ethereum-multicall/contracts
# or
yarn add @ethereum-multicall/contracts
# or
pnpm add @ethereum-multicall/contracts
# or
bun add @ethereum-multicall/contracts
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

The below networks are supported by default. You may provide a `customNetwork` configuration to support additional networks and/or multicall contracts.

The common multicall address `0xcA11bde05977b3631167028862bE2a173976CA11`

| Chain Name                 | Chain ID   | Multicall Address |
|----------------------------|------------|-------------------|
| Amoy                       | 80002      | common |
| Arbitrum                   | 42161      | common |
| Arbitrum Sepolia           | 421614     | common |
| Astar                      | 592        | common |
| Aurora                     | 1313161554 | common |
| Avalanche                  | 43114      | common |
| Avalanche Fuji             | 43113      | common |
| Base                       | 8453       | common |
| Base Testnet               | 84531      | common |
| Blast                      | 81457      | common |
| Blast Sepolia              | 168587773  | common |
| Boba                       | 288        | common |
| Bob                        | 60808      | common |
| BSC                        | 56         | common |
| BSC Testnet                | 97         | common |
| Celo                       | 42220      | common |
| Celo Alfajores             | 44787      | common |
| Cronos                     | 25         | common |
| Energi Mainnet             | 39797      | common |
| Energi Testnet             | 49797      | common |
| Ethereum Mainnet           | 1          | common |
| Ethereum Sepolia           | 11155111   | common |
| Etherlite                  | 111        | 0x21681750D7ddCB8d1240eD47338dC984f94AF2aC |
| Evmos                      | 9001       | common |
| Evmos Testnet              | 9000       | common |
| Fantom                     | 250        | common |
| Fantom Testnet             | 4002       | common |
| Flare                      | 14         | common |
| Fuse                       | 122        | common |
| Godwoken                   | 71402      | common |
| Godwoken Testnet           | 71401      | common |
| Harmony                    | 1666600000 | common |
| Heco                       | 128        | common |
| Klaytn                     | 8217       | common |
| Kovan                      | 42         | common |
| Kovan Optimism             | 69         | common |
| KCC                        | 321        | common |
| Linea                      | 59144      | common |
| Linea Testnet              | 59140      | common |
| Manta Pacific               | 169        | common |
| Mantle                     | 5000       | common |
| Mantle Testnet             | 5001       | common |
| Metis                      | 1088       | common |
| Milkomeda                  | 2001       | common |
| Mode                       | 34443      | common |
| Mode Testnet               | 919        | 0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF |
| Moonbase Alpha Testnet     | 1287       | common |
| Moonbeam                   | 1284       | common |
| Moonriver                  | 1285       | common |
| Optimism                   | 10         | common |
| Optimism Goerli            | 420        | common |
| Optimism Sepolia           | 11155420   | common |
| Oasis                      | 26863      | common |
| OKC                        | 66         | common |
| Polygon                    | 137        | common |
| Polygon Mumbai             | 80001      | common |
| Polygon zkEVM              | 1101       | common |
| Polygon zkEVM Testnet      | 1442       | common |
| Pulsechain                 | 369        | common |
| Pulsechain Testnet         | 943        | common |
| Rinkeby Arbitrum           | 421611     | common |
| RSK                        | 30         | common |
| RSK Testnet                | 31         | common |
| Sapphire                   | 23294      | common |
| Scroll                     | 534352     | common |
| Scroll Sepolia             | 534351     | common |
| Shibarium                  | 109        | 0xd1727fC8F78aBA7DD6294f6033D74c72Ccd3D3B0 |
| Songbird Canary Network    | 19         | common |
| Thundercore                | 108        | common |
| Thundercore Testnet        | 18         | common |
| xDai                       | 100        | common |
| xDai Testnet               | 10200      | common |
| zkSync Era                 | 324        | 0xF9cda624FBC7e059355ce98a31693d299FACd963 |
| zkSync Era Sepolia Testnet | 300        | 0xF9cda624FBC7e059355ce98a31693d299FACd963 |
| zkSync Era Testnet         | 280        | 0xF9cda624FBC7e059355ce98a31693d299FACd963 |
| Zora                       | 7777777    | common |
| Zora Testnet               | 999999999  | common |

## Tests

The whole repo is covered in tests output below:

Dex Version: V2

```shell
Test Files  6 passed | 1 skipped (7)
Tests  38 passed | 12 skipped (50)
Start at  13:27:08
Duration  3.17s (transform 362ms, setup 0ms, collect 1.89s, tests 7.46s, environment 1ms, prepare 535ms)
```

Dex Version: V3

```shell
// TODO
```

## Issues

Please raise any issues in the [GitHub repository](https://github.com/joshstevens19/ethereum-multicall/issues).

## Thanks And Support

This package is brought to you by [Josh Stevens](https://github.com/joshstevens19). If you want to support the development of this and other packages, or if this package has saved you a lot of development time, donations are welcome. By donating, you are supporting the maintenance and development of tools that make the Ethereum ecosystem better.

### Direct donations

Direct donations (any token accepted) - Eth address: `0x699c2daD091ffcF18f3cd9E8495929CA3a64dFe1`

### Github sponsors

[Sponsor me](https://github.com/sponsors/joshstevens19) via GitHub using fiat money.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Check out the TODO.md file for a list of future features and improvements.

## License

This project is licensed under the ISC License - see the [LICENSE](_media/LICENSE) file for details.
