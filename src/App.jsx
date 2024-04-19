import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Layout from './Component/Layout/Layout';
import Reset from './Pages/Reset/Reset';
import Profile from './Pages/Profile/Profile';
import ChangePassword from './Pages/Profile/ChangePassword/ChangePassword';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=> {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoggedIn === "true");
  },[location])


  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='reset' element={<Reset />} />
            <Route path='profile'  >
              <Route index element={<Profile />} />
              <Route path='changepassword' element={<ChangePassword />} />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
