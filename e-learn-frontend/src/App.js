import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LandingStudent from './components/pages/LandingStudent';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home-student' element={<LandingStudent/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
