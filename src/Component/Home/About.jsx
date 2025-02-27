import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">
            About <span style={{ color: "#d4af37" }}>Prabhavi AI</span>
          </h2>
          <p className="text-muted">
            Empowering businesses with AI-driven automation and innovation.
          </p>
        </div>

        {/* About Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 shadow-sm rounded bg-white text-center"
              style={{
                borderLeft: "5px solid #d4af37",
              }}
            >
              <img
                src="/PrabhaVi-AI/Logo.webp"
                alt="AI Illustration"
                className="img-fluid mt-2"
                style={{ borderRadius: "10px", maxWidth: "60%" }}
              />
              <p className="mt-3 text-muted">
                At Prabhavi AI, we specialize in **cutting-edge AI solutions**
                that streamline operations, boost efficiency, and drive growth.
                Our mission is to bring intelligent automation to businesses
                worldwide.
              </p>

              {/* Key Features */}
              <div className="mt-3">
                {[
                  "AI-powered automation",
                  "Data-driven decision making",
                  "Seamless integration",
                  "Future-proof technology",
                ].map((feature, index) => (
                  <p key={index} className="mb-2 text-dark">
                    <FaCheckCircle className="text-success me-2" />
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
