import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PrivateAuth = ({ children }) => {
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


export const PrivateLoggedAuth = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [location.pathname]);
  return children;
}