import React, { useContext, useState } from "react";
import useCartHook from "../../../Hook/CartHook/useCartHook";
import CartCard from "../../../Components/CartCard/CartCard";
import axios from "axios";
import { AuthContex } from "../../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import OrderSummery from "../Order Summery/OrderSummery";
const Cart = () => {
  const { user } = useContext(AuthContex);
  const [cart, isLoading, refetch] = useCartHook();
  const [shippingCost, setShippingCost] = useState();
  console.log(cart);

  const subTotal = cart.reduce(
    (acc, total) =>
      Number(
        parseFloat(
          acc + (total.totalPrice ? total.totalPrice : total.price)
        ).toFixed(2)
      ),
    0
  );

  const total = Number(
    parseFloat(parseInt(shippingCost) + subTotal).toFixed(2)
  );

  const allCartDeleteHandler = (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete all product from your cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/api/cart?userId=${uid}`)
          .then((res) => {
            console.log(res.data);
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
    <div className="pb-24 pt-32">
      <div className="flex justify-around">
        <div className="max-w-xl w-full">
          <div className="pb-3">
            <p className="text-2xl text-center font-bold uppercase">
              Shopping Cart
            </p>
          </div>
          <div>
            {cart.length === 0 ? (
              <p className="text-center py-12 text-2xl">Cart Eampty</p>
            ) : (
              cart.map((item) => (
                <CartCard
                  refetch={refetch}
                  key={item._id}
                  item={item}
                ></CartCard>
              ))
            )}
            <div className={cart.length == 0 ? "hidden" : "text-right"}>
              <button
                onClick={() => allCartDeleteHandler(user.uid)}
                className="bg-green-700 w-[150px] h-[40px] text-white font-bold"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-md w-full">
          <OrderSummery
            cart={cart}
            subTotal={subTotal}
            total={total}
            shippingCost={shippingCost}
            setShippingCost={setShippingCost}
          ></OrderSummery>
        </div>
      </div>
    </div>
  );
};

export default Cart;
