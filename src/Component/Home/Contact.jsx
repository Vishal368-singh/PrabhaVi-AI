import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">
            Get in <span style={{ color: "#d4af37" }}>Touch</span>
          </h2>
          <p className="text-muted">We'd love to hear from you!</p>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-5">
            <div className="p-4 bg-white shadow-sm rounded">
              <h5 className="fw-bold text-dark">Contact Information</h5>
              <p className=" text-dark">
                Reach us through any of the following ways:
              </p>
              <p className="mb-2 text-dark">
                <FaEnvelope className="text-warning me-2" />{" "}
                contact@prabhaviAI.com
              </p>
              <p className="mb-2  text-dark">
                <FaPhone className="text-warning me-2" /> +91
                8935064877
              </p>
              <p className="mb-3  text-dark">
                <FaMapMarkerAlt className="text-warning me-2" /> B.K.T ,Lucknow, UP
              </p>

              {/* Social Media Links */}
              <div>
                <a href="#" className="me-3 text-dark">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="me-3 text-dark">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-dark">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7 mt-4 mt-md-0">
            <div className="p-4 bg-white shadow-sm rounded">
              <h5 className="fw-bold text-dark">Send Us a Message</h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-warning w-100 fw-bold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
