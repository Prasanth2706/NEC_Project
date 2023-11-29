import React, { useState } from 'react'
import './textbox.css'

const Textarea = (props) => {
    const {onChange, label, placeholder} = props
    const [value, setValue] = useState();
    // const handleEmailChange = (e) => {
    //     setValue(e.target.value);
    // };

    return (
        <div className='mail'>
            <label className={onChange === 'Confirm Password' ? 'ConfirmPassword' : label === 'Connection Name' ? 'connection' : 'label'} >{props.label}</label>
            <input
                type='email'
                value={value}
                onChange={onChange}
                required
                placeholder={placeholder}
                className='email-input'
            />
        </div>

    )
}

export default Textarea