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
  ServiceGuardrails,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ
} from '../components/Service/ServiceTemplate';

import { videoProductionData } from '../data/videoProductionData';

const VideoProduction: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    
    return () => {
      document.body.classList.remove('service-page');
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>Video Production Company in Mumbai | Production Agency | Impulse Digital</title>
<meta name="description" content="Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact." />
<meta name="keywords" content="video production company in mumbai, video production agency in mumbai, video production services, india, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/video-production/" />
<meta property="og:title" content="Video Production Company in Mumbai | Production Agency | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact." />
<meta property="og:image" content="https://www.theimpulsedigital.com/video-production.jpg" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/video-production/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Video Production Company in Mumbai | Production Agency | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/video-production.jpg" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      
      <ServiceHero 
        headlineParts={videoProductionData.hero.headlineParts}
        headlineAccent={videoProductionData.hero.headlineAccent}
        description={videoProductionData.hero.description}
        buttons={videoProductionData.hero.buttons}
      />

      <ServiceStats data={videoProductionData.stats} />

      <ServiceHandoff />
      
      <ServiceProblem data={videoProductionData.problem} />
      <ServiceHandoff />
      
      <ServiceVs data={videoProductionData.vs} />
      <ServiceHandoff />
      
      <ServiceUses data={videoProductionData.uses} />
      <ServiceHandoff />
      
      <ServiceWhenToUse data={videoProductionData.whenToUse} />
      <ServiceHandoff />

      <ServiceGuardrails data={videoProductionData.guardrails} />
      <ServiceHandoff />

      <ServiceProcess data={videoProductionData.process} />
      
      <Logos title="Trusted by Teams That Want the Story to Survive the Scroll" />
      
      <Testimonials />
      <ServiceHandoff />
      
      <ServiceFit data={videoProductionData.fit} />
      <ServiceHandoff />
      
      <ServiceFinalCTA data={videoProductionData.finalCta} />
      <Contact title="Let’s turn the message<br/>into a memory." />
      <ServiceFAQ data={videoProductionData.faq} />
    </main>
  );
};

export default VideoProduction;
