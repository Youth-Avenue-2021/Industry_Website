import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactSection from "./Sections/ContactSection";
import IntroSection from "./Sections/SliderSection/IntroSection";
import { AnimatePresence, motion } from "framer-motion";
import ImgGallery from "./Sections/ImageGallery/ImgGallery";
import Navbar from "./Components/Navigation/Navbar";
import Login from "./Components/LoginSystem/Login";

function App() {
  const location = useLocation();
  return (
    // <div className="py-2 font-body px-7">
    //   <h1 className="my-5 text-5xl font-bold text-gray-900 underline font-body">Hello world!</h1>
    //   <p className="text-2xl text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos officia culpa ut sed blanditiis dolores et, aspernatur eos veniam reiciendis accusantium ab non dolore. Alias, perferendis obcaecati. Distinctio, ipsa.</p>
    // </div>
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter={true}>
        <Routes key={location.key} location={location}>
          <Route path="/" exact element={<IntroSection />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/contact" exact element={<ContactSection />} />
          <Route path="/products" exact element={<ImgGallery />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
