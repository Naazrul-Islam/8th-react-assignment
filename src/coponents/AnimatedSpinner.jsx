// src/components/AnimatedSpinner.jsx
import React from "react";

const AnimatedSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative flex justify-center items-center">
        {/* Outer glow ring */}
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] blur-md opacity-60 animate-ping"></div>

        {/* Spinning ring */}
        <div className="w-14 h-14 border-4 border-transparent border-t-[#632EE3] border-r-[#9F62F2] rounded-full animate-spin"></div>

        {/* Center dot */}
        <div className="absolute w-3 h-3 bg-[#632EE3] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default AnimatedSpinner;
