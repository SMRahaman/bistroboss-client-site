import React from "react";
import MenuCard from "../../../Shared/MenuCard/MenuCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-5">
      {items.map((card) => (
        <MenuCard key={card._id} card={card}></MenuCard>
      ))}
    </div>
  );
};

export default OrderTab;
