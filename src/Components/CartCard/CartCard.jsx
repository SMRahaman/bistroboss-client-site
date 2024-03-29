import axios from "axios";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CartCard = ({ item, refetch }) => {
  const { image, itemName, itemQuantity, price, _id, totalPrice } = item;
  const quantityIncrease = (id) => {
    axios
      .put(`http://localhost:5000/api/cart/${id}`, {
        itemQuantity: itemQuantity < 10 ? itemQuantity + 1 : itemQuantity,
        totalPrice:
          itemQuantity < 10
            ? Number(parseFloat((itemQuantity + 1) * price).toFixed(2))
            : totalPrice,
      })
      .then((res) => {
        refetch();
      });
  };

  const quantityDecrease = (id) => {
    axios
      .put(`http://localhost:5000/api/cart/${id}`, {
        itemQuantity: itemQuantity == 1 ? itemQuantity : itemQuantity - 1,
        totalPrice:
          itemQuantity == 1
            ? price
            : Number(parseFloat((itemQuantity - 1) * price).toFixed(2)),
      })
      .then((res) => {
        refetch();
      });
  };
  const cartDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/api/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  return (
    <>
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
            <MdDelete
              onClick={() => cartDeleteHandler(_id)}
              className="text-black text-xl"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
