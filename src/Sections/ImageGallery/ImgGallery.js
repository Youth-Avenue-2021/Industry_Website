import { photos } from "./Components/ImagesGalleryData";
import Gallery from "react-photo-gallery";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import Footer from "../FooterSection/Footer";
import { useEffect } from "react";
import SectionHeading from "../../Components/SectionHeading";

const ImgGallery = () => {
  useEffect(() => {
    document.title = "ShreeBai Industries || Products";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="mx-auto pb-20 min-h-[20rem] container">
        <SectionHeading heading={"Products Gallery"} />
        <div className="mx-auto md:w-8/12 products">
          <Gallery photos={photos} direction={"column"} />
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default ImgGallery;
