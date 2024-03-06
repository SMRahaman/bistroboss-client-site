import React from "react";
import backgroundImage from "../../../assets/menu/banner3.jpg";
import BgBanner from "../../../Shared/BgBanner/BgBanner";

const Banner = () => {
  return (
    <div>
      <BgBanner
        bgImage={backgroundImage}
        title="Our Menu"
        subTitle="Would you like to your dish"
      ></BgBanner>
    </div>
  );
};

export default Banner;
