import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }

      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = totalScroll / windowHeight;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src={`${import.meta.env.BASE_URL}ImpulseDigital_Logo.svg`} alt="Impulse Digital Logo" className="footer-logo" loading="lazy" decoding="async" />
            
            <div className="footer-socials">
              <a href="https://www.facebook.com/theimpulsedigital/" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/impulsedigi" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="FOLLOW"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/_impulse_digital/" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/impulse-digital-marketing-mumbai/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="FOLLOW"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/case-studies/">Case Studies</Link></li>
              <li><Link to="/careers/">Careers</Link></li>
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
              <li><Link to="/digital-marketing-agency-in-india/">India</Link></li>
              <li><Link to="/digital-marketing-agency-in-thane/">Thane</Link></li>
              <li><Link to="/digital-marketing-agency-in-navi-mumbai/">Navi Mumbai</Link></li>
              <li><Link to="/digital-marketing-agency-in-pune/">Pune</Link></li>
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
                304 - 305, Chirag Infotech,<br/>
                Road No. 16/Z, Ambica Nagar,<br/>
                Wagle Ind. Estate, Thane, Mumbai 400604
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
        style={{ '--scroll-progress': scrollProgress } as React.CSSProperties}
        data-cursor="GO"
      >
        <svg viewBox="800 400 300 330" className="scroll-boomerang">
          <path className="boomerang-outline" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"/>
          <path className="boomerang-fill" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
