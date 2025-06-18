import React from 'react'
import './Section.css'

function Section({title}) {
  return (
    <div className='section-title-container'>
      <div className='section-title-text'>{title}</div>
      <div className='section-title-line'></div>
    </div>
  )
}

export default Section