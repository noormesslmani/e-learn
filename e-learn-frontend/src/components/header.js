import React, {useState} from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className='header'>
    
            <Link className='course-links' >View assignments </Link>
            <Link className='course-links' >Add assignment </Link>
            <Link className='course-links' >Enroll student</Link>
            
        </div>      
    );
}