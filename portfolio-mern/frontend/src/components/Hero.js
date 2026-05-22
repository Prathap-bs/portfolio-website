import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const Hero = ({ portfolio }) => {
  const sectionRef = useScrollAnimation({ threshold: 0.3, rootMargin: '0px 0px -100px 0px' });
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  
  useParallax();

  useEffect(() => {
    const element = document.querySelector('.hero');
    if (element) {
      element.classList.add('fade-in');
      element.classList.add('animate-in-view');
      // Add animate-in-view to all child elements with scroll animation classes
      const animatedChildren = element.querySelectorAll('[class*="animate-on-scroll"]');
      animatedChildren.forEach(child => {
        child.classList.add('animate-in-view');
      });
    }
  }, []);

  return (
    <section className="hero animate-on-scroll" ref={sectionRef}>
      <div className="hero-layout">
        <div className="hero-content animate-on-scroll--left" ref={contentRef} data-parallax="0.3">
          <div className="hero-badge">Open for internships & projects</div>
          <p className="hero-eyebrow">Building robust backend systems and scalable APIs with production-grade code quality and attention to detail.</p>
          <h1 className="hero-title">
            <span className="hero-name">{portfolio.name}</span>
            <span className="hero-subtitle">Full Stack Developer</span>
          </h1>
          <p className="hero-desc">{portfolio.bio}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a href={`mailto:${portfolio.email}`} className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual animate-on-scroll--right" ref={visualRef} data-parallax="0.15" aria-hidden="true">
          <div className="hero-visual-card hero-visual-card-main glass-card" data-parallax="0.08">
            <span className="hero-card-label">Current focus</span>
            <h2>Scalable MERN backends, clean REST APIs, and production-ready data architecture.</h2>
            <p>Building systems that handle scale, maintain data integrity, and deliver reliability under load.</p>
          </div>

          <div className="hero-visual-stack">
            <div className="hero-visual-card glass-card" data-parallax="0.12">
              <span className="hero-card-label">Location</span>
              <strong>{portfolio.location}</strong>
            </div>
            <div className="hero-visual-card glass-card" data-parallax="0.18">
              <span className="hero-card-label">Contact</span>
              <strong>{portfolio.email}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
