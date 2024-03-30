import React from "react";
import MenuCard from "../../../Shared/MenuCard/MenuCard";
import useCartHook from "../../../Hook/CartHook/useCartHook";

const OrderTab = ({ items }) => {
  const [cart, refetch] = useCartHook();
  return (
    <div className="grid grid-cols-3 place-items-center gap-5">
      {items.map((card) => (
        <MenuCard refetch={refetch} key={card._id} card={card}></MenuCard>
      ))}
    </div>
  );
};

export default OrderTab;
