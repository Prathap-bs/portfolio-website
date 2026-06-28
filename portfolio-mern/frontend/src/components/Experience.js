import React from 'react';
import './Experience.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const experiences = [
    {
      date: '2026 — Present',
      title: 'Embedded Real-Time Systems Intern',
      company: 'Software Defined Vehicles / QNX RTOS',
      description: 'Building a real-time localization system for an Autonomous Mobile Robot (AMR) using QNX RTOS on Raspberry Pi 5 and Gazebo simulation.',
      points: [
        'Mapped LiDAR, IMU, and odometry telemetry over UDP socket.',
        'Developed native QNX localization & obstacle detection algorithms.',
        'Optimized CPU load (<2%) and latency (~0.004 ms) using ThreadCtl CPU affinity and pulse-based IPC.'
      ]
    },
    {
      date: 'Feb 2026 — May 2026',
      title: 'ServiceNow Virtual Internship Program',
      company: 'ServiceNow / SmartBridge · AICTE',
      description: 'Completed ServiceNow training in workflow design, admin fundamentals, and platform automation (Certificate ID: SNU2024730).',
      points: [
        'ServiceNow Administration & Micro Certification.',
        'Certified System Administrator (CSA) Exam Prep.',
        'Flow Designer, ATF, and Agentic AI integration.'
      ]
    },
    {
      date: '2024',
      title: 'Software Engineering Intern',
      company: 'Infosys Springboard',
      description: 'Developed CIVIX, a citizen interaction platform for government departments. Structured mentorship, agile methodology, and real product delivery.'
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
                {exp.description && <p className="exp-desc">{exp.description}</p>}
                {exp.points && (
                  <ul className="exp-points">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="exp-point">{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
