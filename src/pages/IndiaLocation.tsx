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

const IndiaLocation: React.FC = () => {
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

  const headline = `Digital Marketing Agency in India`;
  const description = `We help businesses boost their online presence and growth with expert SEO, social media, and paid media strategies. Based in India, we proudly offer top-tier 360° digital marketing services to businesses across the India. Our dedicated team works as an extension of your brand, helping you uncover your unique voice, refine your messaging, and build genuine connections with your audience. What sets us apart as a leading digital marketing agency? It's our ability to combine creativity, strategy, and a client-centric approach to deliver results you can depend on. Our philosophy is simple: your success is our success. Together, we’ll create a digital future where your brand thrives.`;

  return (
    <main id="main-content">
      <Helmet>
        <title>Digital Marketing Agency in India | SEO Company | Impulse Digital</title>
<meta name="description" content="We as a Digital marketing agency in India are Handling plethora of clients which includes OLA, Amazon, HUL, HDFC, Dmart and more big market giants. We are super confident to take off your businesses digital success through our digital marketing strategies which supports your pocket as well. We have our forte and are counted as best digital marketing agency in India and SEO company in India." />
<meta name="keywords" content="digital marketing agency in india, digital marketing company, seo company, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/digital-marketing-agency-in-india/" />
<meta property="og:title" content="Digital Marketing Agency in India | SEO Company | Impulse Digital" />
<meta property="og:description" content="We as a Digital marketing agency in India are Handling plethora of clients which includes OLA, Amazon, HUL, HDFC, Dmart and more big market giants." />
<meta property="og:image" content="https://www.theimpulsedigital.com/impulse-usa-assets/img/industries.jpg" />
<meta property="og:url" content="https://www.theimpulsedigital.com/digital-marketing-agency-in-india/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Digital Marketing Agency in India | SEO Company | Impulse Digital" />
<meta name="twitter:description" content="We help businesses boost their online presence and growth." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/impulse-usa-assets/img/industries.jpg" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      <ServiceHero 
        headlineParts={[headline]}
        headlineAccent="India"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Trusted by Teams in India & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default IndiaLocation;
