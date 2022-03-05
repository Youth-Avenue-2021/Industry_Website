import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import img from "../Assets/img.png";
// import img1 from "../Assets/img1.jpg";
// import img2 from "../Assets/img2.jpg";
// import img3 from "../Assets/img3.jpg";
import image1 from "../../../Assets/1.jpg";
// import image2 from "../../../Assets/2.jpg";
import image3 from "../../../Assets/3.jpg";
import image4 from "../../../Assets/4.jpg";
import image5 from "../../../Assets/5.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SliderIntro = () => {
  const content = [
    { title: "SHREEBAI INDUSTRY", description: "Combine Technology for Better Quality", image: image1 },
    // { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image2 },
    { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image3 },
    { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image4 },
    { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image5 },
  ];

  const animations = {
    heading: {
      initial: { opacity: 0, top: -100 },
      exit: { opacity: 0, top: -100, transition: { duration: 0.5 } },
      animate: { opacity: 1, top: 0, transition: { duration: 0.7 } },
    },
    overview: {
      initial: { opacity: 0, top: -50 },
      exit: { opacity: 0, top: -50, transition: { duration: 0.3 } },
      animate: { opacity: 1, top: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    btn: {
      initial: { opacity: 0, top: -30 },
      exit: { opacity: 0, top: -30, transition: { duration: 0.3 } },
      animate: { opacity: 1, top: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
  };
  return (
    <>
      {/* <AnimatePresence exitBeforeEnter={true}> */}
      <div className="h-[35rem] md:h-[70vh]">
        <Slider autoplay={3000} infinite={true} touchDisabled={true}>
          {content.map((item, index) => (
            // <div key={index} className="flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: `url('${item.image}')` }}>
            <div key={index} className="flex flex-col items-center justify-center bg-center bg-cover" style={{ background: `linear-gradient(rgb(0 0 0 / 63%), rgb(0 0 0 / 87%)), url('${item.image}')` }}>
              <div className="flex flex-col items-center justify-center text-center center">
                <motion.h1 whileInView="animate" viewport={{ once: true }} variants={animations.heading} initial="initial" animate="animate" exit="exit" className="relative text-5xl font-medium md:text-7xl text-gray-50">
                  {item.title}
                </motion.h1>
                <motion.p whileInView="animate" viewport={{ once: true }} variants={animations.overview} initial="initial" animate="animate" exit="exit" className="relative w-4/6 mt-5 text-xl font-normal text-yellow-400 md:w-auto">
                  {item.description}
                </motion.p>
                <motion.div whileInView="animate" viewport={{ once: true }} variants={animations.btn} initial="initial" animate="animate" exit="exit" className="relative my-8">
                  <Link to="/contact" className="w-32 p-2 my-10 text-center text-white duration-200 border-2 md:p-3 hover:text-gray-800 hover:bg-yellowColor border-yellowColor">
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* </AnimatePresence> */}
    </>
  );
};

export default SliderIntro;
