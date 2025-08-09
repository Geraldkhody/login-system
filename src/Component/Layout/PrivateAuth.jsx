import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = localStorage.getItem("isLoggedIn");

export const PrivateAuth = () => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};


export const PrivateLoggedAuth = () => {
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}