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
          <div className="code-editor-window">
            <div className="editor-header">
              <div className="window-dots">
                <span className="window-dot red"></span>
                <span className="window-dot yellow"></span>
                <span className="window-dot green"></span>
              </div>
              <span className="editor-file">developer.js</span>
            </div>
            <div className="editor-body">
              <pre className="code-block">
                <code>
<span className="keyword">const</span> developer <span className="operator">=</span> <span className="bracket">&#123;</span><br/>
&nbsp;&nbsp;name<span className="operator">:</span> <span className="string">'{portfolio.name}'</span>,<br/>
&nbsp;&nbsp;role<span className="operator">:</span> <span className="string">'Full Stack Developer'</span>,<br/>
&nbsp;&nbsp;location<span className="operator">:</span> <span className="string">'{portfolio.location}'</span>,<br/>
&nbsp;&nbsp;skills<span className="operator">:</span> <span className="bracket">[</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'Express'</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'MongoDB'</span>, <span className="string">'Python'</span>, <span className="string">'REST APIs'</span><br/>
&nbsp;&nbsp;<span className="bracket">]</span>,<br/>
&nbsp;&nbsp;focus<span className="operator">:</span> <span className="string">'Scalable Backend Architecture'</span><br/>
<span className="bracket">&#125;</span>;
                </code>
              </pre>
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
