import React, {useState} from 'react';
import '../Student.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link className='navlinks'>Home</Link>
            <div>
                <Link className='navlinks' >Instructors</Link>
                <Link className='navlinks' >students</Link>
                <Link className='navlinks' to='/' >logOut</Link>
            </div>
        </nav>      
    );
}