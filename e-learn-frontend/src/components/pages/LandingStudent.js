import '../../App.css';
import React from 'react';
import Navbar from '../student/navbarStudent';
import Landing from '../general/landing';

function LandingStudent() {
    console.log(localStorage)
    return (
        <>
            <Navbar/>
            <Landing/>
        </>
    );
}
export default LandingStudent;