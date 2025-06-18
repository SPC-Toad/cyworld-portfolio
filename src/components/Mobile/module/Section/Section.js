import React from 'react'
import './Section.css'



function Section({title, list}) {
  return (
    <div className='section-container'>
        <div className='mobile-section-title-text'>{title}</div>
        <div className='mobile-section-list-container'>
            {
                list.map((item, index) => (
                    <span key={index} className='mobile-section-list-item'>{item}</span>
                ))
            }
        </div>
    </div>
  )
}

export default Section