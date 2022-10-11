import '../../Student.css';
import React from 'react';
import Navbar from '../navbarStudent';
import AssignmentList from '../assignments';

function AssignmentsStudent() {
    return (
        <>
            <Navbar/>
            <AssignmentList/>
        </>
    );
}
export default AssignmentsStudent;