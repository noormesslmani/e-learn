import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HomeStudent from './components/pages/HomeStudent';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home-student' element={<HomeStudent/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
