import React from 'react'
import './Tab.css'
import Footer from '../Footer/Footer'

function Tab({ icon ,  title , children }) {
  return (
    <div id='tab-container'>
      <div id='tab-frame-container'>
        <div id='tab-components-container'>
          <div id='tab-header-container'>
            <div id='tab-header-detatil'>
              <img id='tab-icon' src={icon} alt='womp womp'/>
              <div id='tab-title-text'>{title}</div>
            </div>
            <div id="tab-header-button-container">
              <a href='./home'><div className="tab-button" id="minimize-button"></div></a>
              <a href='./portfolio'><div className="tab-button" id="maximize-button"></div></a>
              <a href='./home'><div className="tab-button" id="close-button"></div></a>
            </div>
          </div>
          <div id='tab-content-container'>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tab