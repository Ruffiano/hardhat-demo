/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL = "https://ropsten.infura.io/v3/2b1758a74cf249a598f13e357bb058dc";
const PRIVATE_KEY = '9be0a9ca225206d063a0f46671369d8bf61b9b742dc15877a9d595327a97d941';

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
