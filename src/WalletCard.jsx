import { ethers, formatUnits } from "ethers";
import React, { useState } from "react";

export default function WalletCard() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => accountChangedHandler(result[0]));
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = async (address) => {
    console.log("ethers", ethers);
    await window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => setUserBalance(formatUnits(balance)));
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div>
      <h4>{"Connect to MetaMask using window.ethereum methods"}</h4>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div>
        <h3>Address : {defaultAccount}</h3>
      </div>
      <div>
        <h3>Balance: {userBalance}</h3>
      </div>

      {errorMessage}
    </div>
  );
}
