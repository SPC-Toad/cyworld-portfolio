import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

import windowsLogo from '../../assets/xp-logo.png';
import Loading from '../modules/Loading/Loading';

function Landing() {

    const navigate = useNavigate();

    useEffect(() => {
        const bootloader = setTimeout(() => {
            navigate('/home');
        }, 15000); // 10 seconds

        return () => clearTimeout(bootloader); // Cleanup timeout if component unmounts
    }, [navigate]);

    return (
        <div id='landing-container'>
            <img id='windows-logo' src={windowsLogo} alt='womp womp'/>
            <Loading />
        </div>
    )
}

export default Landing