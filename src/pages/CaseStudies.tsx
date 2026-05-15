import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const caseStudiesData = [
  {
    client: "Mastercard",
    title: "Priceless Experiences: Reimagining Global Loyalty",
    category: "Brand Infrastructure",
    description: "90.9% merchant response rate through an AI-led WhatsApp cluster-head outreach strategy.",
    image: "/case studies/Mastercard.png",
    slug: "/case-studies/mastercard"
  },
  {
    client: "Dmart",
    title: "Digital Retail Transformation & E-Commerce Dominance",
    category: "Growth Intelligence",
    description: "13.43 lakh unique reach and 53K clicks that drove measurable in-store footfall at scale.",
    image: "/case studies/Dmart.png",
    slug: "/case-studies/dmart"
  },
  {
    client: "Uppercase",
    title: "Sustainable Luggage: Launching a D2C Disruptor",
    category: "AI Marketing Systems",
    description: "A complete brand film produced entirely with generative AI—script, visuals, voice, and edit.",
    image: "/case studies/Uppercase.webp",
    slug: "/case-studies/uppercase"
  },
  {
    client: "HUL",
    title: "Consumer Centricity at FMCG Scale",
    category: "Growth Intelligence",
    description: "Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.",
    image: "/case studies/HUL.png",
    slug: "/case-studies/hul"
  },
  {
    client: "Fours For Good",
    title: "Purpose-Driven Storytelling & Social Impact",
    category: "Brand Infrastructure",
    description: "Building an impactful social narrative through high-performance digital storytelling.",
    image: "/case studies/Fours for good.png",
    slug: "/case-studies/fours-for-good"
  },
  {
    client: "Brut",
    title: "Redefining Modern Men's Grooming",
    category: "Brand Infrastructure",
    description: "Social impact content partnership with one of India's most-watched digital publishers.",
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

        // Background color inversion & particle fade (like agentic-ai.html)
        const firstSection = document.querySelector('.work-list-section');
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

      // List Scroll Reveal
      const items = containerRef.current.querySelectorAll('.work-list-item');
      items.forEach((item: any) => {
        gsap.fromTo(item,
          { 
            y: 60,
            opacity: 0, 
          },
          {
            y: 0,
            opacity: 1, 
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );

        // Optional hover effect on image
        const imgInner = item.querySelector('.work-list-img-inner');
        item.addEventListener('mouseenter', () => {
          gsap.to(imgInner, { scale: 1.05, duration: 0.8, ease: 'power2.out' });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(imgInner, { scale: 1, duration: 0.8, ease: 'power2.out' });
        });
      });

      ScrollTrigger.refresh();
    }

    return () => {
      document.body.classList.remove('work-page');
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
            {caseStudiesData.map((study, idx) => (
              <a href={study.slug} className="work-list-item" key={idx} style={{ textDecoration: 'none', color: 'inherit' }}>
                
                {/* Left Text Content */}
                <div className="work-list-left">
                  <div className="work-list-meta">
                    <span className="meta-client">{study.category}</span>
                  </div>
                  <h2 className="work-list-title" style={{ textTransform: 'uppercase' }}>{study.client}</h2>
                </div>

                {/* Right Image Gallery (Continuous Marquee) */}
                <div className="work-list-right">
                  <div className="work-list-gallery">
                    <div className="work-list-track">
                      {/* We duplicate the same image 4 times to create an infinite loop */}
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div 
                          key={num}
                          className="work-list-slide"
                          style={{ backgroundImage: `url("${import.meta.env.BASE_URL}${study.image.replace(/^\//, '')}")` }}
                        />
                      ))}
                    </div>
                  </div>
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

        /* List Layout */
        .work-list-section {
          padding: 8rem 0;
          background-color: transparent;
          color: #ffffff;
        }

        .work-list {
          display: flex;
          flex-direction: column;
          gap: 8rem;
        }

        .work-list-item {
          display: flex;
          align-items: flex-start;
          gap: 4rem;
          width: 100%;
        }

        /* Left Side */
        .work-list-left {
          flex: 0 0 35%;
          display: flex;
          flex-direction: column;
        }

        .work-list-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #ffffff;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 1rem;
        }

        .meta-client {
          color: #aa3bff;
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

        .work-list-desc {
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
          font-weight: 400;
        }

        .work-list-readmore {
          color: #ffffff;
          font-weight: 700;
          text-decoration: none;
          margin-left: 0.5rem;
          transition: color 0.3s ease;
        }

        .work-list-readmore:hover {
          color: #aa3bff;
        }

        /* Right Side Gallery */
        .work-list-right {
          flex: 1;
          width: 100%;
          min-width: 0; /* allows flex children to shrink */
          overflow: hidden;
        }

        .work-list-gallery {
          width: 100%;
          height: 500px;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .work-list-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          height: 100%;
          animation: marqueeScroll 25s linear infinite;
        }

        /* Hover on gallery pauses the loop */
        .work-list-gallery:hover .work-list-track {
          animation-play-state: paused;
        }

        .work-list-slide {
          height: 100%;
          aspect-ratio: 16 / 10;
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          flex-shrink: 0;
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .work-list-slide:hover {
          transform: scale(1.02);
          filter: brightness(1.1);
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Transform exactly by half the total width of the track (including gap) */
            /* Since we render 6 items, half is 3 items + 3 gaps */
            transform: translateX(calc(-50% - 1rem)); 
          }
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
          .work-list-gallery {
            height: 400px;
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
          .work-list-gallery {
            height: 250px;
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
