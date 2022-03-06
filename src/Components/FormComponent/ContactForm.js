import InputComponent from "../InputComponents/InputComponent";
import { motion } from "framer-motion";
import LoginContext from "../../Context/LoginContext";
import { useContext, useState } from "react";
import Loading from "../Loading";

const ContactForm = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DOMAIN = process.env.REACT_APP_DOMAIN;

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { message, setMessage, fullName, setFullName, phNumber, setPhNumber, emailId, setEmailId, setShowPopupBox } = useContext(LoginContext);

  const submitForm = (event) => {
    event.preventDefault();
    setLoading(true);

    const userData = { name: fullName, contact: phNumber, email: emailId, message: message };

    fetch(`${DOMAIN}/api/user/register?ApiKey=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then(() => {
        setLoading(false);
        setFormSubmitted(true);
        setShowPopupBox(false);
        setFullName("");
        setPhNumber("");
        setEmailId("");
        setMessage("");
      })
      .catch(() => console.log("Error"));
  };
  const animations = {
    input: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3, delay: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.1 } },
    },
    submitBtn: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3, delay: 0.4 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.3 } },
    },
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
    <form onSubmit={submitForm} method="POST" className="flex flex-col items-center justify-center w-full">
      {inputBox.map((item, index) => (
        <InputComponent key={index} index={index} class_name="inputStyles" type={item.type} placeholder={item.placeholder} />
      ))}
      <motion.textarea
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        variants={animations.input}
        initial="initial"
        animate="animate"
        exit={"exit"}
        className="w-full h-[8rem] inputStyles"
        placeholder="Write a message"
      ></motion.textarea>
      <motion.button onBlur={() => setFormSubmitted(false)} type="submit" variants={animations.submitBtn} initial="initial" animate="animate" exit={"exit"} className="w-full p-2 my-2 text-white duration-200 bg-gray-900 outline-none cursor-pointer focus:ring focus:ring-gray-600 focus:ring-offset-2">
        {formSubmitted ? "Response Recorded" : loading ? <Loading /> : "Send Message"}
      </motion.button>
      {/* <motion.input variants={animations.submitBtn} initial="initial" animate="animate" exit={"exit"} type="submit" value="Send Message" className="w-full p-2 my-2 text-white duration-200 bg-gray-900 outline-none cursor-pointer focus:ring focus:ring-gray-600 focus:ring-offset-2" /> */}
    </form>
    // </AnimatePresence>
  );
};

export default ContactForm;
