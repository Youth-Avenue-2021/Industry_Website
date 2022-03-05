import InputComponent from "../InputComponents/InputComponent";
import { AnimatePresence, motion } from "framer-motion";

const ContactForm = () => {
  const animations = {
    input: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.1 } },
    },
    submitBtn: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.3 } },
    },
  };
  const submitForm = (event) => {
    event.preventDefault();
  };
  const inputBox = [
    {
      type: "text",
      placeholder: "Full Name",
    },
    {
      type: "email",
      placeholder: "abc@xyz.com",
    },
    {
      type: "number",
      placeholder: "+91-123456789",
    },
  ];
  return (
    // <AnimatePresence exitBeforeEnter>
    <form onSubmit={submitForm} className="flex flex-col items-center justify-center w-full">
      {inputBox.map((item, index) => (
        <InputComponent key={index} index={index} class_name="inputStyles" type={item.type} placeholder={item.placeholder} />
      ))}
      <motion.textarea variants={animations.input} initial="initial" animate="animate" exit={"exit"} className="w-full h-[8rem] inputStyles" placeholder="Write a message"></motion.textarea>
      <input variants={animations.input} initial="initial" animate="animate" exit={"exit"} type="submit" value="Send Message" className="w-full p-3 my-2 text-white duration-200 outline-none cursor-pointer focus:ring focus:ring-gray-600 focus:ring-offset-2 bg-gray-900" />
    </form>
    // </AnimatePresence>
  );
};

export default ContactForm;
