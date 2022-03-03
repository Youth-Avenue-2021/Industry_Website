import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import img from "../Assets/img.png";
// import img1 from "../Assets/img1.jpg";
// import img2 from "../Assets/img2.jpg";
// import img3 from "../Assets/img3.jpg";
import image1 from "../../../Assets/1.jpg";
import image2 from "../../../Assets/2.jpg";
import image3 from "../../../Assets/3.jpg";
import image4 from "../../../Assets/4.jpg";
import image5 from "../../../Assets/5.jpg";
import { Link } from "react-router-dom";

const SliderIntro = () => {
  const content = [
    { title: "SHREEBAI INDUSTRY", description: "Combine Technology for Better Quality", image: image1 },
    { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image2 },
    { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image3 },
    { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image4 },
    { title: "SHREEBAI INDUSTRY ", description: "Combine Technology for Better Quality", image: image5 },
  ];
  return (
    <>
      <div className="h-[70vh]">
        <Slider autoplay={3000} infinite={true}>
          {content.map((item, index) => (
            <div key={index} className="flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: `url('${item.image}')` }}>
              <div className="flex flex-col items-center justify-center center">
                <h1 className="font-medium text-7xl text-gray-50">{item.title}</h1>
                <p className="mt-5 text-xl font-normal text-yellow-400">{item.description}</p>
                <Link to="/contact" className="w-32 p-3 my-10 text-center text-white duration-200 border-2 hover:text-gray-800 hover:bg-yellowColor border-yellowColor">
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderIntro;
