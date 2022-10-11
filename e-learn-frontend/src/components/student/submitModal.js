import React from 'react';
import '../../Student.css'

export default function SubmitModal({handleSubmit,handleCancel, setSolution, submitted}) {
    const handleChange=(e)=>{
        setSolution(e.target.value)
    }
    return(
        <div className='submit-modal'>
            <div className='content'>
                <h2 className='submit-text'>Submit your solution below</h2>
                <textarea placeholder='Your solution' onChange={handleChange}></textarea>
                <div class="assignment-btns">
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
                {submitted? <div class='submitted-message'>Solution already submitted</div>: <></> }
            </div>
        </div> 
    )
}