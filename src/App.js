import './App.css';
import { Route, Routes } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import bgmusic from './img/bg.mp3'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import click from './img/click.wav'
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Tooltip } from '@mui/material';
import Background from './components/background';
import Butterfly from './components/butterfly';
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
  const [theme, setTheme] = useState(true);
  const [sound, setSound] = useState(false);
  const [audio] = useState(new Audio(bgmusic));
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
      localStorage.theme = 'dark';
    } else {
      setTheme(false);
      localStorage.theme = 'light';
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'
    }
  }, [theme])

  const handleThemeChange = () => {
    setTheme(!theme);
  }

  const MaterialUISwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#000',
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 0.5,
          backgroundColor: '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme ? '#e9d5ff' : '#3b0764',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#ccc',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 0.5,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  const handlePlay = (bool) => {
    if (bool) {
      setSound(true);
      audio.volume = 0.05;
      audio.loop = true;
      audio.play();
    } else {
      setSound(false);
      audio.pause();
    }
  };

  const buttonClick = () => {
    const audio = new Audio(click);
    audio.volume = 0.2;
    audio.play();
  }


  return (
    <div >
      <Background />
      <Butterfly />
      <Suspense fallback={<h3>Loading...</h3>}>
        {token ?
          <div style={{ alignItems: 'center', position: 'absolute', display: 'flex', flex: 1, backgroundColor: '#a855f7', height: 50, width: '100vw', justifyContent: 'space-between', zIndex:10 }}>
            <div>LOGO</div>
            <div className='flex items-center'>
              {sound ?
                <Tooltip title='Turn Off'>
                  <div onClick={() => handlePlay(false)}>
                    <MusicNoteIcon sx={{ color: "#581c87" }} />
                  </div>
                </Tooltip> :
                <Tooltip title='Turn On'>
                  <div onClick={() => handlePlay(true)}>
                    <MusicOffIcon sx={{ color: "#581c87" }} />
                  </div>
                </Tooltip>}
              <MaterialUISwitch sx={{ m: 1 }} checked={theme} onChange={(e) => handleThemeChange(e.target.checked)} />
              <Sidebar buttonClick={buttonClick} />
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
