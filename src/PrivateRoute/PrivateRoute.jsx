import React, { useContext } from "react";
import { AuthContex } from "../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Blocks } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContex);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loader) {
    return (
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    );
  }
  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
