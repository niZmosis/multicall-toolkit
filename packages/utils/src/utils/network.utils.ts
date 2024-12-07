/**
 * Represents supported blockchain networks and their corresponding chain IDs.
 */
export enum Networks {
  arbitrum = 42161,
  arbitrumRinkeby = 421611,
  arbitrumSepolia = 421614,
  astar = 592,
  aurora = 1313161554,
  avalanche = 43114,
  avalancheFuji = 43113,
  base = 8453,
  baseSepolia = 84532,
  blast = 81457,
  blastSepolia = 168587773,
  boba = 288,
  bob = 60808,
  bsc = 56,
  bscTestnet = 97,
  celo = 42220,
  celoAlfajores = 44787,
  cronos = 25,
  energiMainnet = 39797,
  ethereumMainnet = 1,
  ethereumHolesky = 17000,
  ethereumSepolia = 11155111,
  etherlite = 111,
  evmos = 9001,
  evmosTestnet = 9000,
  fantom = 250,
  fantomTestnet = 4002,
  flare = 14,
  fuse = 122,
  godwoken = 71402,
  godwokenTestnet = 71401,
  harmony = 1666600000,
  heco = 128,
  klatyn = 8217,
  kovan = 42,
  kovanOptimism = 69,
  kcc = 321,
  linea = 59144,
  lineaTestnet = 59140,
  mantaPacific = 169,
  mantle = 5000,
  mantleTestnet = 5001,
  metis = 1088,
  milkomeda = 2001,
  mode = 34443,
  modeTestnet = 919,
  moonbaseAlphaTestnet = 1287,
  moonbeam = 1284,
  moonriver = 1285,
  optimism = 10,
  optimismGoerli = 420,
  optimismSepolia = 11155420,
  oasis = 26863,
  okc = 66,
  polygon = 137,
  polygonAmoy = 80002,
  pulsechain = 369,
  pulsechainTestnet = 943,
  rsk = 30,
  rskTestnet = 31,
  sapphire = 23294,
  scroll = 534352,
  scrollSepolia = 534351,
  shibarium = 109,
  songbirdCanaryNetwork = 19,
  thundercore = 108,
  thundercoreTestnet = 18,
  xdai = 100,
  xDaiTestnet = 10200,
  zkEvm = 1101,
  zkEvmCardona = 2442,
  zkSyncEra = 324,
  zkSyncEraSepoliaTestnet = 300,
  zkSyncEraTestnet = 280,
  zora = 7777777,
  zoraTestnet = 999999999,
}

/**
 * Array of all supported chain IDs for multicall functionality.
 */
export const multicallChainIds = Object.values(Networks).filter(
  (value): value is number => typeof value === 'number',
)

/**
 * Get the contract based on the network
 *
 * @param network The network
 * @param customMulticallContractAddress The multicall custom contract address
 *
 * @returns The contract address
 */
export function getContractBasedOnNetwork(
  network: Networks,
  customMulticallContractAddress?: string,
): string {
  // If they have overridden the multicall custom contract address then use that
  if (customMulticallContractAddress) {
    return customMulticallContractAddress
  }

  switch (network) {
    case Networks.arbitrum:
    case Networks.arbitrumRinkeby:
    case Networks.arbitrumSepolia:
    case Networks.astar:
    case Networks.aurora:
    case Networks.avalanche:
    case Networks.avalancheFuji:
    case Networks.base:
    case Networks.baseSepolia:
    case Networks.blast:
    case Networks.blastSepolia:
    case Networks.boba:
    case Networks.bob:
    case Networks.bsc:
    case Networks.bscTestnet:
    case Networks.celo:
    case Networks.celoAlfajores:
    case Networks.cronos:
    case Networks.ethereumMainnet:
    case Networks.ethereumHolesky:
    case Networks.ethereumSepolia:
    case Networks.evmos:
    case Networks.evmosTestnet:
    case Networks.fantom:
    case Networks.fantomTestnet:
    case Networks.flare:
    case Networks.fuse:
    case Networks.godwoken:
    case Networks.godwokenTestnet:
    case Networks.harmony:
    case Networks.heco:
    case Networks.klatyn:
    case Networks.kovan:
    case Networks.kovanOptimism:
    case Networks.kcc:
    case Networks.linea:
    case Networks.lineaTestnet:
    case Networks.mantaPacific:
    case Networks.mantle:
    case Networks.mantleTestnet:
    case Networks.metis:
    case Networks.milkomeda:
    case Networks.mode:
    case Networks.moonbaseAlphaTestnet:
    case Networks.moonbeam:
    case Networks.moonriver:
    case Networks.optimism:
    case Networks.optimismGoerli:
    case Networks.optimismSepolia:
    case Networks.oasis:
    case Networks.okc:
    case Networks.polygon:
    case Networks.polygonAmoy:
    case Networks.pulsechain:
    case Networks.pulsechainTestnet:
    case Networks.rsk:
    case Networks.rskTestnet:
    case Networks.sapphire:
    case Networks.scroll:
    case Networks.scrollSepolia:
    case Networks.songbirdCanaryNetwork:
    case Networks.thundercore:
    case Networks.thundercoreTestnet:
    case Networks.xdai:
    case Networks.xDaiTestnet:
    case Networks.zkEvm:
    case Networks.zkEvmCardona:
    case Networks.zora:
    case Networks.zoraTestnet:
      // https://etherscan.io/address/0xca11bde05977b3631167028862be2a173976ca11#code
      return '0xcA11bde05977b3631167028862bE2a173976CA11'
    case Networks.modeTestnet:
      return '0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF'
    case Networks.etherlite:
      return '0x21681750D7ddCB8d1240eD47338dC984f94AF2aC'
    case Networks.energiMainnet:
      return '0xbD6706747a7B6C8868Cf48735f48C341ea386d07' // Multicall2
    case Networks.zkSyncEra:
    case Networks.zkSyncEraTestnet:
    case Networks.zkSyncEraSepoliaTestnet:
      return '0xF9cda624FBC7e059355ce98a31693d299FACd963'
    case Networks.shibarium:
      return '0xd1727fC8F78aBA7DD6294f6033D74c72Ccd3D3B0'

    default:
      throw new Error(
        `Network - ${network} doesn't have a multicall contract address defined. Please check your network or deploy your own contract on it.`,
      )
  }
}
