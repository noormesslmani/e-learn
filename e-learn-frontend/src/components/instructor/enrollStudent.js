import React from 'react';
import '../../Student.css'

export default function EnrollStudent({handleCancelEnroll,handleSubmitEnroll,state, setUsername, nonexistant, invalidType}) {
    const handleChange=(e)=>{
        setUsername(e.target.value)
    }
    return(
        <div className='submit-modal'>
            <div className='content'>
                <h2>Enroll Student in the course</h2>
                <h4>Course Name: {state.clickedCourse.name}</h4>
                <label for="username" >Username</label>
                <input placeholder='Student Username' onChange={handleChange} type="text" className="student-username" name="username" />
                <div className="assignment-btns">
                    <button className='submit-btn' onClick={handleSubmitEnroll}>Submit</button>
                    <button className="cancel-btn" onClick={handleCancelEnroll}>Cancel</button>
                </div>
                {nonexistant? (<div className='message'>User does not exist</div>):<></> }
                {invalidType? (<div className='message'>Invalid user type</div>):<></> }
            </div>
        </div> 
    )
}