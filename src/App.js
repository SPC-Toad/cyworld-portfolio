import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Landing from './components/Desktop/Landing/Landing';
import Home from './components/Desktop/Home/Home';
import Portfolio from './components/Desktop/Portfolio/Portfolio';
import Bluescreen from './components/Desktop/Bluescreen/Bluescreen';

import PortfolioMobile from './components/Mobile/Mobile'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <TitleUpdater />
      <Routes>
        <Route path='/' element={ windowWidth >= 1100 ? <Landing /> : <PortfolioMobile /> } />
        <Route path='/home' element={ windowWidth >= 1100 ? <Home /> : <PortfolioMobile /> }/>
        <Route path='/portfolio' element={windowWidth >= 1100 ? <Portfolio /> : <PortfolioMobile />} />
        <Route path='/bluescreen' element={<Bluescreen/>} />
      </Routes>
    </Router>
  );
}

// TitleUpdater component to handle title changes
function TitleUpdater() {
  const location = useLocation(); // Router dom

  useEffect(() => {
    // Define a map of paths to titles
    const titleMap = {
      '/': 'Landing',
      '/home': '2000s Home Page',
      '/portfolio': 'Portfolio',
      '/bluescreen': 'Bluescreen',
    };

    // Get the title based on the current path
    const title = titleMap[location.pathname];
    if (title === 'Bluescreen') {
      document.title = `ERR: Page Fault`;
    }
    else if (title === "Landing") {
      document.title = `Kernel Booting...`;
    }
    else {
      document.title = `Kim's ${title}`; // This is where we change the title
    }
  }, [location]); // everytime location changes
}

export default App;
