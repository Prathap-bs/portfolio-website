import React from 'react';
import './Experience.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const experiences = [
    {
      date: '2026 — Present',
      title: 'ServiceNow Virtual Internship Program',
      company: 'ServiceNow / SmartBridge · AICTE',
      description: 'Full-stack development internship focusing on enterprise solutions, cloud technologies, and real-world ServiceNow platform experience. Hands-on learning with industry mentorship and project-based assessments.'
    },
    {
      date: '2024',
      title: 'Software Engineering Intern',
      company: 'Infosys Springboard',
      description: 'Developed CIVIX, a citizen interaction platform for government departments. Structured mentorship, agile methodology, and real product delivery.'
    },
    {
      date: '2024 — 2027',
      title: 'B.Tech — Computer Science & Business Systems',
      company: 'GITAM University · Bengaluru Campus',
      description: 'Core coursework in Web Dev, DBMS, Software Design with UML, Innovation & Design Thinking, and AI. Active in security research and academic projects.'
    }
  ];

  return (
    <section className="experience animate-on-scroll" ref={sectionRef} id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-desc">Where I've studied, trained, and shipped real work.</p>
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card stagger-item">
              <div className="exp-date">{exp.date}</div>
              <div className="exp-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
