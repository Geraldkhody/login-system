import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Layout from './Component/Layout/Layout';
import Reset from './Pages/Reset/Reset';
import Profile from './Pages/Profile/Profile';
import ChangePassword from './Pages/Profile/ChangePassword/ChangePassword';

function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");


  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
