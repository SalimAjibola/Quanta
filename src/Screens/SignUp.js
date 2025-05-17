import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bgTopLeft from "../Assets/Gradient.png";
import bgTopCenter from "../Assets/Gradient1.png";
import bgTopRight from "../Assets/Gradient2.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0A0C10] overflow-hidden flex items-center justify-center px-4 font-sans">
      {/* Bold Glowing Background Images */}
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

      {/* Form */}
      <div className="relative bg-white/5 backdrop-blur-lg rounded-[32px] max-w-md w-full p-8 sm:p-10 border border-white/10 shadow-[0_0_30px_rgba(139,37,255,0.3)] z-10">
        <h2 className="text-3xl font-bold text-center text-[#F1F1F1] mb-2 tracking-wide">
          Let’s Get You Started
        </h2>
        <p className="text-sm text-center text-gray-400 mb-8">
          Create your account to unlock a world of possibilities
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-full bg-transparent border border-[#8B25FF] text-sm text-[#F1F1F1] placeholder:text-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#8B25FF]"
          />
          <input
            type="text"
            placeholder="Email/Phone Number"
            className="w-full px-4 py-3 rounded-full bg-transparent border border-[#8B25FF] text-sm text-[#F1F1F1] placeholder:text-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#8B25FF]"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-[#8B25FF] text-sm text-[#F1F1F1] placeholder:text-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#8B25FF]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-[#8B25FF] cursor-pointer text-xl"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-[#8B25FF] text-sm text-[#F1F1F1] placeholder:text-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#8B25FF]"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-3 text-[#8B25FF] cursor-pointer text-xl"
            >
              {showConfirm ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Submit Button */}
          <NavLink to="/create-new-password">
          <button
            type="submit"
            className="w-full mt-5 py-3 rounded-full bg-gradient-to-br from-[#8B25FF] via-[#6225ff] to-[#350FDD] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#8B25FF] border border-[#ffffff30]"
          >
            🚀 Sign Up
          </button>
          </NavLink>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <hr className="border-gray-700 w-full" />
          <span className="px-3 text-sm text-gray-400">OR</span>
          <hr className="border-gray-700 w-full" />
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-6 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="Google"
            className="h-6 w-6 hover:scale-110 transition"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            className="h-6 w-6 hover:scale-110 transition"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/831/831276.png"
            alt="Apple"
            className="h-6 w-6 hover:scale-110 transition"
          />
        </div>

        <p className="text-center text-sm text-gray-400">
          Are you already a user?{" "}
          <NavLink to="/">
          <span className="text-[#8B25FF] hover:underline cursor-pointer">Log In</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
