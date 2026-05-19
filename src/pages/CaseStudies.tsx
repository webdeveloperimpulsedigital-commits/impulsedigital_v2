import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const caseStudiesData = [
  {
    client: "Aditya Birla Group",
    subNames: ["ABG × Brut India", "Fours for Good", "ABG × KBC"],
    subSlugs: ["/case-studies/abg-brut-india", "/case-studies/fours-for-good", "/case-studies/abg-kbc"],
    title: "Brand Campaigns",
    category: "Brand Campaigns",
    description: "Three high-impact campaigns — a Brut India collaboration, cricket-driven social impact, and KBC-led purpose storytelling.",
    images: [
      "/case studies/Written Content/ABG x Brut India/ABG Brut India Title.png",
      "/case studies/Written Content/Fours for good/Fours for good title.png",
      "/case studies/Written Content/ABG x KBC/ABG x KBC Title.png"
    ],
    slug: "/case-studies/abg-brut-india"
  },
  {
    client: "Automag",
    subNames: ["Automag India SEO", "Bajaj Auto Film"],
    subSlugs: ["/case-studies/automag-india", "/case-studies/automag-bajaj-auto"],
    title: "SEO & Brand Film",
    category: "SEO",
    description: "B2B SEO that turned 1–2 leads a month into 45+, and a brand film for Bajaj Auto.",
    images: [
      "/case studies/Written Content/Automag India/Automag SEO/Automag Title.jpg",
      "/case studies/Written Content/Automag India/Automag x Bajaj Auto title.png"
    ],
    slug: "/case-studies/automag-india"
  },
  {
    client: "Qure.ai",
    title: "Healthcare AI SEO",
    category: "SEO",
    description: "Rebuilt Qure.ai’s US SEO structure from a one-page presence into a search-led system.",
    images: ["/case studies/Written Content/Qure.ai/QureAI Title.png"],
    slug: "/case-studies/qure-ai"
  },
  {
    client: "Mastercard",
    title: "Merchant Outreach",
    category: "Outreach",
    description: "90.9% merchant response rate through an AI-led WhatsApp cluster-head outreach strategy.",
    images: ["/case studies/Written Content/Mastercard/Mastercard Title.png"],
    slug: "/case-studies/mastercard"
  },
  {
    client: "Dmart",
    title: "Digital Retail Transformation",
    category: "Growth Intelligence",
    description: "13.43 lakh unique reach and 53K clicks that drove measurable in-store footfall at scale.",
    images: ["/case studies/Written Content/Dmart/Dmart Title.png"],
    slug: "/case-studies/dmart"
  },
  {
    client: "Uppercase",
    title: "Sustainable Luggage",
    category: "AI Marketing Systems",
    description: "A complete brand film produced entirely with generative AI—script, visuals, voice, and edit.",
    images: ["/case studies/Written Content/Uppercase/Uppercase Title.png"],
    slug: "/case-studies/uppercase"
  },
  {
    client: "HUL",
    title: "Consumer Centricity",
    category: "Growth Intelligence",
    description: "Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.",
    images: ["/case studies/Written Content/HUL 1/HUL 1 Title.png"],
    slug: "/case-studies/hul"
  },
  {
    client: "Laljee Godhoo",
    title: "LG Hing Diwali Campaign",
    category: "Purpose-Led Campaign",
    description: "Celebrating the women who make Diwali feel alive for a heritage food brand.",
    images: ["/case studies/Written Content/LG/LG title.png"],
    slug: "/case-studies/lg-hing"
  },
  {
    client: "ElectroMech",
    title: "Website & SEO",
    category: "Growth Intelligence",
    description: "Rebuilding digital visibility to capture verified global B2B leads.",
    images: ["/case studies/Written Content/ElectroMech/ElectroMech title.png"],
    slug: "/case-studies/electromech"
  }
];

const CaseStudyRow = ({ study, isReady }: { study: any, isReady: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleHover = (index: number) => {
    setActiveIndex(index);
    if (galleryRef.current) {
      const slide = galleryRef.current.children[index] as HTMLElement;
      if (slide) {
        // Calculate the exact scroll position relative to the container
        const scrollPos = slide.offsetLeft - galleryRef.current.offsetLeft;
        galleryRef.current.scrollTo({
          left: scrollPos,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    if (activeIndex !== index) {
      handleHover(index);
    }
    if (study.subSlugs && study.subSlugs[index]) {
      navigate(study.subSlugs[index]);
    } else if (study.slug) {
      navigate(study.slug);
    }
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

  // Only show subNames if they exist, otherwise show the client name
  const allNames = study.subNames && study.subNames.length > 0 ? study.subNames : [study.client];

  const content = (
    <>
      <div className="work-list-left">
        <h2 className="work-list-title" style={{ textTransform: 'uppercase', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          {allNames.map((name: string, i: number) => (
            <span 
              key={i} 
              onMouseEnter={() => handleHover(i)}
              onClick={(e) => handleClick(e, i)}
              style={{ 
                color: activeIndex === i ? '#ffffff' : 'rgba(255,255,255,0.3)',
                fontSize: activeIndex === i ? '1em' : '0.55em',
                fontWeight: activeIndex === i ? 800 : 500,
                opacity: activeIndex === i ? 1 : 0.6,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transformOrigin: 'left center'
              }}
            >
              {name}
            </span>
          ))}
        </h2>
      </div>

      <div className="work-list-right">
        <div className="work-list-gallery" ref={galleryRef}>
          {study.images.map((img: string, imgIdx: number) => (
            <div 
              key={imgIdx} 
              className="work-list-slide-wrapper" 
              onClick={(e) => handleImageClick(e, imgIdx)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                className="work-list-slide"
                src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`}
                alt={`${study.client} slide ${imgIdx + 1}`}
              />
            </div>
          ))}
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
    
    const { gsap, ScrollTrigger } = window as any;
    if (gsap && ScrollTrigger && containerRef.current) {
      // Intro Animation
      const heroHeadline = containerRef.current.querySelector('.work-hero-title');
      const heroDesc = containerRef.current.querySelector('.work-hero-desc');
      
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
      document.body.classList.remove('work-page');
      document.body.classList.remove('service-page');
      gsap.to(document.body, { backgroundColor: '#020018', duration: 0 });
      if ((window as any).particlesMaterial) {
        gsap.to((window as any).particlesMaterial, { opacity: 0.6, duration: 0 });
      }
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);



  return (
    <main id="main-content" className="work-wrapper" ref={containerRef}>
      <Helmet>
        <title>Case Studies | Impulse Digital</title>
      </Helmet>

      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-container">
          <div className="work-hero-content">
            <h1 className="work-hero-title" style={{ visibility: 'hidden' }}>
              Case <span style={{ color: '#aa3bff' }}>Studies.</span>
            </h1>
            <p className="work-hero-desc" style={{ visibility: 'hidden' }}>
              Discover how we build brand infrastructure and engineer growth for the world's most ambitious companies.
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
          gap: 0.5rem;
          width: calc(100% + 4vw + max(0px, (100vw - 1600px) / 2));
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Firefox */
        }
        
        .work-list-gallery::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .work-list-slide-wrapper {
          flex: 0 0 calc((100% - 0.5rem) / 1.5);
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
            font-size: clamp(3rem, 15vw, 4.5rem);
            margin-bottom: 1.5rem;
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
