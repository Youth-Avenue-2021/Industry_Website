import React from "react";
import WhatWeDoing from "../WhatWeDoingSection/WhatWeDoing";
import MultipleBlocks from "./Components/MultipleBlocks";
import SliderIntro from "./Components/SliderIntro";

const IntroSection = () => {
  return (
    <>
      <SliderIntro />
      <MultipleBlocks />
      <WhatWeDoing />
    </>
  );
};

export default IntroSection;
