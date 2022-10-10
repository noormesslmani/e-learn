import '../../Student.css';
import React, { useState } from 'react';
import Navbar from '../navbarStudent';
import Courses from '../courses';

function CoursesStudent() {
    return (
        <>
            <Navbar/>
            <Courses/>
        </>
    );
}
export default CoursesStudent;