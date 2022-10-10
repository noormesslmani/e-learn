import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';
import image from '../course.png';
import { useLocation } from 'react-router-dom';
import AssignmentCard from './assignmentCard';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function AssignmentList() {
    const { state } = useLocation();
    const [noassignments, setNoassignments] = useState(false);
    const [assignments, setAssignments] = useState([]);
    
    useEffect(() => {
        setNoassignments(false);
        let payload = {course_id: state.id};
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.post(baseURL+"getstudentassignments",payload,config)
        .then(function (response) {
            setAssignments(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
    
    return (
        <div className='suggested-courses' >
            <h1>Assignments</h1>
            <div className='displayed-courses'>
                {assignments.map((assignment)=><AssignmentCard assignment={assignment} />)} 
            </div>
        </div>      
    );
}