import { AnimatePresence, motion } from "framer-motion";

const InputComponent = ({ class_name, type, placeholder, index }) => {
  const animations = {
    initial: { opacity: 0, y: -20 },
    exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: index * 0.1 + 0.7 } },
  };
  return <motion.input variants={animations} viewport={{ once: true }} initial="initial" animate="animate" exit={"exit"} className={class_name} type={type} placeholder={placeholder} required />;
};

export default InputComponent;
