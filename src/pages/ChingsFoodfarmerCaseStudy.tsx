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
            xnQsjsdp: 'c48029f70df3f1877e963bc81f3d76a14b91ccc65be08d2e9eae9e4cdce52fa9',
            xmIwtLD: 'b69341e189cd0a2b9cc3c520ec842367e7449a9ced8114027e9185808f5d3ae40ab35617d064f58a7869e22229ba66b5',
            leadSource: 'chings-foodfarmer',
            analyticsRid: '82f24e9e22695c08bbd304295d0465ed6497c3cb2f9d4871465712e754e98f4e671ff7c6e4514f83d238fc1a8564c6e2gid5b534e3754c0010fb2197149597fd26b850d21b72adaa20d4c7e6d516b556956gidadc5319bca29d1262562cd2c0b2c63f7dd97bfc9ab4c32fbb60668a3a012a98agid239f85617e029646cca4b608a2e065df4348fde09137641a2e8afff42a98af75',
            analyticsTw: '6194cc9caff9518b6920c8ee6a8e994c91487989be9efce200c8d3fdad2e4763',
            pdfPath: '/case-studies-pdf/chings-foodpharmer-case-study.pdf',
          }}
        />
      </section>
    </main>
  );
};
export default ChingsFoodfarmerCaseStudy;
