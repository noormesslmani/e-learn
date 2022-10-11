import React, {useEffect, useState} from 'react';
import '../../Student.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AssignmentCard from './assignmentCard';
import SubmitModal from './submitModal';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function AssignmentList() {
    let config = {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},};
    const { state } = useLocation();
    const [assignments, setAssignments] = useState([]);
    const [submitModal, setSubmitModal] = useState(false);
    const [solution, setSolution] = useState('');
    const [id, setId]=useState('');
    const [submitted, setSubmitted]=useState(false)
    useEffect(() => {
        setAssignments([]);
        let payload = {course_id: state.id};
        let res = axios.post(baseURL+"getstudentassignments",payload,config)
        .then(function (response) {
            console.log(response.data.data)
            setAssignments(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
    
    function submitAssignment(){
        let payload = {assignment_id: id, solution:solution};
        axios.post(`${baseURL}submitassignment`,payload,config)
        .then(function (response) {
            console.log(response.data)
            if(response.data.result=='ok'){
                setSubmitModal(false)
            }
            else{
                setSubmitted(true)
            }
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const noAssignmentsMessage = () => {
        return (
          <h2 className="messsage" >
            No assignments to display 
          </h2>
        );
    };

    const handleClick=(e)=>{
        e.preventDefault();
        setSubmitModal(true);
        setSubmitted(false)
    }
    const handleCancel=(e)=>{
        e.preventDefault();
        setSubmitModal(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(solution!==''){
            submitAssignment();
        }
    }
    return (
        <div className='suggested-courses' >
            <h1>Assignments</h1>
            {
                assignments.length>0? (
                <div className='displayed-courses'>
                {assignments.map((assignment)=><AssignmentCard assignment={assignment} handleClick={handleClick} setId={setId} />)} 
                </div>): <div>{noAssignmentsMessage()}</div>
            }
            {
                submitModal?(<SubmitModal handleSubmit={handleSubmit} handleCancel={handleCancel} setSolution={setSolution} submitted={submitted} />):<></>
            }
        </div>      
    );
}