import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUpload, FaDownload, FaImage, FaTimes } from "react-icons/fa";

function BackgroundRemover() {
  const [imageURL, setImageURL] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const submitHandler = async () => {
    const fileInput = document.getElementById("fileInput");
    const image = fileInput.files[0];
    if (!image) return;

    setLoading(true);
    setDisabled(true); // Disable button after click

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    const apiKey = "SPMeV65qUACAzvxu9kbvhMfn";

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: { "X-Api-Key": apiKey },
        body: formData,
      });

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageURL(url);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = () => {
    if (!imageURL) return;
    const anchorElement = document.createElement("a");
    anchorElement.href = imageURL;
    anchorElement.download = "processed_image.png";
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);

    // Auto reload after download
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="container mt-5 pb-5">
      {" "}
      {/* Added bottom padding */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4 border-0 rounded-4 text-center">
            <h3 className="text-dark mb-3">
              <FaImage className="text-warning" /> AI Background Remover
            </h3>
            <p className="text-muted">
              Upload an image and remove the background effortlessly!
            </p>

            {/* File Input */}
            <input
              id="fileInput"
              type="file"
              className="d-none"
              onChange={fileChangeHandler}
            />
            <label htmlFor="fileInput" className="btn btn-warning fw-bold px-4">
              <FaUpload /> Choose File
            </label>

            {/* Preview Selected Image */}
            {selectedFile && (
              <div className="mt-3 position-relative">
                <img
                  src={selectedFile}
                  alt="Preview"
                  className="img-thumbnail"
                  style={{ maxWidth: "250px" }}
                />
                <button
                  className="btn btn-sm btn-danger position-absolute top-0 end-0"
                  onClick={() => setSelectedFile(null)}
                >
                  <FaTimes />
                </button>
              </div>
            )}

            {/* Upload Button */}
            <button
              className="btn btn-dark mt-3 fw-bold px-4"
              onClick={submitHandler}
              disabled={loading || disabled} // Disabled after clicking
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Processing...
                </>
              ) : (
                <>Remove Background</>
              )}
            </button>

            {/* Processed Image */}
            {imageURL && (
              <div className="mt-4">
                <h5 className="text-success fw-bold">Background Removed!</h5>
                <img
                  src={imageURL}
                  alt="Processed"
                  className="img-fluid rounded shadow border border-success"
                />
              </div>
            )}

            {/* Download Button */}
            {imageURL && (
              <button
                className="btn btn-success mt-3 fw-bold px-4"
                onClick={downloadFile}
              >
                <FaDownload /> Download Image
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundRemover;
