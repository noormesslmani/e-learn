import React from 'react';
import '../../App.css'

export default function AddUserModal({handleSubmit,setName, setUsername, setEmail, setPassword, setPhone, setType, success, emailExists, usernameExists, validPassword, validEmail, allEntered}) {
 
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
            {success? (<div className='success'>User successfully added</div>): <></>}
            {emailExists? (<div className="error-msg">Email is already registered</div>): <></>}
            {usernameExists? (<div className="error-msg">Username is already taken</div>): <></>}
            {!(allEntered)? (<div className="error-msg">Please enter all fields</div>): <></>}
            {!(validEmail)? (<div className="error-msg">Please enter a valid email</div>): <></>}
            {!(validPassword)? (<div className="error-msg"><p>The password must at least 8 characters long. <br/>
            It must contain at least one uppercase letter, <br/>one lower case letter,<br/>and one digit number</p></div>): <></>}
        </form>
    )
}