import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

import {
  ServiceStats,
  ServiceProblem,
  ServiceVs,
  ServiceUses,
  ServiceWhenToUse,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ,
  ServiceTextList
} from '../components/Service/ServiceTemplate';

import { enterpriseSEOData as data } from '../data/enterpriseSEOData';


const EnterpriseSEO: React.FC = () => {
  useEffect(() => {
    // We use the 'seo-page' class to share the same styling as standard SEO
    document.body.classList.add('service-page', 'seo-page');
    
    return () => {
      document.body.classList.remove('service-page', 'seo-page');
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>Best Enterprise SEO Service | Enterprise SEO Agency</title>
<meta name="description" content="Impulse Digital is a leading enterprise SEO agency delivering result-driven enterprise SEO service in India with strategic content, technical optimization, and proven expertise to grow large-scale businesses online." />
<meta name="keywords" content="enterprise seo services, enterprise seo agency, enterprise seo company, mumbai, india, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/enterprise-seo/" />
<meta property="og:title" content="Best Enterprise SEO Service | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a leading enterprise SEO agency delivering result-driven enterprise SEO service in India with strategic content, technical optimization, and proven expertise to grow large-scale businesses online." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/search-engine-optimization/enterprise-seo-services/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Best Enterprise SEO Service | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a leading enterprise SEO agency delivering result-driven enterprise SEO service in India with strategic content, technical optimization, and proven expertise to grow large-scale businesses online." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <ServiceHero 
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
      
      {/* @ts-ignore */}
      {(data as any).uses && <ServiceUses data={(data as any).uses} />}
      <ServiceHandoff />
      
      {/* CHANNELS */}
      {data.channels && <ServiceTextList data={data.channels} />}

      <ServiceHandoff />
      
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands That Need Search to Work at Scale" />
      
      <Testimonials />
      <ServiceHandoff />
      
      {data.fit && <ServiceFit data={data.fit} />}
      <ServiceHandoff />
      
      {data.finalCta && <ServiceFinalCTA data={data.finalCta} />}
      <Contact title="Let’s stop scale from<br/>confusing the sale." />
      {data.faq && data.faq.items.length > 0 && <ServiceFAQ data={data.faq} />}
    </main>
  );
};

export default EnterpriseSEO;
