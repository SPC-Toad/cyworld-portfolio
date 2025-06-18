import React, { useEffect, useState, useRef } from 'react'
import { incrementVisits, updateLocation, getVisitorData } from '../../../firebase/visitorService'
import { getVisitorLocation } from '../../../utils/ipLocations'
import ReactPlayer from 'react-player';
import './Portfolio.css'


import Tab from '../modules/Tab/Tab'
import Cube from '../modules/Cube/Cube'

import Main from '../modules/Main/Main'
import Profile from '../modules/Profile/Profile'
import Project from '../modules/Project/Project'
import Resume from '../modules/Resume/Resume'

import merica from '../../assets/us.png'
import toady from '../../assets/toady.jpg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'


const bookmarks = [
    { name: 'Main', component: <Main /> },
    { name: 'Profile', component: <Profile /> },
    { name: 'Project', component: <Project /> },
    { name: 'Resume', component: <Resume /> },
];


function Portfolio() {
    const [activeTab, setActiveTab] = useState(0);
    const [visitorData, setVisitorData] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setMute] = useState(false);
    const [volume, setVolume] = useState(0.1);
    const playerRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePrev = () => {};

    const handleNext = () => {};

    const handleMute = () => {
        setMute(!isMute);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };


    useEffect(() => {
        async function trackVisitor() {
        await incrementVisits();

        const location = await getVisitorLocation();
        await updateLocation(location);

        const data = await getVisitorData();
        setVisitorData(data);
        }

        trackVisitor();
    }, []);

  return (
    <Tab icon={merica} title={"Portfolio"}>
        <div className='portfolio-container'>
            {/* Left container */}
            <div className='portfolio-left-book-boarder-container'>
                <div className='portfolio-left-book-stitching-container'>
                    <div className='portfolio-left-book-container'>
                        <div className='portfolio-inner-page-title'>Today <span id='visitor-count-text'>{visitorData?.todayVisits}</span> | Total {visitorData?.totalVisits}</div>
                        <div className='portfolio-inner-page-container'>
                            <div className='portfolio-left-content-container'>
                                <img src={toady} alt='error' className='portfolio-profile-img'/>
                                <div className='portfolio-status-text'>OLD SCHOOL VIBE</div>
                                <div className='portfolio-quote-text'>On to the next chapter 📖</div>
                                <div className='portfolio-user-text'><strong>Kim Sangyun</strong> <span id='gender-text'>♂</span> <span id='age-text'>22 yr old</span></div>
                                <div className='portfolio-user-email-text'>sykim.cyber@gmail.com</div>
                                {/* This is where you would put the spinny icons for the other web stuff */}
                                <div className='portfolio-icon-container'>
                                    <Cube image={github} link="https://github.com/SPC-Toad"/>
                                    <Cube image={linkedin} link="https://www.linkedin.com/in/sangyun-kim/"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right container */}
            <div className='portfolio-right-book-boarder-container'>
                <div className='portfolio-right-book-stitching-container'>
                    <div className='portfolio-right-book-container'>
                        <div className='portfolio-inner-page-title-container'>
                            <div className='portfolio-inner-page-title'></div>
                            <div className='portfolio-inner-page-title'>http://www.secret-squirrel.top/portfolio</div>
                        </div>
                        <div className='portfolio-inner-page-container'>
                            <div className='portfolio-main-content-container'>
                                {bookmarks[activeTab].component}
                            </div>
                            <ul className='portfolio-book-marker-container'>
                                {bookmarks.map((bookmark, index) => (
                                    <li
                                        key={index}
                                        className={`portfolio-book-marker ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {bookmark.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* information container */}
            <div className='portfolio-information-container'>
                <div className='recent-visitor-location-text'>Recently Visited From: {visitorData?.lastVisitLocation || "Loading..."}</div>
                <div className='portfolio-information-progress-bar-container'>
                    <div className='portfolio-information-progress-bar-title'>Active</div>
                    <div className='portfolio-information-progress-bar'>
                        <div style={{width:"90%", height:"100%", backgroundColor:"#FD9A68", borderRadius:".5rem"}} />
                    </div>
                </div>
                <div className='portfolio-information-progress-bar-container'>
                    <div className='portfolio-information-progress-bar-title'>Locked In</div>
                    <div className='portfolio-information-progress-bar'>
                        <div style={{width:"100%", height:"100%", backgroundColor:"#9BBF38", borderRadius:".5rem"}} />
                    </div>
                </div>
                <div className='media-container'>
                    <div className='media-title-container'>
                        <div className='media-title-cd'>💿</div>
                        <div className='media-title'><span>Y - Freestyle (2004)</span></div>
                    </div>
                    <div className='media-control-container'>
                        <div className='media-control-button-container'>
                            <div className='media-control-button' onClick={handlePlay}>▶️</div>
                            <div className='media-control-button' onClick={handlePlay}>⏹️</div>
                            <div className='media-control-button' onClick={handlePrev}>⏮️</div>
                            <div className='media-control-button' onClick={handleNext}>⏭️</div>
                        </div>
                        <div className='media-control-volume-container'>
                            <div className='media-control-button' onClick={handleMute}>{isMute ? "🔇" : "🔊"}</div>
                            <input 
                                className='media-volume-slider'
                                type="range" 
                                min="0" 
                                max="1" 
                                step="0.01" 
                                value={volume}
                                onChange={handleVolumeChange}
                            />
                        </div>
                    </div>
                    <ReactPlayer
                        ref={playerRef}
                        url="https://www.youtube.com/watch?v=WxUwgAli2Ec&ab_channel=Freestyle-Topic"
                        playing={isPlaying}
                        loop={true}
                        controls={false}
                        volume={volume}
                        width="0px"
                        height="0px"
                        muted={isMute}
                    />
                </div>
            </div>
        </div>
    </Tab>
  )
}

export default Portfolio

