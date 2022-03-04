import React from "react";
import { Link } from "react-router-dom";
import FooterCompany from "./Components/FooterCompany";
import FooterCompanyDetails from "./Components/FooterCompanyDetails";
import FooterLinks from "./Components/FooterLinks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-20 text-white bg-gray-900 md:flex-row justify-evenly text-whitemy-2">
      <FooterCompanyDetails />
      <FooterCompany />
      <FooterLinks />
    </div>
  );
};

export default Footer;
