import React from "react";

const BgBanner = ({ bgImage, title, subTitle }) => {
  return (
    <div
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "none",
        padding: "120px",
      }}
    >
      <div className="max-w-3xl  mx-auto bg-black bg-opacity-50 px-16 py-12">
        <h3 className="font-Cinzel uppercase text-[75px] text-white text-center mb-2">
          {title}
        </h3>
        <p className="font-intra text-[24px] font-bold text-white text-center">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default BgBanner;
