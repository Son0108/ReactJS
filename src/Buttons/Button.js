import React from 'react'
import './Button.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Button({color, title, icon, handle}) {
  return (
    <div className='button' style={{backgroundColor:color}} onClick={handle}><i class={icon}></i>{title}</div>
  )
}

export default Button