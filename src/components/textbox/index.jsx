import React, { useState } from 'react'
import './textbox.css'

const Textarea = (props) => {

    return (
        <div className='mail'>
            <label className={props.label === 'Confirm Password' ? 'ConfirmPassword' : props.label === 'Connection Name' ? 'connection' : 'label'} >{props.label}</label>
            <input
                type={props.typevalue}
                value={props.value}
                onChange={props.onChange}
                required
                onClick={props.onClick}
                placeholder={props.placeholder}
                className='email-input'
            />
        </div>

    )
}

export default Textarea