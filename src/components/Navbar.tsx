import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="main-nav">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo" onClick={closeMobileMenu}><img src={`${import.meta.env.BASE_URL}ImpulseDigital_Logo.svg`} alt="Impulse Digital Logo" /></Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-item" data-cursor="GO" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="nav-item" data-cursor="GO" onClick={closeMobileMenu}>About Us</Link>
          <div className="nav-dropdown">
            <a href="#services" className="nav-item" data-cursor="GO" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="dropdown-content">
              <div className="dropdown-col">
                <h4>Growth Intelligence</h4>
                <div className="dropdown-list">
                  <Link to="/consumer-intelligence" className="dropdown-item" onClick={closeMobileMenu}>Consumer Intelligence</Link>
                  <Link to="/market-intelligence" className="dropdown-item" onClick={closeMobileMenu}>Market and Competitive Intelligence</Link>
                  <Link to="/always-on-intelligence" className="dropdown-item" onClick={closeMobileMenu}>Always-On Intelligence</Link>
                  <Link to="/campaign-intelligence" className="dropdown-item" onClick={closeMobileMenu}>Campaign and Performance Intelligence</Link>
                </div>
              </div>
              <div className="dropdown-col">
                <h4>AI Marketing Systems</h4>
                <div className="dropdown-list">
                  <Link to="/archer-ai" className="dropdown-item" onClick={closeMobileMenu}>Archer AI</Link>
                  <Link to="/agentic-ai" className="dropdown-item" onClick={closeMobileMenu}>Agentic AI</Link>
                  <Link to="/ai-video-production" className="dropdown-item" onClick={closeMobileMenu}>Cinematic AI Production</Link>
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Generative Search Optimisation</a>
                </div>
              </div>
              <div className="dropdown-col">
                <h4>Brand Infrastructure</h4>
                <div className="dropdown-list">
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Search and Visibility</a>
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Content Strategy and Writing</a>
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Social Media</a>
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Video and Visual Content</a>
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Website Development</a>
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Brand Identity</a>
                  <a href="#services" className="dropdown-item" onClick={closeMobileMenu}>Employer Branding</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#cases-pin" className="nav-item" data-cursor="GO" onClick={closeMobileMenu}>Case Studies</a>
          <a href="#blogs" className="nav-item" data-cursor="GO" onClick={closeMobileMenu}>Blogs</a>
          <a href="#resources" className="nav-item" data-cursor="GO" onClick={closeMobileMenu}>Resources</a>
          <a href="#careers" className="nav-item" data-cursor="GO" onClick={closeMobileMenu}>Careers</a>
        </div>
        <div className="nav-right">
          <a href="#connect" className="btn-nav" data-cursor="HI" onClick={closeMobileMenu}>Contact Us</a>
          
          <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
