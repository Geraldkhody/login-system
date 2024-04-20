import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateAuth = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [location.pathname]);
  return children;
};

export default PrivateAuth;
