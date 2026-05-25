import React, { useEffect, useRef } from 'react';

interface LogosProps {
  title?: string | null;
}

const { gsap, ScrollTrigger, SplitType } = window as any;

const LOGOS = [
  { src: 'Aditya Birla Group.webp', alt: 'Aditya Birla Group', scale: 1.25 },
  { src: 'Amazon.webp', alt: 'Amazon - Digital Marketing Client of Impulse Digital', scale: 1.25 },
  { src: 'Unilever.avif', alt: 'Hindustan Unilever - FMCG Client of Impulse Digital', scale: 1.3, fixGrid: true },
  { src: 'Himalaya.webp', alt: 'Himalaya' },
  { src: 'HDFC Securities.webp', alt: 'HDFC Securities', scale: 1.3 },
  { src: 'Mastercard.webp', alt: 'Mastercard', scale: 1.3 },
  { src: 'Uppercase.webp', alt: 'Uppercase' },
  { src: 'Tata Consumer.webp', alt: 'Tata Consumer Products', scale: 1.5 },
  { src: 'Tata Soulfull.webp', alt: 'Tata Soulful', scale: 1.6, fixGrid: true },
  { src: 'Bajaj.webp', alt: 'Bajaj Group', scale: 1.7, fixGrid: true },
  { src: 'Dmart.svg', alt: 'Dmart - Retail Client of Impulse Digital', scale: 1.8 },
  { src: 'Ola.webp', alt: 'Ola', fixGrid: true },
  { src: 'Chings.webp', alt: 'Chings', scale: 1.7, fixGrid: true },
  { src: 'More.webp', alt: 'More', scale: 1.7, fixGrid: true },
  { src: 'ABG Chemicals.webp', alt: 'Aditya Birla Chemicals', scale: 1.6, fixGrid: true },
  { src: 'Almex.webp', alt: 'Hindalco Almex', scale: 1.6, fixGrid: true },
  { src: 'Godrej.webp', alt: 'Godrej Construction', scale: 1.7, fixGrid: true },
  { src: 'Birla Cellulose.webp', alt: 'Birla Cellulose', scale: 1.8, fixGrid: true },
  { src: 'ABPS.webp', alt: 'Aditya Birla Public Schools', scale: 1.8, fixGrid: true },
  { src: 'TJSB.webp', alt: 'TJSB', scale: 1.7, fixGrid: true },
  { src: 'Navyasa.webp', alt: 'Navyasa', scale: 1.7, fixGrid: true },
  { src: 'Croda.webp', alt: 'Croda', scale: 1.8, fixGrid: true },
  { src: 'Qure.webp', alt: 'Qure', scale: 2.0, fixGrid: true },
  { src: 'Electromech.webp', alt: 'Electromech', scale: 2.0, fixGrid: true }
];

const Logos: React.FC<LogosProps> = ({ title }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) {
      // Fallback: make all cards visible if GSAP isn't available
      const cards = sectionRef.current?.querySelectorAll('.logo-card');
      cards?.forEach((card: any) => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.visibility = 'visible';
        (card as HTMLElement).style.transform = 'none';
      });
      return;
    }
    
    let ctx: any;
    const timeout = setTimeout(() => {
      ctx = gsap.context(() => {
        // SplitType for Logos heading
        const text = sectionRef.current?.querySelector('.split-text') as HTMLElement;
        if (text && SplitType) {
          if (!text.classList.contains('split-done')) {
            const split = new SplitType(text, { types: 'lines, words' });
            split.lines?.forEach((line: any) => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('line-wrapper');
                line.parentNode?.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });
            text.classList.add('split-done');
            gsap.fromTo(split.words,
              { yPercent: 120, opacity: 0 },
              {
                  scrollTrigger: { trigger: text, start: 'top 85%', toggleActions: 'play none none reverse' },
                  yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
              }
            );
          }
        }

        // Logo Grid Reveal — scoped only to THIS section's cards
        const section = sectionRef.current;
        if (!section) return;
        const cards = section.querySelectorAll('.logo-card:not(.logo-duplicate)');
        if (cards.length) {
          gsap.set(cards, { autoAlpha: 0, y: 30, scale: 0.95 });
          ScrollTrigger.refresh();
          gsap.to(cards, {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              once: true,
              onEnter: () => {
                gsap.to(cards, {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  stagger: 0.04,
                  duration: 0.8,
                  ease: 'back.out(1.4)'
                });
              }
            },
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.04,
            duration: 0.8,
            ease: 'back.out(1.4)'
          });

          // Safety net: if section is already in view on load, animate immediately
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            gsap.to(cards, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              stagger: 0.04,
              duration: 0.8,
              ease: 'back.out(1.4)'
            });
          }
        }
      }, sectionRef);
    }, 150);

    return () => {
      clearTimeout(timeout);
      if (ctx) ctx.revert();
    };
  }, [title]);

  return (
    <section className="logos" ref={sectionRef}>
      <style>{`
        @media (min-width: 769px) {
          .logo-duplicate { display: none !important; }
        }
      `}</style>
      <div className="container">
        <h2 className="section-heading text-center split-text" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--white)', marginBottom: '5rem' }} dangerouslySetInnerHTML={{ __html: title || 'Trusted by marketing teams at' }} />

        <div className="logo-slider">
          <div className="logo-grid">
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <div key={idx} className={`logo-card ${idx >= LOGOS.length ? 'logo-duplicate' : ''}`}>
                <div className="logo-pane">
                  <img
                    src={`${import.meta.env.BASE_URL}logos/${logo.src}`}
                    alt={logo.alt}
                    className={logo.fixGrid ? 'fix-logo-grid' : ''}
                    style={logo.scale ? { '--base-scale': logo.scale } as React.CSSProperties : undefined}
                    loading="lazy"
                    decoding="async"
                    width="200"
                    height="100"
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      img.classList.add('loaded');
                    }}
                    ref={(img) => {
                      if (img && img.complete) {
                        img.classList.add('loaded');
                      }
                    }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
