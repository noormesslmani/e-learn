import React, {useState} from 'react';
import '../Student.css'

export default function CreateAssignment({setDescription,setAssignmentModal,state, handleSubmit, handleCancel}) {
    const handleChange=(e)=>{
        setDescription(e.target.value)
    }
    return(
        <div className='submit-modal'>
            <div className='content'>
                <h2>Create new assignment</h2>
                <h4>Course Name: {state.clickedCourse.name}</h4>
                <textarea placeholder='Description' onChange={handleChange}></textarea>
                <div className="assignment-btns">
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div> 
    )
}