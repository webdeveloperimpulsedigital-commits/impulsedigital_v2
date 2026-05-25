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
            xnQsjsdp: 'd120614e39acaf61192252f796e6ebdec555d799ec29196c0cf55dfcb072a23a',
            xmIwtLD: '939f0b1426f97fa4c0cefb276660a34729e81567da307fce079868ab434659d55be791b964ac392cb10a20d537a5313a',
            leadSource: 'chings-kurkure',
            analyticsRid: 'c00664901f9065d026bdb17e20ebaba86f2c91485ea0ec45f15f3d60107a527ec405f0580f7363413831b8278128e830gideb963ae612abcb94f648329306d922823d2a010c2a137ce667a141d99d219f22gid6b502ccb6e4ce7f70ed39a876d503d8975b4aa571cbecb41c6a39657dcb4995bgid025c5ffcd0156b39d4d8df57119122bb1c84f8193c37bd1b7443f6265af3eb0e',
            pdfPath: '/case-studies-pdf/chings+kurkue.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default ChingsKurkureCaseStudy;
