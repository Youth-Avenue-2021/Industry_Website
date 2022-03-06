import React from "react";

const NumbersCounter = ({ number, desc }) => {
  return (
    <div className="md:w-[12%] w-[35%] m-4 md:mx-10 py-2 md:my-5 text-white">
      <h2 className="text-5xl text-white">{number}</h2>
      <p className="text-lg text-center md:text-xl text-white/80">{desc}</p>
    </div>
  );
};

export default NumbersCounter;
