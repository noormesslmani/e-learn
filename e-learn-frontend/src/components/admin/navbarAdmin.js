import React from 'react';
import '../../Student.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link className='navlinks' to='/home-admin'>Home</Link>
            <div>
                <Link className='navlinks' to='/instructors-admin' >Instructors</Link>
                <Link className='navlinks' >students</Link>
                <Link className='navlinks' to='/add-users' >Add user</Link>
                <Link className='navlinks' to='/' >logOut</Link>
            </div>
        </nav>      
    );
}