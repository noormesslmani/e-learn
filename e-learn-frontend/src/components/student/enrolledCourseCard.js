import React from 'react';
import '../../Student.css'
import image from '../../course.png';
import { useNavigate } from "react-router-dom";
export default function EnrolledCourseCard({id}) {
    const navigate = useNavigate();
    const handleClick = (event, id) => {
        navigate("/assignments-student",{state:{id}});
    };
    for(let course of JSON.parse(localStorage.courses)){
        if(course._id==id){
        return(
            <div className='course-card' >
                <img src={image} className='course-img'></img>
                <div className='course-name' >{course.name}</div>
                <div className='description' >Description: {course.description}</div>
                <button className='view-assignment' key={id} onClick={event => handleClick(event, id)}>View Assignments</button>
            </div>
        )}
    }
}