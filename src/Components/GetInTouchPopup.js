import ContactForm from "./FormComponent/ContactForm";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import LoginContext from "../Context/LoginContext";

const GetInTouchPopup = () => {
    const { showPopupBox, setShowPopupBox } = useContext(LoginContext);

    useEffect(() => {
        showPopupBox ? (document.querySelector("body").style.overflowY = "hidden") : (document.querySelector("body").style.overflowY = "auto");
    }, [showPopupBox]);

    const ref = useOnclickOutside(() => setShowPopupBox(false));

    const animations = {
        mainDiv: {
            hidden: { opacity: 0 },
            show: { opacity: 1 },
            transition: { duration: 0.3, delay: 0 },
        },
        formDiv: {
            hidden: { y: -50, opacity: 0 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            exit: { y: -50, opacity: 0, transition: { duration: 0.2 } },
        },
    };

    return (
        <AnimatePresence exitBeforeEnter={false}>
            {showPopupBox && (
                <motion.div variants={animations.mainDiv} animate="show" initial="hidden" exit="hidden" transition="transition" className="fixed top-0 z-40 flex flex-row items-center justify-center w-full h-screen bg-black/80">
                    <motion.div variants={animations.formDiv} ref={ref} animate="show" initial="hidden" exit="exit" transition="transition" className="fixed flex bg-yellowColor flex-col !top-auto justify-center items-center w-[85%] md:w-1/3 px-5 md:px-14 py-8 z-50">
                        <span onClick={() => setShowPopupBox(false)} className="cursor-pointer absolute top-0 right-0 px-6 py-3 bg-gray-900">
                            <i className="fa-solid text-yellowColor text-2xl fa-xmark"></i>
                        </span>
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
