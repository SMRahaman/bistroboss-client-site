import React, { useContext, useState } from "react";
import useCartHook from "../../Hook/CartHook/useCartHook";
import CartCard from "../../Components/CartCard/CartCard";
import axios from "axios";
import { AuthContex } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Cart = () => {
  const { user } = useContext(AuthContex);
  const [cart, isLoading, refetch] = useCartHook();
  const [shippingCost, setShippingCost] = useState("");
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
                <p>Shipping Cost</p>
                <div className="flex-col items-end">
                  <div className="flex gap-2 items-center justify-end">
                    <span>Inside Dhaka</span>
                    <input
                      onChange={(e) => console.log(e.target.value)}
                      value="inSideDhaka"
                      type="radio"
                    />
                    <div>$50</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>Outside Dhaka</span>
                    <input
                      onChange={(e) => console.log(e.target.value)}
                      value="outSideDhaka"
                      type="radio"
                    />
                    <div>$120</div>
                  </div>
                </div>
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
