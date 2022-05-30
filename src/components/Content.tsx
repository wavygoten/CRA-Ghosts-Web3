import React from "react";
import Countdown from "./Countdown";
import Mint from "./Mint";

interface Props {}

const Content = (props: Props) => {
  return (
    <section className="content">
      <Countdown />
      <Mint />
    </section>
  );
};

export default Content;
