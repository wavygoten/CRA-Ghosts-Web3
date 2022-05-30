import React from "react";
import Connect from "./Connect";
interface Props {}

const Navbar = (props: Props) => {
  return (
    <section className="navbar">
      <div className="navbar-wrapper w-screen duration-100 ease-in-out dark:bg-navdark  bg-navlight dark:text-navlight text-navdark p-2">
        <div className="navbar-container flex flex-row flex-wrap md:flex-nowrap whitespace-nowrap p-2 justify-center md:justify-items-start items-center">
          <div className="title flex-1 mx-4  py-1 select-none">
            Grim Ghostly Ghosts
          </div>
          <div className="list mx-8 hidden lg:flex flex-row flex-nowrap items-center self-center justify-end">
            <div className="mx-8 py-1 cursor-pointer">About</div>
            <div className="mx-8 py-1 cursor-pointer">Litepaper</div>{" "}
            <div className="mx-8 py-1 cursor-pointer">Team</div>
          </div>
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
