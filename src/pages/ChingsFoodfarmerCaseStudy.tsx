import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';
import DownloadCaseStudyForm from '../components/DownloadCaseStudyForm';

const ChingsFoodfarmerCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);
  const base = import.meta.env.BASE_URL;

  return (
    <main id="main-content">
      <Helmet>
        <title>The Reputation Radar: Monitoring Consumer Pulse Before It Becomes Crisis | Impulse Digital</title>
        <meta name="description" content="A command-center approach tracked sentiment, platform narratives, creator influence, and reputational risk signals." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/chings-foodfarmer/" />
        <meta property="og:title" content="The Reputation Radar | Impulse Digital" />
        <meta property="og:description" content="A command-center approach tracked sentiment, platform narratives, creator influence, and reputational risk signals." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/images/case-study-image/chings-foodfarmer/Foodfarmer.png" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/case-studies/chings-foodfarmer/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">The Reputation Radar</h1>
          <h2 className="cs-hero-subtitle">Monitoring Consumer Pulse Before It Becomes Crisis</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}images/case-study-image/chings-foodfarmer/Foodfarmer.png`} alt="Ching's Reputation Radar - Impulse Digital Marketing Case Study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start" style={{ paddingBottom: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          A high-visibility Food Pharmer post created a sensitive online moment where speed, judgment, and restraint all mattered.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          The priority was to understand whether the conversation was escalating, stabilizing, or losing momentum before any response decision was made.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          A four-week command-center approach tracked sentiment, platform narratives, creator influence, comparison behavior, and reputational risk signals.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', marginBottom: '4rem', lineHeight: 1.6 }}>
          The output gave brand and PR teams a clearer basis to decide when to respond, when to monitor, and when silence was strategically stronger.
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <DownloadCaseStudyForm
          ctaText="Access the full case study to see how brands can read the internet before the internet decides for them."
          zoho={{
            formId: '1132219000001842143',
            xnQsjsdp: 'c1c57be7888ea44f63706d8b1db319a544568e6b50948a484470d6fcbcaab749',
            xmIwtLD: '0f6a0f4bc44ffffb9e9664a4cd8cf643191d3e933ecbe731bb776edd992897f17917a77e94ac378b6590528afcbe5b98',
            leadSource: 'chings-foodfarmer',
            analyticsRid: 'bd1f9c2e0662cec515af38b34428c01a582f9087cad353013ace555e45d0d7d7af370aa77ae0eaee0d970c7e871fdd31gid4d5450e0a5b452d58821ac98fd3310aa840ec221f951c991e70d132d9ae72cfcgidd6d1916e281aa5a8bd0139b871d2d53f038708f8178e9765f5c458a6d29b895agid4190898d895c926e7e624429d4379bd59f44598c27d03794cad8500cb452b58c',
            pdfPath: '/case-studies-pdf/chings-foodpharmer-case-study.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default ChingsFoodfarmerCaseStudy;
