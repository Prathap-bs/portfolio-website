import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const profileInfo = {
    name: 'Prathap B S',
    cgpa: '8.3',
    school: 'GITAM University',
    schoolResult: '72%',
    image: '/profile.jpg'
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <button 
          className="profile-btn"
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
          aria-label="View full profile"
        >
          <img src={profileInfo.image} alt="Prathap" className="profile-pic" />
        </button>

        <a href="#home" className="nav-logo">Prathap</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact" className="nav-hire">Contact</a></li>
        </ul>

        {showModal && (
          <div 
            className="profile-modal"
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            <div className="profile-modal-content">
              <img src={profileInfo.image} alt="Prathap - Full profile" className="profile-modal-img" />
              
              <div className="profile-info">
                <h2>{profileInfo.name}</h2>
                
                <div className="info-section">
                  <div className="info-item">
                    <span className="info-label">CGPA (B.Tech)</span>
                    <span className="info-value">{profileInfo.cgpa}/10</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">12th Board Result</span>
                    <span className="info-value">{profileInfo.schoolResult}</span>
                  </div>
                  
                  <div className="info-item full-width">
                    <span className="info-label">School</span>
                    <span className="info-value">{profileInfo.school}</span>
                  </div>
                </div>
                
                <a href="/Resume.pdf" download className="download-btn">
                  <span>⬇</span> Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
