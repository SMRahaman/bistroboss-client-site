import React, { useContext, useState } from "react";
import Order from "../CartOrder/CartOrder";
import useCartHook from "../../../Hook/CartHook/useCartHook";
import { useForm } from "react-hook-form";
import { AuthContex } from "../../../Components/AuthProvider/AuthProvider";
import qrcode from "../../../assets/contact/qr.png";
import axios from "axios";
import toast from "react-hot-toast";
const Checkout = () => {
  const { user } = useContext(AuthContex);
  const [cart, refetch] = useCartHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [payment, setPayment] = useState("");
  const [shippingPrice, setshippingPrice] = useState(0);
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
  const total = Number(
    parseFloat(parseFloat(subTotal + tax) + parseInt(shippingPrice)).toFixed(2)
  );
  const orderConfirmHandler = (data, uid) => {
    if (cart.length === 0) {
      toast.error("Your cart is Empty");
    } else {
      if (payment == "") {
        toast.error("please select payment method");
      } else if (shippingPrice == "") {
        toast.error("Please select shipping price");
      } else {
        if (data) {
          axios
            .post("http://localhost:5000/api/order", {
              data,
              ProductInfo: cart,
              paymentMethod: payment,
              totalPrice: total,
            })
            .then((res) => console.log(res.data));
        }
        if (uid) {
          axios
            .delete(`http://localhost:5000/api/cart?userId=${uid}`)
            .then((res) => console.log(res.data));
        }
      }
    }
  };

  return (
    <div className="pt-28 pb-12">
      <div className="flex">
        <div className="max-w-xl mx-auto w-full py-8">
          <form
            onSubmit={handleSubmit((data) =>
              orderConfirmHandler(data, user.uid)
            )}
          >
            <p className="text-2xl font-bold text-center mb-3 uppercase">
              Shipping Information
            </p>
            <div className="w-11/12 mx-auto">
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Name</label>
                <input
                  {...register("fullName", { required: true })}
                  placeholder="Enter Name"
                  className="w-full h-[40px] border px-2"
                  type="text"
                />
              </div>
              {errors?.fullName?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Name is required
                </p>
              )}
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Email</label>
                <input
                  {...register("email")}
                  readOnly
                  defaultValue={user.email}
                  placeholder="Enter email"
                  className="w-full h-[40px] border px-2"
                  type="text"
                />
              </div>
              {errors?.email?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Name is required
                </p>
              )}
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Phone Number</label>
                <input
                  {...register("phoneNumber", { required: true })}
                  placeholder="Enter phone number"
                  className="w-full h-[40px] border px-2"
                  type="text"
                />
              </div>
              {errors?.phoneNumber?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Phone Number is required
                </p>
              )}
              <div className="flex flex-col gap-2">
                <label htmlFor="">Shipping Address</label>
                <textarea
                  {...register("shippingAddress", { required: true })}
                  placeholder="Enter shipping address "
                  className="w-full h-[140px] border px py-2"
                  type="text"
                />
              </div>
              {errors?.shippingAddress?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Shipping Address is required
                </p>
              )}
              <div className="mt-12">
                <p className="text-2xl font-bold text-center mb-3 uppercase">
                  Payment Method
                </p>
                <div className="flex justify-center gap-3 mt-5">
                  <label>
                    <input
                      onChange={(e) => setPayment(e.target.value)}
                      checked={payment == "bkash"}
                      className="mr-2"
                      value="bkash"
                      type="radio"
                    />
                    Bkash
                  </label>
                  <label>
                    <input
                      onChange={(e) => setPayment(e.target.value)}
                      checked={payment == "nagad"}
                      className="mr-2"
                      value="nagad"
                      type="radio"
                    />
                    Nagad
                  </label>
                  <label>
                    <input
                      onChange={(e) => setPayment(e.target.value)}
                      checked={payment == "cash"}
                      className="mr-2"
                      value="cash"
                      type="radio"
                    />
                    Cash On Delivery
                  </label>
                </div>
                <div
                  className={
                    payment == "nagad" || payment == "bkash"
                      ? "block"
                      : "hidden"
                  }
                >
                  <div className="mt-8">
                    <div className="flex flex-col gap-1 mb-2">
                      <label htmlFor="">Amount:</label>
                      {(payment == "bkash" || payment == "nagad") && (
                        <input
                          {...register("payAmount", { required: true })}
                          placeholder="Enter Amount"
                          className="w-1/2 h-[40px] border px-2"
                          type="text"
                        />
                      )}
                    </div>
                    {errors?.payAmount?.type === "required" && (
                      <p className="text-red-700 text-xs" role="alert">
                        Amount is required
                      </p>
                    )}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="">Transaction ID:</label>
                      {(payment == "bkash" || payment == "nagad") && (
                        <input
                          {...register("transactionId", { required: true })}
                          placeholder="Enter Transaction ID"
                          className="w-1/2 h-[40px] border px-2"
                          type="text"
                        />
                      )}
                    </div>
                    {errors?.transactionId?.type === "required" && (
                      <p className="text-red-700 text-xs" role="alert">
                        TransactionID is required
                      </p>
                    )}
                    <div className="mt-5">
                      <div className={payment == "bkash" ? "block" : "hidden"}>
                        <img className="w-1/4" src={qrcode} alt="" />
                        <span className="mt-2">
                          Marchent Number: 01405615433
                        </span>
                      </div>
                      <div className={payment == "nagad" ? "block" : "hidden"}>
                        <img className="w-1/4" src={qrcode} alt="" />
                        <span className="mt-2">
                          Marchent Number:01747290323
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-red-700 text-white w-full py-4 mt-12"
              >
                Order Confirm
              </button>
            </div>
          </form>
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
                <p>Shipping Cost</p>
                <div className="flex flex-col items-end gap-2">
                  <label>
                    <input
                      onChange={(e) => setshippingPrice(e.target.value)}
                      checked={shippingPrice == 50}
                      className="mr-2"
                      value={50}
                      type="radio"
                    />
                    Dhaka Inside ($50)
                  </label>
                  <label>
                    <input
                      onChange={(e) => setshippingPrice(e.target.value)}
                      checked={shippingPrice == 120}
                      className="mr-2"
                      value={120}
                      type="radio"
                    />
                    Dhaka Outside ($120)
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p className="font-bold">${total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
