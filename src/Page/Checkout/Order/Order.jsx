import React from "react";

const Order = ({ item, subTotal, tax, total }) => {
  const { image, itemName, itemQuantity, totalPrice, price } = item;
  return (
    <div className="px-5 mb-5">
      <div className="flex justify-between items-center ">
        <img className="w-16 h-16" src={image} alt="" />
        <span>{itemName}</span>
        <span>{itemQuantity}</span>
        <span>${totalPrice ? totalPrice : price}</span>
      </div>
    </div>
  );
};

export default Order;
