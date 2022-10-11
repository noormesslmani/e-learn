import React, {useState} from 'react';
import '../Admin.css'

export default function AddModal({handleSubmit,handleCancel}) {
    // const handleChange=(e)=>{
    //     setSolution(e.target.value)
    // }
    return(
        <div className='add-modal'>
            <form className='content'>
                <h2 className='submit-text'>Please enter the following information</h2>
                <div className='details'>
                    <label className="label">Course Name</label>
                    <input className="input" type="text" placeholder='Course Name' />
                </div>
                <div className='details'>
                    <label className="label">Course Description</label>
                    <input className="input" type="text" placeholder='Course Description' />
                </div>
                <div className='details'>
                    <label className="label">Course Fees in USD</label>
                    <textarea className="input" type="text" placeholder='Course Fees'></textarea>
                </div>
                <div className='details'>
                    <label className="label">Instructor Username</label>
                    <input className="input" type="text" placeholder='Instructor Username' />
                </div>
                <div class="btns">
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div> 
    )
}