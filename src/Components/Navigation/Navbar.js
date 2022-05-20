import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import Logo from "../../Assets/productImgs/ShreebaiLogo.png"

const Navbar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location.pathname]);

  const animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <>
      <div className="z-40 flex flex-col items-center justify-around py-4 bg-yellowColor md:flex-row">
        <div className="flex flex-row items-center justify-around w-full md:w-auto md:justify-center">
          <img className="h-12 w-12 p-1" src={Logo} alt=""></img>
          <Link to="/" className="text-2xl font-headingFont">
            ShreeBai Industries
          </Link>
          <div
            onClick={() => {
              active ? setActive(false) : setActive(true);
            }}
            className="flex items-center justify-center cursor-pointer md:hidden"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
        <div className="flex-row items-center justify-center hidden md:flex">
          <NavbarLinks />
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {active && (
          <motion.div variants={animation} initial="initial" animate="animate" exit="exit" className="absolute z-20 flex flex-col items-center justify-center w-full pb-8 bg-yellowColor md:pb-0 md:flex-row">
            <NavbarLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
