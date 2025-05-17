import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bgTopLeft from "../Assets/Gradient.png";
import bgTopCenter from "../Assets/Gradient1.png";
import bgTopRight from "../Assets/Gradient2.png";

const ResetPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  return (
    <div className="relative min-h-screen bg-[#0A0C10] overflow-hidden flex items-center justify-center px-4 font-sans">
      {/* Glowing Background Images */}
      <img
        src={bgTopLeft}
        alt="glow"
        className="absolute top-0 left-0 w-96 blur-[80px] opacity-90 z-0 scale-110"
      />
      <img
        src={bgTopCenter}
        alt="glow"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] blur-[90px] opacity-90 z-0 scale-110"
      />
      <img
        src={bgTopRight}
        alt="glow"
        className="absolute top-0 right-0 w-96 blur-[80px] opacity-90 z-0 scale-110"
      />

      {/* Reset Password Form */}
      <div className="relative bg-white/5 backdrop-blur-lg rounded-[32px] max-w-md w-full p-8 sm:p-10 border border-white/10 shadow-[0_0_30px_rgba(139,37,255,0.3)] z-10">
        <h2 className="text-3xl font-bold text-center text-[#F1F1F1] mb-2 tracking-wide">
          Reset Password
        </h2>
        <p className="text-sm text-center text-gray-400 mb-8">
          Type your authorized email address to receive reset password link
        </p>

        <form className="space-y-4">
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Email/Phone Number"
            className="w-full px-4 py-3 rounded-full bg-transparent border border-[#8B25FF] text-sm text-[#F1F1F1] placeholder:text-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#8B25FF]"
          />
          <NavLink to="/">
          <button
            type="submit"
            className="w-full mt-5 py-3 rounded-full bg-gradient-to-br from-[#8B25FF] via-[#6225ff] to-[#350FDD] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#8B25FF] border border-[#ffffff30]"
          >
            🔄 Reset Password
          </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;