import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css"
import { Link, useNavigate, useLocation } from "react-router-dom";
import Card from "../Card/Card";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isLogout, setIsLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoggedIn === "true");
    setShowProfileMenu(false);
  }, [location]); 

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");


    setIsLogout(false);
    navigate("/login");
  };

  const handleCancel = () => {
    console.log("Logout canceled.");
    setIsLogout(false);
  };

  return (
    <div style={{boxShadow: '0 2px 18px -6px rgba(0, 87, 255, 1)'}} className=" bg-[#fff] w-[100%] h-14 sm:h-16 md:h-[4.5rem] px-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center rounded-b-xl sm:rounded-b-2xl border-b-2 ">
      <Link to='/'>
        <img
          src="/images/Logo.svg"
          alt="Logo"
          className="w-[3.5rem] sm:w-[4rem] md:w-20 "
        />

      </Link>

      {isLoggedIn && (
        <section className="relative z-[3]"  >
          <div onClick={( )=>setShowProfileMenu(!showProfileMenu)} className={`${style.profile} w-8 h-8 rounded-full bg-slate-500 border-2 border-black relative cursor-pointer `}>
            <div className="overflow-hidden w-full h-full rounded-full">
              <img className="w-full h-full object-cover " src="/images/Profile.jpeg" alt="profile image" />
            </div>
            <div className="absolute z-10 top-0 right-0 w-2 h-2 rounded-full bg-yellow-600 "></div>
          </div>
          {
            showProfileMenu && <div className="absolute block overflow-hidden top-[1.8rem] right-0">
            <ul className="bg-white flex flex-col anidown w-[200px] border m-auto p-[2px] ">
              <Link to={`/profile`} className="border-b py-1 px-3 hover:bg-[#eee] text-sm h-[40px] flex items-center text-center transition duration-300 hover:scale-[1.05]  ">
                <button className="flex items-center"><img className="w-4 h-4 mr-2" src="/images/profile-icon.svg" alt="" /> Profile</button>
              </Link>
              <li onClick={() => {
                  setIsLogout(true)
                  setShowProfileMenu(!showProfileMenu)
                }} className="py-1 px-3 hover:bg-[#eee] cursor-pointer text-sm h-[40px] flex items-center text-center transition duration-300 hover:scale-[1.1]  ">
                <button className="flex items-center"><img className="w-4 h-4 mr-2" src="/images/logout.svg" alt="" />  Logout</button>
              </li>
            </ul>
          </div>
          }
          
        </section>
      )}

      {isLogout && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-20"
          onClick={() => setIsLogout(false)}
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

      {
        showProfileMenu && <div style={{zIndex: 2}} onClick={()=>setShowProfileMenu(!showProfileMenu)} className="absolute top-0 left-0 right-0 bottom-0 bg-transparent"></div>
      }
      
    </div>
  );
};

export default NavBar;
