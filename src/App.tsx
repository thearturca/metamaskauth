import { MetaMaskInpageProvider } from '@metamask/providers';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';
import LoginComponent from './components/login.component/login.component';
import NoProviderComponent from './components/no-provider.component/no-provider.component';

function App() {

  const login = async () => {
    const resAccounts: string[] = await web3.eth.requestAccounts();
    setAccount(resAccounts[0]);
    return;
  }

  const [account, setAccount] = useState<string>("");
  const provider: MetaMaskInpageProvider = window.ethereum;
  const web3 = new Web3(Web3.givenProvider);
  
  const OutputComponent: React.ReactNode = provider === undefined ? <NoProviderComponent /> : <LoginComponent onClick={ login } account={ account }/>;
  
  useEffect(() => {
    const checkIsSignedIn = async () => {
      const accounts: string[] = await web3.eth.getAccounts();
      if (accounts.length !== 0) {
        setAccount(accounts[0]);
        return;
      }
    };

    if(provider !== undefined) {
      checkIsSignedIn();
    }
   }, []);
   
  return (
    <div className="App">
        { OutputComponent }
    </div>
  );
}

export default App;
