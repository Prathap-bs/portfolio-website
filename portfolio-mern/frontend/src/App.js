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

  // Animation hooks
  useParallax();
  useScrollTrigger();

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;

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

  // Loading screen
  if (!portfolio) {
    return <div className="loading">Loading...</div>;
  }

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