import React from 'react'
import './Project.css'

function Project({title, items}) {
  return (
    <div className='mobile-project-container' style={{fontFamily:"cursive"}}>
        <div className='mobile-project-title-text'>{title}</div>
        <div className='mobile-project-list-container'>
            {
                items.map((project, index) => (
                    <div key={index} className='section-container'>
                        <div id='mobile-project-list-item-header-container'>
                            <div id='mobile-project-list-item-title'>{project.title}</div>
                            <div id='mobile-project-list-item-language'>{project.language}</div>
                        </div>
                        <div id='mobile-project-list-item-description'>{project.description}</div>
                        <a id='mobile-project-list-item-link' href={project.link}>Link</a>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Project