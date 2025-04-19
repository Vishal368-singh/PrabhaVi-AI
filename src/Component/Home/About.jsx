import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const teamMembers = [
  {
    name: "Vishal Singh",
    role: "Frontend Developer",
    portfolio: "https://vishal368-singh.github.io/Portfolio/#",
    image: "/PrabhaVi-AI/Vishal.jpg",
  },
  {
    name: "Prabhat Verma",
    role: "Backend Developer",
    portfolio: "https://prabhat.great-site.net/",
    image: "/PrabhaVi-AI/Prabhat.png",
  },
];

function About() {
  return (
    <section id="about" className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">
            About <span style={{ color: "#d4af37" }}>Prabhavi AI</span>
          </h2>
          <p className="text-muted fs-5">
            Empowering businesses with AI-driven automation and innovation.
          </p>
        </div>

        {/* About Box */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div
              className="bg-white p-4 shadow rounded-4 text-center"
              style={{ borderLeft: "5px solid #d4af37" }}
            >
              <img
                src="/PrabhaVi-AI/Logo.webp"
                alt="Prabhavi AI Logo"
                className="img-fluid mb-3"
                style={{ borderRadius: "12px", maxWidth: "60%" }}
              />
              <p className="text-muted fs-6">
                At Prabhavi AI, we specialize in{" "}
                <strong>cutting-edge AI solutions</strong> that streamline
                operations, boost efficiency, and drive growth. Our mission is
                to bring intelligent automation to businesses worldwide.
              </p>
              <div className="mt-4 text-start">
                {[
                  "AI-powered automation",
                  "Data-driven decision making",
                  "Seamless integration",
                  "Future-proof technology",
                ].map((feature, idx) => (
                  <p key={idx} className="text-dark mb-2">
                    <FaCheckCircle className="text-success me-2" />
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-4 mt-5">
          <h4 className="fw-bold text-dark">👨‍💻 Meet Our Team</h4>
          <p className="text-muted">The minds behind Prabhavi AI</p>
        </div>

        {/* Team Cards */}
        <div className="row justify-content-center mt-4 g-4">
          {teamMembers.map((member, idx) => (
            <div className="col-md-5 col-lg-4" key={idx}>
              <div className="card border-0 shadow-lg rounded-4 text-center pb-3 pt-5 position-relative">
                {/* Profile Image */}
                <div
                  className="position-absolute top-0 start-50 translate-middle"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid #fff",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      objectPosition:
                        member.name === "Vishal Singh"
                          ? "center 18%"
                          : "center",
                      transform:
                        member.name === "Vishal Singh"
                          ? "scale(1.0)"
                          : "scale(1.2)",
                    }}
                  />
                </div>

                <div className="card-body mt-5 pt-4">
                  <h5 className="fw-bold text-dark mt-3">{member.name}</h5>
                  <p className="text-muted mb-3">{member.role}</p>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning btn-sm fw-semibold"
                  >
                    Portfolio <FaExternalLinkAlt className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .card:hover {
            transform: translateY(-4px);
            transition: all 0.3s ease-in-out;
          }

          .btn-outline-warning {
            border-color: #d4af37;
            color: #d4af37;
          }

          .btn-outline-warning:hover {
            background-color: #d4af37;
            color: white;
          }
        `}
      </style>
    </section>
  );
}

export default About;
