import '../../App.css';
import React from 'react';
import Navbar from '../student/navbarStudent';
import AssignmentList from '../student/assignments';

function AssignmentsStudent() {
    return (
        <>
            <Navbar/>
            <AssignmentList/>
        </>
    );
}
export default AssignmentsStudent;