import React, { useState } from 'react';
import heroimage from '../img/login.png';
import { useNavigate } from 'react-router-dom';
import { LoginAPI } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [reqbody, setReqbody] = useState({});

  const handleLogin = () => {
    LoginAPI({ email: reqbody.email, password: reqbody.password }).then((res) => {
      if (res?.success) {
        toast.success("Login Successfull!")
        sessionStorage.setItem('email', reqbody.email);
        sessionStorage.setItem('token', true);
        const timer = setTimeout(() => {
          navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        toast.error("Authentication failed! Due to invalid inputs.")
        console.log("error", res?.message ?? res?.error);
      }
    })
  }

  return (
    <div style={{ backgroundImage: `url(${heroimage})`, display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', alignItems: 'center' }}>
      <ToastContainer />
      <div style={{ width: 450, height: 400, padding: 30, background: 'rgba(225,225,225,0.1)', borderRadius: 25, backdropFilter: 'blur(5px)' }}>
        <h3 style={{ textAlign: 'center', fontSize: 24, fontFamily: 'Lemon, serif', color: '#fef9c3' }}>Join Us!!🚀</h3>
        <div style={{}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ color: '#fef9c3', fontSize: 20, fontWeight: 800, marginBottom: 0, marginLeft: 15 }}>Email</p>
            <div style={{ alignItems: 'center', display: 'flex', background: '#fef9c3', borderRadius: 20, padding: 3 }}>
              <div><svg style={{ width: 24, color: '#6b21a8' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg></div>
              <input placeholder='eg. example@mail.xyz' style={{ width: 400, color: '#6b21a8' }} onChange={(e) => setReqbody({ ...reqbody, email: e.target.value })} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ color: '#fef9c3', fontSize: 20, fontWeight: 800, marginBottom: 0, marginLeft: 15 }}>Password</p>
            <div style={{ alignItems: 'center', display: 'flex', background: '#fef9c3', borderRadius: 20, padding: 3 }}>
              <div><svg style={{ width: 24, color: '#6b21a8' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg></div>
              <input type={show ? 'text' : 'password'} placeholder='password' style={{ width: 400, color: '#6b21a8' }} onChange={(e) => setReqbody({ ...reqbody, password: e.target.value })} />
              <div style={{ marginRight: 5, alignItems: 'center', cursor: 'pointer' }} onClick={() => setShow(!show)}>
                {
                  show ?
                    <svg style={{ width: 24, color: '#6b21a8' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                    : <svg style={{ width: 24, color: '#6b21a8' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                }
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            <button onClick={() => handleLogin()} style={{ backgroundColor: '#a855f7', border: 'none', padding: 10, borderRadius: 20, width: 200, fontFamily: 'Lemon, serif', color: '#fef9c3', fontSize: 18, marginTop: 50 }}>Login</button>
          </div>
          <p style={{ textAlign: 'center', color: '#fef9c3', fontSize: 20, fontWeight: 800, marginBottom: 0, marginLeft: 15 }}>Don't have account? <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/register')}>Click here</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login