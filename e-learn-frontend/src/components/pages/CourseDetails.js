import '../../Student.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../navbarInstructor';
import { useLocation } from 'react-router-dom';
import Header from '../header';
import axios from 'axios';
const baseURL='http://127.0.0.1:8000/api/v1/';
function CourseDetails() {
    const { state } = useLocation();
    console.log(state.clickedCourse._id)
    useEffect(() => {
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let payload= {course_id: state.clickedCourse._id}
        let res = axios.get(baseURL+"getassignments",payload,config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []); 
    return (
        <>
            <Navbar/>
            <Header/>
        </>
    );
}
export default CourseDetails;