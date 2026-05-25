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
        <title>The Chatpata Test: Decoding Consumer Response to the Kurkure x Ching's Launch | Impulse Digital</title>
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
          <h2 className="cs-hero-subtitle">Decoding Consumer Response to the Kurkure x Ching's Launch</h2>
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
        <DownloadCaseStudyForm
          ctaText="Access the full case study to see what consumers really heard, remembered, and wanted next."
          zoho={{
            formId: '1132219000001842132',
            xnQsjsdp: '20fff8920bccc5938435eb30c27d84bff5761d19cf5b612763fa514581006399',
            xmIwtLD: 'c1ce63843ad61f48293eaee78c788b8cd0a91cb99e3c22ea5b5acb1717ace9a924bfb7b9f323577170e3f226328f116a',
            leadSource: 'chings-kurkure',
            analyticsRid: '82d726f440493bc3133db56775cd4e26ccc6dbd8d2602ac8fe5ef02b4a4e210153c6f3922f47edff96c82e42fce5ee50gide01635f086e7513c8139d10c620b0f1a656d4d835ecc68c987bb45e297f7e03fgidf97a680f683fb1c42fe9847f8f90937d1ee4a278c812aebc68286f11042b52ccgid6558fd0b01c80f9b666752c12e3f17265ac7496c98fa0e11a634effa49dfdded',
            analyticsTw: 'e9c02442b426b7dc74ebf6208701d32207ee82a0291cf99d873d67fb7920b90b',
            pdfPath: '/case-studies-pdf/chings+kurkue.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default ChingsKurkureCaseStudy;
