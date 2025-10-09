import React from "react";

const BannerEnd = () => {
  return (
    <div className=" mx-auto flex flex-col items-center justify-center  py-[80px]  gap-5 bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white">
      <h1 className="lg:text-[3rem] text-2xl font-bold text-center text-white">Trusted by Millions, Built for You</h1>
      <div className="flex justify-between lg:gap-10">
        <div className="text-center lg:mr-10 mr-4">
        <p>Total Downloads</p>
        <h1 className="lg:text-[4rem] text-3xl font-bold">29.6M</h1>
        <p>21% more than last month</p>
      </div>
      <div className="text-center lg:mr-10 mr-4">
        <p>Total Revews</p>
        <h1 className="lg:text-[4rem] text-3xl font-bold">906K</h1>
        <p>46% more than last month</p>
      </div>
      <div className="text-center lg:mr-2">
        <p>Active apps</p>
        <h1 className="lg:text-[4rem] text-3xl font-bold">132+</h1>
        <p>31% more will lunch</p>
      </div>
      </div>
    </div>
  );
};

export default BannerEnd;
