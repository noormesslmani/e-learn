import '../../App.css';
import React from 'react';
import Navbar from '../instructor/navbarInstructor';
import Landing from '../general/landing';

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