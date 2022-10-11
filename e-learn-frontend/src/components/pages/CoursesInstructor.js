import '../../Student.css';
import React from 'react';
import Navbar from '../navbarInstructor';
import InstructorCourses from '../instructorCourses';

function CoursesInstructor() {
    return (
        <>
            <Navbar/>
            <InstructorCourses/>
        </>
    );
}
export default CoursesInstructor;