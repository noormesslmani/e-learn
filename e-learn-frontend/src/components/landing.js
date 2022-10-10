import React, {useState, useEffect} from 'react';
import '../Student.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Landing() {
    useEffect(() => {
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.get(baseURL+"viewallcourses",config)
        .then(function (response) {
            localStorage.setItem('courses',JSON.stringify(response.data.data))
            // Display(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
    
    
    for ( let i of JSON.parse(localStorage.getItem('courses'))){
        console.log(i)
    }
    function Display({course}){
        return(
            <div className='course-card'>
                <div>{course.name}</div>
                <div>{course.description}</div>
                <div>{course.fees}</div>
            </div>
        )
    }

    return (
        <div className='suggested-courses' >
            <h1>Suggested Courses</h1>
            <div className='displayed-courses'>
            {
                JSON.parse(localStorage.getItem('courses')).map((course) => {
                    return (<Display course={course}/>)
                })
            }
            </div>
        </div>      
    );
}