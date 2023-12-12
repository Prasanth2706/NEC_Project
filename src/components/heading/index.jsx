import React from 'react'
import './heading.css'
const Heading = (props) => {
    return (
        <div className={props.name === 'home' ? 'heading' : 'signupHeading'}>
            <p className='welcome-heading'>{props.title}</p>
        </div>
    )
}

export default Heading