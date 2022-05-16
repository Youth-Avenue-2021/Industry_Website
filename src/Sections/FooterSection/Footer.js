import React from "react";
import FooterCompany from "./Components/FooterCompany";
import FooterCompanyDetails from "./Components/FooterCompanyDetails";
import FooterLinks from "./Components/FooterLinks";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center py-20 text-white  md:flex-row justify-evenly text-whitemy-2">
                        <FooterCompanyDetails />
                        <FooterCompany />
                        <FooterLinks />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
