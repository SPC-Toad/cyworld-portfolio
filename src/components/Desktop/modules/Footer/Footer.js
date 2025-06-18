import React, {useState, useEffect} from 'react'
import './Footer.css'

// image
import xpLogo from '../../../assets/xp-logo-no-word.png';
import toad from '../../../assets/toad.png'
import logOff from '../../../assets/xp-logoff.png'
import shutdown from '../../../assets/xp-shutoff.png'
import explorer from '../../../assets/exploror.png'


function Footer() {
  const [time, setTime] = useState(new Date());
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div id='footer-container'>
      {
        nav &&
        (
          <div id='nav-container'>
            <div id='nav-header-container'>
              <img id='user-logo' src={toad} alt='womp womp'/>
              <div id='username-text'>Administrator</div>
            </div>
            <hr id='nav-divider' />
            <div id='nav-body-container'>
              <div id='nav-body-left-container'>
                <a href='./portfolio' id='nav-body-item-container'>
                  <img id='nav-body-item-icon' src={explorer} alt='portfolio'/>
                  <div id='nav-body-item-title'>Internet Explorer</div>
                </a>
              </div>
              <div id='nav-body-right-container'>
                
              </div>
            </div>
            <div id='nav-buttons-container'>
              <a href='./bluescreen' id='nav-button-container'>
                <img id='nav-button' src={logOff} alt='shutdown'/>
                <div id='nav-button-text'>Log Off</div>
              </a>
              <a href='./bluescreen' id='nav-button-container'>
                <img id='nav-button' src={shutdown} alt='shut down'/>
                <div id='nav-button-text'>Turn Off</div>
              </a>
            </div>
          </div>
        )
      }
      <div id='start-container' onClick={handleNav}>
        <img id='footer-windows-logo' src={xpLogo} alt='womp-womp'/>
        <div id='start-text'>start</div>
      </div>
      <div id='clock-container'>
        <div id='clock'>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  )
}

export default Footer