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
        <title>The Next Bite: Decoding India's Health Snacking Bar Consumer | Impulse Digital</title>
        <meta name="description" content="Decoding what drives trial, repeat purchase, and how the category could stretch from functional fuel to mainstream snacking." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/tata-soulfull/" />
        <meta property="og:title" content="The Next Bite: Decoding India's Health Snacking Bar Consumer | Impulse Digital" />
        <meta property="og:description" content="Decoding what drives trial, repeat purchase, and how the category could stretch from functional fuel to mainstream snacking." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/images/case-study-image/tata-soulfull/Generated image 1.png" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies/tata-soulfull/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">The Next Bite</h1>
          <h2 className="cs-hero-subtitle">Decoding India's Health Snacking Bar Consumer</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}images/case-study-image/tata-soulfull/Generated%20image%201.png`} alt="Tata Soulfull - Impulse Digital Marketing Case Study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start" style={{ paddingBottom: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          India's health snacking bar category sits at the intersection of nutrition, taste, convenience, and trust.
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
        <DownloadCaseStudyForm
          ctaText="Access the full case study to understand what could shape the next bite in health snacking."
          zoho={{
            formId: '1132219000001842099',
            xnQsjsdp: 'c439e8a9342b510d57769ee5478a35c4a3b2c3c5c6e14af7c0a2357f8dcac648',
            xmIwtLD: 'd45ce7c6d5b19944f611dae8e043c576f152477e93d1323d24d9ed33b79a3dc3f57010284d945ad457fceb3707e4d0c7',
            leadSource: 'tata-soulfull',
            analyticsRid: '7e7926dc9b08e96be554d07e89b470260f167b25c215e5f8218d69c90f66034e77e9c221bdfc302e1e6a9cd1393ca832gidc1e5b1727e8c9ab357fa5f2f48426d006b116fc20a9efe91d11f6e68e13dbffbgidb75dda681dc9577cb244a78432768d38878d86cd0306686fa977cae36b903384gid191293ecbce15db510876169567eced4dae96ee476dd7739ccd279dfd99052e5',
            analyticsTw: 'cd1f12e6e12b106883e521d24a6c077ecb0bc8f0bc8a56cfae7a7c6b67a89778',
            websiteRequired: true,
            pdfPath: '/case-studies-pdf/Snacking Bar Case Study - Tata Soulful.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default TataSoulfullCaseStudy;
