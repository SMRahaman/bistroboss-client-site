import React from "react";

const MenuCard = ({ card }) => {
  return (
    <div className="w-[350px] rounded-md bg-[#F3F3F3]">
      <div className="relative">
        <img
          className="w-[350px] h-[250px] p-2 rounded-lg relative"
          src={card.image}
          alt=""
        />
        <span className="absolute top-5 right-5 bg-black text-white px-2 py-1 rounded-md">
          ${card.price}
        </span>
      </div>
      <div className="px-4">
        <p className="text-[20px] font-bold text-center mt-2">{card.name}</p>
        <p className="text-[12px] text-[#737373] text-start mt-1">
          {card.recipe}
        </p>
      </div>
      <div className="text-center py-5">
        <button className="uppercase border-b-[3px] rounded-[8px] border bg-[#E8E8E8] border-[#BB8506] text-[#BB8506] px-[20px] py-[10px] duration-700 hover:bg-[#1F2937]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
