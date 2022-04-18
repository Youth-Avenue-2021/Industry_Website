import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "../../Components/SectionHeading";
import ImageBox from "./ImageBox";
import Numbers from "./Numbers";

const WhatWeDoing = () => {
  const animations = {
    content: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 2.1 } },
    },
  };
  return (
    <>
      <div className="flex flex-col items-center mx-auto text-center">
        <SectionHeading heading="This Is What We Doing?" />
        <motion.p viewport={{ once: true }} variants={animations.content} initial="initial" animate="animate" exit="exit" className="w-4/5 md:w-3/5">
          We Have Our Expansion Planning Also We Provide CNC Machine Guard,Electric Panel etc With Best services. Our primary product is sheet metal work an we will be providing for lifetime our primary product our primary product is used in making boxes etc. Our company works with jyoti CNC group. We do not tailor to niche market and we have quick tern ability. We do not have a single percentage in our business for repeat business, we have unique product what we provide to our customer we have domestic and international customer who works with us from last so many years. Right now our company is working with Indian company. We have started to deal in international market also we have specialized equipment & manufacturing process in our company.       
        </motion.p>
        <ImageBox />
        <Numbers />
      </div>
    </>
  );
};

export default WhatWeDoing;
