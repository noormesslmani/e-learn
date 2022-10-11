import '../../Admin.css';
import React, { useState } from 'react';
import Navbar from '../navbarAdmin';
import AddInstructor from '../addInstructor';
import Instructors from '../instructors';
function InstructorsAdmin() {
    return (
        <>
            <Navbar/>
            <AddInstructor/>
            <Instructors/>
        </>
    );
}
export default InstructorsAdmin;