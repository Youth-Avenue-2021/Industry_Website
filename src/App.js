import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactSection from "./Sections/ContactSection";
import IntroSection from "./Sections/SliderSection/IntroSection";

function App() {
  return (
    // <div className="py-2 font-body px-7">
    //   <h1 className="my-5 text-5xl font-bold text-gray-900 underline font-body">Hello world!</h1>
    //   <p className="text-2xl text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos officia culpa ut sed blanditiis dolores et, aspernatur eos veniam reiciendis accusantium ab non dolore. Alias, perferendis obcaecati. Distinctio, ipsa.</p>
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<IntroSection />} />
          <Route path="/contact" exact element={<ContactSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
