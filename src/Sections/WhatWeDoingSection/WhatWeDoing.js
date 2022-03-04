import React from "react";
import SectionHeading from "../../Components/SectionHeading";
import ImageBox from "./ImageBox";
import Numbers from "./Numbers";

const WhatWeDoing = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-auto text-center">
        <SectionHeading heading="This Is What We Doing?" />
        <p className="w-4/5 md:w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur earum magni, cupiditate odit nobis sit asperiores? Voluptatum sed accusantium earum iste, culpa id eius sapiente maiores inventore atque odio.</p>
        <ImageBox />
        <Numbers />
      </div>
    </>
  );
};

export default WhatWeDoing;
