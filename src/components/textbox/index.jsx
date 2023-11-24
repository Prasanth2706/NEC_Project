import React, { useState } from 'react'
import './textbox.css'

const Textarea = (props) => {
    const [value, setValue] = useState();
    const handleEmailChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='mail'>
            <label className={props.label === 'Confirm Password' ? 'ConfirmPassword' : props.label === 'Connection Name' ? 'connection' : 'label'} >{props.label}</label>
            <input
                type='email'
                value={value}
                onChange={handleEmailChange}
                required
                placeholder={props.placeholder}
                className='email-input'
            />
        </div>

    )
}

export default Textarea