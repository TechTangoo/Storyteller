import React, { useState } from 'react';
import heroimage from '../img/register.png';
import { useNavigate } from 'react-router-dom';
import { RegistrationAPI } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';

function Register() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [reqbody, setReqbody] = useState({});

  const validateEmail = (email) => {
    // * Regular expression to check for a valid email pattern
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  // * Password should contain
  // * Atleast one UpperCase character, one LowerCase character,
  // * one digit and one special character with minimum length of 8
  function validatePassword(password) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  }

  const handleRegister = () => {
    if (!validateEmail(reqbody.email)) {
      return toast.warning('Please enter a valid email');
    }
    if (!validatePassword(reqbody.password)) {
      return toast.warning('Please enter a valid password');
    }
    RegistrationAPI({ fullname: reqbody.fullname, email: reqbody.email, password: reqbody.password }).then((res) => {
      if (res?.success) {
        toast.success("Registration Successfull!")
        sessionStorage.setItem('email', reqbody.email);
        sessionStorage.setItem('token', true);
        const timer = setTimeout(() => {
          navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        toast.error("Registration failed! Due to invalid inputs.")
        console.log("error", res?.message ?? res?.error);
      }
    })
  }

  return (
    <div className='flex flex-1 w-screen h-screen' style={{ backgroundColor: '#571993' }}>
      <ToastContainer />
      <div className='flex-1' style={{ backgroundImage: `url(${heroimage})`, backgroundSize: '100% 100vh', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='text-yellow-200' style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 0, marginLeft: 15 }}>Night time story for kids</h3>
      </div>
      <div className='flex-1 h-screen flex flex-col justify-center'>
        <h3 className='text-3xl font-bold text-yellow-200 text-center align-center justify-center'>Join Us Now!!🚀</h3>
        <p className='text-center text-yellow-100 font-bold text-xl'>Listen to our sleeptime story telling without any resctrictions!</p>
        <div className='items-center md:w-10/12 lg:w-6/12 mt-20' style={{ padding: 30, backgroundColor: '#e9d5ff', borderRadius: 25, alignSelf: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ color: '#581c87', fontSize: 18, fontWeight: 'bold', marginBottom: 0, marginLeft: 15 }}>Full Name</p>
            <div style={{ alignItems: 'center', display: 'flex', backgroundColor: '#f5f3ff', borderRadius: 20, padding: 3 }}>
              <div><svg style={{ width: 24, color: '#581c87' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg></div>
              <input placeholder='eg. example@mail.xyz' style={{ width: 400, color: '#6b21a8' }} onChange={(e) => setReqbody({ ...reqbody, fullname: e.target.value })} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 15 }}>
            <p style={{ color: '#581c87', fontSize: 18, fontWeight: 'bold', marginBottom: 0, marginLeft: 15 }}>Email</p>
            <div style={{ alignItems: 'center', display: 'flex', backgroundColor: '#f5f3ff', borderRadius: 20, padding: 3 }}>
              <div><svg style={{ width: 24, color: '#581c87' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg></div>
              <input placeholder='eg. example@mail.xyz' style={{ width: 400, color: '#6b21a8' }} onChange={(e) => setReqbody({ ...reqbody, email: e.target.value })} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 15 }}>
            <p style={{ color: '#581c87', fontSize: 18, fontWeight: 'bold', marginBottom: 0, marginLeft: 15 }}>Password</p>
            <div style={{ alignItems: 'center', display: 'flex', background: '#f5f3ff', borderRadius: 20, padding: 3 }}>
              <div><svg style={{ width: 24, color: '#581c87' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg></div>
              <input type={show ? 'text' : 'password'} placeholder='password' style={{ width: 400, color: '#6b21a8' }} onChange={(e) => setReqbody({ ...reqbody, password: e.target.value })} />
              <div style={{ marginRight: 5, alignItems: 'center', cursor: 'pointer' }} onClick={() => setShow(!show)}>
                {
                  show ?
                    <svg style={{ width: 24, color: '#581c87' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                    : <svg style={{ width: 24, color: '#581c87' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                }
              </div>
            </div>
            <p style={{ marginTop: 0, fontSize: 12, color: '#3b0764', fontWeight: 'bold' }}>* Minium 8 letters, Atleast one Uppercase, Lowercase, digit, and special character</p>
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            <Button onClick={() => handleRegister()} style={{ backgroundColor: '#6b21a8', fontWeight: 'bold', fontFamily: 'Cormorant, serif', border: 'none', padding: 5, borderRadius: 20, width: 200, color: 'white', fontSize: 18, marginTop: 50 }}>Register</Button>
          </div>
          <p style={{ textAlign: 'center', color: '#581c87', fontSize: 20, fontWeight: 800, marginBottom: 0, marginLeft: 15 }}>Already have an account? <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/login')}>Sign In</span></p>
        </div>
      </div>
    </div>
  )
}

export default Register


{/**
<div style={{ backgroundImage: `url(${heroimage})`, display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', alignItems: 'center' }}>
        <ToastContainer />
        <div style={{ width: 450, height: 500, padding: 30, background: 'rgba(225,225,225,0.1)', borderRadius: 25, backdropFilter: 'blur(5px)' }}>
          <h3 style={{ textAlign: 'center', fontSize: 24, fontFamily: 'Lemon, serif', color: '#fef9c3' }}>Join Us!!🚀</h3>
          <div style={{}}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ color: '#fef9c3', fontSize: 20, fontWeight: 800, marginBottom: 0, marginLeft: 15 }}>Full Name</p>
              <div style={{ alignItems: 'center', display: 'flex', background: '#fef9c3', borderRadius: 20, padding: 3 }}>
                <div><svg style={{ width: 24, color: '#6b21a8' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                </div>
                <input placeholder='eg. Jeo James' style={{ width: 400, color: '#6b21a8' }} onChange={(e) => setReqbody({ ...reqbody, fullname: e.target.value })} />
              </div>
            </div>
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
              <p style={{ marginTop: 0, fontSize: 12, color: '#fae8ff', fontWeight: 'bold' }}>* Minium 8 letters, Atleast one Uppercase, Lowercase, digit, and special character</p>
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <button style={{ backgroundColor: '#a855f7', border: 'none', padding: 10, borderRadius: 20, width: 200, fontFamily: 'Lemon, serif', color: '#fef9c3', fontSize: 18, marginTop: 50 }} onClick={() => handleRegister()}>Register</button>
            </div>
            <p style={{ textAlign: 'center', color: '#fef9c3', fontSize: 20, fontWeight: 800, marginBottom: 0, marginLeft: 15 }}>Already have an account? <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/login')}>Click here</span></p>
          </div>
        </div>
      </div>
*/}