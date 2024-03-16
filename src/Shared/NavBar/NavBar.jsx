import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Components/AuthProvider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
const NavBar = () => {
  const { user, logout } = useContext(AuthContex);
  const [nav, setNav] = useState(false);
  const logoutHandler = () => {
    logout();
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
            <ul className="flex items-center gap-3 uppercase font-inter">
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
              <li>
                <Link to="/cart">
                  <FaCartPlus className="text-2xl" />
                </Link>
              </li>
              <li>
                {user ? (
                  <button
                    onClick={logoutHandler}
                    className="uppercase bg-red-700 p-2 rounded-lg"
                  >
                    <Link to="/sign-out">Logout</Link>
                  </button>
                ) : (
                  <button className="uppercase bg-red-700 p-2 rounded-lg">
                    <Link to="/login">Login</Link>
                  </button>
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
