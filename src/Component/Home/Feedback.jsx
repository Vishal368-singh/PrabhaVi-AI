import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Feedback() {
  const feedbacks = [
    { name: "John Doe", comment: "Amazing AI services!", rating: 5 },
    {
      name: "Sarah Smith",
      comment: "Highly professional and innovative.",
      rating: 4,
    },
    {
      name: "David Brown",
      comment: "Great customer support and AI automation.",
      rating: 5,
    },
  ];

  return (
    <section id="feedback" className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">
            Customer <span style={{ color: "#d4af37" }}>Feedback</span>
          </h2>
          <p className="text-muted">What our clients say about us</p>
        </div>

        {/* Feedback Cards */}
        <div className="row justify-content-center">
          {feedbacks.map((fb, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="p-4 shadow-sm bg-white rounded text-center"
                style={{
                  borderLeft: "5px solid #d4af37",
                  transition: "0.3s ease-in-out",
                }}
              >
                <FaQuoteLeft className="text-muted mb-2" size={24} />
                <p className="fst-italic text-dark">{fb.comment}</p>
                <h6 className="fw-bold text-dark">- {fb.name}</h6>

                {/* Star Ratings */}
                <div className="mt-2">
                  {[...Array(fb.rating)].map((_, i) => (
                    <FaStar key={i} className="text-warning me-1" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedback;
