import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Components/AuthProvider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCartHook from "../../Hook/CartHook/useCartHook";
const NavBar = () => {
  const { user, logout } = useContext(AuthContex);
  const [cart] = useCartHook();
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    console.log(user);
    navigate("/");
  };
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
        <div className="flex items-center justify-between px-12">
          <div>
            <span className="uppercase text-xl font-bold font-cinzel">
              Bistro Boss<br></br>
              <span className="text-lg tracking-widest">Resturant</span>
            </span>
          </div>
          <div>
            <ul className="flex items-center gap-5 uppercase font-inter">
              <li>
                <Link to="/">Home</Link>
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
              <li className="relative">
                <Link to="/cart">
                  <FaCartPlus className="text-2xl relative" />
                  <div className="absolute top-[-18px] right-2">
                    <span className="w-8 text-xs  h-8 bg-red-700 text-white p-2 rounded-full">
                      {cart.length}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <span className="text-green-700 uppercase font-bold">
                  {user?.displayName}
                </span>
              </li>
              <li>
                {user ? (
                  <Link to="/">
                    <button
                      onClick={logoutHandler}
                      className="uppercase bg-red-700 p-2 rounded-lg"
                    >
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="uppercase bg-red-700 p-2 rounded-lg"></button>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
