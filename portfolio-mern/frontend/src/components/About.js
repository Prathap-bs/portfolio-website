import React from 'react';
import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = ({ portfolio }) => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="about animate-on-scroll" ref={sectionRef} id="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About me</h2>
        <div className="about-grid">
          <div className="about-left animate-on-scroll--left">
            <div className="about-avatar">P</div>
            <h3>Hey, I'm Prathap</h3>
            <p>Third-year B.Tech CSBS student at GITAM University, Bengaluru. Backend developer focused on building production-grade systems with MERN stack — solid fundamentals in data modeling, authentication, and API design.</p>
            <p>Strong foundation in SQL and databases from training at QSpiders. Specialized in MERN full-stack architecture with focus on Node.js + Express + MongoDB backend systems — shipping real APIs that scale and prioritize code quality, security, and maintainability.</p>
            <div className="about-chips">
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {portfolio.location}
              </span>
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6m0 0a8 8 0 0 1-8 8 8 8 0 0 1-8-8m0 0V4a8 8 0 0 1 16 0z"></path>
                </svg>
                GITAM University
              </span>
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                {portfolio.email}
              </span>
            </div>
          </div>
          <div className="about-right">
            <div className="about-stats">
              <div className="stat-card stagger-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects shipped</div>
              </div>
              <div className="stat-card stagger-item">
                <div className="stat-number">93%</div>
                <div className="stat-label">Gesture accuracy</div>
              </div>
              <div className="stat-card stagger-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years of experience</div>
              </div>
            </div>
            <div className="about-me-card stagger-item">
              <div className="about-me-title">About me</div>
              <p className="about-me-text">
                Third-year B.Tech CSBS student at GITAM University, Bengaluru. Passionate about building production-grade backend systems with MERN stack. Strong foundation in SQL and database design. Specialized in Node.js, Express, and MongoDB architecture.
              </p>
            </div>
            <div className="about-tech stagger-item">
              <div className="tech-title">Node.js · MongoDB · Express</div>
              <p className="tech-subtitle">Backend specialization</p>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-name">Node.js / Express</div>
                  <div className="skill-progress"><div className="skill-fill" style={{width: '85%'}}></div></div>
                  <span className="skill-percent">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">MongoDB / DBMS</div>
                  <div className="skill-progress"><div className="skill-fill" style={{width: '80%'}}></div></div>
                  <span className="skill-percent">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-name">Java / C++</div>
                  <div className="skill-progress"><div className="skill-fill" style={{width: '78%'}}></div></div>
                  <span className="skill-percent">78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
