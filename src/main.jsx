import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Component/Home/Home";
import BackgroundRemover from "./Component/Services/BackgroundRemover";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Services from "./Component/Home/Services";
import Feedback from "./Component/Home/Feedback";
import Contact from "./Component/Home/Contact";
import ImageEnhancer from "./Component/Services/ImageEnhancer";
import SpeechRecognition from "./Component/Services/SpeechRecognition";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/background-remover" element={<BackgroundRemover />} />
        <Route path="/image-enhancer" element={<ImageEnhancer />} />
        <Route path="/speech-recognition" element={<SpeechRecognition/>}></Route>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
