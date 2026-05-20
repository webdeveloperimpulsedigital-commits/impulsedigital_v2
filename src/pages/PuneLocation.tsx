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
      <FAQ />
      <Contact />
    </main>
  );
};

export default PuneLocation;
