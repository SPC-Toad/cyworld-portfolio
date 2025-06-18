import React from 'react'
import './Profile.css'

import List from '../List/List'
import Section from '../Section/Section';

const educationData = [
  "Boston University, B.A. Computer Science (3.64 GPA, Dean’s List)",
  "U.S. Army Ordnance School – Ft Lee, VA (2020 – 2021)"
];

const certData = [
  "Google Cybersecurity Professional Certificate",
  "Google IT Support Professional Certificate",
  "TryHackMe Junior Penetration Tester"
];

const programmingLanguages = [
  "C", "Assembly", "Java", "Python", "React", "SQL", "TypeScript", "Bash", "C#", "Makefile"
];

const systems = [
  "Linux", "Windows", "macOS", "VSCode", "GDB", ".NET", "Firebase"
];

const securityTools = [
  "TCP/IP", "Nmap", "Burp Suite", "Metasploit", "Privilege Escalation", "SIEM"
];

const hardware = [
  "Raspberry Pi 5", "IP Cameras", "Sonar Motion Sensors", "Multimeter"
];  

const languages = [
  "Fluent in Korean and English"
];


function Profile() {
  return (
    <div className="profile-tab-container">
      <List title={"Education"} data={educationData} />
      <List title={"Certifications"} data={certData} />
      <div id='profile-spacer'></div>
      <Section title={"Skills"} />
      <List title={"Programming Languages"} data={programmingLanguages} />
      <List title={"Systems"} data={systems} />
      <List title={"Security Tools"} data={securityTools} />
      <List title={"Hardware"} data={hardware} />
      <List title={"Languages"} data={languages} />
    </div>
  )
}

export default Profile