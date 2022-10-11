import React, {useState} from 'react';
import '../Student.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link className='navlinks' to='/home-instructor'>Home</Link>
            <Link className='navlinks' to='/' >logOut</Link>
        </nav>      
    );
}