import React, { Suspense, useState } from "react";

const BannerTop = () => {
  const [loading, setLoading]=useState(false);
  const handleRedirect = (url) => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  };
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-4 my-10 gap-5">
      <h1 className="text-[4rem] font-bold text-center">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>

      <p className="text-[1.6rem] text-center">
        We craft innovative apps designed to make everyday life simpler,
        smarter, and more exciting. Our goal is to turn your ideas into digital
        experiences that truly make an impact.
      </p>

      {loading ? (
        <div className="flex flex-col items-center mt-8">
          <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-xl text-[#632EE3] font-semibold">
            Redirecting...
          </p>
        </div>
      ) : (
        <div className="flex gap-5 mt-5">
          <button
            onClick={() =>
              handleRedirect("https://play.google.com/store/games?hl=en")
            }
            className="flex items-center gap-2 border-2 border-gray-400 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <img src="/google-play.png" alt="" className="w-8" />
            <h3>Google Play</h3>
          </button>

          <button
            onClick={() =>
              handleRedirect("https://www.apple.com/app-store/")
            }
            className="flex items-center gap-2 border-2 border-gray-400 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <img src="/App-store.png" alt="" className="w-8" />
            <h3>App Store</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default BannerTop;
