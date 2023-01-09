require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
    },
  },
};