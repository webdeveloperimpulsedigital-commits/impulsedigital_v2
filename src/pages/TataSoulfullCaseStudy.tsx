import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';
import DownloadCaseStudyForm from '../components/DownloadCaseStudyForm';

const TataSoulfullCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);
  const base = import.meta.env.BASE_URL;

  return (
    <main id="main-content">
      <Helmet>
        <title>The Next Bite: Decoding India’s Health Snacking Bar Consumer | Impulse Digital</title>
        <meta name="description" content="Decoding what drives trial, repeat purchase, and how the category could stretch from functional fuel to mainstream snacking." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/tata-soulfull/" />
        <meta property="og:title" content="The Next Bite: Decoding India’s Health Snacking Bar Consumer | Impulse Digital" />
        <meta property="og:description" content="Decoding what drives trial, repeat purchase, and how the category could stretch from functional fuel to mainstream snacking." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/images/case-study-image/tata-soulfull/Generated image 1.png" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies/tata-soulfull/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">The Next Bite</h1>
          <h2 className="cs-hero-subtitle">Decoding India’s Health Snacking Bar Consumer</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}images/case-study-image/tata-soulfull/Generated%20image%201.png`} alt="Tata Soulfull - Impulse Digital Marketing Case Study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start" style={{ paddingBottom: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          India’s health snacking bar category sits at the intersection of nutrition, taste, convenience, and trust.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          While consumers enter the category with better-for-you intent, their actual choices are shaped by flavour, texture, indulgence, protein cues, and everyday usage moments.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          The project decoded what drives trial, what builds repeat purchase, and where the category could stretch from functional fuel to mainstream snacking.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '4rem', lineHeight: 1.6 }}>
          The result was a clearer view of how brands can build relevance in a space where health creates permission, but taste creates commitment.
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <DownloadCaseStudyForm ctaText="Access the full case study to understand what could shape the next bite in health snacking." pdfLink={`${base}images/case-study-image/tata-soulfull/Generated%20image%201.png`} />
      </section>
    </main>
  );
};
export default TataSoulfullCaseStudy;
