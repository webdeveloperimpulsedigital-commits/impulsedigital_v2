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

const ThaneLocation: React.FC = () => {
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

  const headline = `Digital Marketing Agency in Thane`;
  const description = `The world has gone digital, and your business shouldn’t be left behind. At Impulse Digital, we’re more than just a digital marketing agency, we’re growth partners for brands that want to make their mark online. Our approach blends data-driven strategies, customer-centric insights, and realistic timelines to ensure your digital presence aligns seamlessly with your business goals. We believe in long-term partnerships over one-time transactions. By deeply understanding our clients’ industries and speaking their language, we design digital strategies that don’t just create noise but deliver measurable results. As a trusted digital marketing agency in Thane, we simplify the ever-expanding digital landscape for our clients, making it easier to boost visibility, increase engagement, and win on social media. So, why keep searching for digital marketing solutions when the answer is right here? Choose Impulse Digital, your Digital Marketing Agency in Thane.`;

  return (
    <main id="main-content">
      <Helmet>
        <title>Digital Marketing Agency in Thane | SEO Company | Impulse Digital</title>
<meta name="description" content="Impulse Digital is a leading digital marketing agency in Thane serving large and small businesses with their customer and sales-driven marketing solutions. Our expert team of digital marketers are well-equipped with market insights that help them design digital marketing strategies and solutions that help you stand out of the competition." />
<meta name="keywords" content="digital marketing agency in thane, digital marketing company, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/digital-marketing-agency-in-thane/" />
<meta property="og:title" content="Digital Marketing Agency in Thane | SEO Company | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a leading digital marketing agency in Thane serving large and small businesses with their customer and sales-driven marketing solutions. Our expert team of digital marketers are well-equipped with market insights that help them design digital marketing strategies and solutions that help you stand out of the competition." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/mumbai-img/digital-marketing-company-in-thane.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/digital-marketing-agency-in-thane/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Digital Marketing Agency in Thane | SEO Company | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a leading digital marketing agency in Thane serving large and small businesses with their customer and sales-driven marketing solutions. Our expert team of digital marketers are well-equipped with market insights that help them design digital marketing strategies and solutions that help you stand out of the competition." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/mumbai-img/digital-marketing-company-in-thane.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      <ServiceHero 
        headlineParts={[headline]}
        headlineAccent="Thane"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Trusted by Teams in Thane & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default ThaneLocation;
