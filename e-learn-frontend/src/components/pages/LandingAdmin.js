import '../../Admin.css';
import React from 'react';
import Navbar from '../navbarAdmin';
import Landing from '../landing';
import AddCourse from '../addCourse';

function LandingAdmin() {
    return (
        <>
            <Navbar/>
            <AddCourse/>
            <Landing/>
        </>
    );
}
export default LandingAdmin;