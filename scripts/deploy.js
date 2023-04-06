// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // Utility(Library)
  const Utility = await hre.ethers.getContractFactory("Utility");
  const utility = await Utility.deploy();
  await utility.deployed();
  console.log("Library deployed to : ", utility.address);

  // User
  const User = await hre.ethers.getContractFactory("User", {
    libraries: {
      Utility: utility.address,
    },
  });
  const user = await User.deploy();
  await user.deployed();
  console.log("User deployed to : ", user.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
