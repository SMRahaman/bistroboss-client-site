import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      className={
        !nav
          ? "bg-black fixed top-0 z-10 w-full text-white bg-opacity-30 py-3"
          : "bg-[#111827] fixed z-10 w-full text-white py-3 duration-700 ease-in-out"
      }
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <div>
            <span className="uppercase text-xl font-bold font-cinzel">
              Bistro Boss<br></br>
              <span className="text-lg tracking-widest">Resturant</span>
            </span>
          </div>
          <div>
            <ul className="flex gap-3 uppercase font-inter">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact US</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/our-menu">Our Menu</Link>
              </li>
              <li>
                <Link to="/our-shop">Our Shop</Link>
              </li>
              <li>
                <Link to="/sign-out">Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
