import '../../Student.css';
import React from 'react';
import Navbar from '../admin/navbarAdmin';
import AddNewUser from '../admin/addNewUser';

function AddUser() {
    return (
        <>
            <Navbar/>
            <AddNewUser/>
        </>
    );
}
export default AddUser;