import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import NoWorkResult from "postcss/lib/no-work-result";

const Main = () => {
  const location = useLocation();
  const noShowLoginHeaderFooter = location.pathname === "/login";
  const noShowRegistrationHeaderFooter = location.pathname === "/registration";
  return (
    <div>
      {noShowLoginHeaderFooter || noShowRegistrationHeaderFooter || (
        <NavBar></NavBar>
      )}
      <Outlet></Outlet>
      {noShowLoginHeaderFooter || noShowRegistrationHeaderFooter || (
        <Footer></Footer>
      )}
    </div>
  );
};

export default Main;
