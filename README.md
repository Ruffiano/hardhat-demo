npx hardhat compile
npx hardhat test

- Deployment: 
  local:  npx hardhat run scripts/deploy.js --network localhost
  ropsten: npx hardhat run scripts/deploy.js --network ropsten

- Get hardhat local node ip-address and accounts:
   npx hardhat node 