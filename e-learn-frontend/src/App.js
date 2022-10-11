import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LandingStudent from './components/pages/LandingStudent';
import LandingAdmin from './components/pages/LandingAdmin';
import CoursesStudent from './components/pages/CoursesStudent';
import AssignmentsStudent from './components/pages/AssignmentsStudent';
import InstructorsAdmin from './components/pages/InstructorsAdmin';
import AddUser from './components/pages/addUser';
import LandingInstructor from './components/pages/LandingInstructor';
import CoursesInstructor from './components/pages/CoursesInstructor';
import CourseDetails from './components/pages/CourseDetails';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home-student' element={<LandingStudent/>} />
          <Route path='/courses-student' element={<CoursesStudent/>} />
          <Route path='/assignments-student' element={<AssignmentsStudent />} />
          <Route path='/home-admin' element={<LandingAdmin/>} />
          <Route path='/instructors-admin' element={<InstructorsAdmin/>} />
          <Route path='/add-users' element={<AddUser/>} />
          <Route path='/home-instructor' element={<LandingInstructor/>} />
          <Route path='/courses-instructor' element={<CoursesInstructor/>} />
          <Route path='/course-details' element={<CourseDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
