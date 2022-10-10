import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
function App() {
  console.log('hi from home')
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
