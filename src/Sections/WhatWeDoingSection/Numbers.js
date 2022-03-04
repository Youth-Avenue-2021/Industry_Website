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
      <div className="flex flex-row justify-center items-end bg-fixed bg-factoryImg h-[38rem] md:h-[30rem] bg-no-repeat bg-cover bg-center w-full bg-red-200">
        <div className="flex flex-row flex-wrap items-start justify-center w-11/12 pb-12 mx-auto md:w-full md:container md:flex-nowrap">
          {numberData.map((item, index) => (
            <NumbersCounter key={index} number={item.number} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Numbers;
