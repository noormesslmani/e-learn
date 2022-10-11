import '../../Admin.css';
import React, { useState } from 'react';
import Navbar from '../navbarAdmin';
import AddInstructor from '../addInstructor';
function InstructorsAdmin() {
    return (
        <>
            <Navbar/>
            <AddInstructor/>
        </>
    );
}
export default InstructorsAdmin;