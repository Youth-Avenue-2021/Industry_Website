import React from "react";
import Block from "./Block";

const MultipleBlocks = () => {
  return (
    <div className="container flex flex-row items-center justify-center mx-auto -mt-20">
      <Block title="Our Aim" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae" color="yellowColor" />
      <Block title="About Company" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae" color="white" />
      <Block title="Our Aim" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae" color="yellowColor" />
    </div>
  );
};

export default MultipleBlocks;
