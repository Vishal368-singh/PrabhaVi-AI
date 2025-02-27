import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-dark py-4 text-center"
      style={{
        background: "linear-gradient(90deg, #f8f9fa, #e9ecef)",
        borderTop: "3px solid #d4af37",
        boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container">
        {/* Brand Name */}
        <h4 className="fw-bold">
          <span style={{ color: "#d4af37" }}>Prabhavi</span> AI
        </h4>

        {/* Tagline */}
        <p className="mb-2">Innovating the Future with AI</p>

        {/* Social Media Icons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
            (Icon, index) => (
              <a
                key={index}
                href="/"
                className="text-dark"
                style={{ fontSize: "1.5rem", transition: "0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
              >
                <Icon />
              </a>
            )
          )}
        </div>

        {/* Copyright Text */}
        <p className="mb-0" style={{ fontSize: "0.9rem", color: "#555" }}>
          &copy; {new Date().getFullYear()} Prabhavi AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
