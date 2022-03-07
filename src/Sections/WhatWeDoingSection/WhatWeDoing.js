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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur earum magni, cupiditate odit nobis sit asperiores? Voluptatum sed accusantium earum iste, culpa id eius sapiente maiores inventore atque odio.
        </motion.p>
        <ImageBox />
        <Numbers />
      </div>
    </>
  );
};

export default WhatWeDoing;
