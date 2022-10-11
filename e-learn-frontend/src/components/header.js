import React, {useState} from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
export default function Header({handleClick}) {
    return (
        <div className='header'>

            <Link className='course-links' onClick={handleClick} >Add assignment </Link>
            <Link className='course-links' onClick={handleClick}>Enroll student</Link>
            
        </div>      
    );
}