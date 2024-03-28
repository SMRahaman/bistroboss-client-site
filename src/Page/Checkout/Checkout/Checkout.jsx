import React from "react";
import Order from "../Order/Order";
import Shipping from "../Shipping/Shipping";
import Payment from "../Payment/Payment";
import useCartHook from "../../../Hook/CartHook/useCartHook";
const Checkout = () => {
  const [cart, refetch] = useCartHook();
  const subTotal = cart.reduce(
    (acc, total) =>
      Number(
        parseFloat(
          acc + (total.totalPrice ? total.totalPrice : total.price)
        ).toFixed(2)
      ),
    0
  );

  const tax = Number(parseFloat(subTotal * (7 / 100)).toFixed(2));

  const total = Number(parseFloat(subTotal + tax).toFixed(2));
  return (
    <div className=" pt-36 pb-12">
      <div className="flex">
        <div className="max-w-xl mx-auto shadow-lg w-full py-8">
          <Shipping></Shipping>
        </div>
        <div className="max-w-md mx-auto w-full ">
          <div className="bg-white shadow-lg py-8">
            <p className="text-2xl font-bold text-center mb-3 uppercase">
              Order summery
            </p>
            <div className="flex justify-between text-xs px-5 mb-3">
              <span>image</span>
              <span> Name</span>
              <span> Quantity</span>
              <span> Price</span>
            </div>
            {cart.length == 0 ? (
              <p className="text-xl font-bold text-center py-4">Cart Empty</p>
            ) : (
              cart.map((item) => <Order key={item._id} item={item}></Order>)
            )}
            <div className="px-5 space-y-2">
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p className="font-bold">${subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p className="font-bold">${tax}</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p className="font-bold">${total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto mt-12">
        <p className="text-2xl font-bold text-center mb-3 uppercase">
          Payment Information
        </p>
        <Payment total={total}></Payment>
      </div>
      <div className="mt-12 text-center">
        <button className=" bg-red-700 w-1/2  text-white font-bold h-[48px]">
          Order Place
        </button>
      </div>
    </div>
  );
};

export default Checkout;
