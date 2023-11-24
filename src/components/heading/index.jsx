import React from 'react'
import './heading.css'
const Heading = (props) => {
    return (
        <div className={props.title === 'Welcome to Lorem Ipsums!' ? 'signupHeading' : 'heading'}>
            <p className='welcome-heading'>{props.title}</p>
        </div>
    )
}

export default Heading