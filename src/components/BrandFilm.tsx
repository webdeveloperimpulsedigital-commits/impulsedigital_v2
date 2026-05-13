import React from 'react';

const BrandFilm: React.FC = () => {
  return (
    <section className="brand-film" aria-label="Brand film">
      <div className="brand-film-frame">
        <video className="brand-film-video" src="/Impulse Video.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"></video>
      </div>
    </section>
  );
};

export default BrandFilm;
