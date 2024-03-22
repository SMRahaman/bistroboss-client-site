import axios from "axios";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CartCard = ({ item, updateCart, setUpdateCart, loader, refetch }) => {
  console.log(item);
  const { image, itemName, itemQuantity, price, _id, totalPrice } = item;
  const quantityIncrease = (id) => {
    const updateCartItems = updateCart.map((item) => {
      if (item._id === id && item.itemQuantity < 10) {
        return {
          ...item,
          itemQuantity: item.itemQuantity + 1,
          totalPrice: Number((item.itemQuantity++ * price).toFixed(2)),
        };
      }
      return item;
    });
    setUpdateCart(updateCartItems);
    axios.put(`http://localhost:5000/api/cart/${id}`, item).then((res) => {
      console.log(res.data);
    });
  };

  const quantityDecrease = (id) => {
    const updateCartItems = updateCart.map((item) => {
      if (item._id === id && item.itemQuantity > 1) {
        return {
          ...item,
          itemQuantity: item.itemQuantity - 1,
          totalPrice: Number((item.itemQuantity-- * item.price).toFixed(2)),
        };
      }
      return item;
    });

    setUpdateCart(updateCartItems);
    axios.put(`http://localhost:5000/api/cart/${id}`, item).then((res) => {
      console.log(res.data);
    });
    refetch();
  };

  return (
    <>
      {loader ? (
        <span>Hello</span>
      ) : (
        <div className="mb-5 bg-white shadow-lg rounded">
          <div className="flex py-5 justify-around items-center gap-5">
            <div className="flex gap-5 items-center">
              <img className="w-24 h-24" src={image} alt="" />
              <span>{itemName}</span>
            </div>
            <div>${totalPrice ? totalPrice : price}</div>
            <div className="flex gap-2 items-center">
              <button onClick={() => quantityDecrease(_id)}>
                <FaMinus />
              </button>
              <span>{itemQuantity}</span>
              <button onClick={() => quantityIncrease(_id)}>
                <FaPlus />
              </button>
            </div>
            <button>
              <MdDelete className="text-black text-xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartCard;
