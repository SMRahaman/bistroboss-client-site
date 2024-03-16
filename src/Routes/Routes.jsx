import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import OurMenus from "../Page/OurMenus/OurMenus/OurMenus";
import OurShop from "../Page/OurShop/OurShop/OurShop";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Cart from "../Page/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
