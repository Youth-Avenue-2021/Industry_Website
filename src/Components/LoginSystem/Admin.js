import { motion } from "framer-motion";
import { useContext, useState } from "react";
import LoginContext from "../../Context/LoginContext";
import InputComponent from "../InputComponents/InputComponent";
import SectionHeading from "../SectionHeading";
import AdminPanel from "./Components/AdminPanel";

const Admin = () => {
  const { userName, password, setUserName, setPassword } = useContext(LoginContext);
  const [userLogin, setUserLogin] = useState(false);
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

  const submitForm = (event) => {
    event.preventDefault();
    const credentials = { username: userName, password: password };
    if (credentials.username === process.env.REACT_APP_USERNAME && credentials.password === process.env.REACT_APP_PASSWORD) {
      setUserLogin(true);
    } else {
      setUserName("Wrong credentials");
      setPassword("Wrong credentials");
    }
  };

  const inputBox = [
    {
      type: "text",
      placeholder: "Username",
    },
    {
      type: "password",
      placeholder: "Password",
    },
  ];
  return userLogin ? (
    <>
      <SectionHeading heading="Admin Panel" />
      <AdminPanel />
    </>
  ) : (
    <div className="flex flex-col items-center justify-center w-full h-[80vh]">
      <SectionHeading heading={"Login"} />
      <form onSubmit={submitForm} className="w-11/12 md:w-3/12">
        {inputBox.map((item, index) => (
          <InputComponent key={index} index={index} class_name="inputStyles" type={item.type} placeholder={item.placeholder} login={true} />
        ))}
        <motion.input variants={animations.submitBtn} initial="initial" animate="animate" exit={"exit"} type="submit" value="Send Message" className="w-full p-2 my-5 text-white duration-200 bg-gray-900 outline-none cursor-pointer focus:ring focus:ring-gray-600 focus:ring-offset-2" />
      </form>
    </div>
  );
};

export default Admin;
