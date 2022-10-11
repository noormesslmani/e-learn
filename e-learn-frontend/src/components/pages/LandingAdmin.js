import '../../Admin.css';
import React from 'react';
import Navbar from '../admin/navbarAdmin';
import Landing from '../general/landing';
import AddCourse from '../admin/addCourse';

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