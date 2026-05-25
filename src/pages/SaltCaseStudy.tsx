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
        <DownloadCaseStudyForm
          ctaText="Access the full case study to see where the next growth wave in salt could come from."
          zoho={{
            formId: '1132219000001842110',
            xnQsjsdp: '1c10ae81e1b13384f80c2767b6cd47385fcfe946af467a6837b9a91aeba38b0c',
            xmIwtLD: 'd2a6f12cd876bab4b99b30e786110e33f8168c970704f8b2493bf4343660c95120a38e1f2a4b4d7e563e79e2053c1b5f',
            leadSource: 'shaking-things-up',
            analyticsRid: '7b7522e42e9cd57f901de0b51aa1ff54a140b100745b947b4fe128ca3213744306785c06cbc919345d5f70c4f2a52ac6gid157c460e6bf41c2fe9c14682fc1bf282ab6d5e4b62800fc7509a13028a39372cgid3e9b4f5cd564ded0c02e6aa2806ce33468341067f4858bf2ff8389d841e3874egida64e3c5c0b386e5628e527f6154adbf12ed92c7447046a6189a53c87956faba9',
            pdfPath: '/case-studies-pdf/salt+tata.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default SaltCaseStudy;
