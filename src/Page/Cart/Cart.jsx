import React, { useState } from "react";
import useCartHook from "../../Hook/CartHook/useCartHook";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const [cart, refetch] = useCartHook();
  const [count, setCount] = useState(0);
  console.log(cart);
  return (
    <div>
      <div className="max-w-xl">
        {cart.map((cart) => (
          <div className="flex items-center gap-5">
            <div className="flex gap-5 items-center">
              <img className="w-24 h-24" src={cart.image} alt="" />
              <span>{cart.itemName}</span>
            </div>
            <div>
              <span>{cart.price}</span>
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={() => setCount(count - 1)}>
                <FaMinus />
              </button>
              <input
                value={count}
                className=" text-center w-12 border border-red-700 "
                type="text"
                name=""
                id=""
              />
              <button onClick={() => setCount(count + 1)}>
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-md">
        <p>Order summery</p>
      </div>
    </div>
  );
};

export default Cart;
