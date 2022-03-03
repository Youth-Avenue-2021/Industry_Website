import React from "react";

const Block = ({ title, logo, desc, color }) => {
  return (
    <div className="z-50 flex flex-col items-center justify-evenly w-1/6 p-4 mx-10 text-center min-h-[17rem] odd:bg-white bg-yellowColor block-boxShadow">
      <i className="fas fa-home"></i>
      <h2 className="text-2xl">{title}</h2>
      <span className={`w-1/4 h-1 bg-${color}`}></span>
      <p className="">{desc}</p>
    </div>
  );
};

export default Block;
