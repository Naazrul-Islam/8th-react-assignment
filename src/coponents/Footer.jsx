import React from "react";

const Footer = () => {
  return (
    <div className="footer footer-center p-10 bg-black text-base-content flex flex-col justify-center items-center">
      <div className="flex items-center gap-2 p-4">
        <img src="/logo.png" alt="" className="w-[60px]" />
        <h1 className="font-bold text-white text-2xl">HERO.IO</h1>
      </div>
      <p className="font-bold text-white text-l">
        Copyright © 2023 - All right reserved by HERO.IO
      </p>
    </div>
  );
};

export default Footer;
