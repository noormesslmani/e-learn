import '../../Student.css';
import React, { useState } from 'react';
import Navbar from '../navbarInstructor';
import { useLocation } from 'react-router-dom';
function CourseDetails() {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
            <Navbar/>
        </>
    );
}
export default CourseDetails;