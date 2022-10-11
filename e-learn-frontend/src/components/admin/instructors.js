import React, {useEffect, useState} from 'react';
import '../../App.css'
import axios from 'axios';
import InstructorCard from './instructorCard';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Instructors() {
    let config = {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},};
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axios.get(`${baseURL}users`,config)
        .then(function (response) {
            setInstructors(response.data.teachers);
        })
        .catch(function (error) {
            console.log(error);
        });

    }, []);
    return (
        <div className='suggested-courses' >
            <h1>Available Instrcutors</h1>
            <div className='displayed-courses'>
                {instructors.map((instructor)=><InstructorCard instructor={instructor} />)} 
            </div>
        </div>      
    );
}