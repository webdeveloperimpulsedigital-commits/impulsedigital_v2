import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const { gsap, ScrollTrigger } = window as any;

const servicesData = [
  {
    category: "Growth Intelligence",
    description: "Data isn't enough. We engineer systems that uncover hidden market mechanics, turning passive numbers into aggressive, predictable growth.",
    items: [
      { title: "Consumer Intelligence", path: "/services/consumer-intelligence", desc: "Deep data analysis to uncover hidden audience behaviors.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Market & Competitive Intelligence", path: "/services/market-intelligence", desc: "Understand your competitors and industry landscape.", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Always-On Intelligence", path: "/services/always-on-intelligence", desc: "Continuous monitoring for 24/7 strategic advantage.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Campaign & Performance Intelligence", path: "/services/campaign-intelligence", desc: "Real-time insights to optimize live marketing efforts.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", span: 1 }
    ]
  },
  {
    category: "AI Marketing Systems",
    description: "The era of manual execution is over. Deploy autonomous, intelligent systems that scale your marketing exponentially without human bottlenecks.",
    items: [
      { title: "Archer AI", path: "/services/archer-ai", desc: "Our proprietary AI platform for total growth intelligence.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", span: 2 },
      { title: "Agentic AI", path: "/services/agentic-ai", desc: "Autonomous AI agents to execute and scale your marketing.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Cinematic AI Production", path: "/services/ai-video-production", desc: "Cutting-edge video creation powered by AI.", image: "https://images.unsplash.com/photo-1589802787123-6447c20ee3cd?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Generative Search Optimisation", path: "/services/generative-search-optimisation", desc: "Optimizing your brand for AI search engines.", image: "https://images.unsplash.com/photo-1531297172868-9f1d8b85cc11?auto=format&fit=crop&w=800&q=80", span: 2 }
    ]
  },
  {
    category: "Brand Infrastructure",
    description: "A premium brand demands an unbreakable foundation. We architect authoritative digital footprints that dominate search and command absolute trust.",
    items: [
      { title: "Search & Visibility", path: "/services/search-engine-optimisation", desc: "Advanced organic growth to dominate traditional search.", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80", span: 2 },
      { title: "eCommerce SEO", path: "/services/search-engine-optimisation/ecommerce-seo", desc: "Revenue-driven organic growth for online stores.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Enterprise SEO", path: "/services/search-engine-optimisation/enterprise-seo", desc: "Large-scale SEO infrastructure for massive websites.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "B2B SEO", path: "/services/search-engine-optimisation/b2b-seo", desc: "Pipeline-focused search visibility for B2B buyers.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Local SEO", path: "/services/search-engine-optimisation/local-seo", desc: "Dominate the local map pack and neighborhood searches.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Website Development", path: "/services/website-development", desc: "High-performance, modern web experiences.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", span: 2 },
      { title: "Content Strategy & Writing", path: "#services", desc: "High-impact, conversion-driven editorial content.", image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Social Media", path: "/services/social-media-management", desc: "Engaging, community-driven social strategies.", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Video & Visual Content", path: "#services", desc: "Stunning visual assets that command attention.", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Brand Identity", path: "/services/branding", desc: "Powerful brand identities that command attention.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80", span: 1 },
      { title: "Employer Branding", path: "/services/employer-branding", desc: "Attract and retain the industry's top talent.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", span: 2 }
    ]
  }
];

const ServicesIndex: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('services-index-page');

    if (gsap && ScrollTrigger && containerRef.current) {
      
      // Hero text split animation
      const heroHeadline = document.querySelector('.aww3-hero-title');
      const heroDesc = document.querySelector('.aww3-hero-desc');
      
      if (heroHeadline && heroDesc && (window as any).SplitType) {
        (heroHeadline as HTMLElement).style.visibility = 'visible';
        (heroDesc as HTMLElement).style.visibility = 'visible';

        const split = new ((window as any).SplitType)(heroHeadline as HTMLElement, { types: 'lines,words' });
        split.lines?.forEach((line: HTMLElement) => {
          const w = document.createElement('div');
          w.classList.add('line-wrapper');
          line.parentNode?.insertBefore(w, line);
          w.appendChild(line);
        });

        const descSplit = new ((window as any).SplitType)(heroDesc as HTMLElement, { types: 'lines' });
        descSplit.lines?.forEach((line: HTMLElement) => {
          const w = document.createElement('div');
          w.classList.add('line-wrapper');
          line.parentNode?.insertBefore(w, line);
          w.appendChild(line);
        });

        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(split.words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.02, ease: 'power4.out' }
        )
        .fromTo(descSplit.lines,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power3.out' },
          "-=0.4"
        );
      }

      // Section Entrance Animations
      const sections = containerRef.current.querySelectorAll('.aww3-category-section');
      sections.forEach((sec: any) => {
        const header = sec.querySelector('.aww3-section-header');
        const cards = sec.querySelectorAll('.aww3-card');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
          }
        });

        if (header) {
          tl.fromTo(header, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0);
        }
        if (cards.length) {
          tl.fromTo(cards, 
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "back.out(1.2)" }, 
            0.2
          );
        }
      });

      // Text Fill scrub effect
      const textFills = containerRef.current.querySelectorAll('.text-fill');
      textFills.forEach((fill: any) => {
        gsap.to(fill, {
          backgroundPositionX: '0%', 
          ease: 'none',
          scrollTrigger: { 
            trigger: fill, 
            scrub: 1, 
            start: 'top 85%', 
            end: 'top 20%' 
          }
        });
      });

      // Hover magnetic orb
      const cards = containerRef.current.querySelectorAll('.aww3-card');
      cards.forEach((card: any) => {
        const orb = card.querySelector('.aww3-orb');
        if (orb) {
          card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            gsap.to(orb, { x, y, duration: 0.6, ease: "power2.out" });
          });
        }
      });
      
      ScrollTrigger.refresh();
    }

    return () => {
      document.body.classList.remove('services-index-page');
    };
  }, []);

  return (
    <main id="main-content" className="aww3-wrapper" ref={containerRef}>
      <Helmet>
        <meta name="description" content="Explore our full range of AI-native digital marketing, intelligence, and SEO services." />
        <meta name="keywords" content="digital marketing services, SEO, AI marketing, branding, website development" />
        <title>Capabilities | Impulse Digital</title>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Capabilities | Impulse Digital" />
        <meta property="og:description" content="Explore our full range of AI-native digital marketing, intelligence, and SEO services." />
        <meta property="og:url" content="https://www.theimpulsedigital.com/services" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:title" content="Capabilities | Impulse Digital" />
        <meta name="twitter:description" content="Explore our full range of AI-native digital marketing, intelligence, and SEO services." />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta name="twitter:url" content="https://www.theimpulsedigital.com/services" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/services" />
      </Helmet>

      {/* Immersive Hero */}
      <section className="aww3-hero">
        <div className="aww3-hero-bg">
          <div className="aww3-mesh"></div>
        </div>
        <div className="aww3-container">
          <div className="aww3-hero-content">
            <h1 className="aww3-hero-title" style={{ visibility: 'hidden' }}>
              Beyond <br className="aww3-mobile-break" />
              <span style={{ color: '#aa3bff' }}>Execution.</span>
            </h1>
            <p className="aww3-hero-desc" style={{ visibility: 'hidden' }}>
              We architect intelligent growth systems. Explore our comprehensive suite of AI-native marketing, search dominance, and elite brand infrastructure.
            </p>
          </div>
        </div>
        <div className="aww3-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="aww3-scroll-line"></div>
        </div>
      </section>

      {/* Grid Layout Content */}
      <div className="aww3-main-content">
        {servicesData.map((category, idx) => (
          <section key={idx} className="aww3-category-section">
            <div className="aww3-container">
              
              {/* Top Title Section */}
              <div className="aww3-section-header">
                <div className="aww3-header-left">
                  <div className="aww3-cat-num">0{idx + 1}</div>
                  <h2 className="aww3-cat-title text-fill" data-text={category.category}>{category.category}</h2>
                </div>
                <div className="aww3-header-right">
                  <p className="aww3-cat-desc">{category.description}</p>
                </div>
              </div>

              {/* Bento Grid */}
              <div className="aww3-grid">
                {category.items.map((item, itemIdx) => (
                  <Link 
                    to={item.path} 
                    key={itemIdx} 
                    className={`aww3-card ${item.span === 2 ? 'aww3-span-2' : ''}`}
                  >
                    {/* Magnetic Orb (Now exclusively Impulse Purple) */}
                    <div className="aww3-orb" style={{ background: "#aa3bff" }}></div>
                    <div className="aww3-card-noise"></div>
                    
                    {/* Hover Logo Drawing */}
                    <svg viewBox="801 344 274 272" className="aww3-hover-logo" preserveAspectRatio="xMidYMid meet">
                      <path pathLength="1" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                    </svg>
                    
                    <div className="aww3-card-content">
                      <div className="aww3-card-header">
                        <div className="aww3-card-arrow">
                          <span className="aww3-card-hover-text">Know More</span>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 5H19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="aww3-card-body">
                        <h3 className="aww3-card-title">{item.title}</h3>
                        <p className="aww3-card-desc">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        ))}
      </div>

      <style>{`
        /* Global & Reset */
        .aww3-wrapper {
          color: #fff;
          position: relative;
          z-index: 2;
          overflow: hidden;
          padding-bottom: 12rem;
        }

        .aww3-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 4vw;
          width: 100%;
        }

        /* Immersive Hero */
        .aww3-hero {
          height: 100vh;
          min-height: 800px;
          display: flex;
          align-items: center;
          position: relative;
        }

        .aww3-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
        }

        .aww3-mesh {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 50% 50%, rgba(170, 59, 255, 0.15), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1), transparent 30%);
          filter: blur(80px);
          animation: aww3-drift 20s infinite linear alternate;
        }

        @keyframes aww3-drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(5%, 5%) rotate(5deg); }
        }

        .aww3-hero-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .aww3-hero-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(3.5rem, 8vw, 8rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.95;
          margin-bottom: 2rem;
          text-transform: uppercase;
          color: #fff;
        }

        .aww3-mobile-break {
          display: none;
        }

        .aww3-hero-title .char {
          display: inline-block;
        }

        .aww3-hero-desc {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
          max-width: 800px;
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .aww3-scroll-indicator {
          position: absolute;
          bottom: 4rem;
          left: 4vw;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .aww3-scroll-line {
          width: 60px;
          height: 1px;
          background: rgba(255,255,255,0.2);
          position: relative;
          overflow: hidden;
        }

        .aww3-scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: #aa3bff;
          transform: translateX(-100%);
          animation: aww3-scroll-draw 2s infinite cubic-bezier(0.65, 0, 0.35, 1);
        }

        @keyframes aww3-scroll-draw {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }

        /* Category Header */
        .aww3-category-section {
          padding: 8rem 0;
          position: relative;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .aww3-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .aww3-header-left {
          flex: 1;
        }

        .aww3-cat-num {
          font-family: var(--font-mono, monospace);
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .aww3-cat-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.5rem, 4vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .aww3-cat-title.text-fill {
          background: linear-gradient(to right, #ffffff 50%, rgba(255, 255, 255, 0.1) 50%);
          background-size: 200% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .aww3-header-right {
          flex: 0 0 450px;
        }

        .aww3-cat-desc {
          font-size: clamp(1.1rem, 1.2vw, 1.3rem);
          line-height: 1.6;
          color: rgba(255,255,255,0.5);
        }

        /* Grid System */
        .aww3-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (min-width: 1400px) {
          .aww3-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Premium Large Cards */
        .aww3-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 420px;
          background: rgba(10, 10, 15, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          color: #fff;
          transform-style: preserve-3d;
          transition: border-color 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Span Controls for Desktop Bento */
        @media (min-width: 1024px) {
          .aww3-span-2 {
            grid-column: span 2;
          }
        }

        /* Noise Texture */
        .aww3-card-noise {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Hover Logo Animation */
        .aww3-hover-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          opacity: 0;
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%) rotate(-5deg);
          transition: opacity 0.5s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .aww3-hover-logo path {
          fill: none;
          stroke: rgba(255, 255, 255, 0.4);
          stroke-width: 3;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .aww3-card:hover .aww3-hover-logo {
          opacity: 1;
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .aww3-card:hover .aww3-hover-logo path {
          stroke-dashoffset: 0;
        }

        /* Magnetic Orb */
        .aww3-orb {
          position: absolute;
          top: 0;
          left: 0;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          filter: blur(80px);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: screen;
        }

        .aww3-card:hover {
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-8px);
        }

        .aww3-card:hover .aww3-orb {
          opacity: 0.7;
        }

        /* Dim Siblings Effect */
        .aww3-grid:hover .aww3-card:not(:hover) {
          opacity: 0.4;
          filter: grayscale(100%);
        }

        /* Card Content */
        .aww3-card-content {
          position: relative;
          z-index: 2;
          padding: 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .aww3-card-header {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }

        .aww3-card-index {
          font-family: var(--font-mono, monospace);
          font-size: 1rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.05em;
        }

        .aww3-card-arrow {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .aww3-card-hover-text {
          position: absolute;
          opacity: 0;
          color: #fff;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.45rem;
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transform: scale(0.8);
          pointer-events: none;
        }

        .aww3-card-arrow svg {
          width: 20px;
          height: 20px;
          position: absolute;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .aww3-card:hover .aww3-card-arrow {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.4);
        }

        .aww3-card:hover .aww3-card-arrow svg {
          opacity: 0;
          transform: scale(0.5);
        }

        .aww3-card:hover .aww3-card-hover-text {
          opacity: 1;
          transform: scale(1);
        }

        .aww3-card-body {
          max-width: 90%;
        }

        .aww3-span-2 .aww3-card-body {
          max-width: 70%;
        }

        .aww3-card-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.8rem, 2.5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 1rem;
          transition: color 0.4s ease;
        }

        .aww3-card-desc {
          font-size: clamp(1rem, 1.1vw, 1.15rem);
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .aww3-section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          .aww3-header-right {
            flex: none;
            width: 100%;
          }
          .aww3-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .aww3-span-2 {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .aww3-hero {
            padding-top: 8rem;
            height: auto;
            min-height: 70vh;
          }
          .aww3-hero-title {
            font-size: clamp(2.8rem, 12vw, 4.5rem);
            margin-bottom: 1.5rem;
            line-height: 1.1;
          }
          .aww3-mobile-break {
            display: block;
          }
          .aww3-hero-desc {
            font-size: 1.1rem;
          }
          .aww3-scroll-indicator {
            display: none;
          }
          .aww3-category-section {
            padding: 3rem 0;
          }
          .aww3-section-header {
            margin-bottom: 2.5rem;
            padding-bottom: 1.5rem;
            gap: 1rem;
          }
          .aww3-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .aww3-span-2 {
            grid-column: span 1;
          }
          .aww3-card {
            height: auto;
            min-height: 320px;
          }
          .aww3-card-content {
            padding: 1.5rem;
          }
          .aww3-span-2 .aww3-card-body {
            max-width: 100%;
          }
          .aww3-card-arrow {
            width: 48px;
            height: 48px;
          }
          .aww3-hover-logo {
            width: 70%;
            height: 70%;
          }
        }
      `}</style>
    </main>
  );
};

export default ServicesIndex;
