import React from "react";

const Title = ({ title, header }) => {
  return (
    <div className="text-center pb-12 pt-20">
      <span className="text-[#D99904] text-[16px] italic ">{title}</span>
      <hr className="w-[424px] mx-auto" />
      <h3 className="uppercase text-[36px] py-2">{header}</h3>
      <hr className="w-[424px] mx-auto" />
    </div>
  );
};

export default Title;
