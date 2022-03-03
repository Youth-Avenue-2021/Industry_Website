import React from "react";
import workers from "../../Assets/workers1.jpg";
import SectionHeading from "../../Components/SectionHeading";

const ImageBox = () => {
  return (
    <>
      <div className="w-[70%] container mx-auto mt-24 bg-white img-BoxShadow -mb-60 z-40">
        <div className="flex flex-row items-center justify-center">
          <div className="w-3/5">
            <img src={workers} alt="ShreeBai Industries" className="w-full h-full" />
          </div>
          <div className="w-2/5 px-10 py-5">
            <h2 className="text-2xl text-left">We Are Provide Professional Service</h2>
            <span className="inline-block w-20 h-1 my-5 rounded bg-yellowColor"></span>
            <p className="my-4 text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis corrupti dolores voluptatum veritatis natus at quos earum beatae obcaecati, neque possimus soluta! Laborum nostrum officiis consequuntur? Non, possimus tempore.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBox;
