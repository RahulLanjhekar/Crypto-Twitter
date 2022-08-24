import { useEffect, useState } from 'react';
import './App.css';
import Feed from './Feed';
import Leftside from './Leftside';
import Rightside from './Rightside';

function App() {
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');

  // Will connect wallet through metamask when cliked on Connect Wallet Button
  const connectWallet = async () => {
    
    try {
      const {ethereum} = window;

      if(!ethereum){
        alert("Metamask is not Connected!");
        return;
      }
  
      const chainId = await ethereum.request({method: 'eth_chainId'});
      console.log('Connected to chain: ', chainId);

      const rinkebyId = '0x4';

      if(chainId !== rinkebyId){
        alert("Please select Rinkeby Testnet on Metamask!");
        setCorrectNetwork(false);
        return;
      } else setCorrectNetwork(true);

      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setCurrentAccount(accounts[0]);
      console.log('Found Account: ', accounts[0]);

      
    } catch (error) {
      console.log("The system is not connected with metamask!", error);
    }

  }

  const checkAccountandNetwork = async () => {
    const {ethereum} = window;
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if(accounts.length) setCurrentAccount(accounts[0]);

    const chainId = await ethereum.request({method: 'eth_chainId'});

    const rinkebyId = '0x4';

    if(chainId !== rinkebyId){
      setCorrectNetwork(false);
      return;
    } else setCorrectNetwork(true);
  }

  useEffect(() => {
    checkAccountandNetwork();
  }, [])
  
  

  return (
    <div className="App">
      {
        <div className='main-div'>
          <Leftside />
          {currentAccount === '' ? (<div className="feed"><button className='button' onClick={connectWallet}>Connect Wallet!</button></div>) : correctNetwork ? (
            <Feed />
          ) : (
            <div className="feed"><h2>Please select Rinkeby Network and Reload!</h2></div>
          )}
          <Rightside />
        </div>
      }
    </div>
  );
}

export default App;
