import React, { useEffect } from 'react';

const { gsap, SplitType } = window as any;

interface ServiceHeroProps {
  headlineParts?: string[];
  headlineAccent?: string;
  headlineHtml?: string;
  description: string;
  buttons: { text: string; link: string; cursor: string }[];
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ headlineParts, headlineAccent, headlineHtml, description, buttons }) => {
  useEffect(() => {
    const heroHeadline = document.querySelector('.svc-hero-headline');
    const heroDesc = document.querySelector('.svc-hero-page-desc');
    const heroCtas = document.querySelectorAll('.svc-hero-cta-row .btn');

    if (!heroHeadline || !heroDesc) return;

    // Reset visibility if it was hidden by css
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
    )
    .fromTo(descSplit.lines,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power3.out' },
      "-=0.4"
    )
    .fromTo(heroCtas,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      "-=0.4"
    );

    return () => {
      split.revert();
      descSplit.revert();
    };
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
          <h1 className="svc-hero-headline" style={{ visibility: 'hidden' }} dangerouslySetInnerHTML={{ __html: headlineHtml }} />
        ) : (
          <h1 className="svc-hero-headline" style={{ visibility: 'hidden' }}>
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
        <p className="svc-hero-page-desc" style={{ visibility: 'hidden' }} dangerouslySetInnerHTML={{ __html: description }} />
        <div className="svc-hero-cta-row">
          {buttons.map((btn, idx) => (
            <a 
              key={idx} 
              href={btn.link} 
              className="btn" 
              data-cursor={btn.cursor} 
              style={{ opacity: 0 }}
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
