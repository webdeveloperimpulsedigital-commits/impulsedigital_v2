import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceHero from '../../components/Service/ServiceHero';
import CaseStudies from '../../components/CaseStudies';
import Logos from '../../components/Logos';
import BrandFilm from '../../components/BrandFilm';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import SEOLocationTemplate from '../../components/Service/SEOLocationTemplate';
import { seoAndheriData } from '../../data/seoAndheriData';

const SeoAndheriLocation: React.FC = () => {
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

  const { hero } = seoAndheriData;

  return (
    <main id="main-content">
      <Helmet>
        <title>{`SEO Services in Andheri | SEO Agency | Impulse Digital`}</title>
        <meta name="description" content={`Impulse Digital offers SEO services in Andheri with research-led strategies, technical optimisation, keyword planning and content support to help brands improve online visibility.`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/${"andheri"}/`} />
      </Helmet>

      <ServiceHero 
        headlineParts={[hero.headline]}
        headlineAccent="Andheri"
        description={hero.description.join('\n\n')}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title="Trusted by Teams in Andheri & Beyond" />
      <BrandFilm />
      
      <SEOLocationTemplate data={seoAndheriData} />

      <Testimonials />
      <Contact />
    </main>
  );
};

export default SeoAndheriLocation;
