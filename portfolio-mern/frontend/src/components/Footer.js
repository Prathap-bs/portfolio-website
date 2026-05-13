import React from 'react';
import './Footer.css';

const Footer = ({ portfolio }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Designed & built by <span>{portfolio.name}</span> · 2025 · GITAM University, Bengaluru</p>
        <p className="footer-secondary">Made with precision. Powered by curiosity.</p>
      </div>
    </footer>
  );
};

export default Footer;
