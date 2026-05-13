import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src={`${import.meta.env.BASE_URL}ImpulseDigital_Logo.svg`} alt="Impulse Digital Logo" className="footer-logo" />
            
            <div className="footer-socials">
              <a href="#" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon" data-cursor="FOLLOW"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#cases-pin">Case Studies</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blogs">Blog</a></li>
              <li><a href="#">EBooks</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Slideshare ppt</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              <li><a href="#">India</a></li>
              <li><a href="#">Thane</a></li>
              <li><a href="#">Navi Mumbai</a></li>
              <li><a href="#">Pune</a></li>
            </ul>
          </div>

          <div className="footer-col footer-contact-col">
            <a href="tel:+919769285224" className="contact-item" style={{textDecoration: 'none'}}>
              <span className="contact-icon"><i className="fas fa-phone"></i></span>
              <span className="contact-text">+91-9769285224</span>
            </a>
            <a href="mailto:collabs@theimpulsedigital.com" className="contact-item" style={{textDecoration: 'none'}}>
              <span className="contact-icon"><i className="fas fa-envelope"></i></span>
              <span className="contact-text">collabs@theimpulsedigital.com</span>
            </a>
            <div className="contact-item address-item">
              <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
              <span className="contact-text">
                304 - 305, Chirag Infotech, Road No. 16/Z,<br/>
                Ambica Nagar, Wagle Industrial Estate,<br/>
                Thane, Mumbai 400604
              </span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>&copy; 2026 Impulse Digital All rights reserved</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        <div className="footer-divider"></div>
      </div>

      <div className="footer-etched" aria-hidden="true">
        <svg id="footer-hover-svg" viewBox="0 0 2400 250" xmlns="http://www.w3.org/2000/svg" className="select-none uppercase cursor-pointer" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <defs>
            <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#543D98" />
              <stop offset="50%" stopColor="#8A5CF6" />
              <stop offset="75%" stopColor="#543D98" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="20%" cx="50%" cy="50%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
            <mask id="textMask">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
            </mask>
          </defs>
          <text x="0" y="50%" textLength="2400" lengthAdjust="spacingAndGlyphs" textAnchor="start" dominantBaseline="middle" fontSize="160" strokeWidth="0.3" className="svg-text-base">Momentum for brands with appetite.</text>
          <text x="0" y="50%" textLength="2400" lengthAdjust="spacingAndGlyphs" textAnchor="start" dominantBaseline="middle" fontSize="160" strokeWidth="0.3" className="svg-text-animated">Momentum for brands with appetite.</text>
          <text x="0" y="50%" textLength="2400" lengthAdjust="spacingAndGlyphs" textAnchor="start" dominantBaseline="middle" fontSize="160" stroke="url(#textGradient)" strokeWidth="0.3" mask="url(#textMask)" className="svg-text-fill">Momentum for brands with appetite.</text>
        </svg>
      </div>

      <button 
        className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
