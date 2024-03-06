import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import OurMenus from "../Page/OurMenus/OurMenus/OurMenus";
import OurShop from "../Page/OurShop/OurShop/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenus></OurMenus>,
      },
      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop></OurShop>,
      },
    ],
  },
]);
