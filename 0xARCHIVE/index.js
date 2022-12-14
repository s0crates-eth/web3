// this is compied from the scripts files
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('NowhereNFTs');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    // Call the function.
    let txn = await nftContract.mintNowhereNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NNFT #1")
};
  
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};
  
mintButton.onclick = async () => {
    runMain();
    console.log("mint function");
};