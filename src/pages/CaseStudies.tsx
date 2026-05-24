import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { startHeroCopyReveal } from '../utils/heroCopyReveal';


const caseStudiesData = [
  {
    client: "Tata Soulfull",
    title: "The Next Bite",
    category: "Brand Research",
    description: "Decoding what drives trial, repeat purchase, and how the category could stretch from functional fuel to mainstream snacking.",
    images: ["/images/case-study-image/tata-soulfull/Generated image 1.png"],
    slug: "/case-studies/tata-soulfull"
  },
  {
    client: "Tata Consumer Products",
    subNames: ["Shaking Things Up", "What Should Travel"],
    subDescriptions: [
      "A mature staple category began showing early signals of transformation, with consumers moving beyond price and habit toward health and premium cues.",
      "Identifying which products had the strongest market readiness, portfolio fit, and repeatable demand potential for Australia and the US."
    ],
    subSlugs: ["/case-studies/shaking-things-up", "/case-studies/tcpl"],
    title: "Category Growth & Market Expansion",
    category: "Brand Research",
    description: "Decoding category transformation for staple ingredients and mapping diaspora demand to market launch.",
    images: [
      "/images/case-study-image/salt/shaking-things-up.png",
      "/images/case-study-image/tcpl/AUS_us.png"
    ],
    slug: "/case-studies/shaking-things-up"
  },
  {
    client: "Ching's Secret",
    subNames: ["The Chatpata Test (Ching's × Kurkure)", "The Reputation Radar (Food Pharmer)"],
    subDescriptions: [
      "Decoding public response across search and social, reading sentiment, flavour expectations, celebrity impact, and brand recall signals.",
      "A command-center approach tracked sentiment, platform narratives, creator influence, and reputational risk signals."
    ],
    subSlugs: ["/case-studies/chings-kurkure", "/case-studies/chings-foodfarmer"],
    title: "Consumer Response & Reputation",
    category: "Brand Monitoring",
    description: "Decoding public response to a major brand collaboration and monitoring consumer pulse to manage reputational risk.",
    images: [
      "/images/case-study-image/chings- kurkure/CHing+Kurkure.png",
      "/images/case-study-image/chings-foodfarmer/Foodfarmer.png"
    ],
    slug: "/case-studies/chings-kurkure"
  },
  {
    client: "Mastercard",
    title: "Merchant Outreach",
    category: "Outreach",
    description: "90.9% merchant response rate through an AI-led WhatsApp cluster-head outreach strategy.",
    images: ["/case studies/Written Content/Mastercard/Mastercard Title.webp"],
    slug: "/case-studies/mastercard"
  },
  {
    client: "HUL",
    title: "Consumer Centricity",
    category: "Growth Intelligence",
    description: "Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.",
    images: ["/case studies/Written Content/HUL 1/HUL 1 Title.webp"],
    slug: "/case-studies/hul"
  },
  {
    client: "Aditya Birla Group",
    subNames: ["Aditya Birla Group × KBC", "ABG × Brut India", "Fours for Good"],
    subDescriptions: [
      "A question on KBC became a child’s shot at education.",
      "10 changemakers. 27M+ views. One purpose made human.",
      "Every four became a chance for 200+ children to train like cricketers."
    ],
    subSlugs: ["/case-studies/abg-kbc", "/case-studies/abg-brut-india", "/case-studies/fours-for-good"],
    title: "Brand Campaigns",
    category: "Brand Campaigns",
    description: "Three high-impact campaigns — a Brut India collaboration, cricket-driven social impact, and KBC-led purpose storytelling.",
    images: [
      "/case studies/Written Content/ABG x KBC/ABG x KBC Title.webp",
      "/case studies/Written Content/ABG x Brut India/ABG Brut India Title.webp",
      "/case studies/Written Content/Fours for good/Fours for good title.webp"
    ],
    slug: "/case-studies/abg-kbc"
  },
  {
    client: "DMart",
    title: "Digital Retail Transformation",
    category: "Growth Intelligence",
    description: "13.43 lakh unique reach and 53K clicks that drove measurable in-store footfall at scale.",
    images: ["/case studies/Written Content/Dmart/Dmart Title.webp"],
    slug: "/case-studies/dmart"
  },
  {
    client: "Uppercase",
    title: "Sustainable Luggage",
    category: "AI Marketing Systems",
    description: "A complete brand film produced entirely with generative AI—script, visuals, voice, and edit.",
    images: ["/case studies/Written Content/Uppercase/Uppercase Title.webp"],
    slug: "/case-studies/uppercase"
  },
  {
    client: "Qure.ai",
    title: "Healthcare AI SEO",
    category: "SEO",
    description: "Rebuilt Qure.ai’s US SEO structure from a one-page presence into a search-led system.",
    images: ["/case studies/Written Content/Qure.ai/QureAI Title.webp"],
    slug: "/case-studies/qure-ai"
  },
  {
    client: "ElectroMech",
    title: "Website & SEO",
    category: "Growth Intelligence",
    description: "Rebuilding digital visibility to capture verified global B2B leads.",
    images: ["/case studies/Written Content/ElectroMech/ElectroMech title.webp"],
    slug: "/case-studies/electromech"
  },
  {
    client: "Automag",
    subNames: ["Automag India", "Automag × Bajaj Auto"],
    subDescriptions: [
      "45-50 qualified B2B leads a month from buyers already searching.",
      "The system worked. The film made buyers understand what changed."
    ],
    subSlugs: ["/case-studies/automag-india", "/case-studies/automag-bajaj-auto"],
    title: "SEO & Brand Film",
    category: "SEO",
    description: "B2B SEO that turned 1–2 leads a month into 45+, and a brand film for Bajaj Auto.",
    images: [
      "/case studies/Written Content/Automag India/Automag SEO/Automag Title.webp",
      "/case studies/Written Content/Automag India/Automag x Bajaj Auto title.webp"
    ],
    slug: "/case-studies/automag-india"
  },
  {
    client: "LG Hing",
    title: "LG Hing Diwali Campaign",
    category: "Purpose-Led Campaign",
    description: "Celebrating the women who make Diwali feel alive for a heritage food brand.",
    images: ["/case studies/Written Content/LG/LG title.webp"],
    slug: "/case-studies/lg-hing"
  }
];

