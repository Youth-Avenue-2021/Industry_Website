import { motion } from "framer-motion";
import LoginContext from "../../Context/LoginContext";
import { useContext } from "react";

const InputComponent = ({ class_name, type, placeholder, index, login }) => {
  const { fullName, setFullName, phNumber, setPhNumber, emailId, setEmailId } = useContext(LoginContext);
  const { userName, setUserName, password, setPassword } = useContext(LoginContext);

  const animations = {
    initial: { opacity: 0, y: -20 },
    exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: index * 0.1 + 0.7 } },
  };
  return !login ? (
    <motion.input value={type === "text" ? fullName : type === "number" ? phNumber : type === "email" ? emailId : {}} onChange={(event) => (type === "text" ? setFullName(event.target.value) : type === "number" ? setPhNumber(event.target.value) : type === "email" ? setEmailId(event.target.value) : {})} variants={animations} viewport={{ once: true }} initial="initial" animate="animate" exit={"exit"} className={class_name} type={type} placeholder={placeholder} required />
  ) : (
    <>
      <motion.input value={type === "text" ? userName : type === "password" ? password : {}} onChange={(event) => (type === "text" ? setUserName(event.target.value) : type === "password" ? setPassword(event.target.value) : {})} variants={animations} viewport={{ once: true }} initial="initial" animate="animate" exit={"exit"} className={class_name} type={type} placeholder={placeholder} required />
    </>
  );
};

export default InputComponent;
