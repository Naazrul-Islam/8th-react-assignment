import React from "react";
import BannerTop from "../coponents/BannerTop";
import BannerMiddle from "../coponents/BannerMiddle";
import BannerEnd from "../coponents/BannerEnd";
import Footer from "../coponents/Footer";
import TrendingApps from "../coponents/TrendingApps";

const Home = () => {
  return (
    <div>
      <BannerTop></BannerTop>
      <BannerMiddle></BannerMiddle>
      <BannerEnd></BannerEnd>
      <TrendingApps></TrendingApps>
      
    </div>
  );
};

export default Home;
