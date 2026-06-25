import React, { useState, useEffect } from 'react';
import './App.css';
import { useParallax, useScrollTrigger } from './hooks/useScrollAnimation';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loadStep, setLoadStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const loadingMessages = [
    "Establishing secure link...",
    "Waking up the Render server...",
    "Querying portfolio documents...",
    "Parsing project records...",
    "Importing neo-brutalist theme...",
    "Generating layout nodes...",
    "Welcome to Prathap's Space."
  ];

  // Animation hooks
  useParallax();
  useScrollTrigger();

  useEffect(() => {
    const API_URL = window.location.hostname === 'localhost'
      ? 'http://localhost:5000/api'
      : 'https://portfolio-website-whqu.onrender.com/api';

    // Fetch portfolio data
    fetch(`${API_URL}/portfolio`)
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.log('Portfolio Error:', err));

    // Fetch projects data
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log('Projects Error:', err));
  }, []);

  useEffect(() => {
    if (!portfolio) {
      const interval = setInterval(() => {
        setLoadStep((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
      }, 1800);
      return () => clearInterval(interval);
    }
  }, [portfolio]);

  useEffect(() => {
    if (portfolio) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [portfolio]);

  // Loading screen
  if (!portfolio) {
    return (
      <div className="loading">
        <div className="loader-card brutalist-card">
          <div className="loader-header">
            <span className="loader-dot"></span>
            <span className="loader-dot"></span>
            <span className="loader-dot"></span>
            <span className="loader-title">SYSTEM_BOOT.EXE</span>
          </div>
          <div className="loader-body">
            <div className="loader-logo">&lt;/&gt;</div>
            <div className="loader-progress-track">
              <div className="loader-progress-fill" style={{ width: `${((loadStep + 1) / loadingMessages.length) * 100}%` }}></div>
            </div>
            <div className="loader-status">
              <span className="loader-percent">{Math.round(((loadStep + 1) / loadingMessages.length) * 100)}%</span>
              <span className="loader-text">{loadingMessages[loadStep]}</span>
            </div>
            <div className="loader-log">
              {loadingMessages.slice(0, loadStep).map((msg, i) => (
                <div key={i} className="log-line">[OK] {msg}</div>
              ))}
              <div className="log-line active">[RUNNING] {loadingMessages[loadStep]}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Top Scrolling Marquee Bar */}
      <div className="marquee-bar">
        <div className="marquee-content">
          <span>Open for internships &amp; collaborations</span>
          <span>Full Stack Developer</span>
          <span>MERN stack specialist</span>
          <span>Express APIs &amp; Node</span>
          <span>B.Tech CSBS Student</span>
          <span>Open for internships &amp; collaborations</span>
          <span>Full Stack Developer</span>
          <span>MERN stack specialist</span>
          <span>Express APIs &amp; Node</span>
          <span>B.Tech CSBS Student</span>
        </div>
      </div>

      <Navigation />
      <Hero portfolio={portfolio} />
      <About portfolio={portfolio} />
      <Skills />
      <Projects projects={projects} />
      <Experience />
      <Contact portfolio={portfolio} />
      <Footer portfolio={portfolio} />

      {/* Floating Brutalist Toast Popup */}
      {showPopup && (
        <div className="brutalist-toast">
          <div className="toast-header">
            <span className="toast-title">CONNECT.EXE</span>
            <button className="toast-close" onClick={() => setShowPopup(false)} aria-label="Close message">×</button>
          </div>
          <div className="toast-body">
            <p className="toast-message">👋 Looking for a full-stack engineer? Let's build something awesome!</p>
            <div className="toast-actions">
              <a href="/Resume.pdf" download className="toast-btn toast-btn-primary">Download CV</a>
              <a href="#contact" onClick={() => setShowPopup(false)} className="toast-btn toast-btn-secondary">Say Hello</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;