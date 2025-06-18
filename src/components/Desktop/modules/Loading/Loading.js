import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div id='loading-container'>
        <div id='loading-block-container'>
            <div className='loading-block' id='block-1'/>
            <div className='loading-block' id='block-2'/>
            <div className='loading-block' id='block-3'/>
        </div>
    </div>
  )
}

export default Loading