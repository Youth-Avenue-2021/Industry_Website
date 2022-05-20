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
import { Helmet } from "react-helmet";

// import Slideshow from "./Sections/MiniSlider/Components/SlideShow";

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
            {/* SEO */}
            <div className="AppSeo">
                <Helmet>
                    <title>Shreebai Industries</title>

                    <meta name="title" content="shreebai industries" />
                    <meta name="description" content="Shri Bai Industries is one of the quality manufacturer of various types of Conveyor & Conveyor Chains. The company is working in the heart of Rajkot city (Atika) since last five years. The company is run by young and energetic Mr. Premji Devaliya.  The company has mastered the art of accuracy in order to develop the quality products each time" />
                    <meta name="keywords" content="CNC/VMC Machine Conveyor,  Chip Conveyor  and Slat Conveyour, Centralized Conveyour  and Magnet Conveyor" />
                    <meta name="keywords" content="Conveyor Attachment Chain, Hollow Pin Chains and Centralized Conveyors Belt, Transmission Chain" />
                    <meta name="keywords" content="Established in the year 2000 in Rajkot, Gujarat, “Shree Bai industries”, has established itself as a formidable enterprise involved in manufacturing supplying vast range of Conveyor Systems & Conveyor Chains." />
                    <meta name="Keywords" content="We also undertake Conveyor Fabrication Work in compliance with the defined industry standards. Our fabrication services are implemented within the stipulated time and are rendered in tandem with the requirements of the clients." />
                    <meta name="robots" content="index, follow" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <meta name="author" content="Rupen Bhimani" />
                </Helmet>
            </div>

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
