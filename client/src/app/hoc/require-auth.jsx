import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Context } from "../../index";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(Context);
  const isAuth = user.auth;
  if (!isAuth) return <Navigate to="/" state={{ from: location }} />;
  return children;
};
export default RequireAuth;
