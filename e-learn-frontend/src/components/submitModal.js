import React, {useState} from 'react';
import '../Student.css'

export default function SubmitModal() {
    return(
        <div className='submit-modal'>
            <div className='content'>
                <h2 className='submit-text'>Submit your solution below</h2>
                <textarea placeholder='Your solution'></textarea>
                <div class="assignment-btns">
                    <button className='submit-btn'>Submit</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div> 
    )
}