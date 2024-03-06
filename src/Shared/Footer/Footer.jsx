import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-[#1F2937] py-5">
          <p className="uppercase text-[28px] text-center text-white">
            Contact Us
          </p>
          <p className="text-center text-white text-[16px]">
            123 ABS Street, Uni 21, Bangladesh
          </p>
          <p className="text-center text-white text-[16px]">+88 123456789</p>
          <p className="text-center text-white text-[16px]">
            Mon - Fri: 08:00 - 22:00
          </p>
          <p className="text-center text-white text-[16px]">
            `Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-[#111827] py-5">
          <p className="uppercase text-[28px] text-center text-white">
            Follow Us
          </p>
          <p className="text-center text-white text-[16px]">
            Join us on social media
          </p>
        </div>
      </div>
      <div className="bg-black py-3">
        <p className="text-center text-white text-[16px]">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
