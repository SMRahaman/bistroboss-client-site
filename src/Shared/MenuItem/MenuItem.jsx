import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="flex items-center gap-5">
      <div>
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[118px] h-[104px] bg-[#D9D9D9]"
          src={item.image}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-10">
          <span className="text-[16px] text-[#151515] uppercase font-Cinzel">
            {item.name} -------------
          </span>
          <span className="text-[16px] text-[#BB8506]">${item.price}</span>
        </div>
        <div>
          <span className="text-[14px] text-[#737373] font-inter">
            {item.recipe}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
