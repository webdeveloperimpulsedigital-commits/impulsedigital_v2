import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');

    const { gsap } = window as any;

    const runIntro = () => {
      if (!gsap) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.nf-code',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
      .fromTo('.nf-label',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.8'
      )
      .fromTo('.nf-headline',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        '-=0.6'
      )
      .fromTo('.nf-text',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo('.nf-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runIntro);
    } else {
      setTimeout(runIntro, 120);
    }

    return () => {
      document.body.classList.remove('service-page');
      if (gsap) {
        gsap.killTweensOf('.nf-code, .nf-label, .nf-headline, .nf-text, .nf-cta');
      }
    };
  }, []);

  return (
    <main id="main-content" className="not-found-page">
      <Helmet>
        <title>404 – Page Not Found | Impulse Digital</title>
        <meta name="description" content="The page you are looking for doesn't exist or has been moved. Head back to Impulse Digital's homepage to explore our AI-native marketing services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/404/" />
        <meta property="og:title" content="404 – Page Not Found | Impulse Digital" />
        <meta property="og:description" content="The page you are looking for doesn't exist or has been moved." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/404/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Decorative Impulse mark (matches ThankYou page) */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <symbol id="impulse-mark-404" viewBox="801 344 274 272">
            <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
          </symbol>
        </defs>
      </svg>

      <section className="not-found-hero">
        {/* Large decorative 404 watermark */}
        <div className="nf-watermark" aria-hidden="true">404</div>

        {/* Glow effect */}
        <div className="nf-glow" aria-hidden="true" />

        <div className="nf-container glass-panel">
          <div className="nf-label">
            <span>Page Not Found</span>
          </div>

          <h1 className="nf-code">404</h1>

          <p className="nf-headline">
            This page doesn't exist.
          </p>

          <p className="nf-text">
            The URL may have changed, or the page was removed.<br />
            Let's get you back on track.
          </p>

          <div className="nf-cta">
            <Link to="/" className="btn" data-cursor="START">
              <span className="btn-text">Back to Home</span>
              <div className="btn-fill"></div>
            </Link>
            <Link to="/contact-us/" className="btn btn-outline" data-cursor="START">
              <span className="btn-text">Contact Us</span>
              <div className="btn-fill"></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
