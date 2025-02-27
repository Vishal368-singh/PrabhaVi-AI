import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Component/Home/Home";
import BackgroundRemover from "./Component/Services/BackgroundRemover";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background-remover" element={<BackgroundRemover />} />
      </Routes>
        <Footer/>
    </Router>
  </StrictMode>
);
