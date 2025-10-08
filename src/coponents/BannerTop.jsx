import React from "react";

const BannerTop = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center  p-4 my-10 gap-5">
      <h1 className="text-[4rem] font-bold text-center">We Build <br /> <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">Productive</span> Apps</h1>
      <p className="text-[1.6rem] text-center">we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex gap-5 mt-5">
        <div className="flex items-center gap-2 border-2 border-gray-400 px-4 py-2 rounded-lg">
            <img src="/google-play.png" alt="" className="w-8" />
            <h3>Google Play</h3>
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-400 px-4 py-2 rounded-lg ">
            <img src="/App-store.png" alt="" className="w-8" />
            <h3>App Store</h3>
        </div>

      </div>
    </div>
  );
};

export default BannerTop;
