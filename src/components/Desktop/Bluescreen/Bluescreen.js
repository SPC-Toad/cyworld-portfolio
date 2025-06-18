import React from 'react'
import './Bluescreen.css'

function Bluescreen() {
  return (
    <div id='bluescreen-container'>
      <p>
        A problem has been detected and windows has been shut down to prevent damage
        to your computer.<br/><br/><br/>
        The end-user manually generated the crashdump.<br/><br/>
        If this is the first time you've seen this stop error screen,<br/>
        restart your computer. If this screen appears again, follow<br/>
        these steps:<br/><br/>
        Check to make sure any new hardware or software is properly installed.<br/>
        If this is a new installation, ask your hardware or software manufacturer<br/>
        for any windows updates you might need.<br/><br/>
        If problems continue, disable or remove any newly installed hardware<br/>
        or software. Disable BIOS memory options such as caching or shadowing.<br/>
        If you need to use Safe mode to remove or disable components, restart<br/>
        your computer, press F8 to select Advanced Startup options, and then<br/>
        select safe mode.<br/><br/>
        Technical information:<br/><br/>
        *** STOP: 0x000000E2 (0x00000000,0x00000000,0x00000000,0x00000000)<br/><br/><br/>
        Beginning dump of physical memory<br/>
        Physical memory dump complete.<br/>
        contact your system administrator or technical support group for further<br/>
        assistance.
      </p>
    </div>
  )
}

export default Bluescreen