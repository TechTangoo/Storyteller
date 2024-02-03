import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()
  useEffect(() => {
    if (!sessionStorage.getItem('email')) {
      navigate('/login');
    }
  },[])
  return (
    <div style={{ backgroundColor: '#f3e8ff', width: '100vw', height: '100vh' }}>
    </div>
  )
}

export default Home