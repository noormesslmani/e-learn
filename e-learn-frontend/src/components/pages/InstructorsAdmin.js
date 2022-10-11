import '../../App.css';
import React from 'react';
import Navbar from '../admin/navbarAdmin';
import Instructors from '../admin/instructors';
function InstructorsAdmin() {
    return (
        <>
            <Navbar/>
            <Instructors/>
        </>
    );
}
export default InstructorsAdmin;