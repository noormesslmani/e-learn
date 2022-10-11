import '../../Student.css';
import React from 'react';
import Navbar from '../student/navbarStudent';
import Courses from '../student/courses';

function CoursesStudent() {
    return (
        <>
            <Navbar/>
            <Courses/>
        </>
    );
}
export default CoursesStudent;