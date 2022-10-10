import '../../Student.css';
import React, { useState } from 'react';
import Navbar from '../navbarStudent';
import Landing from '../landing';

function LandingStudent() {
    return (
        <>
            <Navbar/>
            <Landing/>
        </>
    );
}
export default LandingStudent;