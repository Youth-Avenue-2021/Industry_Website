import React from "react";
import AboutCompany from "../AboutCompany/AboutCompany";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import WhatWeDoing from "../WhatWeDoingSection/WhatWeDoing";
import MultipleBlocks from "./Components/MultipleBlocks";
import SliderIntro from "./Components/SliderIntro";

const IntroSection = () => {
  return (
    <>
      <SliderIntro />
      <MultipleBlocks />
      <WhatWeDoing />
      <AboutCompany />
      <SubscribeSection />
    </>
  );
};

export default IntroSection;
