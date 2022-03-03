import React from "react";
import NumbersCounter from "./Components/NumbersCounter";

const Numbers = () => {
  const numberData = [
    {
      number: "100",
      desc: "Our Employee",
    },
    {
      number: "252",
      desc: "Paid Projects",
    },
    {
      number: "97",
      desc: "Target on this year",
    },
    {
      number: "178",
      desc: "Partnerships",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-center items-end bg-factoryImg h-[30rem] bg-no-repeat bg-cover bg-center w-full bg-red-200">
        <div className="container flex flex-row items-center justify-center pb-12 mx-auto">
          {numberData.map((item) => (
            <NumbersCounter number={item.number} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Numbers;
