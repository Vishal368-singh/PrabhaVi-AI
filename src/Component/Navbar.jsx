import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #f8f9fa, #e9ecef)",
        borderBottom: "3px solid #d4af37",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container">
        {/* Logo & Brand */}
        <Link
          className="navbar-brand fw-bold text-dark d-flex align-items-center"
          to="/"
        >
          <img
            src="/PrabhaVi-AI/Logo.webp"
            alt="Logo"
            width="45"
            height="45"
            className="me-2 rounded-circle border border-warning"
          />
          <span style={{ color: "#d4af37" }}>Prabhavi</span> AI
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/feedback">
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/contact-us">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
