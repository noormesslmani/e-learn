import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from './components/form';
import LoginForm from './components/login';
function App() {
  const [displayRegister, setDisplayRegister] = useState(true);
  const [displayLogin, setDisplayLogin] = useState(false);
  const handleSwitch = () => {
    if(displayRegister){
      setDisplayRegister(false);
      setDisplayLogin(true);
    }
    else{
      setDisplayRegister(true);
      setDisplayLogin(false);
    }
  };
  return (
    <div className="App">
      <h1>Welcome to Bright E-School</h1>
      <RegisterForm handleSwitch={handleSwitch} displayRegister={displayRegister}/>
      <LoginForm handleSwitch={handleSwitch} displayLogin={displayLogin}/>
    </div>
  );
}

export default App;
