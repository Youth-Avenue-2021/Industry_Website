import React, { useEffect } from "react";
import AboutCompany from "../AboutCompany/AboutCompany";
import Footer from "../FooterSection/Footer";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import WhatWeDoing from "../WhatWeDoingSection/WhatWeDoing";
import MultipleBlocks from "./Components/MultipleBlocks";
import SliderIntro from "./Components/SliderIntro";
import IntroCeo from "../CeoIntro/IntroCeo";
const IntroSection = () => {
  useEffect(() => {
    document.title = "ShreeBai Industries";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <SliderIntro />
      <MultipleBlocks />
      <WhatWeDoing />
      <AboutCompany />
      <IntroCeo />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default IntroSection;
