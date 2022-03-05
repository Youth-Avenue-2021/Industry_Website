import React from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <div className="bg-yellowColor py-4 flex justify-around items-center">
      <div className="flex flex-row justify-center items-center">
        <Link to="/" className="font-headingFont text-2xl">
          ShreeBai Industries
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center">
        <NavbarLinks />
      </div>
    </div>
  );
};

export default Navbar;
