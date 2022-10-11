import React, {useState} from 'react';
import '../Admin.css'
import axios from 'axios';
import AddUserModal from './addUserModal';
const baseURL='http://127.0.0.1:8000/api/v1/';
export default function AddNewUser() {  
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [type,setType]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name !=='' && username!=='' && email!=='' && password!=='' && phone!='' && type!==''){
            registerUser()
        }
    }
    console.log(type)

    function registerUser(){
        let payload = {
          full_name: name,
          phone: phone,
          email: email,
          username: username,
          password: password,
          type:type
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
        <div className='add-new-user'>
            <h1>Add a new user</h1>
            <AddUserModal handleSubmit={handleSubmit} setName={setName}
            setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} setPhone={setPhone} setType={setType} /> 
        </div> 
    )
}