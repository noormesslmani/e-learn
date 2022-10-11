import React from 'react';
import '../../Student.css'

export default function AssignmentCard({assignment, handleClick, setId}) {
    const passId=()=>{
        setId(assignment._id)
    }
    for(let course of JSON.parse(localStorage.courses)){
        if(course._id==assignment.course_id){
        return(
            <div className='course-card' onClick={passId} >
                <div className='course-name' >{course.name}</div>
                <div className='assignment-description'><span className='requirements'>Requirements:</span> {assignment.description}</div>
                <button className='submit-assignment' onClick={handleClick}>Submit Solution</button>
            </div> )}
     }
}
