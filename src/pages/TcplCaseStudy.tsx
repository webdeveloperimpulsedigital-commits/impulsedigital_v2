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
            xnQsjsdp: '3de682f589787613bdcdf4cb27278b8ea922155a0c3bc970f8d43b0b2b1e2e68',
            xmIwtLD: 'ffe6d2e98c5a480b1fd1f18887232a8f6229e9373732551868ad41d7620c24e24d332c626d5a9ac5301e4a68422d5962',
            leadSource: 'tcpl',
            analyticsRid: '12ded64395a2a19783e561f2687a280aefa272d61d78679f9bdc1ade459b3feea3c2fba6d812d7ab85532e0cdd3efe83gid40d5c7211b0f8192e229740875451256e4053bf22edb00c112a3667131f78795gid06d611af6010cb7a5cc6f7fbe3e90f12b603213ef05788d2f36177635e3f5dd4gid1804cef848911cecded5f77287b5e716009e21c1a493dc5e962bf472873c80aa',
            analyticsTw: '13ef263429f98e6c193774f2cd8e04414db1cd428b8c7759ba8d5a739a8eea76',
            pdfPath: '/case-studies-pdf/US AUS fod trends.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default TcplCaseStudy;
