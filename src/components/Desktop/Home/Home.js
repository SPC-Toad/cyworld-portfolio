import React from 'react'
import './Home.css'


import Icon from '../modules/Icon/Icon'
import Footer from '../modules/Footer/Footer'

import xpBackground from '../../assets/xp-background.png' // Replace with the actual path to your image
import internetExplorerIcon from '../../assets/exploror.png' // Replace with the actual path to your icon

function Home() {
  return (
    <div className="home-container">
        <img className='home-background' src={xpBackground} alt='Windows XP Background'/>
        <div className='home-content'>
            <Icon 
                image={internetExplorerIcon}
                title='Internet Explorer'
                link='/portfolio' // Adjust the link as needed
            />
        </div>
        <Footer />
    </div>
  )
}

export default Home