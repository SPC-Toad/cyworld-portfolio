import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { incrementVisits, getVisitorData } from '../../firebase/visitorService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Mobile.css'

import toadImg from '../assets/toady.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

import Section from './module/Section/Section';
import Project from './module/Project/Project';
import { faFilePdf, faFolderOpen, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';

const educationData = [
  "Boston University CS (3.64 GPA, Dean’s List)",
  "U.S. Army Ordnance School (2020-2021)"
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
  "Fluent in Korean", " Fluent in English"
];

const cyber_system = [
  {
    title: "Encrypted Messaging App",
    language: "Python",
    description: "End-to-end encrypted 1-on-1 chat app implementing simplified X3DH key agreement and Double Ratchet Algorithm using X25519, ChaCha20-Poly1305, and HKDF.",
    link: "https://github.com/SPC-Toad/encrypted-chat-service"
  },
  {
    title: "KimOS",
    language: "C, Assembly",
    description: "Custom operating system development with context switching, IDT setup, and custom file system.",
    link: "https://github.com/SPC-Toad/KimOS"
  },
  {
    title: "Kernel Keyboard Driver",
    language: "C, Assembly",
    description: "Interrupt-driven PS/2 keyboard driver with IOCTL interface and user-space interaction.",
    link: "https://github.com/SPC-Toad/kernel-keyboard-driver"
  },
  {
    title: "RSA Cryptosystem",
    language: "Python",
    description: "Implemented RSA encryption using both Euler’s Theorem and Matrix method.",
    link: "https://github.com/SPC-Toad/rsa_encryption"
  },
  {
    title: "Unix File String Search",
    language: "C",
    description: "Powerful string search tool for directories and files with regex-like flexibility.",
    link: "https://github.com/SPC-Toad/unix_file_string_search"
  },
  {
    title: "Unix Function (ELF Parser)",
    language: "C",
    description: "Implements objdump-like symbol extraction and ELF parsing tools.",
    link: "https://github.com/SPC-Toad/unix-function-public"
  },
  {
    title: "Server Model Analysis",
    language: "C, Assembly, Python",
    description: "Multi-threaded server models with queuing theory (MM1, MD1, MG1, etc.) and scheduling simulations.",
    link: "https://github.com/SPC-Toad/server-analysis"
  }
]

const networking = [
  {
    title: "Sonar TCP Server",
    language: "C, Arduino",
    description: "Server receiving sonar sensor data via TCP connection, monitoring distance and angle data.",
    link: "https://github.com/SPC-Toad/sonar-tcp-server"
  },
  {
    title: "C Chat Server",
    language: "C",
    description: "Multi-threaded chat server handling concurrent clients using sockets and select().",
    link: "https://github.com/SPC-Toad/c-chat-server"
  },
  {
    title: "Personal SSH Server",
    language: "Linux, Networking",
    description: "Personal SSH server setup with DNS, port forwarding, and SSH key hardening.",
    link: "https://github.com/SPC-Toad/ssh-server"
  }
]

const full_Stack_App = [
  {
    title: "Hada",
    language: "React Native, Firebase",
    description: "Spaced repetition Korean language flashcard app with full CRUD support.",
    link: "https://github.com/Project-Hada/Hada-App-Client"
  },
  {
    title: "KatApp",
    language: "React Native, C#, Firebase",
    description: "Cat food management app using AI barcode scanning and Amazon product analysis.",
    link: "https://github.com/neezacoto/KatApp"
  }
]

function Mobile() {
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    async function trackVisitor() {
    await incrementVisits();

    const data = await getVisitorData();
    setVisitorData(data);
    }

    trackVisitor();
  }, []);
  return (
    <div className='mobile-container'>
      <div className='mobile-greeting-text'>Welcome to Kim's website</div>
      <div id='information-container' className='section-container'>
        <div id='information-upper-container'>
          <img src={toadImg} alt='frog' id='profile-img'/>
          <div id='information-text-container'>
            <div id='sub-font'>TODAY <span id='important-font'>{visitorData?.todayVisits}</span> | {visitorData?.totalVisits}</div>
            <div id='normal-font'>Kim Sangyun</div>
            <div id='sub-font'>System Dev hobbyist</div>
            <div id='sub-font'>Recent CS Graduate</div>
          </div>
        </div>
        <div id='information-lower-container' style={{color:"#64C0DF", fontWeight:"900"}}>On to the next chapter</div>
      </div>
      {/* Profile */}
      <div className="profile-marker" />
      <Section title={"Education"} list={educationData}/>
      <Section title={"Certificates"} list={certData}/>
      <Section title={"Programming Languages"} list={programmingLanguages} />
      <Section title={"System"} list={systems} />
      <Section title={"Security Tools"} list={securityTools} />
      <Section title={"Hardware"} list={hardware} />
      <Section title={"Language"} list={languages} />

      {/* Project */}
      <div className="project-marker" />
      
      <Project title={"Cyber & Systems"} items={cyber_system}/>
      <Project title={"Networking & Infrastructure"} items={networking}/>
      <Project title={"Full-Stack Applications"} items={full_Stack_App}/>

      <div className='section-container' id='mobile-contact-section'>
        <a href='https://github.com/SPC-Toad'><img src={github} alt='' id='mobile-contact-icon'/></a>
        <a href='https://www.linkedin.com/in/sangyun-kim/'><img src={linkedin} alt='' id='mobile-contact-icon'/></a>
        <a href="/resume.pdf"><FontAwesomeIcon icon={faFilePdf} id='mobile-contact-icon'/></a>
      </div>

      <div className='mobile-footer-container'>
        <Link to="mobile-greeting-text" smooth={true} duration={500}><FontAwesomeIcon icon={faUser} /></Link>
        <Link to="profile-marker" smooth={true} duration={500}><FontAwesomeIcon icon={faScrewdriverWrench} /></Link>
        <Link to="project-marker" smooth={true} duration={500}><FontAwesomeIcon icon={faFolderOpen} /></Link>
        <Link to="mobile-contact-section" smooth={true} duration={500}><FontAwesomeIcon icon={faAddressCard} /></Link>
      </div>
    </div>
  )
}

export default Mobile