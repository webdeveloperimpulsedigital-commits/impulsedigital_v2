import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';
import DownloadCaseStudyForm from '../components/DownloadCaseStudyForm';

const ChingsKurkureCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);
  const base = import.meta.env.BASE_URL;

  return (
    <main id="main-content">
      <Helmet>
        <title>The Chatpata Test: Decoding Consumer Response to the Kurkure x Ching’s Launch | Impulse Digital</title>
        <meta name="description" content="Decoding public response across search and social, reading sentiment, flavour expectations, celebrity impact, and brand recall signals." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/chings-kurkure/" />
        <meta property="og:title" content="The Chatpata Test: Decoding Consumer Response | Impulse Digital" />
        <meta property="og:description" content="Decoding public response across search and social, reading sentiment, flavour expectations, celebrity impact, and brand recall signals." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/images/case-study-image/chings-%20kurkure/CHing+Kurkure.png" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies/chings-kurkure/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">The Chatpata Test</h1>
          <h2 className="cs-hero-subtitle">Decoding Consumer Response to the Kurkure x Ching’s Launch</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}images/case-study-image/chings-%20kurkure/CHing+Kurkure.png`} alt="Kurkure x Ching's - Impulse Digital Marketing Case Study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start" style={{ paddingBottom: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          A high-energy flavour collaboration sparked strong consumer chatter, but the strategic question went beyond campaign buzz.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          The real issue was ownership: what consumers remembered, which brand carried the conversation, and how the partnership could create longer-term momentum.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          The project decoded public response across search and social, reading sentiment, flavour expectations, celebrity impact, and brand recall signals.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '4rem', lineHeight: 1.6 }}>
          It revealed how a successful launch moment could be extended into a sharper campaign platform with stronger participation and clearer brand roles.
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <DownloadCaseStudyForm ctaText="Access the full case study to see what consumers really heard, remembered, and wanted next." pdfLink={`${base}images/case-study-image/chings-%20kurkure/CHing+Kurkure.png`} />
      </section>
    </main>
  );
};
export default ChingsKurkureCaseStudy;
