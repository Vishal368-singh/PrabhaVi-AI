import React from "react";


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
        <a
          className="navbar-brand fw-bold text-dark d-flex align-items-center"
          href="/"
        >
          <img
            src="import React from "react";

function Navbar() {
  const navLinks = ["About", "Services", "Feedback", "Contact"];
  const navLinkStyle = {
    color: "#333",
    transition: "0.3s",
  };
  const navLinkHoverStyle = {
    color: "#d4af37",
    textShadow: "0 0 8px rgba(212, 175, 55, 0.8)",
  };

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
        <a
          className="navbar-brand fw-bold text-dark d-flex align-items-center"
          href="/"
        >
          <img
            src="/Logo.webp"
            alt="Logo"
            width="45"
            height="45"
            className="me-2 rounded-circle border border-warning"
          />
          <span style={{ color: "#d4af37" }}>Prabhavi</span> AI
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link fw-semibold px-3"
                  href