import '../../Admin.css';
import React, { useState } from 'react';
import Navbar from '../navbarAdmin';
import Landing from '../landing';

function LandingAdmin() {
    console.log(localStorage)
    return (
        <>
            <Navbar/>
            <Landing/>
        </>
    );
}
export default LandingAdmin;