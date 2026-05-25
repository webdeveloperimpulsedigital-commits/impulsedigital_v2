import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import CaseStudies from '../components/CaseStudies';
import Logos from '../components/Logos';
import BrandFilm from '../components/BrandFilm';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const locationFaqs = [
  {
    "question": "What does it mean that Impulse Digital is a growth partner rather than a vendor?",
    "answer": "As a leading digital marketing agency in Pune, it means we work as an extension of your team, aligning strategy and execution with your goals and sharing responsibility for outcomes. Collaboration, transparency, and measurable progress drive every decision."
  },
  {
    "question": "How do you build a strategy that fits my brand and market?",
    "answer": "We begin with discovery and a performance audit, define clear objectives, and map audience journeys. From there we create a test and learn roadmap that prioritizes initiatives by impact and effort."
  },
  {
    "question": "How will success be measured and reported to us?",
    "answer": "At our digital marketing agency in Pune, we set KPIs at the start and track visibility, engagement, conversions, and return on investment. Dashboards and review calls convert the data into actions for the next cycle."
  },
  {
    "question": "Do you serve only Pune based businesses or work across regions as well?",
    "answer": "While we are a digital marketing company in Pune, we support clients across India and overseas. Our delivery models remain flexible so collaboration stays smooth regardless of location."
  },
  {
    "question": "What services can you manage under one engagement?",
    "answer": "We offer performance marketing, search engine optimization, social media, content, branding, website design and development, video production, and analytics. You can choose full service or project based support."
  },
  {
    "question": "How soon can we expect results from a new engagement?",
    "answer": "Paid campaigns can show directional signals within days once tracking is verified. Organic growth compounds over weeks and months as technical and content improvements take effect."
  },
  {
    "question": "What does the process look like from first call to launch?",
    "answer": "We align on goals, run an audit, agree on a plan with milestones, set up tracking, and prepare creative and landing experiences. Launch follows a quality checklist so that data and delivery are reliable from day one."
  },
  {
    "question": "Can you share case studies and references before we decide?",
    "answer": "Yes. As a transparent digital marketing company in Pune, we provide public case studies and can share additional references on request, subject to confidentiality terms."
  }
];

const PuneLocation: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    
    // Re-initialize GSAP DOM animations specifically for the page
    if (typeof window !== 'undefined' && (window as any).initHomeDOMAnimations) {
      setTimeout(() => {
        (window as any).initHomeDOMAnimations();
      }, 100); // Slight delay to ensure DOM is fully painted
    }

    return () => {
      document.body.classList.remove('service-page');
      const { ScrollTrigger } = window as any;
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger && (t.trigger.closest('.scrub-item') || t.trigger.closest('.logos') || t.trigger.closest('#connect') || t.trigger.closest('#cases-pin'))) {
            t.kill();
          }
        });
      }
    };
  }, []);

  const headline = `Digital Marketing Agency in Pune`;
  const description = `The digital world is growing rapidly, and your brand deserves to stand out. At Impulse Digital, we’re more than just a digital marketing agency, we’re growth partners for brands. We don’t believe in being a mere vendor, we believe in being collaborators. By investing in understanding your industry, challenges, and vision, we create strategies that drive measurable results. As a trusted digital marketing agency in Pune, we simplify the complexities of the digital landscape, helping businesses boost visibility, engage meaningfully, and scale confidently.`;

  return (
    <main id="main-content">
      <Helmet>
        <title>Best Digital Marketing Agency in Pune | SEO Company | Impulse Digital</title>
<meta name="description" content="Impulse Digital is best digital marketing agency in Pune that helps you build your own online space. Do not Google for digital marketing solutions, just Impulse Digital. Cause even if do Google anything similar to best digital marketing company in Pune, the chances are high that you might land on this page." />
<meta name="keywords" content="digital marketing agency in pune, digital marketing company, digital marketing service, pune, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/digital-marketing-agency-in-pune/" />
<meta property="og:title" content="Best Digital Marketing Agency in Pune | SEO Company | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is the best digital marketing agency in Pune that helps you build your own online space. Do not Google for digital marketing solutions, just Impulse Digital. Cause even if do Google anything similar to best digital marketing company in Pune, the chances are high that you might land on this page." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/impulse-logo.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/digital-marketing-agency-in-pune/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Best Digital Marketing Agency in Pune | SEO Company | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is the best digital marketing agency in Pune that helps you build your own online space. Do not Google for digital marketing solutions, just Impulse Digital. Cause even if do Google anything similar to best digital marketing company in Pune, the chances are high that you might land on this page." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/impulse-logo.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      <ServiceHero 
        headlineParts={[headline]}
        headlineAccent="Pune"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Trusted by Teams in Pune & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ data={locationFaqs} />
      <Contact />
    </main>
  );
};

export default PuneLocation;
