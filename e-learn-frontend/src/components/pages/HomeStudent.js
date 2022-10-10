import '../../Student.css';
import React, { useState } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from '../navbarStudent';
function HomeStudent() {
    console.log(localStorage);
    return (
        <>
            <Navbar/>
            {/* <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/home-student' element={<HomeStudent/>} />
            </Routes> */}
        </>
    );
}
export default HomeStudent;