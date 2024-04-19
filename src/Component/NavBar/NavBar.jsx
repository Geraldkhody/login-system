import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Card/Card";

const NavBar = () => {
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   return localStorage.getItem("isLoggedIn") === "true";
  // });

  let isLoggedIn
  useEffect(() => {
    isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn)
  },[isLoggedIn])


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");

    console.log("Logging out...");

    setOverlay(false);
    navigate("/login");
  };

  const handleCancel = () => {
    console.log("Logout canceled.");
    setOverlay(false);
  };

  return (
    <div className=" bg-[#fff] w-[100%] h-14 sm:h-16 md:h-[4.5rem] px-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center rounded-b-xl sm:rounded-b-2xl border-b-2 border-b-blue-500 shadow-[0, 4, 18, -6] ">
      <img
        src="/images/Logo.svg"
        alt="Logo"
        className="w-[3.5rem] sm:w-[4rem] md:w-20 "
      />

      {!isLoggedIn && (
        <div className="w-8 h-8 rounded-full bg-slate-500 relative cursor-pointer ">
          <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow-600 "></div>
          <ul className="bg-white border absolute top-[100%] p-[2px] ">
            <li className="border-b py-1 px-3 hover:bg-[#eee] text-sm">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="py-1 px-3 hover:bg-[#eee] text-sm ">
              <button onClick={() => setOverlay(true)}>Logout</button>
            </li>
          </ul>
        </div>
      )} 

      {overlay && (
        <div
          className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-20"
          onClick={() => setOverlay(false)}
        >
          <Card className=" max-w-md">
            <p className="text-lg mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-center gap-8">
              <button
                className="bg-red-500 text-white rounded-lg px-6 py-2"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                className="bg-gray-500 text-white rounded-lg px-6 py-2"
                onClick={handleCancel}
              >
                No
              </button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NavBar;
