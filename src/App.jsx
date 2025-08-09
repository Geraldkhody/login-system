import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './Pages/Main/Home/Home';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Layout from './Component/Layout/Layout';
import Reset from './Pages/Auth/Reset/Reset';
import Profile from './Pages/Main/Profile/Profile';
import ChangePassword from './Pages/Main/Profile/ChangePassword/ChangePassword';
import { PrivateAuth, PrivateLoggedAuth } from './Component/Layout/PrivateAuth';

function App() {
  // const location = useLocation();
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(()=> {
  //   const storedLoggedIn = localStorage.getItem("isLoggedIn");
  //   setIsLoggedIn(storedLoggedIn === "true");
  // },[location])


  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* <Route index element={ <Home />} /> */}
            <Route index element={ <PrivateAuth><Home /> </PrivateAuth>  } />
            <Route path='login' element={<PrivateLoggedAuth><Login /></PrivateLoggedAuth> } />
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
