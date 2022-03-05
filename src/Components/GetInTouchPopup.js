import React, { useEffect, useState } from "react";
import ContactForm from "./FormComponent/ContactForm";
import { AnimatePresence, motion } from "framer-motion";

const GetInTouchPopup = ({ activeState, activeStateFn }) => {
  useEffect(() => {
    activeState ? (document.querySelector("body").style.overflowY = "hidden") : (document.querySelector("body").style.overflowY = "auto");
  }, [activeState]);
  const activeFalse = () => {
    activeStateFn(false);
    console.log("active false");
  };
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {/* <motion.div layout animate={{ opacity: 1, top: 20 }} initial={{ top: 0 }} exit={{ top: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="fixed flex flex-row justify-center items-center w-full h-screen mx-auto z-50"> */}
      <motion.div layout animate={{ opacity: 1, top: 20 }} initial={{ top: 0 }} exit={{ top: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="fixed top-0 mx-auto container mx-auto flex justify-center group items-center flex-col z-50 w-1/3 py-5 px-16 shadow-2xl bg-yellowColor">
        <h2 className="text-5xl my-3">Get In Touch</h2>
        <span className="inline-block w-20 h-1 my-5 group-hover:w-36 duration-200 rounded bg-whiteSmoke"></span>
        <ContactForm />
      </motion.div>
      {/* </motion.div> */}
      <motion.div animate={{ opacity: 0.8 }} exit={{ opacity: 0 }} onClick={() => activeFalse} transition={{ duration: 0.4, delay: 0 }} className="fixed top-0 z-40 justify-center w-full h-screen bg-black opacity-0"></motion.div>
    </AnimatePresence>
  );
};

export default GetInTouchPopup;
