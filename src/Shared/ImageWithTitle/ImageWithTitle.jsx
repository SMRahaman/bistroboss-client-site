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
      <div className="max-w-3xl mx-auto bg-black bg-opacity-55 px-16 py-12">
        <h3 className="font-Cinzel uppercase text-5xl text-white text-center mb-2">
          {title}
        </h3>
        <p className="font-intra text-[14px] text-white text-center">
          {subTitle}
        </p>
      </div>
    </Parallax>
  );
};

export default ImageWithTitle;
