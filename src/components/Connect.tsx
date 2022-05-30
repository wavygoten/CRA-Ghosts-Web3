import React, { useContext } from "react";
import { Context } from "../context/context";
declare const window: any;

const Connect = () => {
  const { init, status } = useContext(Context);

  return (
    <>
      <button
        className="connect-btn py-2 px-4 bg-navlight text-navdark rounded-md outline-none opacity-90 hover:opacity-100 duration-150 ease-in-out"
        onClick={init}
      >
        {status}
      </button>
    </>
  );
};

export default Connect;
