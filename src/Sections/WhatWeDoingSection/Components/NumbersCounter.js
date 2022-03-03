import React from "react";

const NumbersCounter = ({ number, desc }) => {
  return (
    <div className="w-[12%] mx-10 my-5 text-white">
      <h2 className="text-5xl">{number}</h2>
      <p className="text-xl text-center">{desc}</p>
    </div>
  );
};

export default NumbersCounter;
