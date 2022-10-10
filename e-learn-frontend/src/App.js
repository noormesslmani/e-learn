import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LandingStudent from './components/pages/LandingStudent';
import CoursesStudent from './components/pages/CoursesStudent';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home-student' element={<LandingStudent/>} />
          <Route path='/courses-student' element={<CoursesStudent/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
