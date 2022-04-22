
npm init -y
npm install --save-dev hardhat

npx hardhat

✔ What do you want to do? · Create an empty hardhat.config.js


npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

mkdir contracts
touch contracts/Token.sol

mkdir test
touch test/token.js
npx hardhat compile
npx hardhat test

npm install dotenv
touch .env
Enter URL (Rinkeby Infura) and PRIVATE_KEY

mkdir deployments
touch deployments/deplyToken.js
npx hardhat compile


(base) $ node -v
v12.22.12


Try deploying on Rinkeby

npx hardhat run deployments/deployToken.js --network rinkeby

Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0xEaFb635d7Df014D5Db125dA3A80A13Df8aa26738

npx hardhat verify --network rinkeby 0xEaFb635d7Df014D5Db125dA3A80A13Df8aa26738 "100000000000"