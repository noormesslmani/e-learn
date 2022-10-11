import React, {useState} from 'react';
import '../Admin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const baseURL='http://127.0.0.1:8000/api/v1/';
export default function AddInstructor() {  
    return( 
        <>
            <Link className='add-course'>Add an instructor</Link>

        </> 
    )
}