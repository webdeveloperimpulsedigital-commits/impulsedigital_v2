import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

const ThankYou: React.FC = () => {
  useServicePageBackground('.thank-you-hero');
  const [searchParams] = useSearchParams();
  const isCaseStudy = searchParams.get('source') === 'case-study';

  useEffect(() => {
    document.body.classList.add('thank-you-page-body');

    const { gsap } = window as any;

    const runThankYouIntro = () => {
      if (!gsap) return;
      const mark = document.querySelector('.thank-you-mark');
      const badge = document.querySelector('.thank-you-badge');
      const title = document.querySelector('.thank-you-title');
      const text = document.querySelector('.thank-you-text');
      const cta = document.querySelector('.thank-you-cta');

      // Create a timeline for elegant sequential animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (mark) {
        tl.fromTo(mark,
          { scale: 0.8, opacity: 0, rotate: -15 },
          { scale: 1, opacity: 0.12, rotate: 0, duration: 1.5 }
        );
      }

      if (badge) {
        tl.fromTo(badge,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=1.1'
        );
      }

      if (title) {
        tl.fromTo(title,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          '-=0.7'
        );
      }

      if (text) {
        tl.fromTo(text,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
      }

      if (cta) {
        tl.fromTo(cta,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        );
      }
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runThankYouIntro);
    } else {
      setTimeout(runThankYouIntro, 120);
    }

    // No auto-download; Zoho CRM emails the PDF automatically.

    return () => {
      document.body.classList.remove('service-page', 'thank-you-page-body');
      if (gsap) {
        gsap.killTweensOf('.thank-you-mark');
        gsap.killTweensOf('.thank-you-badge');
        gsap.killTweensOf('.thank-you-title');
        gsap.killTweensOf('.thank-you-text');
        gsap.killTweensOf('.thank-you-cta');
      }
    };
  }, [isCaseStudy]);

  return (
    <main id="main-content" className="thank-you-page">
      <Helmet>
        <title>Thank You | Impulse Digital</title>
        <meta name="description" content="Thank you for reaching out to Impulse Digital. We have received your query and will get back to you shortly." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/thank-you/" />
        
        <meta property="og:title" content="Thank You | Impulse Digital" />
        <meta property="og:description" content="Thank you for reaching out to Impulse Digital. We have received your query and will get back to you shortly." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/thank-you/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <symbol id="impulse-mark" viewBox="801 344 274 272">
            <path
              d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
          </symbol>
        </defs>
      </svg>

      <section className="thank-you-hero">
        <div className="thank-you-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272">
            <use href="#impulse-mark" />
          </svg>
        </div>

        <div className="thank-you-glow" aria-hidden="true" />

        <div className="thank-you-container glass-panel">
          <div className="thank-you-badge">
            <span>{isCaseStudy ? 'Case Study On Its Way' : 'Conversation Initiated'}</span>
          </div>

          <h1 className="thank-you-title">Thank You.</h1>
          
          <div className="thank-you-text">
            {isCaseStudy ? (
              <>
                <p>We've emailed the case study to your inbox.</p>
                <p>If it doesn't arrive within a few minutes, please check your spam folder.</p>
              </>
            ) : (
              <>
                <p>We have received your details.</p>
                <p>Our team is reviewing the information and we will get back to you shortly.</p>
              </>
            )}
          </div>

          <div className="thank-you-cta">
            <Link to="/" className="btn" data-cursor="START">
              <span className="btn-text">Back to Home</span>
              <div className="btn-fill"></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
