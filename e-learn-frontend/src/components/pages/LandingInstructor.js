import '../../Student.css';
import React from 'react';
import Navbar from '../navbarInstructor';
import Landing from '../landing';

function LandingInstructor() {
    console.log(localStorage)
    return (
        <>
            <Navbar/>
            <Landing/>
        </>
    );
}
export default LandingInstructor;