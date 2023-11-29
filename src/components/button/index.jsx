import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <button onClick={props.onHandleClick} className={props.className === 'sign' ? 'signup' : 'log'}>{props.name}</button>
  )
}

export default Button