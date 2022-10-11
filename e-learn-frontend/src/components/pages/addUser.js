import '../../Student.css';
import React, { useState } from 'react';
import Navbar from '../navbarAdmin';
import AddNewUser from '../addNewUser';

function AddUser() {
    return (
        <>
            <Navbar/>
            <AddNewUser/>
        </>
    );
}
export default AddUser;