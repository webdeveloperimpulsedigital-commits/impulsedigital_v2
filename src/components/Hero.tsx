import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="split-text title-large">
          Most marketing decisions are made<br />without the most <span style={{ whiteSpace: 'nowrap' }}>important input</span>
        </h1>
        <h1 className="split-text title-large text-violet">your own data.</h1>

        <div className="hero-bottom">
          <p className="split-text hero-desc" style={{ maxWidth: '850px', margin: '0 auto' }}>
            Impulse Digital is the AI-native growth intelligence partner for enterprise marketing teams that need to close the gap between what their data knows and what their teams act on.
          </p>
          <a href="#work" className="btn" data-cursor="EXPLORE">
            <span className="btn-text">See what your data is actually telling you</span>
            <div className="btn-fill"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
