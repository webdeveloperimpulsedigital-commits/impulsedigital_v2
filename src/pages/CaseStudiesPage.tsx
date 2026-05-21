import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Contact from '../components/Contact';

// Brands with multiple case studies get an `imgs` array (up to 3 shown stacked)
// Single-case brands get one entry in the array
type CaseStudyItem = {
  id: number;
  client: string;
  category: string;
  description: string;
  imgs: string[];
  theme: string;
  accent: string;
  subLinks: { label: string; href: string }[];
  primaryLink: string;
};

const caseStudies: CaseStudyItem[] = [
  {
    id: 1,
    client: 'ABG × Brut India',
    category: 'Brand Campaign',
    description: '10 changemakers. 27M+ views. One purpose made human.',
    imgs: [
      'case studies/Written Content/ABG x Brut India/ABG Brut India Title.webp',
    ],
    theme: 'dark',
    accent: '#6B3FA0',
    subLinks: [],
    primaryLink: '/case-studies/abg-brut-india',
  },
  {
    id: 11,
    client: 'ABG × KBC',
    category: 'Brand Campaign',
    description: 'A question on KBC became a child’s shot at education.',
    imgs: [
      'case studies/Written Content/ABG x KBC/ABG x KBC Title.webp',
    ],
    theme: 'dark',
    accent: '#6B3FA0',
    subLinks: [],
    primaryLink: '/case-studies/abg-kbc',
  },
  {
    id: 12,
    client: 'Fours for Good',
    category: 'Social Impact',
    description: 'Every four became a chance for 200+ children to train like cricketers.',
    imgs: [
      'case studies/Written Content/Fours for good/Fours for good title.webp',
    ],
    theme: 'dark',
    accent: '#6B3FA0',
    subLinks: [],
    primaryLink: '/case-studies/fours-for-good',
  },
  {
    id: 2,
    client: 'Automag India',
    category: 'SEO',
    description: 'B2B SEO that turned 1–2 leads a month into 45-50 qualified leads from buyers already searching.',
    imgs: [
      'case studies/Written Content/Automag India/Automag SEO/Automag Title.webp'
    ],
    theme: 'dark',
    accent: '#1a1a2e',
    subLinks: [],
    primaryLink: '/case-studies/automag-india',
  },
  {
    id: 21,
    client: 'Automag × Bajaj Auto',
    category: 'Brand Film',
    description: 'The system worked. The film made buyers understand what changed in the Bajaj Auto plant.',
    imgs: [
      'case studies/Written Content/Automag India/Automag x Bajaj Auto title.webp',
    ],
    theme: 'dark',
    accent: '#1a1a2e',
    subLinks: [],
    primaryLink: '/case-studies/automag-bajaj-auto',
  },
  {
    id: 3,
    client: 'HUL',
    category: 'Campaign Intelligence',
    description: 'Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.',
    imgs: ['case studies/Written Content/HUL 1/HUL 1 Title.webp'],
    theme: 'dark',
    accent: '#6B3FA0',
    subLinks: [],
    primaryLink: '/case-studies/hul',
  },
  {
    id: 4,
    client: 'Mastercard',
    category: 'Merchant Outreach',
    description: '90.9% merchant response rate through WhatsApp cluster-head outreach and real testimonial video.',
    imgs: ['case studies/Written Content/Mastercard/Mastercard Title.webp'],
    theme: 'light',
    accent: '#000000',
    subLinks: [],
    primaryLink: '/case-studies/mastercard',
  },
  {
    id: 5,
    client: 'DMart',
    category: 'Digital-to-Store',
    description: '13.43 lakh unique reach and 53K clicks driving measurable in-store footfall across Pune.',
    imgs: ['case studies/Written Content/Dmart/Dmart Title.webp'],
    theme: 'light',
    accent: '#0F4C3A',
    subLinks: [],
    primaryLink: '/case-studies/dmart',
  },
  {
    id: 6,
    client: 'Uppercase',
    category: 'AI Video Production',
    description: 'A New Year brand film built entirely with AI — 5.49M plays, 868K+ views, 100K+ likes.',
    imgs: ['case studies/Written Content/Uppercase/Uppercase Title.webp'],
    theme: 'dark',
    accent: '#3D2200',
    subLinks: [],
    primaryLink: '/case-studies/uppercase',
  },
  {
    id: 7,
    client: 'Laljee Godhoo',
    category: 'Brand Campaign',
    description: 'Celebrating the women who make Diwali feel alive for a 130-year-old heritage food brand.',
    imgs: ['case studies/Written Content/LG/LG title.webp'],
    theme: 'dark',
    accent: '#aa3bff',
    subLinks: [],
    primaryLink: '/case-studies/lg-hing',
  },
  {
    id: 8,
    client: 'Qure.ai',
    category: 'Healthcare SEO',
    description: 'From a thin US presence to a search-led pipeline — 20 organic leads, 31% organic sessions, DA 46 to 49.',
    imgs: ['case studies/Written Content/Qure.ai/QureAI Title.webp'],
    theme: 'dark',
    accent: '#aa3bff',
    subLinks: [],
    primaryLink: '/case-studies/qure-ai',
  },
  {
    id: 9,
    client: 'ElectroMech',
    category: 'B2B Digital',
    description: '20x verified leads growth and 200% increase in first-page rankings through website restructuring and SEO.',
    imgs: ['case studies/Written Content/ElectroMech/ElectroMech title.webp'],
    theme: 'dark',
    accent: '#aa3bff',
    subLinks: [],
    primaryLink: '/case-studies/electromech',
  },
];

const CaseStudiesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { gsap, ScrollTrigger, SplitType } = window as any;
    if (!gsap || !ScrollTrigger) return;

    // Hero title split text
    if (SplitType) {
      const heroHeadline = document.querySelector('.cs3-hero-title');
      const heroDesc = document.querySelector('.cs3-hero-desc');

      if (heroHeadline && heroDesc) {
        (heroHeadline as HTMLElement).style.visibility = 'visible';
        (heroDesc as HTMLElement).style.visibility = 'visible';

        const split = new SplitType(heroHeadline as HTMLElement, { types: 'lines,words' });
        split.lines?.forEach((line: HTMLElement) => {
          const w = document.createElement('div');
          w.classList.add('line-wrapper');
          line.parentNode?.insertBefore(w, line);
          w.appendChild(line);
        });

        const descSplit = new SplitType(heroDesc as HTMLElement, { types: 'lines' });
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
        ).fromTo(descSplit.lines,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power3.out' },
          '-=0.4'
        );
      }
    }

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

    // Hover zoom on media
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

    // Separator reveal
    const separators = document.querySelectorAll('.work-list-separator');
    separators.forEach((sep: any) => {
      ScrollTrigger.create({
        trigger: sep,
        start: 'top 95%',
        onEnter: () => sep.classList.add('active'),
        once: true
      });
    });

    setTimeout(() => { if (ScrollTrigger) ScrollTrigger.refresh(); }, 300);
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <main id="main-content" className="cs3-page">
      <Helmet>
        <title>Client Success Stories | Impulse Digital Case Studies</title>
