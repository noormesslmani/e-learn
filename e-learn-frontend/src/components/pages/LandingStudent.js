import '../../Student.css';
import React, { useState } from 'react';
import Navbar from '../navbarStudent';
import Landing from '../landing';

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