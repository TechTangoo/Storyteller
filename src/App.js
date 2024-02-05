import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useState } from "react";
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

  const token = sessionStorage.getItem('token') ?? true;
  const [theme, setTheme] = useState(null)

  useEffect(() => { 
    if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      localStorage.theme = 'dark'
    } else {
      setTheme('light');
      localStorage.theme = 'light'
    }
  },[])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'
    }
  }, [theme])

  const handleThemeChange = (theme) => {
    setTheme(theme);
  }


  return (
    <div >
      <Suspense fallback={<h3>Loading...</h3>}>
        {token ?
          <div style={{ alignItems: 'center', position: 'absolute', display: 'flex', flex: 1, backgroundColor: '#a855f7', height: 50, width: '100vw', justifyContent: 'space-between' }}>
            <div>LOGO</div>
            <div className='flex items-center'>
              {theme === 'dark' ? <div className='cursor-pointer' onClick={() => handleThemeChange('light')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg></div> :
                <div className='cursor-pointer' onClick={() => handleThemeChange('dark')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg></div>}
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
