import './App.css';
import React, { useState } from 'react';
import Form from './components/form'
function App() {
  const [displayRegister, setDisplayRegister] = useState(true);
  
  const handleSwitch = () => {
    setDisplayRegister(false);
  };
  return (
    <div className="App">
      <h1>Welcome to Bright E-School</h1>
      <Form handleSwitch={handleSwitch} displayRegister={displayRegister}/>
    </div>
  );
}

export default App;
