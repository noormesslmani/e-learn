import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';

const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Instructors() {
    return (
        <div className='suggested-courses' >
            <h1>Available Instrcutors</h1>
        </div>      
    );
}