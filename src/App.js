import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactSection from "./Sections/ContactSection";
import IntroSection from "./Sections/SliderSection/IntroSection";
import { AnimatePresence } from "framer-motion";
import ImgGallery from "./Sections/ImageGallery/ImgGallery";
import Navbar from "./Components/Navigation/Navbar";
import LoginContext from "./Context/LoginContext";
import { useEffect, useState } from "react";
import GetInTouchPopup from "./Components/GetInTouchPopup";
import Admin from "./Components/LoginSystem/Admin";
import Slideshow from "./Sections/MiniSlider/Components/SlideShow";

function App() {
  const location = useLocation();

  // states of input forms
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const [showPopupBox, setShowPopupBox] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (location.pathname !== "/contact" && location.pathname !== "/admin") {
        setShowPopupBox(true);
      }
    }, 15000);
  }, []);
  return (
    <>
      <LoginContext.Provider value={{ showPopupBox, setShowPopupBox, email, setEmail, fullName, setFullName, phNumber, setPhNumber, emailId, setEmailId, message, setMessage, userName, setUserName, password, setPassword }}>
        <Navbar />
        <GetInTouchPopup />
        <AnimatePresence exitBeforeEnter={true}>
          <Routes key={location.key} location={location}>
            <Route path="/" exact element={<IntroSection />} />
            <Route path="/admin" exact element={<Admin />} />
            <Route path="/contact" exact element={<ContactSection />} />
            <Route path="/products" exact element={<ImgGallery />} />
          </Routes>
        </AnimatePresence>
      </LoginContext.Provider>
        {/* <Slideshow/> */}
    </>
  );
}

export default App;
