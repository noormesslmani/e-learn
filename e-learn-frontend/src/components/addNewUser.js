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
    const [emailExists,setEmailExists]=useState(false);
    const [usernameExists,setUsernameExists]=useState(false);
    const [success,setSuccess]=useState(false);
    const [validPassword,setValidPassword]=useState(true);
    const [validEmail,setValidEmail]=useState(true);
    const [allEntered, setAllEntered]=useState(true);
    const handleSubmit=(e)=>{
        setEmailExists(false);
        setValidEmail(true);
        setUsernameExists(false);
        setSuccess(false);
        setValidPassword(true);
        setAllEntered(true);
        setValidEmail(true);
        e.preventDefault();
        if(name !=='' && username!=='' && email!=='' && password!=='' && phone!='' && type!==''){
            if(emailFormat(email)){
                if (passwordFormat(password)){
                    registerUser()}
                else{
                    setValidPassword(false);
                }
            }
            else{
                setValidEmail(false);
            }
        }
        else{
            setAllEntered(false);
        }
    }
    function passwordFormat(password) {
        const expression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return expression.test(password);
    }
    function emailFormat(email) {
        const expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return expression.test(email);
    }

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
            if(response.data.result=='email already exists'){
                setEmailExists(true)
            }
            else if(response.data.result=='username is taken'){
                setUsernameExists(true);
            }
            else if(response.data.result=='ok'){
                setSuccess(true);
            }
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
            setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} setPhone={setPhone} setType={setType} success={success} emailExists={emailExists} usernameExists={usernameExists}
            validPassword={validPassword} validEmail={validEmail} allEntered={allEntered} /> 
        </div> 
    )
}