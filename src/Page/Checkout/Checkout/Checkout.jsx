import React from "react";
import OrderSummery from "../../Cart/Order Summery/OrderSummery";
import Order from "../Order/Order";
import Shipping from "../Shipping/Shipping";

const Checkout = () => {
  return (
    <div className="flex  pt-36 pb-20">
      <div className="max-w-xl mx-auto bg-blue-200  w-full">
        <Shipping></Shipping>
      </div>
      <div className="max-w-md mx-auto w-full">
        <Order></Order>
      </div>
    </div>
  );
};

export default Checkout;
