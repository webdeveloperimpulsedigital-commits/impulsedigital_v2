import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import { 
  ServiceProblem, 
  ServiceVs, 
  ServiceUses, 
  ServiceProcess, 
  ServiceFit, 
  ServiceFinalCTA, 
  ServiceFAQ, 
  ServiceStats,
  ServiceTextList,
  ServiceWhenToUse,
  ServiceGuardrails
} from '../components/Service/ServiceTemplate';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { localSEOData as data } from '../data/localSEOData';

const LocalSEO: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('service-page', 'seo-page');

    return () => {
      document.body.classList.remove('service-page', 'seo-page');
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>Local SEO Services in Mumbai | Local SEO Agency</title>
<meta name="description" content="Impulse Digital is one of the best local SEO company in Mumbai that offers end to end local SEO services in Mumbai, India. At Impulse Digital, we fuel all your local SEO dreams and bring them to life. We strive to offer you the local SEO services that promote all your business locations optimally." />
<meta name="keywords" content="local seo services in mumbai, local seo company in mumbai, local seo agency in mumbai, local search engine optimization services, india, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/services/search-engine-optimization/local-seo-services/" />
<meta property="og:title" content="Local SEO Services in Mumbai | Local SEO Agency" />
<meta property="og:description" content="Impulse Digital is one of the best local SEO company in Mumbai that offers end to end local SEO services in Mumbai, India. At Impulse Digital, we fuel all your local SEO dreams and bring them to life. We strive to offer you the local SEO services that promote all your business locations optimally." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/search-engine-optimization/local-seo-services/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Local SEO Services in Mumbai | Local SEO Agency" />
<meta name="twitter:description" content="Impulse Digital is one of the best local SEO company in Mumbai that offers end to end local SEO services in Mumbai, India. At Impulse Digital, we fuel all your local SEO dreams and bring them to life. We strive to offer you the local SEO services that promote all your business locations optimally." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <ServiceHero 
        headlineHtml={data.hero.headlineHtml}
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />

      {data.stats && <ServiceStats data={data.stats} />}
      <ServiceHandoff />
      
      {data.problem && <ServiceProblem data={data.problem} />}
      <ServiceHandoff />
      
      {data.vs && <ServiceVs data={data.vs} />}
      <ServiceHandoff />

      {/* CHANNELS Section */}
      {data.channels && <ServiceTextList data={data.channels} />}
      <ServiceHandoff />

      {/* Connected Systems */}
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />
      
      {data.guardrails && (
        <>
          <ServiceGuardrails data={data.guardrails} />
          <ServiceHandoff />
        </>
      )}

      {/* @ts-ignore */}
      {(data as any).uses && (
        <>
          <ServiceUses data={(data as any).uses} />
          <ServiceHandoff />
        </>
      )}

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands That Need Local Search to Bring People In" />
      
      <Testimonials />
      <ServiceHandoff />
      
      <ServiceFit data={data.fit} />
      <ServiceHandoff />

      <ServiceFinalCTA data={data.finalCta} />
      <Contact title="Let’s make<br/>&ldquo;near me&rdquo; lead to you" />
      <ServiceFAQ data={data.faq} />
    </main>
  );
};

export default LocalSEO;
