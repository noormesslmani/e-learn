import React, {useState} from 'react';
import '../Student.css'
import image from '../course.png';
export default function CourseCard({course,setclickedCourse}) {
    const handleClick=()=>{
        setclickedCourse(course)
    }
    return(
        <div className='course-card' onClick={handleClick}>
            <img src={image} className='course-img'></img>
            <div className='course-name' >{course.name}</div>
            <div className='description' >Description: {course.description}</div>
            <div className='fees'>Fees: {course.fees}$</div>
        </div>
    )
}