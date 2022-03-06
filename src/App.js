import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactSection from "./Sections/ContactSection";
import IntroSection from "./Sections/SliderSection/IntroSection";
import { AnimatePresence } from "framer-motion";
import ImgGallery from "./Sections/ImageGallery/ImgGallery";
import Navbar from "./Components/Navigation/Navbar";
import Login from "./Components/LoginSystem/Login";
import LoginContext from "./Context/LoginContext";
import { useState } from "react";

function App() {
  const location = useLocation();

  // states of input forms
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <LoginContext.Provider value={{ email, setEmail, fullName, setFullName, phNumber, setPhNumber, emailId, setEmailId, message, setMessage }}>
        <Navbar />
        <AnimatePresence exitBeforeEnter={true}>
          <Routes key={location.key} location={location}>
            <Route path="/" exact element={<IntroSection />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/contact" exact element={<ContactSection />} />
            <Route path="/products" exact element={<ImgGallery />} />
          </Routes>
        </AnimatePresence>
      </LoginContext.Provider>
    </>
  );
}

export default App;
