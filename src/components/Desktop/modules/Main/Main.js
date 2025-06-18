import React from 'react'
import './Main.css'
import List from '../List/List'
import Section from '../Section/Section'

const updatednews = [
  'Encrypted Chat Application Complete',
  'Earned CS degree from BU',
  'Passed Army 17C Exam',
  'BU completed with 3.64 GPA'
]

const accomplishments = [
  'Graduated Boston University - Computer Science (Dean’s List)',
  'Earned Junior Penetration Tester Certification (TryHackMe)',
  'Earned Google Cybersecurity Professional Certificate',
  'Developed Operating System, Secure Messaging App, Kernel Modules / Drivers, and more. Checkout my projects!',
]


function Main() {
  return (
    <div className='main-container'>
      <div className='main-upper-container'>
        <div className='main-upper-left-container'>
          <List title='Updated news' data={updatednews} />
        </div>
        <div className='main-upper-right-container'>
          <div className='main-song-row-container'>
            <div className='main-song-column-cell' style={{borderBottom: "1px solid black", borderRight: "1px solid black"}}>Music Information</div>
            <div className='main-song-column-cell'>Y - Free Style</div>
          </div>
          <div className='main-song-row-container'>
            <div className='main-song-column-cell'>2004</div>
            <div className='main-song-column-cell' style={{borderTop: "1px solid black", borderLeft: "1px solid black"}}>K Pop</div>
          </div>
        </div>
      </div>
      <Section title={"Introduction"} />
      <div className='main-introduction-text'>I am Kim, a recent Computer Science graduate from Boston University and Sergeant in US Army</div>
      <div className='main-introduction-text'>My technical interests include cybersecurity, low-level systems programming, cryptography, and full-stack web development. This portfolio was built to showcase my journey, projects, and growth.</div>
      <List title='Recent accomplishments' data={accomplishments} />
    </div>
  )
}

export default Main