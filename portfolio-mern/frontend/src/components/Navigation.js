import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#home" className="nav-logo">Prathap</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact" className="nav-hire">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
