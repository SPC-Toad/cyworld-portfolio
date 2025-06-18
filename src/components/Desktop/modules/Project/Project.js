import React from 'react';
import './Project.css';

export default function Project() {
  const projects = [
    {
      category: "Cyber & Systems",
      items: [
        {
          title: "Encrypted Messaging App (Signal Protocol Inspired)",
          language: "Python",
          description: "End-to-end encrypted 1-on-1 chat app implementing simplified X3DH key agreement and Double Ratchet Algorithm using X25519, ChaCha20-Poly1305, and HKDF.",
          link: "https://github.com/SPC-Toad/encrypted-chat-service"
        },
        {
          title: "KimOS",
          language: "C & Assembly",
          description: "Custom operating system development with context switching, IDT setup, and custom file system.",
          link: "https://github.com/SPC-Toad/KimOS"
        },
        {
          title: "Kernel Keyboard Driver",
          language: "C & Assembly",
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
    },

    {
      category: "Networking & Infrastructure",
      items: [
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
          title: "SSH Server (Raspberry Pi 5)",
          language: "Linux Networking",
          description: "Personal SSH server setup with DNS, port forwarding, and SSH key hardening.",
          link: "https://github.com/SPC-Toad/ssh-server"
        }
      ]
    },

    {
      category: "Full-Stack Applications",
      items: [
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
    }
  ];

  return (
    <div className="project-tab-container" style={{ padding: '20px' }}>
      {projects.map((section, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h2>{section.category}</h2>
          <ul>
            {section.items.map((proj, i) => (
              <li key={i} style={{ marginBottom: '15px' }}>
                <h3>{proj.title}</h3>
                <p><strong>Language:</strong> {proj.language}</p>
                <p>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
