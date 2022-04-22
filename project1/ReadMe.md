
npm init -y
npm install --save-dev hardhat
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
npx compile
npx hardhat run deployments/deployToken.js --network rinkeby

Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0x796f6187B5d799836D2302Bd128d35B194F5034c




Contract verification steps

npm install --save-dev @nomiclabs/hardhat-etherscan
require("@nomiclabs/hardhat-etherscan");

Update the config file for the etherscan API key and import h
To Verify the contract run the following:

npx hardhat verify --network rinkeby 0x796f6187B5d799836D2302Bd128d35B194F5034c "100000"

Verified contract -> https://rinkeby.etherscan.io/address/0x796f6187b5d799836d2302bd128d35b194f5034c#code

I was able to manually verify the above contract by copy pasting the .sol file in etherscan. But the CLI for Verification didn't work.


Attemp2 of Deploying
Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0x8Ba3dD99C6a082c4f480896CbC49EaE5E016649b


npx hardhat verify --network rinkeby 0x8Ba3dD99C6a082c4f480896CbC49EaE5E016649b 100000

Attemp2 was already verified because it matched the byteCode of the attemp1.

Attempt3: 
Added a new function in .sol file to change the bytecode

To learn more about which versions of Node.js are supported go to https://hardhat.org/nodejs-versions
Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0x592C25F98D4f6289878aEd5C5e95409eC6E29F00
Now this contract needs verification


npx hardhat verify --network rinkeby 0x592C25F98D4f6289878aEd5C5e95409eC6E29F00 100000

Deploy to Kovan

(base) $ npx hardhat run deployments/deployToken.js --network kovan
You are using a version of Node.js that is not supported by Hardhat, and it may work incorrectly, or not work at all.

Please, make sure you are using a supported version of Node.js.

To learn more about which versions of Node.js are supported go to https://hardhat.org/nodejs-versions
Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0xC523DD81f9BAe0fA2172baDB2F31E8a10C197A60


npx hardhat verify --network kovan 0xC523DD81f9BAe0fA2172baDB2F31E8a10C197A60 "100000"




Redeployed the contract without the need to input any arguments
Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0xf501d9d2a5200d4237421835Cc25Ea245a571E3a
(base) $ npx hardhat verify --network kovan 0xf501d9d2a5200d4237421835Cc25Ea245a571E3a
https://kovan.etherscan.io/address/0xf501d9d2a5200d4237421835Cc25Ea245a571E3a#code



Redeployed with the initial supply argument
Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0x31F4E2df6674FC9c6Ce3b55E49EC82C144403408

npx hardhat verify --network kovan 0x31F4E2df6674FC9c6Ce3b55E49EC82C144403408 "100000000000"



Node version to be used is 12
brew install nvm
nvm install 12
nvm use 12
nvm alias default 12
npm install npm --global # Upgrade npm to the latest version

(base) $ node -v
v12.22.12


Try deploying on Rinkeby

npx hardhat run deployments/deployToken.js --network rinkeby

Address of the deployer is ---> 0xee1d176ff577Ac5eD1606AC750E8D6422eb11216
Token Contract Address ---> 0xEaFb635d7Df014D5Db125dA3A80A13Df8aa26738

npx hardhat verify --network rinkeby 0xEaFb635d7Df014D5Db125dA3A80A13Df8aa26738 "100000000000"