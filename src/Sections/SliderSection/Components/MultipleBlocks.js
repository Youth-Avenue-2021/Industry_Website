import React from "react";
import Block from "./Block";

const MultipleBlocks = () => {
  const blocks = [
    {
      title: "About Our Work",
      desc: "The SHREE BAI INDUSTRIES conveyor is designed to remove chips and debris from coolant used in machine tools applications.",
    },
    {
      title: "About Company",
      desc: "The SHREE BAI INDUSTRIES Conveyor is available in a variety configuration to be adaptable to a wide Array of machine tools applications",
    },
    {
      title: "Why Us?",
      desc: "Ever since the inception of our firm, we have managed to satisfy our clients owing to the quality services and products that we offer. ",
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
