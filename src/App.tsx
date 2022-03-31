import { MetaMaskInpageProvider } from '@metamask/providers';
import { Maybe } from '@metamask/providers/dist/utils';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {

  const [account, setAccount] = useState<string>(""); // state variable to set account.
  
  useEffect(() => {
    async function load() {
      const provider: MetaMaskInpageProvider = window.ethereum;

      if (typeof provider === undefined) {
        return;
      }
      const web3 = new Web3(Web3.givenProvider);
      
      const accounts = await web3.eth.requestAccounts();

      if (accounts !== undefined && accounts !== null) {
        if(accounts[0] !== undefined) {
          setAccount(accounts[0]);
        }
      }
    }
    
    load();
   }, []);
   
  return (
    <div className="App">
      <div>
       Your account is: {account}
     </div>
    </div>
  );
}

export default App;
