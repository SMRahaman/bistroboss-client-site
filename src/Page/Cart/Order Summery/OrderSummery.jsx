import React, { useContext } from "react";
import { AuthContex } from "../../../Components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OrderSummery = ({ subTotal, cart }) => {
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();
  const checkoutHandler = (uid) => {
    if (cart.length === 0) {
      toast.error("Please add product your cart");
      navigate("/our-shop");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div>
      <div className="bg-white shadow-lg py-12">
        <p className="text-2xl font-bold text-center mb-3 uppercase">
          Order summery
        </p>
        <div className="px-5 space-y-2">
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>${subTotal}</p>
          </div>

          <div className="flex justify-between">
            <p>Total</p>
            <p>${subTotal}</p>
          </div>
        </div>
        <div className="text-center mt-2">
          <button
            onClick={() => checkoutHandler(user.uid)}
            className="w-[90%] bg-red-700 text-white py-2"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
