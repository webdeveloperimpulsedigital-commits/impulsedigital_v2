import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const caseStudiesData = [
  {
    client: "Mastercard",
    title: "Priceless Experiences: Reimagining Global Loyalty",
    category: "Brand Infrastructure",
    image: "/case studies/Mastercard.png",
    slug: "/case-studies/mastercard"
  },
  {
    client: "Dmart",
    title: "Digital Retail Transformation & E-Commerce Dominance",
    category: "Growth Intelligence",
    image: "/case studies/Dmart.png",
    slug: "/case-studies/dmart"
  },
  {
    client: "Uppercase",
    title: "Sustainable Luggage: Launching a D2C Disruptor",
    category: "AI Marketing Systems",
    image: "/case studies/Uppercase.webp",
    slug: "/case-studies/uppercase"
  },
  {
    client: "HUL",
    title: "Consumer Centricity at FMCG Scale",
    category: "Growth Intelligence",
    image: "/case studies/HUL.png",
    slug: "/case-studies/hul"
  },
  {
    client: "Fours For Good",
    title: "Purpose-Driven Storytelling & Social Impact",
    category: "Brand Infrastructure",
    image: "/case studies/Fours for good.png",
    slug: "/case-studies/fours-for-good"
  },
  {
    client: "Brut",
    title: "Redefining Modern Men's Grooming",
    category: "Brand Infrastructure",
    image: "/case studies/Brut.png",
    slug: "/case-studies/brut"
  }
];

const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('work-page');
    
    const { gsap, ScrollTrigger } = window as any;
    if (gsap && ScrollTrigger && containerRef.current) {
      // Intro Animation
      const tl = gsap.timeline();
      tl.fromTo('.work-hero-title .char', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: 'power4.out', delay: 0.2 }
      ).fromTo('.work-hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );

      // Grid Scroll Reveal - Left/Right Wave Effect
      const cards = containerRef.current.querySelectorAll('.work-card');
      cards.forEach((card: any, index: number) => {
        const isLeftColumn = index % 2 === 0;
        
        gsap.fromTo(card,
          { 
            x: isLeftColumn ? -120 : 120, 
            y: 40,
            opacity: 0, 
            scale: 0.95 
          },
          {
            x: 0, 
            y: 0,
            opacity: 1, 
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });

      // Hover Parallax on Image
      cards.forEach((card: any) => {
        const img = card.querySelector('.work-card-img-inner');
        const viewBtn = card.querySelector('.work-card-view-btn');
        
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          
          gsap.to(img, {
            x: x * 30,
            y: y * 30,
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
          });

          // Magnetic View Button
          const btnX = e.clientX - rect.left;
          const btnY = e.clientY - rect.top;
          gsap.to(viewBtn, {
            x: btnX - 60,
            y: btnY - 60,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(img, { x: 0, y: 0, scale: 1.05, duration: 0.8, ease: 'power3.out' });
          gsap.to(viewBtn, { x: '50%', y: '50%', xPercent: -50, yPercent: -50, duration: 0.8, ease: 'power3.out' });
        });
      });

      ScrollTrigger.refresh();
    }

    return () => {
      document.body.classList.remove('work-page');
    };
  }, []);

  const renderTitle = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <main id="main-content" className="work-wrapper" ref={containerRef}>
      <Helmet>
        <title>Case Studies | Impulse Digital</title>
      </Helmet>

      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-container">
          <div className="work-hero-content">
            <h1 className="work-hero-title">
              {renderTitle('Case ')}
              <span style={{ color: '#aa3bff' }}>{renderTitle('Studies.')}</span>
            </h1>
            <p className="work-hero-desc">
              Discover how we build brand infrastructure and engineer growth for the world's most ambitious companies.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="work-grid-section">
        <div className="work-container">
          <div className="work-grid">
            {caseStudiesData.map((study, idx) => (
              <a href={study.slug} className="work-card" key={idx} onClick={(e) => e.preventDefault()}>
                <div className="work-card-img">
                  <div 
                    className="work-card-img-inner"
                    style={{ backgroundImage: `url("${import.meta.env.BASE_URL}${study.image.replace(/^\//, '')}")` }}
                  />
                  <div className="work-card-overlay" />
                  
                  {/* Floating View CTA */}
                  <div className="work-card-view-btn">
                    <span>VIEW</span>
                  </div>
                </div>
                
                <div className="work-card-content">
                  <div className="work-card-meta">
                    <span className="work-card-client">{study.client}</span>
                    <span className="work-card-category">{study.category}</span>
                  </div>
                  <h2 className="work-card-title">{study.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .work-wrapper {
          color: #fff;
          position: relative;
          z-index: 2;
          overflow: hidden;
          padding-bottom: 12rem;
        }

        .work-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        /* Hero */
        .work-hero {
          padding-top: 14rem;
          padding-bottom: 6rem;
          text-align: center;
        }

        .work-hero-content {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .work-hero-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(3.5rem, 8vw, 8rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.95;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .work-hero-desc {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
          max-width: 800px;
          font-weight: 300;
        }

        /* Grid */
        .work-grid-section {
          padding: 4rem 0;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6rem 3rem; /* Much larger vertical gap */
        }

        .work-card {
          display: block;
          text-decoration: none;
          color: inherit;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          group;
        }

        /* Image Wrapper */
        .work-card-img {
          position: relative;
          width: 100%;
          padding-top: 75%; /* Exact 4:3 landscape ratio to perfectly fit the thumbnails */
          border-radius: 20px;
          overflow: hidden;
          background: #111;
          margin-bottom: 2rem;
        }

        .work-card-img-inner {
          position: absolute;
          top: -5%;
          left: -5%;
          width: 110%;
          height: 110%;
          background-size: cover;
          background-position: center;
          transition: filter 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .work-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5));
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .work-card:hover .work-card-overlay {
          opacity: 1;
        }

        .work-card:hover .work-card-img-inner {
          filter: brightness(0.7) contrast(1.1);
        }

        /* Floating CTA */
        .work-card-view-btn {
          position: absolute;
          top: 0;
          left: 0;
          width: 120px;
          height: 120px;
          background: rgba(170, 59, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans, sans-serif);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          color: #fff;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none; /* Let mouse move freely */
          z-index: 10;
        }

        .work-card:hover .work-card-view-btn {
          opacity: 1;
          transform: scale(1);
        }

        /* Content */
        .work-card-content {
          padding: 0 1rem;
        }

        .work-card-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .work-card-client {
          font-family: var(--font-mono, monospace);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
          font-weight: 600;
        }

        .work-card-category {
          font-size: 0.9rem;
          color: var(--impulse-violet, #aa3bff);
          font-weight: 500;
        }

        .work-card-meta::before {
          content: '';
          width: 30px;
          height: 1px;
          background: rgba(255,255,255,0.3);
        }

        .work-card-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.4rem, 2vw, 2.2rem); /* Smaller font size */
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: #fff;
          transition: color 0.3s ease;
        }

        .work-card:hover .work-card-title {
          color: rgba(255,255,255,0.8);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .work-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .work-hero {
            padding-top: 10rem;
            padding-bottom: 4rem;
          }
          .work-hero-title {
            font-size: clamp(3rem, 15vw, 4.5rem);
            margin-bottom: 1.5rem;
          }
          .work-card-view-btn {
            display: none; /* Hide custom cursor on mobile */
          }
          .work-card-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default CaseStudies;
