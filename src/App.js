import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));


function App() {
  return (
    <div >
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
