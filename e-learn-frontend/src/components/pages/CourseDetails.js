import '../../Student.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../navbarInstructor';
import { useLocation} from 'react-router-dom';
import Assignment from '../assignmentInstructor';
import axios from 'axios';
import CreateAssignment from '../createAssignment';
import EnrollStudent from '../enrollStudent';
const baseURL='http://127.0.0.1:8000/api/v1/';
function CourseDetails() {
    let config = {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},};
    const [assignments, setAssignments] = useState([]);
    const [assignmentModal, setAssignmentModal] = useState(false);
    const [enrollModal, setEnrollModal] = useState(false);
    const [description, setDescription] = useState('');
    const [username, setUsername] = useState('');
    const [assignmentCreated, setAssignmentCreation] = useState(false);
    const [nonexistant, setNonexistant] = useState(false);
    const [invalidType, setInvalidType]= useState(false);
    const { state } = useLocation();
    useEffect(() => {
        let payload= {course_id: state.clickedCourse._id}
        let res = axios.post(baseURL+"getassignments",payload,config)
        .then(function (response) {
            setAssignments(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [assignmentCreated]); 

    const handleClickAssignment=(e)=>{
        setAssignmentModal(true);
    }
    const handleClickEnroll=(e)=>{
        setEnrollModal(true);
        setNonexistant(false);
        setInvalidType(false);
    }
    const handleCancelAssignment=(e)=>{
        e.preventDefault()
        setAssignmentModal(false)
    }
    const handleSubmitAssignment=(e)=>{
        setAssignmentCreation(false);
        e.preventDefault();
        if(description!=''){
            createNewAssignment();
        }
    }
    const handleCancelEnroll=(e)=>{
        e.preventDefault();
        setEnrollModal(false);
    }
    const handleSubmitEnroll=(e)=>{
        e.preventDefault();
        setInvalidType(false);
        setNonexistant(false);
        if(username!=''){
            enrollStudent();
        }
    }
    function createNewAssignment(){
        let payload= {course_id: state.clickedCourse._id, description: description}
        let res = axios.post(baseURL+"assignment",payload,config)
        .then(function (response) {
            if(response.data.result=='ok'){
                setAssignmentModal(false);
                setAssignmentCreation(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    function enrollStudent(){
        let payload= {course_id: state.clickedCourse._id, username: username}
        let res = axios.post(baseURL+"enrollstudent",payload,config)
        .then(function (response) {
            console.log(response.data.result)
            if(response.data.result=='ok'){
                setEnrollModal(false)
            }
            else if(response.data.result=='user does not exist'){
                setNonexistant(true);
            }
            else if(response.data.result=='invalid user type'){
                setInvalidType(true)
            }
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
            {assignmentModal? (<CreateAssignment setDescription={setDescription} state={state} handleCancelAssignment={handleCancelAssignment}
            handleSubmitAssignment={handleSubmitAssignment} />):<></>}
            {enrollModal? (<EnrollStudent state={state} handleCancelEnroll={handleCancelEnroll} handleSubmitEnroll={handleSubmitEnroll} setUsername={setUsername} nonexistant={nonexistant} invalidType={invalidType} />):<></>}
        </>
    );
}
export default CourseDetails;