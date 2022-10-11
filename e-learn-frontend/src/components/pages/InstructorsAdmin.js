import '../../Admin.css';
import React, { useState } from 'react';
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