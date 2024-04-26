import React from 'react'
import "./Button.scss"
const Button = ({text, icon}) => {
  return (
    <button className='button'>
      {text}
      {icon}
    </button>
  )
}

export default Button
