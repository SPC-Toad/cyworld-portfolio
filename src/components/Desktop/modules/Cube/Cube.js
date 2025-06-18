import React from 'react'
import './Cube.css'

function Cube({image, link}) {
  return (
    <div className='cube-container'>
        <a href={link} className="cube-side" id='side-1'><img src={image} alt='error' className='cube-img'></img></a>
        <a href={link} className="cube-side" id='side-2'><img src={image} alt='error' className='cube-img'></img></a>
        <a href={link} className="cube-side" id='side-3'><img src={image} alt='error' className='cube-img'></img></a>
        <a href={link} className="cube-side" id='side-4'><img src={image} alt='error' className='cube-img'></img></a>
        <a href={link} className="cube-side" id='side-5'><img src={image} alt='error' className='cube-img'></img></a>
        <a href={link} className="cube-side" id='side-6'><img src={image} alt='error' className='cube-img'></img></a>
    </div>
  )
}

export default Cube