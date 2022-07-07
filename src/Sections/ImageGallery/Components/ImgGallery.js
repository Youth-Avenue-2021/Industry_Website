import React from 'react';
// import Popup from "./Ups";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { useEffect } from 'react';


const ImgGallery = () => {
  useEffect(() => {
    document.title = "shreebai Industries || Products";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {/* <div className="text-gray-600 body-font ">
        <div className="container py-12 mx-1">
          <div className=" -m-7 ">
            <div className="p-4 md:w-[25rem] md:h-[31rem] w-8/12 h-[50rem] md:shadow-none shadow-lg  shadow-slate-400  md:m-0 m-auto md:ml-20">
              <div className="h-full p-4 backdrop-blur-2xl border border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-52 md:h-36 md:w-full border-2 border-[#FDE047] h-96 w-full rounded-xl object-cover object-center" src={img} alt="blog" />
                <div className="p-6 ">
                  <h1 className="title-font md:text-2xl text-5xl font-medium text-black mb-1">{title}</h1>
                  <div className="w-20 h-1 bg-yellow-300 rounded mb-4"></div>
                  <p className="leading-relaxed md:text-lg text-black text-4xl mb-3">{desc}</p>
                  <div className="flex items-center flex-wrap ">
                    <Link to="/contact">
                      <motion.button className="p-2 md:text-base text-2xl" initial="hidden" animate="show">View More</motion.button>
                    </Link>
                    <button className="p-2 bg-amber-300 rounded-xl"> 
                      {link}
                    </button>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}





    </>
  );
};

export default ImgGallery;