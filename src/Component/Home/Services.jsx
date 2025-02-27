import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMagic,
  FaEraser,
  FaBrain,
  FaChartBar,
  FaMicrophone,
  FaFileAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  const navigate = useNavigate();

  const services = [
    { name: "Image Enhancer", icon: <FaMagic />, path: "#" },
    {
      name: "Background Remover",
      icon: <FaEraser />,
      path: "/background-remover",
    },
    { name: "AI Chatbot", icon: <FaBrain />, path: "#" },
    { name: "Data Analytics", icon: <FaChartBar />, path: "#" },
    { name: "Speech Recognition", icon: <FaMicrophone />, path: "#" },
    { name: "Automated Reports", icon: <FaFileAlt />, path: "#" },
    { name: "AI Security", icon: <FaShieldAlt />, path: "#" },
    { name: "Predictive Analysis", icon: <FaChartLine />, path: "#" },
  ];

  return (
    <section id="services" className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">
            Our <span style={{ color: "#d4af37" }}>Services</span>
          </h2>
          <p className="text-muted">
            Discover the AI-powered solutions we offer
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div
                className="p-4 shadow-sm rounded text-center bg-white"
                style={{
                  borderLeft: "5px solid #d4af37",
                  transition: "0.3s ease-in-out",
                  cursor: "pointer",
                }}
                onClick={() => navigate(service.path)}
              >
                <div className="mb-2 text-warning" style={{ fontSize: "2rem" }}>
                  {service.icon}
                </div>
                <h6 className="fw-bold text-dark">{service.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
