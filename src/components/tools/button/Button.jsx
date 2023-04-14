import React from 'react'
import './Button.css'

const Button = (props) => {
    const { title, onClick, style } = props
  return (
    <button
        className='button'
        onClick={onClick} 
        style={style}>
        
        {title}
    </button>
  )
}

export default Button