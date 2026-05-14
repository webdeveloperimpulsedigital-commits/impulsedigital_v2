import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [forceHideDropdown, setForceHideDropdown] = useState(false);

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleNavClick = () => {
    closeMobileMenu();
    // Temporarily hide the dropdown so it disappears even if mouse is still hovering
    setForceHideDropdown(true);
    setTimeout(() => {
      setForceHideDropdown(false);
    }, 200);
  };

  return (
    <nav id="main-nav">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo" onClick={handleNavClick}><img src={`${import.meta.env.BASE_URL}ImpulseDigital_Logo.svg`} alt="Impulse Digital Logo" /></Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Home</Link>
          <Link to="/about" className="nav-item" data-cursor="GO" onClick={handleNavClick}>About Us</Link>
          <div className="nav-dropdown">
            <button 
              className={`nav-item services-toggle ${isMobileServicesOpen ? 'active' : ''}`} 
              data-cursor="GO" 
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  setIsMobileServicesOpen(!isMobileServicesOpen);
                }
              }}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`dropdown-content ${isMobileServicesOpen ? 'mobile-expanded' : ''}`} style={!isMobileServicesOpen && window.innerWidth > 1024 ? { display: forceHideDropdown ? 'none' : '' } : {}}>
              <div className="dropdown-col">
                <h4>Growth Intelligence</h4>
                <div className="dropdown-list">
                  <Link to="/consumer-intelligence" className="dropdown-item" onClick={handleNavClick}>Consumer Intelligence</Link>
                  <Link to="/market-intelligence" className="dropdown-item" onClick={handleNavClick}>Market and Competitive Intelligence</Link>
                  <Link to="/always-on-intelligence" className="dropdown-item" onClick={handleNavClick}>Always-On Intelligence</Link>
                  <Link to="/campaign-intelligence" className="dropdown-item" onClick={handleNavClick}>Campaign and Performance Intelligence</Link>
                </div>
              </div>
              <div className="dropdown-col">
                <h4>AI Marketing Systems</h4>
                <div className="dropdown-list">
                  <Link to="/archer-ai" className="dropdown-item" onClick={handleNavClick}>Archer AI</Link>
                  <Link to="/agentic-ai" className="dropdown-item" onClick={handleNavClick}>Agentic AI</Link>
                  <Link to="/ai-video-production" className="dropdown-item" onClick={handleNavClick}>Cinematic AI Production</Link>
                  <Link to="/generative-search-optimisation" className="dropdown-item" onClick={handleNavClick}>Generative Search Optimisation</Link>
                </div>
              </div>
              <div className="dropdown-col">
                <h4>Brand Infrastructure</h4>
                <div className="dropdown-list">
                  <Link to="/search-engine-optimisation" className="dropdown-item" onClick={handleNavClick}>Search and Visibility</Link>
                  <Link to="/ecommerce-seo" className="dropdown-item sub-item" onClick={handleNavClick}>eCommerce SEO</Link>
                  <Link to="/local-seo" className="dropdown-item sub-item" onClick={handleNavClick}>Local SEO</Link>
                  <a href="#services" className="dropdown-item" onClick={handleNavClick}>Content Strategy and Writing</a>
                  <Link to="/social-media-management" className="dropdown-item" onClick={handleNavClick}>Social Media</Link>
                  <a href="#services" className="dropdown-item" onClick={handleNavClick}>Video and Visual Content</a>
                  <Link to="/website-development" className="dropdown-item" onClick={handleNavClick}>Website Development</Link>
                  <Link to="/branding" className="dropdown-item" onClick={handleNavClick}>Brand Identity</Link>
                  <Link to="/employer-branding" className="dropdown-item" onClick={handleNavClick}>Employer Branding</Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/case-studies" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Case Studies</Link>
          <a href="#blogs" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Blogs</a>
          <a href="#resources" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Resources</a>
          <a href="#careers" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Careers</a>
        </div>
        <div className="nav-right">
          <a href="#connect" className="btn-nav" data-cursor="HI" onClick={handleNavClick}>Contact Us</a>
          
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
