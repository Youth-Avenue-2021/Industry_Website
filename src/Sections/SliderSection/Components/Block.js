import { motion } from "framer-motion";

const Block = ({ title, logo, desc, color, index }) => {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: index * 0.1 + 0.7 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.4, delay: index * 0.1 + 0.2 } },
  };
  return (
    <motion.div whileInView="animate" viewport={{ once: true }} variants={animations} initial="initial" animate="animate" exit="exit" className="relative group z-20 flex flex-col duration-300 hover:scale-105 items-center justify-evenly w-3/4 my-4 md:my-auto md:w-1/5 p-4 mx-10 text-center min-h-[17rem] odd:bg-white bg-yellowColor shadow-lg md:block-boxShadow">
      <i className="duration-200 fa-solid group-hover:scale-150 fa-bolt-lightning"></i>
      <h2 className="text-2xl">{title}</h2>
      <span className={`w-1/4 h-1 group-hover:w-2/5 duration-300 bg-${color}`}></span>
      <p className="">{desc}</p>
    </motion.div>
  );
};

export default Block;
