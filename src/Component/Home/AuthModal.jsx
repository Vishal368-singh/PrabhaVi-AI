import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Tab, Nav, Form } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaTimes } from "react-icons/fa";

function AuthModal() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="auth-modal"
      >
        <Modal.Body className="p-4 rounded position-relative">
          {/* Close Button */}
          <button className="close-btn" onClick={() => setShow(false)}>
            <FaTimes />
          </button>

          <h3 className="text-center text-warning fw-bold">
            Welcome to Prabhavi AI
          </h3>
          <p className="text-center text-light mb-4">
            Login or Sign Up to continue
          </p>

          {/* Tabs for Login & Register */}
          <Tab.Container
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
          >
            <Nav
              variant="pills"
              className="d-flex justify-content-center gap-3 mb-3"
            >
              <Nav.Item>
                <Nav.Link eventKey="login" className="custom-tab">
                  Sign In
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="register" className="custom-tab">
                  Sign Up
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* Login Form */}
              <Tab.Pane eventKey="login">
                <Form className="auth-form">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <FaEnvelope className="text-warning" />
                    </span>
                    <Form.Control type="email" placeholder="Email" required />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <FaLock className="text-warning" />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <Button className="custom-btn w-100">Sign In</Button>
                </Form>
              </Tab.Pane>

              {/* Register Form */}
              <Tab.Pane eventKey="register">
                <Form className="auth-form">
                  <div className="input-group mb-3 ">
                    <span className="input-group-text">
                      <FaUser className="text-warning" />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <FaEnvelope className="text-warning" />
                    </span>
                    <Form.Control type="email" placeholder="Email" required />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <FaLock className="text-warning" />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <Button className="custom-btn w-100">Sign Up</Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>

      {/* Custom Styles */}
      <style jsx>{`
        /* Modal Glass Effect */
        .auth-modal .modal-content {
          background: rgba(26, 26, 26, 0.9);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          border: 1px solid gold;
          padding: 25px;
        }

        /* Close Button */
        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .close-btn:hover {
          color: gold;
        }

        /* Tabs */
        .custom-tab {
          color: white !important;
          background: rgba(255, 215, 0, 0.2);
          border-radius: 8px;
          padding: 8px 20px;
          font-weight: bold;
          transition: all 0.2s ease-in-out;
        }
        .custom-tab.active {
          background: gold !important;
          color: black !important;
        }

        /* Tab Spacing */
        .nav-pills .nav-item {
          margin: 0 8px;
        }

        /* Input Fields */
        .auth-form .input-group-text {
          background: none;
          border-right: 0;
          color: gold;
          font-size: 1.2rem;
        }
        .auth-form .form-control {
          background: rgba(255, 255, 255, 0.1);
          border-left: 0;
          border-radius: 8px;
          padding: 10px;
          color: white;
        }
        .auth-form .form-control:focus {
          border-color: gold;
        }

        /* Custom Button */
        .custom-btn {
          background: gold;
          color: black;
          font-weight: bold;
          padding: 10px;
          border-radius: 8px;
        }

        /* Improved Placeholder Visibility */
        .auth-form .form-control::placeholder {
          color: rgba(237, 233, 233, 0.99); /* Lighter gray */
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default AuthModal;
