import React from "react";
import Block from "./Block";

const MultipleBlocks = () => {
  const blocks = [
    {
      title: "Our Aim",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae",
    },
    {
      title: "About Company",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae",
    },
    {
      title: "Our Aim",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae",
    },
  ];
  return (
    <div className="container flex flex-col items-center justify-center mx-auto -mt-20 md:flex-row">
      {blocks.map((block, index) => (
        <Block title={block.title} key={index} index={index} desc={block.desc} color={index === 1 ? "white" : "yellowColor"} />
      ))}
    </div>
      
  );
};

export default MultipleBlocks;
