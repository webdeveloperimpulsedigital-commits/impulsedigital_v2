import React, { useEffect } from 'react';

const { gsap, SplitType } = window as any;

const Hero: React.FC = () => {
  useEffect(() => {
    const heroHeadlines = document.querySelectorAll('.hero-headline');
    const heroDesc = document.querySelector('.hero-desc');
    const heroCtas = document.querySelectorAll('.hero-bottom .btn');

    if (!heroHeadlines.length || !heroDesc) return;

    // Reset visibility if it was hidden by css
    heroHeadlines.forEach(h => (h as HTMLElement).style.visibility = 'visible');
    (heroDesc as HTMLElement).style.visibility = 'visible';

    const splitHeadlines = Array.from(heroHeadlines).map((h) => {
      const split = new SplitType(h as HTMLElement, { types: 'lines,words' });
      split.lines?.forEach((line: HTMLElement) => {
        const w = document.createElement('div');
        w.classList.add('line-wrapper');
        line.parentNode?.insertBefore(w, line);
        w.appendChild(line);
      });
      return split;
    });

    const descSplit = new SplitType(heroDesc as HTMLElement, { types: 'lines' });
    descSplit.lines?.forEach((line: HTMLElement) => {
      const w = document.createElement('div');
      w.classList.add('line-wrapper');
      line.parentNode?.insertBefore(w, line);
      w.appendChild(line);
    });

    const tl = gsap.timeline({ delay: 0.2 });

    const allWords = splitHeadlines.flatMap(s => s.words || []);

    tl.fromTo(allWords,
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
      splitHeadlines.forEach(s => s.revert());
      descSplit.revert();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-headline title-large" style={{ visibility: 'hidden' }}>
          Most marketing decisions are made<br className="br-desktop" />without the most <span style={{ whiteSpace: 'nowrap' }}>important input</span>
        </h1>
        <h1 className="hero-headline title-large text-violet" style={{ visibility: 'hidden' }}>your own data.</h1>

        <div className="hero-bottom">
          <p className="hero-desc" style={{ maxWidth: '850px', margin: '0 auto', visibility: 'hidden' }}>
            Impulse Digital is the AI-native growth intelligence partner for enterprise marketing teams that need to close the gap between what their data knows and what their teams act on.
          </p>
          <a href="#work" className="btn" data-cursor="EXPLORE" style={{ opacity: 0 }}>
            <span className="btn-text">See what your data is actually telling you</span>
            <div className="btn-fill"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
