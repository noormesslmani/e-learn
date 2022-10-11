import React from 'react';
import '../Admin.css'
import image1 from '../avatarfemale.png';
export default function InstructorCard({instructor}) {
    return(
        <div className='instructor-card'>
            <img src={image1} className='instructor-img'></img>
            <div className='intructor-name' >@{instructor.username}</div>
            <div className='intructor-name' >Name: {instructor.full_name}</div>
        </div>
    )
}