import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';
import DownloadCaseStudyForm from '../components/DownloadCaseStudyForm';

const TcplCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);
  const base = import.meta.env.BASE_URL;

  return (
    <main id="main-content">
      <Helmet>
        <title>From Diaspora Demand to Market Launch: Mapping Indian Snacks & Desserts for Australia and the US | Impulse Digital</title>
        <meta name="description" content="Identifying which products had the strongest market readiness, portfolio fit, and repeatable demand potential for Australia and the US." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/tcpl/" />
        <meta property="og:title" content="From Diaspora Demand to Market Launch | Impulse Digital" />
        <meta property="og:description" content="Identifying which products had the strongest market readiness, portfolio fit, and repeatable demand potential for Australia and the US." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/images/case-study-image/tcpl/AUS_us.png" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies/tcpl/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">From Diaspora Demand to Market Launch</h1>
          <h2 className="cs-hero-subtitle">Mapping Indian Snacks & Desserts for Australia and the US</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}images/case-study-image/tcpl/AUS_us.png`} alt="TCPL - Impulse Digital Marketing Case Study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start" style={{ paddingBottom: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          Indian snacks and desserts are moving from diaspora nostalgia into a more structured international growth opportunity.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          For Australia and the US, the challenge was to identify which products had the strongest market readiness, portfolio fit, and repeatable demand potential.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          The project separated broad cultural familiarity from genuine launch potential, creating a sharper lens across relevance, format, demand, and scalability.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '4rem', lineHeight: 1.6 }}>
          In Australia, select opportunity areas moved into the FY 26-27 MVP pipeline, turning market signals into launch direction.
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <DownloadCaseStudyForm
          ctaText="Access the full case study to see how diaspora demand was translated into a market-entry roadmap."
          zoho={{
            formId: '1132219000001842121',
            xnQsjsdp: '20dbb20a9b894c5ed9ed9a87362b39e6a68f43b048d0a77fd225c9776d0a5e23',
            xmIwtLD: '34d18d74fda9deef11300b92cec09524b0f62e5b0c869cdfd951431fdd254f2e7d740f602502730dce6486edb588fc6b',
            leadSource: 'tcpl',
            analyticsRid: '0e44a44d5101b6010dd8285925542ce7b0b8a88623d04e6c04795152d9f7d7885bc185b4eba85a54d2b80789ad3b4f7egid5b84587bd299c059282bfa96ddbcb8714f0d218337f2f46902e5c9992dd9c218gid98ec56cc67faef4d1944e0353d0424c1987924275ba83e58cd09e08d846e5250gida427bb88a60817c00fcb18ab7ad85e97da242a727cb1a443767773ae3a9992d6',
            pdfPath: '/case-studies-pdf/US AUS fod trends.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default TcplCaseStudy;
