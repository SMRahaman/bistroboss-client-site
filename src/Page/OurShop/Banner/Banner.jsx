import React from "react";
import BgBanner from "../../../Shared/BgBanner/BgBanner";
import banner from "../../../assets/shop/banner2.jpg";
const Banner = () => {
  return (
    <div>
      <BgBanner
        bgImage={banner}
        title={"Our Shop"}
        subTitle={"Would you like to try a dish?"}
      ></BgBanner>
    </div>
  );
};

export default Banner;