<meta name="description" content="Explore real client success stories from Impulse Digital’s digital marketing case studies across SEO, performance marketing, branding, and web strategy delivering measurable growth." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/casestudies/" />
<meta property="og:title" content="Client Success Stories | Impulse Digital Case Studies" />
<meta property="og:description" content="Explore real client success stories from Impulse Digital’s digital marketing case studies across SEO, performance marketing, branding, and web strategy delivering measurable growth." />
<meta property="og:image" content="https://www.theimpulsedigital.com/Amazon%20EVP.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Client Success Stories | Impulse Digital Case Studies" />
<meta name="twitter:description" content="Explore real client success stories from Impulse Digital’s digital marketing case studies across SEO, performance marketing, branding, and web strategy delivering measurable growth." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/Amazon%20EVP.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      {/* HERO */}
      <section className="cs3-hero">
        <div className="cs3-hero-container">
          <h1 className="cs3-hero-title" style={{ visibility: 'hidden' }}>
            Work that earned<br/>its numbers.
          </h1>
          <p className="cs3-hero-desc" style={{ visibility: 'hidden' }}>
            An archive of decisions, strategies, and executions that didn't just look good, but fundamentally moved the needle for the brands we partner with.
          </p>
        </div>
      </section>

      {/* GRID */}
      <style>{`
        .work-list-separator {
          width: 100%;
          height: 1px;
          background: rgba(138, 92, 246, 0.8);
          box-shadow: 0 0 15px rgba(138, 92, 246, 0.6);
          margin: 0;
          display: block;
        }

        /* Multi-image stacked layout */
        .cs3-multi-stack {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 280px;
        }

        .cs3-multi-stack .cs3-stack-img {
          position: absolute;
          border-radius: 8px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .cs3-multi-stack .cs3-stack-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* 3-image layout */
        .cs3-multi-stack.count-3 .cs3-stack-img:nth-child(1) {
          width: 70%; height: 65%;
          top: 0; left: 0;
          z-index: 3;
        }
        .cs3-multi-stack.count-3 .cs3-stack-img:nth-child(2) {
          width: 55%; height: 55%;
          top: 15%; right: 0;
          z-index: 2;
        }
        .cs3-multi-stack.count-3 .cs3-stack-img:nth-child(3) {
          width: 50%; height: 45%;
          bottom: 0; left: 20%;
          z-index: 1;
        }

        /* 2-image layout */
        .cs3-multi-stack.count-2 .cs3-stack-img:nth-child(1) {
          width: 75%; height: 70%;
          top: 0; left: 0;
          z-index: 2;
        }
        .cs3-multi-stack.count-2 .cs3-stack-img:nth-child(2) {
          width: 65%; height: 60%;
          bottom: 0; right: 0;
          z-index: 1;
        }

        /* Hover: fan out */
        .cs3-grid-item:hover .cs3-multi-stack.count-3 .cs3-stack-img:nth-child(1) { transform: translate(-4%, -4%) rotate(-3deg); }
        .cs3-grid-item:hover .cs3-multi-stack.count-3 .cs3-stack-img:nth-child(2) { transform: translate(3%, 3%) rotate(4deg); }
        .cs3-grid-item:hover .cs3-multi-stack.count-3 .cs3-stack-img:nth-child(3) { transform: translate(0%, 5%) rotate(-2deg); }

        .cs3-grid-item:hover .cs3-multi-stack.count-2 .cs3-stack-img:nth-child(1) { transform: translate(-4%, -4%) rotate(-4deg); }
        .cs3-grid-item:hover .cs3-multi-stack.count-2 .cs3-stack-img:nth-child(2) { transform: translate(4%, 4%) rotate(3deg); }

        /* Sub-links for multi-case brands */
        .cs3-sub-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .cs3-sub-link {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          padding: 0.35rem 0.9rem;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 100px;
          text-decoration: none;
          transition: color 0.25s, border-color 0.25s, background 0.25s;
        }
        .cs3-sub-link:hover {
          color: #fff;
          border-color: var(--impulse-violet, #7c3aed);
          background: rgba(124,58,237,0.12);
        }
        .theme-light .cs3-sub-link {
          color: rgba(0,0,0,0.45);
          border-color: rgba(0,0,0,0.15);
        }
        .theme-light .cs3-sub-link:hover {
          color: #000;
          border-color: #000;
          background: rgba(0,0,0,0.06);
        }
      `}</style>

      <section className="cs3-grid-wrapper">
        <div className="cs3-grid">
          {/* Top Separator */}
          <div style={{ gridColumn: '1 / -1', width: '100%', margin: '0' }}>
            <div className="work-list-separator"></div>
          </div>
          
          {caseStudies.map((cs, idx) => {
            const isMulti = cs.imgs.length > 1;
            const countClass = `count-${cs.imgs.length}`;

            return (
              <React.Fragment key={cs.id}>
                <div
                  className={`cs3-grid-item theme-${cs.theme}`}
                  onClick={() => navigate(cs.primaryLink)}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <div className="cs3-item-header">
                    <h2 className="cs3-client">{cs.client}</h2>
                    <p className="cs3-desc">{cs.description}</p>
                    {/* Sub-links for multi-case brands — stop propagation so link click works */}
                    {cs.subLinks.length > 0 && (
                      <div className="cs3-sub-links" onClick={e => e.stopPropagation()}>
                        {cs.subLinks.map(sl => (
                          <Link
                            key={sl.href}
                            to={sl.href}
                            className="cs3-sub-link"
                          >
                            {sl.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="cs3-media-container">
                    <div className="cs3-media-wrapper">
                      {isMulti ? (
                        <div className={`cs3-multi-stack ${countClass}`}>
                          {cs.imgs.map((src, i) => (
                            <div 
                              key={i} 
                              className="cs3-stack-img" 
                              onClick={(e) => {
                                e.stopPropagation();
                                if (cs.subLinks[i]) {
                                  navigate(cs.subLinks[i].href);
                                }
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <img
                                src={`${base}${src}`}
                                alt={`${cs.client} Digital Marketing Campaign Case Study - ${i + 1}`}
                                className={i === 0 ? 'cs3-hover-media' : ''}
                                loading={idx < 2 ? 'eager' : 'lazy'}
                                fetchPriority={idx < 2 ? 'high' : 'low'}
                                decoding="async"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <img
                            src={`${base}${cs.imgs[0]}`}
                            alt={`${cs.client} Digital Marketing Campaign Case Study`}
                            className="cs3-hover-media"
                            loading={idx < 2 ? 'eager' : 'lazy'}
                            fetchPriority={idx < 2 ? 'high' : 'low'}
                            decoding="async"
                          />
                          <div className="cs3-play-indicator">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M8 5v14l11-7z" fill="currentColor"/>
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="cs3-item-footer">
                    <span className="cs3-learn-more">LEARN MORE</span>
                    <span className="cs3-category">{cs.category}</span>
                  </div>
                </div>

                {(idx % 2 === 1 || idx === caseStudies.length - 1) && (
                  <div style={{ gridColumn: '1 / -1', width: '100%', margin: '0' }}>
                    <div className="work-list-separator"></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="cs3-footer-cta">
        <div className="cs3-cta-content">
          <h2 className="cs3-cta-heading">Ready to scale?</h2>
          <a href="/contact-us/" className="btn cs3-cta-btn" data-cursor="HI">
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