const CaseStudyRow = ({ study, isReady }: { study: any, isReady: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const navigate = useNavigate();

  const handleHover = (index: number) => {
    setActiveIndex(index);
    if (galleryRef.current) {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 600); // Wait for smooth scroll to finish

      const slide = galleryRef.current.children[index] as HTMLElement;
      if (slide) {
        const containerRect = galleryRef.current.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();
        const scrollPos = slideRect.left - containerRect.left + galleryRef.current.scrollLeft;
        
        galleryRef.current.scrollTo({
          left: scrollPos,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (isScrollingRef.current) return; // Prevent glitching the number during button clicks

    if (galleryRef.current) {
      const container = galleryRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      const containerRect = container.getBoundingClientRect();
      
      // If we've scrolled to the very end, force the last item as active
      // Added a larger buffer of 10px to guarantee the end detection works across all browsers
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      if (isAtEnd) {
        if (activeIndex !== children.length - 1) {
          setActiveIndex(children.length - 1);
        }
        return;
      }
      
      let maxVisibleWidth = 0;
      let mostVisibleIndex = 0;
      
      children.forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        
        // Calculate how much of the slide is currently visible within the container's bounds
        const visibleLeft = Math.max(childRect.left, containerRect.left);
        const visibleRight = Math.min(childRect.right, containerRect.right);
        const visibleWidth = Math.max(0, visibleRight - visibleLeft);
        
        if (visibleWidth > maxVisibleWidth) {
          maxVisibleWidth = visibleWidth;
          mostVisibleIndex = index;
        }
      });
      
      if (mostVisibleIndex !== activeIndex) {
        setActiveIndex(mostVisibleIndex);
      }
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const prev = Math.max(0, activeIndex - 1);
    handleHover(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const next = Math.min(study.images.length - 1, activeIndex + 1);
    handleHover(next);
  };

  const handleImageClick = (e: React.MouseEvent, imgIdx: number) => {
    e.stopPropagation();
    e.preventDefault();
    if (study.subSlugs && study.subSlugs[imgIdx]) {
      navigate(study.subSlugs[imgIdx]);
    } else if (study.slug) {
      navigate(study.slug);
    }
  };

  const content = (
    <>
      <div className="work-list-left" style={{ alignSelf: 'center' }}>
        <h2 className="work-list-title" style={{ textTransform: 'uppercase', margin: 0, color: '#ffffff' }}>
          {study.client}
        </h2>
      </div>

      <div className="work-list-right" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', minWidth: 0 }}>
        {study.images.length > 1 && (
          <div className="slider-controls" onClick={(e) => e.stopPropagation()} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1.25rem',
            paddingRight: '0.5rem',
            color: '#fff',
            pointerEvents: 'auto'
          }}>
            <button 
              onClick={handlePrev}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: activeIndex === 0 ? 'default' : 'pointer',
                opacity: activeIndex === 0 ? 0.3 : 1,
                transition: 'all 0.3s'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '2px', fontFamily: 'monospace' }}>
              {activeIndex + 1} / {study.images.length}
            </span>
            <button 
              onClick={handleNext}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: activeIndex === study.images.length - 1 ? 'default' : 'pointer',
                opacity: activeIndex === study.images.length - 1 ? 0.3 : 1,
                transition: 'all 0.3s'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        )}

        <div className="work-list-gallery" ref={galleryRef} onScroll={handleScroll}>
          {study.images.map((img: string, imgIdx: number) => {
            const slideTitle = study.subNames ? study.subNames[imgIdx] : study.client;
            const slideDesc = study.subDescriptions ? study.subDescriptions[imgIdx] : study.description;
            
            return (
              <div 
                key={imgIdx} 
                className="work-list-slide-wrapper" 
                onClick={(e) => handleImageClick(e, imgIdx)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                <img 
                  className="work-list-slide"
                  src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`}
                  alt={`${slideTitle} Digital Marketing Campaign Case Study by Impulse Digital`}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '4rem 2rem 1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  pointerEvents: 'none',
                  borderBottomLeftRadius: '64px',
                  borderBottomRightRadius: '12px'
                }}>
                  <h3 className="slide-title" style={{ margin: 0, fontWeight: 700, textTransform: 'uppercase' }}>
                    {slideTitle}
                  </h3>
                  <p className="slide-desc" style={{ margin: 0, lineHeight: 1.4, opacity: 0.9 }}>
                    {slideDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

  return isReady ? (
    <div 
      onClick={() => navigate(study.slug || '#')} 
      className="work-list-item" 
      style={{ textDecoration: 'none', color: 'inherit', display: 'flex', cursor: 'pointer' }}
    >
      {content}
    </div>
  ) : (
    <div className="work-list-item pending-case-study" style={{ display: 'flex', cursor: 'default' }}>
      {content}
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('work-page');
    document.body.classList.add('service-page');
    const stopHeroReveal = startHeroCopyReveal({
      primary: containerRef.current?.querySelector('.work-hero-title'),
      supporting: containerRef.current?.querySelector('.work-hero-desc'),
    });
    
    const { gsap, ScrollTrigger } = window as any;
    if (gsap && ScrollTrigger && containerRef.current) {
        // Background color inversion & particle fade
        const triggerEl = document.querySelector('.work-list-section');
        if (triggerEl) {
          gsap.to(document.body, {
            backgroundColor: '#000000',
            scrollTrigger: {
              trigger: triggerEl,
              start: 'top 60%',
              end: 'top 10%',
              scrub: true
            }
          });

          if ((window as any).particlesMaterial) {
            gsap.fromTo((window as any).particlesMaterial,
              { opacity: 0.6 },
              {
                opacity: 0,
                scrollTrigger: {
                  trigger: triggerEl,
                  start: 'top 60%',
                  end: 'top 10%',
                  scrub: true
                }
              }
            );
          }
        }

      // Handoff Line Reveal
      const separators = containerRef.current.querySelectorAll('.work-list-separator');
      separators.forEach((sep: any) => {
        ScrollTrigger.create({
          trigger: sep,
          start: 'top 95%',
          onEnter: () => sep.classList.add('active'),
          once: true
        });
      });

      ScrollTrigger.refresh();
    }

    return () => {
      stopHeroReveal();
      document.body.classList.remove('work-page');
      document.body.classList.remove('service-page');
      gsap.to(document.body, { backgroundColor: '#020018', duration: 0 });
      if ((window as any).particlesMaterial) {
        gsap.to((window as any).particlesMaterial, { opacity: 0.6, duration: 0 });
      }
      if ((window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger && t.trigger.closest && t.trigger.closest('.work-wrapper')) {
            t.kill();
          }
        });
      }
    };
  }, []);



  return (
    <main id="main-content" className="work-wrapper" ref={containerRef}>
      <Helmet>
        <title>Case Studies | Impulse Digital</title>
        <meta name="description" content="Explore Impulse Digital's case studies — brand research, campaign intelligence, SEO, social media, and AI marketing work for brands like Tata, HUL, Mastercard, DMart, and more." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/" />
        <meta property="og:title" content="Case Studies | Impulse Digital" />
        <meta property="og:description" content="Explore Impulse Digital's case studies — brand research, campaign intelligence, SEO, social media, and AI marketing work for brands like Tata, HUL, Mastercard, DMart, and more." />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
      </Helmet>

      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-container">
          <div className="work-hero-content">
            <h1 className="work-hero-title hero-copy-reveal">
              The Work <br />
              <span className="work-hero-highlight" style={{ color: '#aa3bff' }}>Behind the Numbers.</span>
            </h1>
            <p className="work-hero-desc hero-copy-reveal">
              The final number is never the full story. The real story is what had to be questioned, rebuilt, sharpened and pushed before the result had a chance to happen.
            </p>
          </div>
        </div>
      </section>

      {/* List Section - White Background like reference */}
      <section className="work-list-section">
        <div className="work-container">
          <div className="work-list">
            {caseStudiesData.map((study, idx) => {
              return (
                <React.Fragment key={idx}>
                  <CaseStudyRow study={study} isReady={true} />
                  {idx < caseStudiesData.length - 1 && <div className="work-list-separator"></div>}
                </React.Fragment>
              );
            })}
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
          max-width: 1400px;
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
          text-transform: none;
        }

        .work-hero-desc {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
          max-width: 800px;
          font-weight: 300;
        }

        /* List Layout */
        .work-list-section {
          padding: 8rem 0;
          background-color: transparent;
          color: #ffffff;
        }

        .work-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .work-list-separator {
          width: 100%;
          height: 1px;
          background: rgba(138, 92, 246, 0.8);
          box-shadow: 0 0 15px rgba(138, 92, 246, 0.6);
          margin: 0;
          display: block;
        }

        .work-list-item {
          display: flex;
          align-items: flex-start;
          gap: 4rem;
          width: 100%;
        }

        /* Left Side */
        .work-list-left {
          flex: 0 0 25%;
          display: flex;
          flex-direction: column;
        }



        .work-list-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        /* Right Side Image */
        .work-list-right {
          flex: 1;
          width: 100%;
          min-width: 0;
          position: relative;
        }

        .work-list-gallery {
          display: flex;
          gap: 2.5rem;
          width: calc(100% + 4vw + max(0px, (100vw - 1600px) / 2));
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Firefox */
          padding: 20px 0;
          margin: -20px 0;
        }
        
        .work-list-gallery::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .work-list-slide-wrapper {
          flex: 0 0 calc((100% - 2.5rem) / 1.5);
          scroll-snap-align: start;
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: visible;
          transition: transform 0.3s ease;
        }
        
        .work-list-slide-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid transparent;
          pointer-events: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px 64px 12px 64px;
        }

        .work-list-slide-wrapper:hover {
          transform: translateY(-1px);
        }

        .work-list-slide-wrapper:hover::after {
          border-color: rgba(138, 92, 246, 1);
          box-shadow: 0 0 20px rgba(138, 92, 246, 0.6), inset 0 0 12px rgba(138, 92, 246, 0.3);
        }

        .work-list-slide {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 12px 64px 12px 64px;
        }

        .slide-title {
          font-size: 1.5rem;
        }

        .slide-desc {
          font-size: 1rem;
        }

        .work-hero-highlight {
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .work-list-item {
            flex-direction: column;
            gap: 2rem;
          }
          .work-list-left {
            flex: 1;
            width: 100%;
          }
          .work-list-slide-wrapper {
            flex: 0 0 100%;
          }
        }

        @media (max-width: 768px) {
          .work-hero {
            padding-top: 10rem;
            padding-bottom: 4rem;
          }
          .work-hero-title {
            font-size: clamp(2.5rem, 10vw, 3.5rem);
            margin-bottom: 1.5rem;
          }
          .work-hero-highlight {
            white-space: normal;
          }
          .slide-title {
            font-size: 1.1rem;
          }
          .slide-desc {
            font-size: 0.85rem;
          }
          .work-list-section {
            padding: 4rem 0;
          }
        }
      `}</style>
    </main>
  );
};

export default CaseStudies;
