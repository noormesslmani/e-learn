import '../../App.css'
import React from 'react';
export default function Assignment({assignment, state}) {
    console.log(assignment);
    console.log(state.clickedCourse);
    return(
        <div className='instructor-assignments-card'>
            <h4 className='course-name' >{state.clickedCourse.name}</h4>
            <div className='assignment-description'><span className='requirements'>Requirements:</span> {assignment.description}</div>
        </div> 
        )
    }