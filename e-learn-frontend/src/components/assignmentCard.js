import React, {useState} from 'react';
import '../Student.css'
import { useNavigate } from "react-router-dom";
export default function AssignmentCard({assignment}) {
    for(let course of JSON.parse(localStorage.courses)){
        if(course._id==assignment.course_id){
        return(
            <div className='course-card' >
                <div className='course-name' >{course.name}</div>
                <div className='assignment-description'><span className='requirements'>Requirements:</span> {assignment.description}</div>

            </div> )}
        }
    }