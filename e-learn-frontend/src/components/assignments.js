import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AssignmentCard from './assignmentCard';
import SubmitModal from './submitModal';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function AssignmentList() {
    const { state } = useLocation();
    const [assignments, setAssignments] = useState([]);
    const [submitModal, setSubmitModal] = useState(false);
    useEffect(() => {
        setAssignments([]);
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
    

    const noAssignmentsMessage = () => {
        return (
          <h2 className="messsage" >
            No assignments to display 
          </h2>
        );
    };

    const handleClick=(e)=>{
        e.preventDefault();
        setSubmitModal(true)
    }
    
    return (
        <div className='suggested-courses' >
            <h1>Assignments</h1>
            {
                assignments.length>0? (
                <div className='displayed-courses'>
                {assignments.map((assignment)=><AssignmentCard assignment={assignment} handleClick={handleClick}/>)} 
                </div>): <div>{noAssignmentsMessage()}</div>
            }
            {
                submitModal?(<SubmitModal/>):<></>
            }
        </div>      
    );
}