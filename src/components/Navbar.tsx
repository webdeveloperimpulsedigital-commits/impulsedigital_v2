import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownSuspended, setIsDropdownSuspended] = useState(false);

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

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
          <Link to="/" className="logo" onClick={handleNavClick}><img src={`${import.meta.env.BASE_URL}ImpulseDigital_Logo.svg`} alt="Impulse Digital Logo" /></Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Home</Link>
          <Link to="/about" className="nav-item" data-cursor="GO" onClick={handleNavClick}>About Us</Link>
          <div className="nav-dropdown" onMouseLeave={handleDropdownMouseLeave}>
            <Link 
              to="/services"
              className={`nav-item services-toggle ${isMobileServicesOpen ? 'active' : ''}`} 
              data-cursor="GO" 
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  setIsMobileServicesOpen(!isMobileServicesOpen);
                } else {
                  handleNavClick();
                }
              }}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`dropdown-content ${isMobileServicesOpen ? 'mobile-expanded' : ''}`} style={(!isMobileServicesOpen && isDropdownSuspended) ? { display: 'none' } : {}}>
              <div className="dropdown-col">
                <h4 onClick={(e) => toggleSubMenu('growth', e)} className={openSubMenu === 'growth' ? 'active' : ''}>
                  Growth Intelligence <span className="mobile-only-icon">{openSubMenu === 'growth' ? '−' : '+'}</span>
                </h4>
                <div className={`dropdown-list ${openSubMenu === 'growth' ? 'mobile-open' : ''}`}>
                  <Link to="/services/consumer-intelligence" className="dropdown-item" onClick={handleNavClick}>Consumer Intelligence</Link>
                  <Link to="/services/market-intelligence" className="dropdown-item" onClick={handleNavClick}>Market and Competitive Intelligence</Link>
                  <Link to="/services/always-on-intelligence" className="dropdown-item" onClick={handleNavClick}>Always-On Intelligence</Link>
                  <Link to="/services/campaign-intelligence" className="dropdown-item" onClick={handleNavClick}>Campaign and Performance Intelligence</Link>
                </div>
              </div>
              <div className="dropdown-col">
                <h4 onClick={(e) => toggleSubMenu('ai', e)} className={openSubMenu === 'ai' ? 'active' : ''}>
                  AI Marketing Systems <span className="mobile-only-icon">{openSubMenu === 'ai' ? '−' : '+'}</span>
                </h4>
                <div className={`dropdown-list ${openSubMenu === 'ai' ? 'mobile-open' : ''}`}>
                  <Link to="/services/archer-ai" className="dropdown-item" onClick={handleNavClick}>Archer AI</Link>
                  <Link to="/services/agentic-ai" className="dropdown-item" onClick={handleNavClick}>Agentic AI</Link>
                  <Link to="/services/ai-video-production" className="dropdown-item" onClick={handleNavClick}>Cinematic AI Production</Link>
                  <Link to="/services/generative-search-optimisation" className="dropdown-item" onClick={handleNavClick}>Generative Search Optimisation</Link>
                </div>
              </div>
              <div className="dropdown-col">
                <h4 onClick={(e) => toggleSubMenu('brand', e)} className={openSubMenu === 'brand' ? 'active' : ''}>
                  Brand Infrastructure <span className="mobile-only-icon">{openSubMenu === 'brand' ? '−' : '+'}</span>
                </h4>
                <div className={`dropdown-list ${openSubMenu === 'brand' ? 'mobile-open' : ''}`}>
                  <Link to="/services/search-engine-optimisation" className="dropdown-item" onClick={handleNavClick}>Search and Visibility</Link>
                  <Link to="/services/search-engine-optimisation/ecommerce-seo" className="dropdown-item sub-item" onClick={handleNavClick}>eCommerce SEO</Link>
                  <Link to="/services/search-engine-optimisation/local-seo" className="dropdown-item sub-item" onClick={handleNavClick}>Local SEO</Link>
                  <Link to="/services/search-engine-optimisation/enterprise-seo" className="dropdown-item sub-item" onClick={handleNavClick}>Enterprise SEO</Link>
                  <Link to="/services/search-engine-optimisation/b2b-seo" className="dropdown-item sub-item" onClick={handleNavClick}>B2B SEO</Link>
                  <a href="#services" className="dropdown-item" onClick={handleNavClick}>Content Strategy and Writing</a>
                  <Link to="/services/social-media-management" className="dropdown-item" onClick={handleNavClick}>Social Media</Link>
                  <a href="#services" className="dropdown-item" onClick={handleNavClick}>Video and Visual Content</a>
                  <Link to="/services/website-development" className="dropdown-item" onClick={handleNavClick}>Website Development</Link>
                  <Link to="/services/branding" className="dropdown-item" onClick={handleNavClick}>Brand Identity</Link>
                  <Link to="/services/employer-branding" className="dropdown-item" onClick={handleNavClick}>Employer Branding</Link>
                </div>
              </div>
              <div className="dropdown-col mobile-only-all-services">
                <Link to="/services" className="dropdown-item" style={{ color: '#aa3bff', fontWeight: 'bold' }} onClick={handleNavClick}>Explore All Services ➔</Link>
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
