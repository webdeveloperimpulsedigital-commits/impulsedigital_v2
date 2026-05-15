import React, { useEffect, useLayoutEffect, useRef } from 'react';
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

interface ServicesIndexProps {
  categoryFilter?: string;
}

const ServicesIndex: React.FC<ServicesIndexProps> = ({ categoryFilter }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const displayData = categoryFilter 
    ? servicesData.filter(c => c.category === categoryFilter)
    : servicesData;

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if ((window as any).globalLenis) {
        (window as any).globalLenis.scrollTo('top', { immediate: true, force: true });
      }
    };

    resetScroll();
  }, [categoryFilter]);

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
        tl.fromTo(split.lines,
          { y: 100, opacity: 0, rotateX: -20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out' }
        )
        .fromTo(descSplit.lines,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
          "-=0.8"
        );

        // Background color inversion & particle fade (like agentic-ai.html)
        const firstSection = document.querySelector('.aww3-main-content');
        if (firstSection) {
          gsap.to(document.body, {
            backgroundColor: '#000000',
            scrollTrigger: {
              trigger: firstSection,
              start: 'top bottom',
              end: 'top top',
              scrub: true
            }
          });

          if ((window as any).particlesMaterial) {
            gsap.fromTo((window as any).particlesMaterial,
              { opacity: 0.6 },
              {
                opacity: 0,
                scrollTrigger: {
                  trigger: firstSection,
                  start: 'top 80%',
                  end: 'top 20%',
                  scrub: true
                }
              }
            );
          }
        }
      }

      const sections = containerRef.current.querySelectorAll('.aww3-category-section');
      sections.forEach((sec: any) => {
        const header = sec.querySelector('.aww3-section-header');
        const cards = sec.querySelectorAll('.aww3-stripe-item');

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

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }

    return () => {
      document.body.classList.remove('services-index-page');
      gsap.to(document.body, { backgroundColor: '#020018', duration: 0 });
      if ((window as any).particlesMaterial) {
        gsap.to((window as any).particlesMaterial, { opacity: 0.6, duration: 0 });
      }
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
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

        <div className="aww3-container">
          <div className="aww3-hero-content">
            <h1 className="aww3-hero-title" style={{ visibility: 'hidden' }}>
              {categoryFilter ? (
                <>
                  {categoryFilter.split(' ')[0]} <br className="aww3-mobile-break" />
                  <span style={{ color: '#aa3bff' }}>{categoryFilter.substring(categoryFilter.indexOf(' ') + 1)}</span>
                </>
              ) : (
                <>
                  Beyond <br className="aww3-mobile-break" />
                  <span style={{ color: '#aa3bff' }}>Execution.</span>
                </>
              )}
            </h1>
            <p className="aww3-hero-desc" style={{ visibility: 'hidden' }}>
              {categoryFilter 
                ? displayData[0]?.description
                : "We architect intelligent growth systems. Explore our comprehensive suite of AI-native marketing, search dominance, and elite brand infrastructure."}
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
        {displayData.map((category, idx) => (
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

              {/* Powerful Interactive Stripe Layout (No Images) */}
              <div className="aww3-stripe-list">
                {category.items.map((item, itemIdx) => (
                  <Link 
                    to={item.path} 
                    key={`stripe-${itemIdx}`} 
                    className="aww3-stripe-item"
                  >
                    <div className="aww3-stripe-bg"></div>
                    <div className="aww3-stripe-content">
                      <div className="aww3-stripe-top">
                        <div className="aww3-stripe-index">{(itemIdx + 1).toString().padStart(2, '0')}</div>
                        <h3 className="aww3-stripe-title">{item.title}</h3>
                        <div className="aww3-stripe-arrow">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 5H19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="aww3-stripe-bottom">
                        <div className="aww3-stripe-bottom-inner">
                          <p className="aww3-stripe-desc">{item.desc}</p>
                          <span className="aww3-stripe-cta">Explore Service</span>
                        </div>
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
          overflow: clip;
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

        /* Powerful Interactive Stripe Layout */
        .aww3-stripe-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .aww3-stripe-item {
          position: relative;
          display: block;
          text-decoration: none;
          color: #fff;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 2.5rem 0;
          transition: padding 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .aww3-stripe-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(170, 59, 255, 0.08) 0%, transparent 100%);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
          pointer-events: none;
        }

        .aww3-stripe-item:hover .aww3-stripe-bg {
          transform: scaleY(1);
          transform-origin: top;
        }

        .aww3-stripe-content {
          position: relative;
          z-index: 1;
          padding: 0 2rem;
        }

        .aww3-stripe-top {
          display: grid;
          grid-template-columns: 60px 1fr 60px;
          align-items: center;
          gap: 2rem;
        }

        .aww3-stripe-index {
          font-family: var(--font-mono, monospace);
          font-size: 1.2rem;
          color: rgba(255,255,255,0.3);
          transition: color 0.4s ease;
        }

        .aww3-stripe-item:hover .aww3-stripe-index {
          color: #aa3bff;
        }

        .aww3-stripe-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2rem, 3.5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease;
        }

        .aww3-stripe-item:hover .aww3-stripe-title {
          transform: translateX(20px);
        }

        .aww3-stripe-arrow {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .aww3-stripe-arrow svg {
          width: 24px;
          height: 24px;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .aww3-stripe-item:hover .aww3-stripe-arrow {
          background: #aa3bff;
          border-color: #aa3bff;
          transform: scale(1.1) rotate(45deg);
        }

        .aww3-stripe-bottom {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding-left: calc(60px + 2rem);
        }

        .aww3-stripe-item:hover .aww3-stripe-bottom {
          grid-template-rows: 1fr;
        }

        .aww3-stripe-bottom-inner {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .aww3-stripe-desc {
          font-size: 1.3rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
          max-width: 600px;
          margin: 0;
          padding-top: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
        }

        .aww3-stripe-item:hover .aww3-stripe-desc {
          opacity: 1;
          transform: translateY(0);
        }

        .aww3-stripe-cta {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #aa3bff;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
        }

        .aww3-stripe-item:hover .aww3-stripe-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .aww3-stripe-cta::after {
          content: '';
          width: 30px;
          height: 1px;
          background: #aa3bff;
          transition: width 0.4s ease;
        }

        .aww3-stripe-item:hover .aww3-stripe-cta::after {
          width: 50px;
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
          .aww3-stripe-top {
            grid-template-columns: 40px 1fr 50px;
            gap: 1.5rem;
          }
          .aww3-stripe-bottom {
            padding-left: calc(40px + 1.5rem);
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
          .aww3-stripe-content {
            padding: 0 1rem;
          }
          .aww3-stripe-top {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .aww3-stripe-index {
            width: 100%;
            margin-bottom: 0.5rem;
          }
          .aww3-stripe-title {
            width: calc(100% - 60px);
            font-size: 2.2rem;
          }
          .aww3-stripe-bottom {
            padding-left: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default ServicesIndex;
