import React from 'react';
import './Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const getProjectIcon = (iconName) => {
  const iconMap = {
    payment: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"></circle><path d="M12 6v12M8 9h8M8 15h8"></path></svg>,
    gesture: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v8m-6-2v10c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V8"></path></svg>,
    civix: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="9" x2="21" y2="9"></line><path d="M12 2v7m-5 0v15a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9"></path><line x1="7" y1="9" x2="7" y2="22"></line><line x1="17" y1="9" x2="17" y2="22"></line></svg>,
    game: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><circle cx="9" cy="14" r="2"></circle><circle cx="15" cy="10" r="2"></circle></svg>,
    travel: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.13v-5.3L12 6.5 2 10.83v5.3L12 21l10-4.87z"></path><polyline points="2 10.83 12 6.5 22 10.83"></polyline></svg>
  };
  return iconMap[iconName] || null;
};

const Projects = ({ projects }) => {
  const sectionRef = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="projects animate-on-scroll" ref={sectionRef} id="projects">
      <div className="container">
        <h2 className="section-title">What I've built</h2>
        <p className="section-desc">Real products. Real problems. Real solutions.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || '#projects'}
              target={project.link ? '_blank' : ''}
              rel={project.link ? 'noopener noreferrer' : ''}
              className={`project-card stagger-item animate-on-scroll--rotate ${project.id === 3 ? 'wide' : ''}`}
            >
              <div className="project-header">
                <div className="project-icon">{getProjectIcon(project.icon)}</div>
                {project.link && <div className="project-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
