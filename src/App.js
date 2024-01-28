import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const NotFound = lazy(() => import('./pages/notfound'));
const Gener = lazy(() => import('./pages/gener'));
const Favorite = lazy(() => import('./pages/favorite'));
const Create = lazy(() => import('./pages/create'));
const Profile = lazy(() => import('./pages/profile'));
const Sidebar = lazy(() => import('./components/sidebar'));

function App() {
  const token = sessionStorage.getItem('token');
  return (
    <div >
      <Suspense fallback={<h3>Loading...</h3>}>
        {token ?
        <div style={{ alignItems: 'center', position: 'absolute', display: 'flex', flex: 1, backgroundColor: '#a855f7', height: 50, width: '100vw', justifyContent: 'space-between' }}>
          <div>LOGO</div>
          <div>
            <Sidebar />
          </div>
          </div>
         : null}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/gener" exact element={<Gener />} />
          <Route path="/fav" exact element={<Favorite />} />
          <Route path="/create" exact element={<Create />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
