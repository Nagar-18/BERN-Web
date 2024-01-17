import React from 'react'
import Web3 from 'web3'
import ABI from './ABI.json'
import Navigation from './Navigation'
const Wallet = ({saveState}) => {

    const createWallet=async()=>{
    //    console.log(Web3)
       try {
        if(window.ethereum)
        {
           
             const web3= new Web3(window.ethereum);
        const contractAddress = "0xfa12b55d54e4b2ddab1b27473414e155901b918f";
       const contractAccount= await window.ethereum.request({method:"eth_requestAccounts"})
const contract =  new web3.eth.Contract(ABI, contractAddress);
console.log(saveState)
saveState(web3,contract,contractAccount[0]);
        }
        else  throw new Error
        
       } catch (error) {
           new Error("erro")
       }
    }

  return (
    <>
    <Navigation/>
    <div>

        <button onClick={createWallet}>Add Wallet</button>
      
    </div></>
  )
}

export default Wallet
