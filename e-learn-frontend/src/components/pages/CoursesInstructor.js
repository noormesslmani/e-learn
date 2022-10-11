import '../../Student.css';
import React from 'react';
import Navbar from '../instructor/navbarInstructor';
import InstructorCourses from '../instructor/instructorCourses';

function CoursesInstructor() {
    return (
        <>
            <Navbar/>
            <InstructorCourses/>
        </>
    );
}
export default CoursesInstructor;