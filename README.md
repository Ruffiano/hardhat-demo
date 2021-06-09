- Set Project:
```
npm init -y
npm install -D hardhat
```
- Create hardhat project base:
```
npx hardhat  
```

```
npm install -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai   
```

- Crete Solidity smart contract

```
npx hardhat compile
```
- Crete unit-test test/test.js

```
npx hardhat test
```

- Local deployment: 

```
npx hardhat run scripts/deploy.js --network localhost
```

- Ropsten deployment:

```
npx hardhat run scripts/deploy.js --network ropsten
```

- Get hardhat local node ip-address and accounts:
```
npx hardhat node 
```