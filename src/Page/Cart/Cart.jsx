import React, { useState } from "react";
import useCartHook from "../../Hook/CartHook/useCartHook";
import CartCard from "../../Components/CartCard/CartCard";
const Cart = () => {
  const [cart, isLoading, refetch] = useCartHook();
  const [updateCart, setUpdateCart] = useState(cart);
  console.log(updateCart);
  return (
    <div className="pb-24 pt-32">
      <div className="flex justify-around">
        <div className="max-w-xl w-full">
          <div className="pb-3">
            <p className="text-2xl text-center font-bold uppercase">
              Shopping Cart
            </p>
          </div>
          {updateCart.map((item) => (
            <CartCard
              loader={isLoading}
              updateCart={updateCart}
              refetch={refetch}
              key={item._id}
              setUpdateCart={setUpdateCart}
              item={item}
            ></CartCard>
          ))}
        </div>
        <div className="max-w-md w-full">
          <div className="bg-white shadow-lg py-12">
            <p className="text-2xl font-bold text-center mb-3 uppercase">
              Order summery
            </p>
            <div className="px-5 space-y-2">
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p>$0</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Cost</p>
                <p>$0</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>$0</p>
              </div>
            </div>
            <div className="text-center mt-2">
              <button className="w-[90%] bg-red-700 text-white py-2">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
