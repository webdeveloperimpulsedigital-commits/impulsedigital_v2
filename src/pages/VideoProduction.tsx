import { Helmet } from 'react-helmet-async';
import React from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

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
  useServicePageBackground();

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
<meta property="og:image" content="https://www.theimpulsedigital.com/video-production.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/video-production/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Video Production Company in Mumbai | Production Agency | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/video-production.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      


      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/#service","name":"Video Production Services","url":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/","description":"Impulse Digital provides video production services including brand films, corporate videos, product videos, explainer videos, testimonial videos, event videos, animation, motion graphics, and short-form video content.","serviceType":["Video Production","Brand Films","Corporate Videos","Product Videos","Explainer Videos","Testimonial Videos","Event Videos","Animation","Motion Graphics","Short-Form Video Content"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","@id":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/#faq","url":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/","mainEntity":[{"@type":"Question","name":"What does Video Production include?","acceptedAnswer":{"@type":"Answer","text":"Video Production can include concept development, scripting, storyboarding, shoot planning, filming, editing, motion graphics, sound design, subtitles, format adaptation, AI cinematic production, and platform-ready delivery."}},{"@type":"Question","name":"What kind of videos can Impulse Digital create?","acceptedAnswer":{"@type":"Answer","text":"We can create brand films, digital video commercials, concept videos, product videos, service explainers, testimonial videos, reels, social media videos, campaign films, website videos, and AI cinematic productions."}},{"@type":"Question","name":"Is this only for social media videos?","acceptedAnswer":{"@type":"Answer","text":"No. Social media video is one part of the service. The larger focus is video production for brand communication, campaigns, DVCs, concepts, products, websites, social media, and digital distribution."}},{"@type":"Question","name":"Do you handle scripting and concepts?","acceptedAnswer":{"@type":"Answer","text":"Yes. We can build the concept, script, storyboard, visual treatment, shot list, and production plan before filming or editing begins."}},{"@type":"Question","name":"Do you manage shoots?","acceptedAnswer":{"@type":"Answer","text":"Yes. We can manage product shoots, brand shoots, interviews, lifestyle shoots, testimonials, location shoots, and content shoots with the required crew and planning."}},{"@type":"Question","name":"Can you work with existing footage?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you already have footage, we can shape it through editing, storytelling, sound, graphics, subtitles, cutdowns, and platform adaptations."}},{"@type":"Question","name":"What is AI Cinematic Production?","acceptedAnswer":{"@type":"Answer","text":"AI Cinematic Production uses AI tools to create scenes, visual worlds, cinematic shots, animated sequences, and concept-led films faster. The creative direction, judgment, story, and final quality control remain human-led."}},{"@type":"Question","name":"How do you tailor videos for different platforms?","acceptedAnswer":{"@type":"Answer","text":"We adapt pacing, aspect ratio, hook, edit length, subtitle style, thumbnail, title, and format based on whether the video is meant for Instagram, YouTube, LinkedIn, paid ads, websites, or sales journeys."}},{"@type":"Question","name":"How do you measure video performance?","acceptedAnswer":{"@type":"Answer","text":"We look at watch time, retention, completion rate, engagement, clicks, enquiries, audience response, and what each video teaches the next one."}},{"@type":"Question","name":"Is Video Production right for every brand?","acceptedAnswer":{"@type":"Answer","text":"It is right when your brand needs an idea to be seen, understood, remembered, and acted on. If the goal is only to produce more content without a clear thought, this is not the right fit."}}]}) }} />
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
