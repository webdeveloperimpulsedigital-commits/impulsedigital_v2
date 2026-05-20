import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const { gsap, SplitType } = window as any;

const Hero: React.FC = () => {
  useEffect(() => {
    let splitHeadlines: any[] = [];
    let descSplit: any = null;

    const timeout = setTimeout(() => {
      const heroHeadlines = document.querySelectorAll('.hero-headline');
      const heroDesc = document.querySelector('.hero-desc');
      const heroCtas = document.querySelectorAll('.hero-bottom .btn, .hero-bottom .hero-premium-cta');

      if (!heroHeadlines.length || !heroDesc) return;

      // Reset visibility if it was hidden by css
      heroHeadlines.forEach(h => (h as HTMLElement).style.visibility = 'visible');
      (heroDesc as HTMLElement).style.visibility = 'visible';

      splitHeadlines = Array.from(heroHeadlines).map((h) => {
        const split = new SplitType(h as HTMLElement, { types: 'lines,words' });
        split.lines?.forEach((line: HTMLElement) => {
          const w = document.createElement('div');
          w.classList.add('line-wrapper');
          line.parentNode?.insertBefore(w, line);
          w.appendChild(line);
        });
        return split;
      });

      descSplit = new SplitType(heroDesc as HTMLElement, { types: 'lines' });
      descSplit.lines?.forEach((line: HTMLElement) => {
        const w = document.createElement('div');
        w.classList.add('line-wrapper');
        line.parentNode?.insertBefore(w, line);
        w.appendChild(line);
      });

      const tl = gsap.timeline({ delay: 0.1 });

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
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (splitHeadlines.length) splitHeadlines.forEach(s => s.revert());
      if (descSplit) descSplit.revert();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-headline title-large" style={{ visibility: 'hidden', marginBottom: '0' }}>
          Your Data Knows.
        </h1>
        <h1 className="hero-headline title-large" style={{ visibility: 'hidden', margin: '0' }}>
          Your Marketing
        </h1>
        <h1 className="hero-headline title-large text-violet" style={{ visibility: 'hidden', marginTop: '0', marginBottom: '1.5rem' }}>
          Should Too.
        </h1>

        <div className="hero-bottom" style={{ marginTop: '1rem' }}>
          <p className="hero-desc" style={{ maxWidth: '850px', margin: '0 auto', visibility: 'hidden' }}>
            Impulse Digital helps enterprise teams turn scattered marketing data into AI-native growth intelligence they can actually act on.
          </p>
          <Link to="/growth-intelligence/" className="hero-premium-cta" data-cursor="EXPLORE" style={{ opacity: 0, marginTop: '2.5rem', marginBottom: '3rem' }}>
            <span className="btn-text">FIND THE DECISIONS INSIDE YOUR DATA</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
