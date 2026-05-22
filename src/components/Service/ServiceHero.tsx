import React, { useLayoutEffect } from 'react';
import { startHeroCopyReveal } from '../../utils/heroCopyReveal';

interface ServiceHeroProps {
  headlineParts?: string[];
  headlineAccent?: string;
  headlineHtml?: string;
  description: string;
  buttons: { text: string; link: string; cursor: string }[];
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ headlineParts, headlineAccent, headlineHtml, description, buttons }) => {
  useLayoutEffect(() => {
    return startHeroCopyReveal({
      primary: document.querySelector('.svc-hero-headline'),
      supporting: document.querySelector('.svc-hero-page-desc'),
      actions: Array.from(document.querySelectorAll('.svc-hero-cta-row .btn')),
    });
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="svc-hero-page" id="hero">
      <div className="svc-hero-page-content">
        {headlineHtml ? (
          <h1 className="svc-hero-headline hero-copy-reveal" dangerouslySetInnerHTML={{ __html: headlineHtml }} />
        ) : (
          <h1 className="svc-hero-headline hero-copy-reveal">
            {headlineParts?.map((part, i) => (
              <React.Fragment key={i}>
                {part === headlineAccent ? (
                  <span style={{ color: 'var(--impulse-violet)' }}>{part}</span>
                ) : (
                  part
                )}
                {i < (headlineParts?.length || 0) - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        )}
        <p className="svc-hero-page-desc hero-copy-reveal" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="svc-hero-cta-row">
          {buttons.map((btn, idx) => (
            <a 
              key={idx} 
              href={btn.link} 
              className="btn hero-copy-reveal"
              data-cursor={btn.cursor} 
              style={{ '--hero-copy-offset': '1.15rem' } as React.CSSProperties}
              onClick={(e) => handleSmoothScroll(e, btn.link)}
            >
              <span className="btn-text" dangerouslySetInnerHTML={{ __html: btn.text }} />
              <div className="btn-fill"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
