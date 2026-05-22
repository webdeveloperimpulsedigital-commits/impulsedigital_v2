import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceHero from '../../components/Service/ServiceHero';
import CaseStudies from '../../components/CaseStudies';
import Logos from '../../components/Logos';
import BrandFilm from '../../components/BrandFilm';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import SEOLocationTemplate from '../../components/Service/SEOLocationTemplate';
import { seoMulundData } from '../../data/seoMulundData';

const SeoMulundLocation: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    if (typeof window !== 'undefined' && (window as any).initHomeDOMAnimations) {
      setTimeout(() => {
        (window as any).initHomeDOMAnimations();
      }, 100);
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

  const { hero } = seoMulundData;

  return (
    <main id="main-content">
      <Helmet>
        <title>{`SEO Company in Mulund | SEO Services | Impulse Digital`}</title>
        <meta name="description" content={`Impulse Digital is an SEO company in Mulund offering SEO services that help businesses improve website rankings, reach local audiences and build long-term digital growth.`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/${"mulund"}/`} />
      </Helmet>

      <ServiceHero 
        headlineParts={[hero.headline]}
        headlineAccent="Mulund"
        description={hero.description.join('\n\n')}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title="Trusted by Teams in Mulund & Beyond" />
      <BrandFilm />
      
      <SEOLocationTemplate data={seoMulundData} />

      <Testimonials />
      <Contact />
    </main>
  );
};

export default SeoMulundLocation;
