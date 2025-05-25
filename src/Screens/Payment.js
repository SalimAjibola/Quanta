import React from "react";
import { useNavigate } from "react-router-dom";
import paymentImage from "../Assets/Payment.png";

const Payment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black px-4 overflow-hidden">
      {/* Gradient paint-like overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.5), rgba(14,165,233,0.5) 70%, transparent 90%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
          filter: "blur(120px)",
          transform: "scale(1.2)",
        }}
      />
      <img
        src={paymentImage}
        alt="Payment"
        onClick={handleClick}
        className="relative w-96 h-96 object-contain select-none drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] cursor-pointer"
        draggable={false}
      />
    </div>
  );
};

export default Payment;
