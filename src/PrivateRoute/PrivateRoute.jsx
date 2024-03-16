import React, { useContext } from "react";
import { AuthContex } from "../Components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContex);
  if (user) {
    return children;
  }

  if (loader) {
    return (
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    );
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
