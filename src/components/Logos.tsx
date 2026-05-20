import React, { useEffect, useRef } from 'react';

interface LogosProps {
  title?: string | null;
}

const { gsap, ScrollTrigger, SplitType } = window as any;

const LOGOS = [
  { src: 'Aditya Birla Group.svg', alt: 'Aditya Birla Group', scale: 1.25 },
  { src: 'Amazon.png', alt: 'Amazon - Digital Marketing Client of Impulse Digital', scale: 1.25 },
  { src: 'Unilever.avif', alt: 'Hindustan Unilever - FMCG Client of Impulse Digital', scale: 1.3, fixGrid: true },
  { src: 'Himalaya.png', alt: 'Himalaya' },
  { src: 'HDFC Securities.webp', alt: 'HDFC Securities', scale: 1.3 },
  { src: 'Mastercard.png', alt: 'Mastercard', scale: 1.3 },
  { src: 'Uppercase.png', alt: 'Uppercase' },
  { src: 'Tata Consumer.png', alt: 'Tata Consumer Products', scale: 1.5 },
  { src: 'Tata Soulfull.png', alt: 'Tata Soulful', scale: 1.6, fixGrid: true },
  { src: 'Bajaj.png', alt: 'Bajaj Group', scale: 1.7, fixGrid: true },
  { src: 'Dmart.svg', alt: 'Dmart - Retail Client of Impulse Digital', scale: 1.8 },
  { src: 'Ola.png', alt: 'Ola', fixGrid: true },
  { src: 'Chings.png', alt: 'Chings', scale: 1.7, fixGrid: true },
  { src: 'More.png', alt: 'More', scale: 1.7, fixGrid: true },
  { src: 'ABG Chemicals.png', alt: 'Aditya Birla Chemicals', scale: 1.6, fixGrid: true },
  { src: 'Almex.jpg', alt: 'Hindalco Almex', scale: 1.6, fixGrid: true },
  { src: 'Godrej.png', alt: 'Godrej Construction', scale: 1.7, fixGrid: true },
  { src: 'Birla Cellulose.png', alt: 'Birla Cellulose', scale: 1.8, fixGrid: true },
  { src: 'ABPS.png', alt: 'Aditya Birla Public Schools', scale: 1.8, fixGrid: true },
  { src: 'TJSB.png', alt: 'TJSB', scale: 1.7, fixGrid: true },
  { src: 'Navyasa.png', alt: 'Navyasa', scale: 1.7, fixGrid: true },
  { src: 'Croda.png', alt: 'Croda', scale: 1.8, fixGrid: true },
  { src: 'Qure.png', alt: 'Qure', scale: 2.0, fixGrid: true },
  { src: 'Electromech.png', alt: 'Electromech', scale: 2.0, fixGrid: true }
];

const Logos: React.FC<LogosProps> = ({ title }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;
    
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

        // Logo Grid Reveal
        const cards = gsap.utils.toArray('.logo-card');
        if (cards.length) {
          gsap.set(cards, { autoAlpha: 0, y: 30, scale: 0.95 });
          gsap.to(cards, {
            scrollTrigger: {
              trigger: ".logos",
              start: "top 75%",
              toggleActions: "play none none reverse"
            },
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.03,
            duration: 1,
            ease: "back.out(1.4)"
          });
        }
      }, sectionRef);
    }, 100);

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
                  loading="lazy" decoding="async" />
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
