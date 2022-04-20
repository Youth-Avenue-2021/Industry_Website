import React from 'react'

const ImageBox = ({image}) => {
  return (
    <>
    <div className=''>
       <p className='text-5xl mt-10'>CEO OF SHREEBAI INDUSTRIES</p> 
    </div>
    <div className="w-[20rem] h-[20rem] mx-auto mt-12">
    <img src={image} className="object-cover w-full h-full shadow-slate-700 shadow-2xl duration-500 hover:scale-105" alt="Ceo Of ShreeBai Industries" />
  </div>
    </>
    );
};

export default ImageBox;