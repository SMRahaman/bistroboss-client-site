import React from "react";
import { Parallax } from "react-parallax";

const ImageWithTitle = ({ bgImage, title, subTitle }) => {
  return (
    <Parallax
      bgImage={bgImage}
      strength={500}
      style={{
        width: "1152px",
        marginTop: "80px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        padding: "100px ",
      }}
    >
      <div className="max-w-3xl mx-auto bg-white px-16 py-12">
        <h3 className="font-Cinzel text-5xl text-[#151515] text-center mb-2">
          {title}
        </h3>
        <p className="font-intra text-[14px] text-[#151515] text-center">
          {subTitle}
        </p>
      </div>
    </Parallax>
  );
};

export default ImageWithTitle;
