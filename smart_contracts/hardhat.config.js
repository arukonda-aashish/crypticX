//https://eth-sepolia.g.alchemy.com/v2/ASt1Cfs9vUsXu-CRHpabPLoL4duTSW70
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ASt1Cfs9vUsXu-CRHpabPLoL4duTSW70',
      accounts: ['a4eac03fa93c3f68f7fa14864bfbb8f6bec5fd2ea44adcb84f46658a4b6f57dc'],
    },
  },
};  