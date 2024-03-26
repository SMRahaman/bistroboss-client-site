import React from "react";
import useCartHook from "../../../Hook/CartHook/useCartHook";

const Order = () => {
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
    <div>
      <div className="bg-white shadow-lg py-12">
        <p className="text-2xl font-bold text-center mb-3 uppercase">
          Order summery
        </p>
        <div>
          <div className="flex justify-between text-xs px-5 mb-3">
            <span>image</span>
            <span> Name</span>
            <span> Quantity</span>
            <span> Price</span>
          </div>
          {cart.map((item) => (
            <div className="px-5 mb-3 divide-x divide-solid">
              <div className="flex justify-between items-center ">
                <img className="w-16 h-16" src={item.image} alt="" />
                <span>{item.itemName}</span>
                <span>{item.itemQuantity}</span>
                <span>${item.totalPrice ? item.totalPrice : item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 space-y-2">
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>${tax}</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
