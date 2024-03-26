import React from "react";

const Shipping = () => {
  return (
    <div>
      <form>
        <p className="text-2xl font-bold text-center mb-3 uppercase">
          Shipping Information
        </p>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
