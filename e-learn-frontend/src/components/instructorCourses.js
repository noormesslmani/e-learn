import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';
import CourseCard from './courseCard';
import { useNavigate } from "react-router-dom";
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function InstructorCourses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [clickedCourse, setclickedCourse] = useState('');
    useEffect(() => {
        setclickedCourse('');
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.get(baseURL+"getcourses",config)
        .then(function (response) {
            setCourses(response.data.data);
            console.log(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []); 
    if(clickedCourse){
        navigate("/course-details",{state:{clickedCourse}});
    }
    return (
        <div className='suggested-courses' >
            <h1>Your Courses</h1>
            <div className='displayed-courses'>
                {courses.map((course)=><CourseCard course={course} setclickedCourse={setclickedCourse} />)} 
            </div>
        </div>      
    );
}