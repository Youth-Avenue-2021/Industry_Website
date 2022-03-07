import { useEffect } from "react";
import Contact from "../Components/Contact";
import GoogleMap from "../Components/GoogleMap";
import Footer from "./FooterSection/Footer";
import SubscribeSection from "./SubscribeSection/SubscribeSection";

const ContactSection = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto bg-white md:flex-col">
        <Contact />
        <GoogleMap />
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default ContactSection;
