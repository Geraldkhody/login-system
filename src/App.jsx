import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Main/Home/Home';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Layout from './Component/Layout/Layout';
import Reset from './Pages/Auth/Reset/Reset';
import Profile from './Pages/Main/Profile/Profile';
import ChangePassword from './Pages/Main/Profile/ChangePassword/ChangePassword';
import { PrivateAuth, PrivateLoggedAuth } from './Component/Layout/PrivateAuth';

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<PrivateLoggedAuth />}>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='reset' element={<Reset />} />
            </Route>

            <Route element={<PrivateAuth />}>
              <Route index element={ <Home /> } />
              <Route path='profile'  >
                <Route index element={<Profile />} />
                <Route path='changepassword' element={<ChangePassword />} />
              </Route>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
