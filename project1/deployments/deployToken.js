const { ethers } = require("hardhat");

const main = async () => {


    // let wei = ethers.utils.parseEther('1000.0');
    // console.log(wei.toString(10));
    const initialSupply = ethers.utils.parseEther("100000");
    // console.log(initialSupply.toString(10))
    const [deployer] = await ethers.getSigners();
    console.log(`Address of the deployer is ---> ${deployer.address}`);

    const tokenFactory = await ethers.getContractFactory("Token");
    const contract = await tokenFactory.deploy(initialSupply);


    console.log(`Token Contract Address ---> ${contract.address}`)



}

main()
    .then(()=> process.exit(0))
    .catch((error)=> {
        console.error(error);
        process.exit(1);
    })