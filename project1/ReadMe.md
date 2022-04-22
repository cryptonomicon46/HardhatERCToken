
npm init -y
npm install --save-dev hardhat

npx hardhat

✔ What do you want to do? · Create an empty hardhat.config.js


npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

npm install @nomiclabs/hardhat-etherscan
npm install dotenv


npx hardhat compile
npx hardhat test

npx hardhat run deployments/deployToken.js --network rinkeby

Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0x29718500896a9a8c2006677617e485f199Bf73c1


npx hardhat verify --network rinkeby 0x29718500896a9a8c2006677617e485f199Bf73c1 "100000000000"

(base) $ npx hardhat verify --network rinkeby 0x29718500896a9a8c2006677617e485f199Bf73c1 "100000000000"
Nothing to compile
Successfully submitted source code for contract
contracts/Token.sol:Token at 0x29718500896a9a8c2006677617e485f199Bf73c1
for verification on the block explorer. Waiting for verification result...

We tried verifying your contract Token without including any unrelated one, but it failed.
Trying again with the full solc input used to compile and deploy it.
This means that unrelated contracts may be displayed on Etherscan...

Successfully submitted source code for contract
contracts/Token.sol:Token at 0x29718500896a9a8c2006677617e485f199Bf73c1
for verification on the block explorer. Waiting for verification result...

Error in plugin @nomiclabs/hardhat-etherscan: The contract verification failed.
Reason: Fail - Unable to verify

