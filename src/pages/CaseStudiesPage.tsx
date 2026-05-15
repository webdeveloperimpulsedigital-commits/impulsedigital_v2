import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const caseStudies = [
  {
    id: 1,
    client: 'HUL',
    category: 'Campaign Intelligence',
    description: 'Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.',
    img: 'case studies/HUL.png',
    theme: 'dark',
    accent: '#6B3FA0'
  },
  {
    id: 2,
    client: 'Mastercard',
    category: 'Agentic AI',
    description: '90.9% merchant response rate through an AI-led WhatsApp cluster-head outreach strategy.',
    img: 'case studies/Mastercard.png',
    theme: 'light',
    accent: '#000000'
  },
  {
    id: 3,
    client: 'DMart',
    category: 'Market Intelligence',
    description: '13.43 lakh unique reach and 53K clicks that drove measurable in-store footfall at scale.',
    img: 'case studies/Dmart.png',
    theme: 'light',
    accent: '#0F4C3A'
  },
  {
    id: 4,
    client: 'Uppercase',
    category: 'AI Video Production',
    description: 'A complete brand film produced entirely with generative AI—script, visuals, voice, and edit.',
    img: 'case studies/Uppercase.webp',
    theme: 'dark',
    accent: '#3D2200'
  },
  {
    id: 5,
    client: 'Brut India',
    category: 'Consumer Intelligence',
    description: 'Social impact content partnership with one of India\'s most-watched digital publishers.',
    img: 'case studies/Brut.png',
    theme: 'dark',
    accent: '#0D1F3C'
  },
  {
    id: 6,
    client: 'Fours for Good',
    category: 'Always-On Intelligence',
    description: 'Building an impactful social narrative through high-performance digital storytelling.',
    img: 'case studies/Fours for good.png',
    theme: 'light',
    accent: '#1A3322'
  },
];

const CaseStudiesPage: React.FC = () => {
  useEffect(() => {
    const { gsap, ScrollTrigger, SplitType } = window as any;
    if (!gsap || !ScrollTrigger) return;

    // Hero title split text
    if (SplitType) {
      const title = document.querySelector('.cs3-hero-title');
      if (title) {
        (title as HTMLElement).style.visibility = 'visible';
        const split = new SplitType(title as HTMLElement, { types: 'lines, words' });
        
        split.lines?.forEach((line: HTMLElement) => {
            const w = document.createElement('div');
            w.classList.add('line-wrapper');
            line.parentNode?.insertBefore(w, line);
            w.appendChild(line);
        });

        gsap.fromTo(split.words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.03, ease: 'power4.out', delay: 0.2 }
        );
      }
    }

    gsap.fromTo('.cs3-hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
    );

    // Grid item entrance
    const items = document.querySelectorAll('.cs3-grid-item');
    items.forEach((item) => {
        gsap.fromTo(item, 
            { opacity: 0, y: 100 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1.2, 
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            }
        );
    });

    // Custom cursor on hover
    items.forEach((item) => {
      const el = item as HTMLElement;
      el.addEventListener('mouseenter', () => {
        gsap.to(el.querySelector('.cs3-hover-media'), { scale: 1.05, duration: 0.8, ease: 'power3.out' });
        gsap.to(el.querySelector('.cs3-play-indicator'), { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el.querySelector('.cs3-hover-media'), { scale: 1, duration: 0.8, ease: 'power3.out' });
        gsap.to(el.querySelector('.cs3-play-indicator'), { opacity: 0, scale: 0.8, duration: 0.3, ease: 'power2.in' });
      });
    });

    setTimeout(() => { if (ScrollTrigger) ScrollTrigger.refresh(); }, 300);
  }, []);

  return (
    <main id="main-content" className="cs3-page">
      <Helmet>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>Case Studies Page | Impulse Digital</title>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="generator" content="N/A" />

        <meta property="og:title" content="Case Studies Page | Impulse Digital" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies-page" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:creator" content="@impulsedigi" />
        <meta name="twitter:title" content="Case Studies Page | Impulse Digital" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta name="twitter:url" content="https://www.theimpulsedigital.com/case-studies-page" />

        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies-page" />
      </Helmet>
      {/* HERO SECTION */}
      <section className="cs3-hero">
        <div className="cs3-hero-container">
            <h1 className="cs3-hero-title" style={{ visibility: 'hidden' }}>
                Work that earned<br/>its numbers.
            </h1>
            <p className="cs3-hero-desc">
                An archive of decisions, strategies, and executions that didn't just look good, but fundamentally moved the needle for the brands we partner with.
            </p>
        </div>
      </section>

      {/* EDITORIAL GRID */}
      <section className="cs3-grid-wrapper">
        <div className="cs3-grid">
            {caseStudies.map((cs) => (
                <div key={cs.id} className={`cs3-grid-item theme-${cs.theme}`}>
                    <div className="cs3-item-header">
                        <h2 className="cs3-client">{cs.client}</h2>
                        <p className="cs3-desc">{cs.description}</p>
                    </div>

                    <div className="cs3-media-container">
                        <div className="cs3-media-wrapper">
                            <img src={`${import.meta.env.BASE_URL}${cs.img}`} alt={cs.client} className="cs3-hover-media" />
                            {/* Hover Play Indicator */}
                            <div className="cs3-play-indicator">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="cs3-item-footer">
                        <span className="cs3-learn-more">LEARN MORE</span>
                        <span className="cs3-category">{cs.category}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="cs3-footer-cta">
        <div className="cs3-cta-content">
            <h2 className="cs3-cta-heading">Ready to scale?</h2>
            <a href="#connect" className="btn cs3-cta-btn" data-cursor="HI">
                <span className="btn-text">Start a Conversation</span>
                <div className="btn-fill" />
            </a>
        </div>
      </section>

      <Contact title="Build Something<br/>Worth<br/>Measuring." />
    </main>
  );
};

export default CaseStudiesPage;
