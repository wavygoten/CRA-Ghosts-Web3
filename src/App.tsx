import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Context } from "./context/context";
import { utils, ethers } from "ethers";
import { abi } from "./utils/abi";

declare const window: any;

function App() {
  const [status, setStatus] = React.useState<string | undefined>(
    "Connect to MetaMask"
  );
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    ""
  );
  const [address, setAddress] = React.useState<string | undefined>("");
  const contractAddress = "";

  // const genSig = () => {
  //   if (address) {
  //     let message = utils.solidityKeccak256(
  //       ["address", "address"],
  //       [address, contractAddress]
  //     );
  //     let hashed = utils.solidityKeccak256(
  //       ["string", "bytes32"],
  //       ["\x19Ethereum Signed Message:\n32", message]
  //     );
  //     return hashed;
  //   }
  //   return;
  // };
  const mint = async () => {
    init();
    try {
      if (typeof window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const iface = new utils.Interface(abi);
        const tx = {
          from: await signer.getAddress(),
          to: contractAddress,
          value: utils.parseEther("0.02"),
          nonce: await provider.getTransactionCount(
            await signer.getAddress(),
            "latest"
          ),
          data: iface.encodeFunctionData("mint", [1]),
        };
        await signer.call(tx).then(async (res: any) => {
          if (res !== "0x") {
            alert(await hex_to_ascii(res.substr(138)));
          } else {
            console.log("No Error, Initiating transaction");
            await signer.sendTransaction(tx).then(async (txn: any) => {
              console.log(`https://rinkeby.etherscan.io/tx/${txn?.hash}`);
            });
          }
        });
      } else {
        throw new Error("No injected web3 found");
      }
    } catch (error: any) {
      console.error(error);
    }
  };
  const init = async () => {
    const _ = await UseWeb3();
    setAddress(_?.address);
    setStatus(_?.status);
    setErrorMessage(_?.error);
  };

  React.useEffect(() => {
    const __ = async () => {
      const _ = await UseWeb3();
      setAddress(_?.address);
      setStatus(_?.status);
      setErrorMessage(_?.error);
    };
    // uncomment after development
    __();
  }, [address, errorMessage, status]);

  return (
    <Context.Provider
      value={{
        init: init,
        status: status,
        address: address,
        errorMessage: errorMessage,
        contractAddress: contractAddress,
        mint: mint,
      }}
    >
      <Navbar />
      <Content />
    </Context.Provider>
  );

  async function UseWeb3() {
    try {
      if (window.ethereum) {
        // Ask User permission to connect to Metamask
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          // dispatchMM(true);
          return {
            address: accounts[0],
            status: `${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
            error: "",
          };
        } catch (err) {
          console.log(err);
          return {
            address: "",
            status: "Connect to MetaMask",
            error: "Connect to MetaMask",
          };
        }
      } else if (window.web3) {
        setErrorMessage("");
        return {
          address: "",
          status: "",
          error: "",
        };
        // dispatchMM(true);
      } else {
        // dispatchMM(false);
        setErrorMessage(
          "Non-Ethereum browser detected. Please install MetaMask plugin"
        );
        return;
      }

      // ...
    } catch (err) {
      console.log(err);
      setErrorMessage(
        "Some error occured, Please try refreshing the page using ctrl+R"
      );
    }
  }
  function hex_to_ascii(str1: any) {
    var hex = str1.toString();
    var str = "";
    for (var n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
  }
}

export default App;
