import React, { useState } from 'react';
import { seoLocations } from '../../data/seoLocationsList';

export const SEOLocationsGrid: React.FC<{ currentLocation?: string }> = ({ currentLocation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const locationsToShow = seoLocations.filter(loc => loc.name !== currentLocation);

  return (
    <section className="svc-section" style={{ paddingBottom: '8rem', position: 'relative' }}>
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="svc-h2 split-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '3.5rem', textAlign: 'center' }}>
          Explore More <span style={{ color: 'var(--impulse-violet)' }}>Locations</span>
        </h2>
        
        <style>{`
          .loc-grid-container {
            position: relative;
          }
          
          .loc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          
          .loc-link-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem 2rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            color: var(--white);
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          /* Glowing border effect on hover */
          .loc-link-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(0,0,0,0) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 0;
          }
          
          .loc-link-card::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            padding: 2px;
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.8), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .loc-link-card:hover {
            background: rgba(255, 255, 255, 0.04);
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(124, 58, 237, 0.15);
          }

          .loc-link-card:hover::before,
          .loc-link-card:hover::after {
            opacity: 1;
          }

          .loc-link-name {
            font-family: var(--font-heading);
            font-weight: 500;
            letter-spacing: 0.5px;
            font-size: 1.25rem;
            position: relative;
            z-index: 1;
            transition: color 0.3s ease;
          }

          .loc-link-card:hover .loc-link-name {
            color: #fff;
            text-shadow: 0 0 20px rgba(255,255,255,0.3);
          }

          .loc-link-icon {
            opacity: 0.5;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .loc-link-card:hover .loc-link-icon {
            opacity: 1;
            color: #fff;
            background: var(--impulse-violet);
            border-color: var(--impulse-violet);
            transform: translateX(5px) rotate(45deg);
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
          }

          .loc-show-more-btn {
            display: none; /* Hidden on desktop */
            margin: 3rem auto 0;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 30px;
            font-family: var(--font-heading);
            font-size: 1.1rem;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .loc-show-more-btn:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.4);
          }

          /* Mobile Logic */
          @media (max-width: 768px) {
            .loc-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
            
            /* Only apply hiding logic when not expanded */
            .loc-grid:not(.expanded) .loc-link-card:nth-child(n+6) {
              display: none;
            }

            .loc-show-more-btn {
              display: block; /* Show the button on mobile */
            }
            
            /* Add a subtle fade gradient over the bottom when collapsed to hint at more content */
            .loc-grid-container:not(.expanded)::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 100px;
              background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
              pointer-events: none;
              border-radius: 20px;
            }
          }
        `}</style>
        
        <div className={`loc-grid-container ${isExpanded ? 'expanded' : ''}`}>
          <div className={`loc-grid ${isExpanded ? 'expanded' : ''}`}>
            {locationsToShow.map((loc) => (
              <a 
                key={loc.slug} 
                href={`/brand-infrastructure/search-engine-optimisation/${loc.slug}/`}
                className="loc-link-card" 
                data-cursor="VIEW"
              >
                <span className="loc-link-name">{loc.name}</span>
                <span className="loc-link-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            ))}
          </div>
          
          <button 
            className="loc-show-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'View All Locations'}
          </button>
        </div>
      </div>
    </section>
  );
};
