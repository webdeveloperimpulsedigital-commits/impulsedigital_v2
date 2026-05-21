import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';
import DownloadCaseStudyForm from '../components/DownloadCaseStudyForm';

const SaltCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);
  const base = import.meta.env.BASE_URL;
  const svgPath = "M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z";
  return (
    <main id="main-content">
      <Helmet>
        <title>Shaking Things Up: The New Age of Salt | Impulse Digital</title>
        <meta name="description" content="A sharper view of how salt could evolve from a commodity staple into a platform for premiumization, communication, and product innovation." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/shaking-things-up/" />
        <meta property="og:title" content="Shaking Things Up: The New Age of Salt | Impulse Digital" />
        <meta property="og:description" content="A sharper view of how salt could evolve from a commodity staple into a platform for premiumization, communication, and product innovation." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/images/case-study-image/salt/shaking-things-up.png" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies/shaking-things-up/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shaking Things Up: The New Age of Salt | Impulse Digital" />
        <meta name="twitter:description" content="A sharper view of how salt could evolve from a commodity staple into a platform for premiumization, communication, and product innovation." />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/images/case-study-image/salt/shaking-things-up.png" />
        <meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Shaking Things Up</h1>
          <h2 className="cs-hero-subtitle">The New Age of Salt</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}images/case-study-image/salt/shaking-things-up.png`} alt="Shaking Things Up - Impulse Digital Marketing Case Study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start" style={{ paddingBottom: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          A mature staple category began showing early signals of transformation, with consumers moving beyond price and habit toward health, premium cues, provenance, and benefit-led choices.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          The opportunity was to decode where future category growth could emerge without forcing innovation too far from everyday kitchen relevance.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          The lens expanded beyond the salt shelf, bringing in adjacent daily-use categories to identify new value creation possibilities.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '4rem', lineHeight: 1.6 }}>
          What emerged was a sharper view of how salt could evolve from a commodity staple into a platform for premiumization, communication, and product innovation.
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <DownloadCaseStudyForm ctaText="Access the full case study to see where the next growth wave in salt could come from." pdfLink={`${base}images/case-study-image/salt/shaking-things-up.png`} />
      </section>
    </main>
  );
};
export default SaltCaseStudy;
