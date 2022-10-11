import React, {useState} from 'react';
import '../Student.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link className='navlinks' to='/home-student' >Home</Link>
            <div>
                <Link className='navlinks' to='/courses-student'>Courses</Link>
                <Link className='navlinks' to='/' >logOut</Link>
            </div>
        </nav>      
    );
}