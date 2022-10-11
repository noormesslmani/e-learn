import React, {useState} from 'react';
import '../Admin.css'
import image1 from '../avatarfemale.png';
import image2 from '../avatarmale.png';
export default function InstructorCard({instructor}) {
    console.log(instructor);
    return(
        <div className='instructor-card'>
            <img src={image1} className='instructor-img'></img>
            <div className='intructor-name' >@{instructor.username}</div>
            <div className='intructor-name' >Name: {instructor.full_name}</div>
        </div>
    )
}