import React from "react";
import workers from "../../Assets/workers1.jpg";

const ImageBox = () => {
  return (
    <>
      <div className="w-5/6 md:w-[70%] container mx-auto mt-24 bg-white img-BoxShadow -mb-60 z-30">
        <div className="flex flex-col items-center justify-center md:flex-row group">
          <div className="w-full overflow-hidden md:w-3/5">
            <img src={workers} alt="ShreeBai Industries" className="w-full h-full duration-700 group-hover:scale-110 grayscale-0 md:grayscale md:group-hover:grayscale-0" />
          </div>
          <div className="w-4/5 px-2 py-5 text-left md:w-2/5 md:py-0 md:px-10 group">
            <h2 className="mt-2 text-2xl text-left md:mt-auto">What We Are Providing</h2>
            <span className="inline-block w-20 h-1 my-2 duration-700 rounded md:my-5 group-hover:w-52 bg-yellowColor"></span>
            <p className="my-0.5 text-left text-lg md:my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis corrupti dolores voluptatum veritatis natus at quos earum beatae obcaecati, neque possimus soluta! Laborum nostrum officiis consequuntur? Non, possimus tempore.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBox;
