import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { startHeroCopyReveal } from '../utils/heroCopyReveal';

const Hero: React.FC = () => {
  useLayoutEffect(() => {
    return startHeroCopyReveal({
      primary: Array.from(document.querySelectorAll('.hero-headline')),
      supporting: document.querySelector('.hero-desc'),
      actions: document.querySelector('.hero-premium-cta'),
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-headline title-large hero-copy-reveal" style={{ marginBottom: '0' }}>
          Your Data Knows.
        </h1>
        <h1 className="hero-headline title-large hero-copy-reveal" style={{ margin: '0' }}>
          Your Marketing
        </h1>
        <h1 className="hero-headline title-large text-violet hero-copy-reveal" style={{ marginTop: '0', marginBottom: '1.5rem' }}>
          Should Too.
        </h1>

        <div className="hero-bottom" style={{ marginTop: '1rem' }}>
          <p className="hero-desc hero-copy-reveal" style={{ maxWidth: '850px', margin: '0 auto' }}>
            Impulse Digital helps enterprise teams turn scattered marketing data into AI-native growth intelligence they can actually act on.
          </p>
          <Link to="/growth-intelligence/" className="hero-premium-cta hero-copy-reveal" data-cursor="EXPLORE" style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
            <span className="btn-text">FIND THE DECISIONS INSIDE YOUR DATA</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
