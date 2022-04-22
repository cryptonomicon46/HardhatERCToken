/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('@nomiclabs/hardhat-ethers');
 require('@nomiclabs/hardhat-waffle');
 require("@nomiclabs/hardhat-etherscan");
 
 
 require("dotenv").config();
 const private_key = process.env.PRIVATE_KEY;
 
 const endpoint_rinkeby = process.env.URL_RINKEBY;
 const endpoint_kovan = process.env.URL_KOVAN;
 const API_KEY = process.env.ETH_API_KEY;
 module.exports = {
   solidity: {
       version: "0.8.0"
     },
 
 
 networks: {
     rinkeby: {
         url: endpoint_rinkeby,
         accounts: [`0x${private_key}`]
         // accounts: [privateKey]
         },
 
 
     kovan: {
         url: endpoint_kovan,
         // accounts: [`0x${private_key}`]
         accounts: [private_key]
 
         }
     },
     etherscan: {
         apiKey: {
 
             rinkeby: API_KEY,
             kovan:  API_KEY}
 
     },
     
 };
 