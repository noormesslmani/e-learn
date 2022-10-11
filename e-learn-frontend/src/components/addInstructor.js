import React, {useState} from 'react';
import '../Admin.css'
import axios from 'axios';
import AddInstructorModal from './addInstructorModal';
import { Link } from 'react-router-dom';
const baseURL='http://127.0.0.1:8000/api/v1/';
export default function AddInstructor() {  
    const [addModal,setAddModal]=useState(false);
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const handleClick=()=>{
        setAddModal(true);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleCancel=(e)=>{
        e.preventDefault();
        setAddModal(false);
    }
    return( 
        <>
            <Link className='add-course' onClick={handleClick}>Add an instructor</Link>
            {addModal?(<AddInstructorModal handleSubmit={handleSubmit} handleCancel={handleCancel} setName={setName}
            setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} setPhone={setPhone} />):<></> } 
        </> 
    )
}