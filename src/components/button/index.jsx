import React from 'react'
import './button.css'
const Button = (props) => {

  console.log(props, "Button")
  return (
    <button onClick={() => props.onChange()} className={props.className === 'sign' ? 'signup' :props.className === 'log' ? 'log':props.className === 'logout' ? 'logout':''}>{props.name}</button>
  )
}

export default Button
