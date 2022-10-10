import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';
import CourseCard from './courseCard';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Landing() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.get(baseURL+"viewallcourses",config)
        .then(function (response) {
            console.log(response.data.data)
            setCourses(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
    
    return (
        <div className='suggested-courses' >
            <h1>Suggested Courses</h1>
            <div className='displayed-courses'>
                {courses.map((course)=><CourseCard course={course} />)}
                
            </div>
        </div>      
    );
}