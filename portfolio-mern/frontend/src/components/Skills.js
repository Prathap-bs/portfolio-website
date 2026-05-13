import React, { useEffect } from 'react';
import './Skills.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.15 });

  useEffect(() => {
    const element = document.querySelector('.skills');
    if (element) {
      element.classList.add('animate-in-view');
      const animatedChildren = element.querySelectorAll('[class*="animate-on-scroll"]');
      animatedChildren.forEach(child => {
        child.classList.add('animate-in-view');
      });
    }
  }, []);
  const getSkillIcon = (type) => {
    const icons = {
      languages: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
      frontend: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="12" cy="5" r="1"></circle></svg>,
      backend: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><path d="M12 5v14M5 12h14"></path></svg>,
      database: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><rect x="2" y="17" width="20" height="4"></rect><line x1="6" y1="21" x2="6" y2="17"></line></svg>,
      ml: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>,
      learning: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
    };
    return icons[type] || null;
  };

  const skills = [
    {
      iconType: 'languages',
      title: 'Languages',
      tags: ['Python', 'JavaScript', 'Java', 'C', 'C++'],
      color: '#f97316'
    },
    {
      iconType: 'frontend',
      title: 'Frontend',
      tags: ['HTML5', 'CSS3'],
      color: '#0071e3'
    },
    {
      iconType: 'backend',
      title: 'Backend',
      tags: ['Node.js', 'Express.js', 'REST API'],
      color: '#34c759'
    },
    {
      iconType: 'database',
      title: 'Database & DevOps',
      tags: ['MongoDB', 'MySQL', 'Docker', 'Git', 'Vercel'],
      color: '#8b5cf6'
    },
    {
      iconType: 'ml',
      title: 'ML / AI / CV',
      tags: ['OpenCV', 'MediaPipe', 'ML Models'],
      color: '#ec4899'
    },
    {
      iconType: 'learning',
      title: 'Learning Now',
      tags: ['MERN Stack (Frontend)', 'JWT Auth', 'Data Modeling', 'Socket.io'],
      color: '#fbbf24'
    }
  ];

  return (
    <section className="skills animate-on-scroll" ref={sectionRef} id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-desc">Languages, frameworks, and tools I use to build end-to-end products.</p>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card stagger-item animate-on-scroll--scale">
              <div className="skill-icon">{getSkillIcon(skill.iconType)}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
