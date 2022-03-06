import SectionHeading from "../../Components/SectionHeading";
import workers from "../../Assets/workers2.jpg";
import weldingPic from "../../Assets/welding.jpg";
import ContentBox from "./Components/ContentBox";
import ImagesBox from "./Components/ImagesBox";

const AboutCompany = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <SectionHeading heading="About ShreeBai Industries" />
        <div className="flex flex-row items-center justify-center pt-3 pb-20 md:pt-10 md:px-32">
          <ContentBox />
          <div className="flex-col items-center justify-center hidden md:flex">
            <ImagesBox image={workers} />
            <ImagesBox image={weldingPic} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
