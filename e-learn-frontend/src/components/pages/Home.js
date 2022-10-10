import '../../App.css';
import RegisterForm from '../form';
import LoginForm from '../login';
import React, { useState } from 'react';

function Home() {
  const [displayRegister, setDisplayRegister] = useState(true);
  const [displayLogin, setDisplayLogin] = useState(false);
  // console.log('hi from home')
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

export default Home;