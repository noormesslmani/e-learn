import React from 'react';
import '../../App.css'

export default function EnrollStudent({handleCancelEnroll,handleSubmitEnroll,state, setUsername, nonexistant, invalidType}) {
    const handleChange=(e)=>{
        setUsername(e.target.value)
    }
    return(
        <div className='submit-modal'>
            <div className='enroll-course-content'>
                <h2>Enroll Student in the course</h2>
                <div className='enroll-student-course'>
                    <h3>Course Name:</h3>
                    <h3 className='enroll-course-name' >{state.clickedCourse.name}</h3>
                </div>
                <div className='enroll-student-username'>
                    <label>Username:</label>
                    <input placeholder='Student Username' onChange={handleChange} type="text" name="username" />
                </div>
                <div className="assignment-btns">
                    <button className='submit-btn' onClick={handleSubmitEnroll}>Submit</button>
                    <button className="cancel-btn" onClick={handleCancelEnroll}>Cancel</button>
                </div>
                {nonexistant? (<div className="error-msg">User does not exist</div>):<></> }
                {invalidType? (<div className="error-msg">Invalid user type</div>):<></> }
            </div>
        </div> 
    )
}