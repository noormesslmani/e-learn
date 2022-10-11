import React, {useState} from 'react';
import '../Admin.css'

export default function AddModal({handleSubmit,handleCancel,setName, setUsername, setFees, setDescription, invalidUser, unauthorizedUser}) {
    
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }
    const handleFees=(e)=>{
        setFees(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Please enter the following information</h2>
                <div className='details'>
                    <label className="label">Course Name</label>
                    <input className="input" type="text" placeholder='Course Name' onChange={handleName} />
                </div>
                <div className='details'>
                    <label className="label">Course Description</label>
                    <textarea className="input" type="text" placeholder='Course Description' onChange={handleDescription}></textarea>
                </div>
                <div className='details'>
                    <label className="label">Course Fees in USD</label>
                    <input className="input" type="number" placeholder='Course Fees' onChange={handleFees}/>
                </div>
                <div className='details'>
                    <label className="label">Instructor Username</label>
                    <input className="input" type="text" placeholder='Instructor Username' onChange={handleUsername}/>
                </div>
                <div class="btns">
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
                {invalidUser? <div className='message'>Username does not exist</div>:<></> }
                {unauthorizedUser? <div className='message'>This user is not an instructor</div>:<></> }
            </form>
        </div> 
    )
}