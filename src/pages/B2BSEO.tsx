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

import { b2bSEOData as data } from '../data/b2bSEOData';


const B2BSEO: React.FC = () => {
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
        <title>Top B2B SEO Agency & Results-Driven B2B SEO Company in Mumbai</title>
<meta name="description" content="Impulse Digital is a leading B2B SEO agency in Mumbai helping brands generate qualified leads through data-driven strategy, technical SEO, and authority building. Partner with a trusted B2B SEO company focused on long-term ROI. " />
<meta name="keywords" content="b2b seo services, mumbai, india, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/b2b-seo/" />
<meta property="og:title" content="Top B2B SEO Agency & Results-Driven B2B SEO Company in Mumbai " />
<meta property="og:description" content="Impulse Digital is a leading B2B SEO agency in Mumbai helping brands generate qualified leads through data-driven strategy, technical SEO, and authority building. Partner with a trusted B2B SEO company focused on long-term ROI. " />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/search-engine-optimization/b2b-seo-services/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Top B2B SEO Agency & Results-Driven B2B SEO Company in Mumbai " />
<meta name="twitter:description" content="Impulse Digital is a leading B2B SEO agency in Mumbai helping brands generate qualified leads through data-driven strategy, technical SEO, and authority building. Partner with a trusted B2B SEO company focused on long-term ROI. " />
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
      
      {data.uses && <ServiceUses data={data.uses} />}
      <ServiceHandoff />
      
      {/* CHANNELS */}
      {data.channels && <ServiceTextList data={data.channels} />}

      <ServiceHandoff />
      
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands Where Every Enquiry Counts" />
      
      <Testimonials />
      <ServiceHandoff />
      
      {data.fit && <ServiceFit data={data.fit} />}
      <ServiceHandoff />
      
      {data.finalCta && <ServiceFinalCTA data={data.finalCta} />}
      <Contact title="Let’s make search<br/>earn the first yes." />
      {data.faq && data.faq.items.length > 0 && <ServiceFAQ data={data.faq} />}
    </main>
  );
};

export default B2BSEO;
