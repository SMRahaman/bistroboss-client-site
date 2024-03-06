import React from "react";

const CommonButton = ({ btnName }) => {
  return (
    <div className="text-center mt-12">
      <button className="border-b-[3px] border-[#1F2937] uppercase px-[30px] py-[20px] rounded-[8px] hover:bg-[#1F2937] duration-700 hover:text-white">
        {btnName}
      </button>
    </div>
  );
};

export default CommonButton;
