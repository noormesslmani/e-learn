import '../../Admin.css';
import React, { useState } from 'react';
import Navbar from '../navbarAdmin';
import Landing from '../landing';
import AddCourse from '../addCourse';
function LandingAdmin() {
    console.log(localStorage)
    return (
        <>
            <Navbar/>
            <AddCourse/>
            <Landing/>
        </>
    );
}
export default LandingAdmin;