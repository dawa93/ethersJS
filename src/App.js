import "./App.css";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletCard from "./WalletCard";

const YourComponent = () => {
  return (
    <div>
      <WalletCard />
    </div>
  );
};

export default YourComponent;

// function App() {
//   const [provider, setProvider] = useState(null);
//   const [network, setNetwork] = useState("");

//   useEffect(() => {
//     const initializeProvider = async () => {
//       console.log("window.ethereum", window.ethereum);
//       if (window.ethereum) {
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         setProvider(provider);
//       }
//     };

//     initializeProvider();
//   }, []);

//   useEffect(() => {
//     const getNetwork = async () => {
//       if (provider) {
//         const network = await provider.getNetwork();
//         setNetwork(network.name);
//       }
//     };

//     getNetwork();
//   }, [provider]);

//   return (
//     <div>
//       <h1>Ethers.js and React Integration</h1>
//       {/* Your application code goes here */}

//       <div>
//         <h1>Ethers.js and React Integration</h1>
//         <p>Connected to network: {network}</p>
//         {/* Your application code goes here */}
//       </div>
//     </div>
//   );
// }

// export default App;

// ask staff muffin tragic weapon old boring hen correct entire effort ready
