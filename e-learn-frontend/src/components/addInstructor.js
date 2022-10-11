import React, {useState} from 'react';
import '../Admin.css'
import axios from 'axios';
import AddUserModal from './addUserModal';
import { Link } from 'react-router-dom';
const baseURL='http://127.0.0.1:8000/api/v1/';
export default function AddInstructor() {  
    const [addModal,setAddModal]=useState(false);
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [type,setType]=useState('');
    const handleClick=()=>{
        setAddModal(true);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name !=='' && username!=='' && email!=='' && password!=='' && phone!=''){
            registerInstructor()
        }
    }
    console.log(type)
    
    const handleCancel=(e)=>{
        e.preventDefault();
        setAddModal(false);
    }
    function registerInstructor(){
        let payload = {
          full_name: name,
          phone: phone,
          email: email,
          username: username,
          password: password,
          type:'teacher'
        };
        let res = axios.post(baseURL+"register",payload)
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return( 
        <>
            <Link className='add-course' onClick={handleClick}>Add an instructor</Link>
            {addModal?(<AddUserModal handleSubmit={handleSubmit} handleCancel={handleCancel} setName={setName}
            setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} setPhone={setPhone} setType={setType} />):<></> } 
        </> 
    )
}