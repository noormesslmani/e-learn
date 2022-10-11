import '../../Admin.css';
import React from 'react';
import Navbar from '../navbarAdmin';
import Instructors from '../instructors';
function InstructorsAdmin() {
    return (
        <>
            <Navbar/>
            <Instructors/>
        </>
    );
}
export default InstructorsAdmin;