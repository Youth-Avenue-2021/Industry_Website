import React from "react";
import GetInTouchPopup from "../../Components/GetInTouchPopup";
import AboutCompany from "../AboutCompany/AboutCompany";
import Footer from "../FooterSection/Footer";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import WhatWeDoing from "../WhatWeDoingSection/WhatWeDoing";
import MultipleBlocks from "./Components/MultipleBlocks";
import SliderIntro from "./Components/SliderIntro";

const IntroSection = () => {
  return (
    <>
      <GetInTouchPopup />
      <SliderIntro />
      <MultipleBlocks />
      <WhatWeDoing />
      <AboutCompany />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default IntroSection;
