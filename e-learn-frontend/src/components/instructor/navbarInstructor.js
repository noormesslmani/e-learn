import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link className='navlinks' to='/home-instructor'>Home</Link>
            <div>
                <Link className='navlinks' to='/courses-instructor' >Your Courses</Link>
                <Link className='navlinks' to='/' >logOut</Link>
            </div>
        </nav>      
    );
}