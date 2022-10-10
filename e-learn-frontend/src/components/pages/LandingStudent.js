import '../../Student.css';
import React, { useState } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from '../navbarStudent';
function LandingStudent() {
    console.log(localStorage);
    return (
        <>
            <Navbar/>
        </>
    );
}
export default LandingStudent;