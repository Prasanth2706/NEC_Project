import React from 'react'
import './login.css'
const Login = (props) => {
    return (
        <div onClick={props.onClick}>
            <a href="##">{props.value}</a>
        </div>
    )
}

export default Login