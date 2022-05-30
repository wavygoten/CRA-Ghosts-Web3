import React, { useContext } from "react";
import { Context } from "../context/context";
import { utils, Contract, Signer, providers, ethers } from "ethers";
import { abi } from "../utils/abi";
type Props = {};
declare const window: any;

const Mint = ({}: Props) => {
  const { mint } = useContext(Context);

  return (
    <div className="mint-wrapper bg-maindark py-12">
      <div className="mint-container flex justify-center">
        <button
          className="mint-button py-2 px-4 bg-navlight text-navdark rounded-md outline-none opacity-90 hover:opacity-100 duration-150 ease-in-out"
          onClick={mint}
        >
          Mint
        </button>
      </div>
    </div>
  );
};

export default Mint;
