import React, {useState} from 'react';
import '../Admin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddModal from './addModal';
const baseURL='http://127.0.0.1:8000/api/v1/';
export default function AddCourse() {  
    const [addModal,setAddModal]=useState(false);
    const [name,setName]=useState('');
    const [fees,setFees]=useState('');
    const [description,setDescription]=useState('');
    const [username,setUsername]=useState('');
    function submitCourse(){
        let payload = {name: name, username: username, description: description, fees: fees};
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.post(baseURL+"course",payload,config)
        .then(function (response) {
            console.log(response.data)
            setAddModal(false)
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    const handleClick=()=>{
        setAddModal(true);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        submitCourse();
    }
    const handleCancel=(e)=>{
        e.preventDefault();
        setAddModal(false);
    }
    return( 
        <>
            <Link className='add-course' onClick={handleClick}>Add a new course</Link>
            {addModal?(<AddModal handleSubmit={handleSubmit} handleCancel={handleCancel} setName={setName}
            setUsername={setUsername} setDescription={setDescription} setFees={setFees} />):<></> } 
        </> 
    )
}