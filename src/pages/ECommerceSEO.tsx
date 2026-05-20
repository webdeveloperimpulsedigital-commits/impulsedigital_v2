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
  ServiceWhenToUse,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ,
  ServiceTextList
} from '../components/Service/ServiceTemplate';

import { ecommerceSEOData as data } from '../data/ecommerceSEOData';


const ECommerceSEO: React.FC = () => {
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
        <title>eCommerce SEO Services in Mumbai | e Commerce SEO Agency</title>
<meta name="description" content="Impulse Digital is a trusted ecommerce SEO agency offering result-driven ecommerce SEO service in Mumbai. We help online brands increase visibility, attract qualified traffic, and drive higher conversions through e commerce SEO." />
<meta name="keywords" content="ecommerce seo services, ecommerce seo company, agency, e commerce, mumbai, ecommerce search engine optimization services, impulse digital, india" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/ecommerce-seo/" />
<meta property="og:title" content="eCommerce SEO Services in Mumbai | e Commerce SEO Agency" />
<meta property="og:description" content="Impulse Digital is a trusted ecommerce SEO agency offering result-driven ecommerce SEO service in Mumbai. We help online brands increase visibility, attract qualified traffic, and drive higher conversions through e commerce SEO." />
<meta property="og:image" content="https://www.theimpulsedigital.com/ecommerce%20About%20service%20-%20%20451%20x%20500.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/search-engine-optimization/ecommerce-seo-services/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="eCommerce SEO Services in Mumbai | e Commerce SEO Agency" />
<meta name="twitter:description" content="Impulse Digital is a trusted ecommerce SEO agency offering result-driven ecommerce SEO service in Mumbai. We help online brands increase visibility, attract qualified traffic, and drive higher conversions through e commerce SEO." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/ecommerce%20About%20service%20-%20%20451%20x%20500.webp" />
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
      
      {/* CHANNELS */}
      {data.channels && <ServiceTextList data={data.channels} />}

      <ServiceHandoff />
      
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands That Know Traffic Is Not the Sale" />
      
      <Testimonials />
      <ServiceHandoff />
      
      {data.fit && <ServiceFit data={data.fit} />}
      <ServiceHandoff />
      
      {data.finalCta && <ServiceFinalCTA data={data.finalCta} />}
      <Contact title="Let's make search<br/>sell harder." />
      {data.faq && data.faq.items.length > 0 && <ServiceFAQ data={data.faq} />}
    </main>
  );
};

export default ECommerceSEO;
