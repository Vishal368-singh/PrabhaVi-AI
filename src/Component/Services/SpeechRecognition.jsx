import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SpeechRecognition = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const recognitionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = language;

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + " ";
        }
      }
      setText((prev) => prev + finalTranscript);
    };

    recognition.onend = () => {
      if (listening) {
        recognition.start();
      }
    };

    recognition.onerror = (event) => {
      alert(`Error: ${event.error}`);
      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language]);

  const startListening = async () => {
    if (recognitionRef.current && !listening) {
      setText("");
      recognitionRef.current.lang = language;
      recognitionRef.current.start();
      setListening(true);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && listening) {
      recognitionRef.current.stop();
      setListening(false);
    }

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/mp3",
        });
        const audioUrl = URL.createObjectURL(audioBlob);

        const link = document.createElement("a");
        link.href = audioUrl;
        link.download = "speech_recording.mp3";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    }
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "speech_transcription.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-5 border-0 rounded-5">
            {/* Header */}
            <h2 className="text-center fw-bold text-dark">
              PrabhaVi-<span className="text-warning">AI</span>
            </h2>
            <h5 className="text-center text-muted">Speech to Text Converter</h5>

            {/* Language Selection */}
            <div className="form-group mt-4">
              <label className="fw-bold">🌐 Select Language:</label>
              <select
                className="form-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en-US">English (US)</option>
                <option value="hi-IN">Hindi (India)</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
                <option value="de-DE">German</option>
              </select>
            </div>

            {/* Speech Output */}
            <textarea
              className="form-control mt-3 rounded-3 shadow-sm"
              rows="4"
              placeholder="🎙 Your speech will appear here..."
              value={text}
              readOnly
            ></textarea>

            {/* Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <button
                className={`btn px-4 fw-bold ${
                  listening ? "btn-warning" : "btn-success"
                }`}
                onClick={startListening}
                disabled={listening}
              >
                {listening ? "🎤 Listening..." : "🎤 Start Listening"}
              </button>
              <button
                className="btn btn-danger px-4 fw-bold"
                onClick={stopListening}
                disabled={!listening}
              >
                ⏹ Stop & Download MP3
              </button>
              <button
                className="btn btn-secondary px-4 fw-bold"
                onClick={() => setText("")}
                disabled={!text}
              >
                🗑 Clear
              </button>
              <button
                className="btn btn-primary px-4 fw-bold"
                onClick={downloadText}
                disabled={!text}
              >
                📥 Download Text
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Padding */}
      <div className="mt-5"></div>

      {/* Custom Styles */}
      <style>
        {`
          .btn {
            transition: 0.3s ease-in-out;
          }
          .btn-warning {
            background: gold;
            border: none;
          }
          .btn-warning:hover {
            background: #e6b800;
          }
          .btn-success {
            background: #28a745;
            border: none;
          }
          .btn-success:hover {
            background: #218838;
          }
          .btn-danger {
            background: #dc3545;
            border: none;
          }
          .btn-danger:hover {
            background: #c82333;
          }
          .btn-secondary {
            background: #6c757d;
            border: none;
          }
          .btn-secondary:hover {
            background: #5a6268;
          }
          .btn-primary {
            background: #007bff;
            border: none;
          }
          .btn-primary:hover {
            background: #0069d9;
          }
          .card {
            background: #f8f9fa;
            border-radius: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          textarea {
            border: 2px solid #ddd;
            background: #fff;
          }
          textarea:focus {
            border-color: #007bff;
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default SpeechRecognition;
