import React, { useRef, useState } from 'react'
import './toolOption.css'


const ToolOption = (props) => {

    const ref = useRef(null);
    const handleRef = () => {
        ref.current.click();
    }
    
    return (
        <div className={props.className}
            onClick={() => { props.onChange(props.title); handleRef() }}>
            <input ref={ref} className='tool_radio' type="radio" name="tool" />
            <img className='tool_images' src={props.image} alt="" />
            <div className='tool_option_data'>
                <p className='tool_option_title'>{props.title}</p>
                <p className='tool_option_value'>{props.value}</p>
            </div>
        </div>
    )
}

export default ToolOption