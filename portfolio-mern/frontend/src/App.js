import React, { useState, useEffect } from 'react';
import './App.css';
import { useScrollAnimation, useParallax, useScrollTrigger } from './hooks/useScrollAnimation';
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
  
  useParallax();
  useScrollTrigger();

  useEffect(() => {
    // Fetch portfolio data from backend
    fetch('http://localhost:5000/api/portfolio')
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.log('Error:', err));

    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log('Error:', err));
  }, []);

  if (!portfolio) return <div className="loading">Loading...</div>;

  return (
    <div className="App">
      <Navigation />
      <Hero portfolio={portfolio} />
      <About portfolio={portfolio} />
      <Skills />
      <Projects projects={projects} />
      <Experience />
      <Contact portfolio={portfolio} />
      <Footer portfolio={portfolio} />
    </div>
  );
}

export default App;
