import '../../Student.css';
import React, { useState } from 'react';
import Navbar from '../navbarInstructor';
import { useLocation } from 'react-router-dom';
import Header from '../header';
function CourseDetails() {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
            <Navbar/>
            <Header/>
        </>
    );
}
export default CourseDetails;