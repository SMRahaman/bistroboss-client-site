import React from "react";

const Shipping = () => {
  return (
    <div>
      <form>
        <p className="text-2xl font-bold text-center mb-3 uppercase">
          Shipping Information
        </p>
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="">Name</label>
            <input
              placeholder="Enter Name"
              className="w-full h-[40px] border px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="">Email</label>
            <input
              placeholder="Enter email"
              className="w-full h-[40px] border px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="">Phone Number</label>
            <input
              placeholder="Enter phone number"
              className="w-full h-[40px] border px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Shipping Address</label>
            <textarea
              placeholder="Enter shipping address "
              className="w-full h-[140px] border px-2"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
