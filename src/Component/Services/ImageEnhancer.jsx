import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUpload, FaDownload, FaSpinner, FaImage } from "react-icons/fa";

function ImageEnhancer() {
  const [image, setImage] = useState(null);
  const [enhancedImageURL, setEnhancedImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setError("Please select an image.");
      return;
    }

    const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedFormats.includes(file.type)) {
      setError("Invalid file format. Please upload a JPG or PNG.");
      return;
    }

    setError(null);
    setImage(file);
  };

  const handleEnhance = async () => {
    if (!image) {
      setError("Please select an image.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("https://your-enhance-api.com/enhance", {
        method: "POST",
        headers: {
          "x-api-key": "your-api-key", // Replace with your valid key
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed with status ${response.status}`);
      }

      const result = await response.json();
      if (result && result.enhanced_image) {
        setEnhancedImageURL(result.enhanced_image);
      } else {
        throw new Error("No enhanced image received from the API.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to enhance image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!enhancedImageURL) return;
    const link = document.createElement("a");
    link.href = enhancedImageURL;
    link.setAttribute("download", "enhanced_image.jpg");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setEnhancedImageURL(null);
    setImage(null);
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="text-center">
        <h2 className="fw-bold text-dark">
          <FaImage className="text-warning" /> Image Enhancer
        </h2>
        <p className="text-muted">Upload an image to upscale and enhance it.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 card p-4 shadow-lg rounded-4 border-0">
          <div className="form-group mb-3">
            <label className="fw-bold">Select Image:</label>
            <input
              type="file"
              className="form-control"
              accept="image/jpeg, image/jpg, image/png"
              onChange={handleFileChange}
            />
          </div>

          <button
            className="btn btn-warning w-100 fw-bold"
            onClick={handleEnhance}
            disabled={loading}
          >
            {loading ? (
              <>
                <FaSpinner className="spinner-border spinner-border-sm me-2" />{" "}
                Enhancing...
              </>
            ) : (
              <>
                <FaUpload className="me-2" /> Enhance Image
              </>
            )}
          </button>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          {enhancedImageURL && (
            <div className="mt-4 text-center">
              <h5 className="text-success fw-bold">Enhanced Image</h5>
              <img
                src={enhancedImageURL}
                alt="Enhanced Preview"
                className="img-fluid rounded shadow border border-success"
                style={{ maxWidth: "100%" }}
              />
              <button
                className="btn btn-success mt-3 w-100 fw-bold"
                onClick={downloadImage}
              >
                <FaDownload className="me-2" /> Download Enhanced Image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageEnhancer;
