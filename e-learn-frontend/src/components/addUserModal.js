import React, {useState} from 'react';
import '../Admin.css'

export default function AddUserModal({handleSubmit,setName, setUsername, setEmail, setPassword, setPhone, setType}) {
 
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleType=(e)=>{
        setType(e.target.value)
    }
    return(

        <form className='adduser-content'>
            <h2 className='submit-text'>Please enter the following information</h2>
            <div className='details'>
                <input className="input" type="text" placeholder='Full Name' onChange={handleName} />
            </div>
            <div className='details'>
                <input className="input" type="number" placeholder='Phone Number' onChange={handlePhone}/>
            </div>
            <div className='details'>
                <input className="input" type="text" placeholder='Email' onChange={handleEmail} />
            </div>
            <div className='details'>
                <input className="input" type="text" placeholder='Username' onChange={handleUsername} />
            </div>
            <div className='details'>
                <select className="input" onChange={handleType} >
                    <option value="">Select type</option>
                    <option value="teacher">Instructor</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <div className='details'>
                <input className="input" type="text" placeholder='Password' onChange={handlePassword}/>
            </div>

            <div class="btns">
                <button className='admin-submit-btn' onClick={handleSubmit}>Confirm</button>
            </div>
        </form>
    )
}