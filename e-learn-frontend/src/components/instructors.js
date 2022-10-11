import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';

const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Instructors() {
    useEffect(() => {
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        axios.get(baseURL+"users",config)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

    }, []);
    return (
        <div className='suggested-courses' >
            <h1>Available Instrcutors</h1>
        </div>      
    );
}