import React from 'react';
import './App.scss';
import Dashboard from './Components/Dashbaord/dashboard';
import SignIn from './Components/SignIn/signin';
import SignUp from './Components/Signup/signup';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>

    </div>
  );
}

export default App;
