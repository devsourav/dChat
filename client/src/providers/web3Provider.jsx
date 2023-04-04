import { ethers } from 'ethers'
import User from '../artifacts/contracts/User.sol/User.json'

const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

export const Web3Provider = async (walletProvider, actions) => {
  if (walletProvider) {
    window.ethereum.on('chainChanged', () => {
      window.location.reload()
    })

    window.ethereum.on('accountsChanged', () => {
      window.location.reload()
    })

    await walletProvider.send('eth_requestAccounts', [])
    const signer = walletProvider.getSigner()
    const address = await signer.getAddress()

    const contact = new ethers.Contract(contractAddress, User.abi, signer)
    // console.log(address)
    // console.log(contact)
    // console.log(walletProvider)
    actions.setAccount(address)
    actions.setContract(contact)
    actions.setProvider(walletProvider)
  } else {
    alert('Metamask is not installed')
  }
}
