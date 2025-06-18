import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-tab-container" style={{ padding: '20px' }}>
      {/* <h2>My Resume</h2> */}
      <iframe 
        src="/resume.pdf" 
        width="100%" 
        height="100%" 
        style={{ border: 'none' }}
        title="Sangyun Resume"
      ></iframe>
    </div>
  );
}
