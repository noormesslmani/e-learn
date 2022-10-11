import React, {useState} from 'react';
import '../Admin.css'
import { Link } from 'react-router-dom';
import AddModal from './addModal';
export default function AddCourse() {  
    const [addModal,setAddModal]=useState(false);
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
            <Link className='add-course' onClick={handleClick}>Add a new course</Link>
            {addModal?(<AddModal handleSubmit={handleSubmit} handleCancel={handleCancel} />):<></> } 
        </> 
    )
}