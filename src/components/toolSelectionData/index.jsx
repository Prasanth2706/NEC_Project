import React from 'react'
import './tooloption.css'
const ToolData = (props) => {
    return (
        <div className='tool_option'>
            <input type ='radio' ></input>
            <img src={props.icon} alt="aws" />
            <div className='tool_option_decrib'>
                <p>{props.title}</p>
                <p>{props.data}</p>
            </div>
        </div>
    )
}

export default ToolData
