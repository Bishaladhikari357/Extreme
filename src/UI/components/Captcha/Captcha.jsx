"use client";

import React, { useRef, useState, useEffect } from "react"; // <-- import useRef here

const Captcha = ({ onSuccess, reset }) => {
  const canvasRef = useRef(null);
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  // Generate random captcha code
  const generateCaptcha = (length = 6) => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  // Draw on canvas
  const drawCaptcha = (code) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#f8fafc"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(0,0,0,${Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Characters
    for (let i = 0; i < code.length; i++) {
      const x = 20 + i * 25 + Math.random() * 5;
      const y = 30 + Math.random() * 10;
      const angle = (Math.random() - 0.5) * 0.5;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.font = `${26 + Math.floor(Math.random() * 6)}px Arial`;
      ctx.fillStyle = `rgb(${80 + Math.random() * 100}, ${80 + Math.random() * 100}, ${80 + Math.random() * 100})`;
      ctx.fillText(code[i], 0, 0);
      ctx.restore();
    }
  };

  const refreshCaptcha = () => {
    setMessage("");
    setUserInput("");
    generateCaptcha();
  };

  const handleInput = (value) => {
    setUserInput(value);

    if (value.toUpperCase() === captchaCode) {
      setMessage("✔ Captcha verified!");
      onSuccess && onSuccess();
    } else {
      setMessage("");
    }
  };

  // Generate captcha initially
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Redraw captcha whenever code changes
  useEffect(() => {
    if (captchaCode) drawCaptcha(captchaCode);
  }, [captchaCode]);

  // Reset captcha when parent triggers reset
  useEffect(() => {
    if (reset) {
      refreshCaptcha();
    }
  }, [reset]);

  return (
    <div className="w-full">
      <label className="font-medium text-white  text-sm">Captcha Verification</label>

      {/* Canvas Box */}
      <div className="flex items-center justify-between bg-gray-100 border rounded-lg p-3 mt-1 shadow-sm">
        <canvas
          ref={canvasRef}
          width={200}
          height={50}
          className="rounded-md border bg-gray-50 shadow-inner"
        ></canvas>

        <button
          type="button"
          onClick={refreshCaptcha}
          className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-lg transition-all"
        >
          🔄 Refresh
        </button>
      </div>

      {/* Input box */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Type the text shown above"
        className="w-full mt-3 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-400"
      />

      {message && (
        <p className="mt-2 text-green-600 font-semibold text-sm">
          {message}
        </p>
      )}
    </div>
  );
};

export default Captcha;
