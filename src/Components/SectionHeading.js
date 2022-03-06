import { motion } from "framer-motion";

const SectionHeading = ({ heading }) => {
  const animations = {
    heading: {
      initial: { opacity: 0, y: -50 },
      exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    },
    line: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6 } },
    },
  };
  return (
    <>
      <div className="mt-20 mb-5 text-center">
        <motion.h2 whileInView="animate" viewport={{ once: true }} variants={animations.heading} initial="initial" animate="animate" exit="exit" className="w-full text-4xl leading-[3.2rem] text-center md:leading-none">
          {heading}
        </motion.h2>
        <motion.span whileInView="animate" viewport={{ once: true }} variants={animations.line} initial="initial" animate="animate" exit="exit" className="inline-block w-20 h-1 my-5 rounded bg-yellowColor"></motion.span>
      </div>
    </>
  );
};

export default SectionHeading;
