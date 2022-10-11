import '../../Student.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../navbarInstructor';
import { useLocation} from 'react-router-dom';
import Assignment from '../assignmentInstructor';
import axios from 'axios';
import CreateAssignment from '../createAssignment';
const baseURL='http://127.0.0.1:8000/api/v1/';
function CourseDetails() {
    const [assignments, setAssignments] = useState([]);
    const [assignmentModal, setAssignmentModal] = useState(false);
    const [enrollModal, setEnrollModal] = useState(false);
    const [description, setDescription] = useState('');
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
    const handleClickAssignment=(e)=>{
        setAssignmentModal(true);
    }
    const handleClickEnroll=(e)=>{
        console.log(e.target);
    }
    const handleCancel=(e)=>{
        e.preventDefault()
        setAssignmentModal(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(description!=''){
            createNewAssignment();
        }
    }
    function createNewAssignment(){
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let payload= {course_id: state.clickedCourse._id, description: description}
        let res = axios.post(baseURL+"assignment",payload,config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
        <>
            <Navbar/>
            <div className='header'>
                <div className='course-links' onClick={handleClickAssignment} >Add assignment </div>
                <div className='course-links' onClick={handleClickEnroll}>Enroll student</div>
            </div>      
            <h2>Assignments</h2>
            {
                assignments.length>0? (
                <div className='displayed-courses'>
                {assignments.map((assignment)=><Assignment assignment={assignment} state={state} />)} 
                </div>): <h4>No assignments available for this course</h4>
            }
            {assignmentModal? (<CreateAssignment setDescription={setDescription} state={state} handleCancel={handleCancel}
            handleSubmit={handleSubmit} />):<></>}
        </>
    );
}
export default CourseDetails;