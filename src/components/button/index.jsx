import React from 'react'
import './button.css'
const Button = (props) => {
  console.log(props, "Button")
  return (
    <button className={props.className === 'sign' ? 'signup' : 'log'}>{props.name}</button>
  )
}

export default Button