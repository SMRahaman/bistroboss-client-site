import React from "react";
import { useNavigate } from "react-router-dom";

const CommonButton = ({ btnName, title }) => {
  const navigate = useNavigate();
  const menuButton = () => {
    navigate(`/our-shop/${title}`);
  };
  return (
    <div className="text-center mt-12">
      <button
        onClick={menuButton}
        className="border-b-[3px] border-[#1F2937] uppercase px-[30px] py-[20px] rounded-[8px] hover:bg-[#1F2937] duration-700 hover:text-white"
      >
        {btnName}
      </button>
    </div>
  );
};

export default CommonButton;
