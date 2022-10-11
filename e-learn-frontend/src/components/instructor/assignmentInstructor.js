import '../../App.css'
import React from 'react';
export default function Assignment({assignment, state}) {
    console.log(assignment);
    console.log(state.clickedCourse);
    return(
        <div className='course-card'>
            <div className='course-name' >{state.clickedCourse.name}</div>
            <div className='assignment-description'><span className='requirements'>Requirements:</span> {assignment.description}</div>

        </div> 
        )
    }