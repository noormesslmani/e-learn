import '../../Student.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../navbarInstructor';
import { useLocation } from 'react-router-dom';
import Header from '../header';
import Assignment from '../assignmentInstructor';
import axios from 'axios';
const baseURL='http://127.0.0.1:8000/api/v1/';
function CourseDetails() {
    const [assignments, setAssignments] = useState([]);
    const { state } = useLocation();
    console.log(state.clickedCourse._id)
    useEffect(() => {
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let payload= {course_id: state.clickedCourse._id}
        let res = axios.post(baseURL+"getassignments",payload,config)
        .then(function (response) {
            console.log(response.data.data);
            setAssignments(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []); 
    return (
        <>
            <Navbar/>
            <Header/>
            <h2>Assignments</h2>
            {
                assignments.length>0? (
                <div className='displayed-courses'>
                {assignments.map((assignment)=><Assignment assignment={assignment} state={state} />)} 
                </div>): <h4>No assignments available</h4>
            }
        </>
    );
}
export default CourseDetails;