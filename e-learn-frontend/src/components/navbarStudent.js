import React, {useState} from 'react';
import '../Student.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link className='navlinks'>Home</Link>
            <div>
                <Link className='navlinks'>Courses</Link>
                <Link className='navlinks'>Assignments</Link>
                <Link className='navlinks' to='/' >logOut</Link>
            </div>
        </nav>      
    );
}