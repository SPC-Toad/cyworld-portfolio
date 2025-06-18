import React from 'react'
import './Icon.css'

function Icon({image, title, link}) {
  return (
    <a href={link} className='background-icon-container'>
        <img src={image} alt='err' className='background-icon'/>
        <div className='background-icon-title'>{title}</div>
    </a>
  )
}

export default Icon