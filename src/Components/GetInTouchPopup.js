import ContactForm from "./FormComponent/ContactForm";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

const GetInTouchPopup = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    showPopUp ? (document.querySelector("body").style.overflowY = "hidden") : (document.querySelector("body").style.overflowY = "auto");
  }, [showPopUp]);

  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 15000);
  }, []);

  const ref = useOnclickOutside(() => setShowPopUp(false));

  const animations = {
    mainDiv: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
      transition: { duration: 0.3, delay: 0 },
    },
    formDiv: {
      hidden: { top: 0, opacity: 0 },
      show: { opacity: 1, top: 0 },
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter={false}>
      {showPopUp && (
        <motion.div viewport={{ once: true }} variants={animations.mainDiv} animate="show" initial="hidden" exit="hidden" transition="transition" className="fixed top-0 z-40 flex flex-row items-center justify-center w-full h-screen bg-black/80">
          <motion.div viewport={{ once: true }} variants={animations.formDiv} ref={ref} animate="show" initial="hidden" exit="hidden" transition="transition" className="fixed flex bg-yellowColor flex-col !top-auto justify-center items-center w-[85%] md:w-1/3 px-5 md:px-14 py-8 z-50">
            <h2 className="my-2 text-4xl text-center md:text-5xl">Get In Touch</h2>
            <span className="inline-block w-20 h-1 my-3 duration-200 rounded group-hover:w-36 bg-whiteSmoke"></span>
            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetInTouchPopup;
