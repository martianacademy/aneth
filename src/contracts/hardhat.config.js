require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BSC_MAINNET_KEY = process.env.BSC_MAINNET_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: {
      bscTestnet: BSC_MAINNET_KEY,
      polygon: POLYGON_API_KEY,
      myvee: "abc",
      mainnet: "fb394902-fd60-4a94-aa35-729ac1148662",
    },
    customChains: [
      {
        network: "myvee",
        chainId: 7878,
        urls: {
          apiURL: "https://myveescan.com/api",
          browserURL: "https://myveescan.com.io",
        },
      },
      {
        network: "bitgert",
        chainId: 64668,
        urls: {
          apiURL: "http://testnet-explorer.brisescan.com/api",
          browserURL: "https://testnet-explorer.brisescan.com",
        },
      },
    ],
  },

  defaultNetwork: "polygon",
  networks: {
    hardhat: {
      gas: "auto",
    },

    ganache: {
      url: "HTTP://127.0.0.1:7545",
      chainId: 1337,
      accounts: [PRIVATE_KEY],
      gas: "auto",
    },

    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [PRIVATE_KEY],
    },
    myvee: {
      url: "https://rpc.myveescan.com/",
      chainId: 7878,
      accounts: [PRIVATE_KEY],
    },

    bitgert: {
      url: "https://testnet-rpc.brisescan.com",
      chainId: 64668,
      accounts: [PRIVATE_KEY],
    },

    bscTestnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545/",
      chainId: 97,
      accounts: [PRIVATE_KEY],
    },
    polygon: {
      url: "https://rpc.ankr.com/polygon",
      chainId: 137,
      accounts: [PRIVATE_KEY],
      gasPrice: 200000000000,
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: [PRIVATE_KEY],
    },
  },
};
