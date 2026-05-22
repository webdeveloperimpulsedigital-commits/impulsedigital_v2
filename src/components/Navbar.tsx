import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownSuspended, setIsDropdownSuspended] = useState(false);

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const lenis = (window as any).globalLenis;
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
      lenis?.stop();
    } else {
      document.body.classList.remove('mobile-menu-active');
      lenis?.start();
    }
    return () => {
      document.body.classList.remove('mobile-menu-active');
      lenis?.start();
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setOpenSubMenu(null);
  };

  const handleNavClick = () => {
    closeMobileMenu();
  };

  const handleDropdownNavClick = () => {
    closeMobileMenu();
    // Suspend dropdown until mouse leaves
    if (window.innerWidth > 1024) {
      setIsDropdownSuspended(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownSuspended(false);
  };

  const toggleSubMenu = (menu: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setOpenSubMenu(openSubMenu === menu ? null : menu);
    }
  };

  return (
    <nav id="main-nav">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo" onClick={handleNavClick}><img src={`${import.meta.env.BASE_URL}ImpulseDigital_Logo.svg`} alt="Impulse Digital - Leading Digital Marketing Agency in Mumbai" /></Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Home</Link>
          <Link to="/about-us/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>About Us</Link>
          <div className="nav-dropdown" onMouseLeave={handleDropdownMouseLeave}>
            <a 
              href="#"
              className={`nav-item services-toggle ${isMobileServicesOpen ? 'active' : ''}`} 
              data-cursor="GO" 
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth <= 1024) {
                  setIsMobileServicesOpen(!isMobileServicesOpen);
                }
              }}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className={`dropdown-content ${isMobileServicesOpen ? 'mobile-expanded' : ''}`} style={(!isMobileServicesOpen && isDropdownSuspended) ? { display: 'none' } : {}}>
              <div className="dropdown-col">
                <h4 onClick={(e) => toggleSubMenu('growth', e)} className={openSubMenu === 'growth' ? 'active' : ''}>
                  Growth Intelligence <span className="mobile-only-icon">{openSubMenu === 'growth' ? '−' : '+'}</span>
                </h4>
                <div className={`dropdown-list ${openSubMenu === 'growth' ? 'mobile-open' : ''}`}>
                  <Link to="/growth-intelligence/consumer-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Consumer Intelligence</Link>
                  <Link to="/growth-intelligence/market-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Market and Competitive Intelligence</Link>
                  <Link to="/growth-intelligence/always-on-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Always-On Intelligence</Link>
                  <Link to="/growth-intelligence/campaign-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Campaign and Performance Intelligence</Link>
                </div>
              </div>
              <div className="dropdown-col">
                <h4 onClick={(e) => toggleSubMenu('ai', e)} className={openSubMenu === 'ai' ? 'active' : ''}>
                  AI Marketing Systems <span className="mobile-only-icon">{openSubMenu === 'ai' ? '−' : '+'}</span>
                </h4>
                <div className={`dropdown-list ${openSubMenu === 'ai' ? 'mobile-open' : ''}`}>
                  <Link to="/ai-marketing-systems/archer-ai/" className="dropdown-item" onClick={handleDropdownNavClick}>Archer AI</Link>
                  <Link to="/ai-marketing-systems/agentic-ai/" className="dropdown-item" onClick={handleDropdownNavClick}>Agentic AI</Link>
                  <Link to="/ai-marketing-systems/ai-video-production/" className="dropdown-item" onClick={handleDropdownNavClick}>AI Video Production</Link>
                  <Link to="/ai-marketing-systems/generative-search-optimisation/" className="dropdown-item" onClick={handleDropdownNavClick}>Generative Search Optimisation</Link>
                </div>
              </div>
              <div className="dropdown-col">
                <h4 onClick={(e) => toggleSubMenu('brand', e)} className={openSubMenu === 'brand' ? 'active' : ''}>
                  Brand Infrastructure <span className="mobile-only-icon">{openSubMenu === 'brand' ? '−' : '+'}</span>
                </h4>
                <div className={`dropdown-list ${openSubMenu === 'brand' ? 'mobile-open' : ''}`}>
                  <Link to="/brand-infrastructure/search-engine-optimisation/" className="dropdown-item" onClick={handleDropdownNavClick}>Search Engine Optimization</Link>
                  <Link to="/brand-infrastructure/social-media-marketing/" className="dropdown-item" onClick={handleDropdownNavClick}>Social Media</Link>
                  <Link to="/brand-infrastructure/video-production/" className="dropdown-item" onClick={handleDropdownNavClick}>Video Production</Link>
                  <Link to="/brand-infrastructure/website-development/" className="dropdown-item" onClick={handleDropdownNavClick}>Website Development</Link>
                  <Link to="/brand-infrastructure/branding/" className="dropdown-item" onClick={handleDropdownNavClick}>Brand Identity</Link>
                  <Link to="/brand-infrastructure/employer-branding/" className="dropdown-item" onClick={handleDropdownNavClick}>Employer Branding</Link>
                </div>
              </div>
              
            </div>
          </div>
          <Link to="/case-studies/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Case Studies</Link>
          <a href="#blogs" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Blogs</a>
          <Link to="/careers/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Careers</Link>
          <Link to="/contact-us/" className="nav-item mobile-contact-item" data-cursor="HI" onClick={handleNavClick}>Contact Us</Link>
        </div>
        <div className="nav-right">
          <Link to="/contact-us/" className="btn-nav" data-cursor="HI" onClick={handleNavClick}>Contact Us</Link>
          
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
