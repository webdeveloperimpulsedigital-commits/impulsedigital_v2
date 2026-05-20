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

const NaviMumbaiLocation: React.FC = () => {
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

  const headline = `Digital Marketing Agency in Navi Mumbai`;
  const description = `In today’s fast-paced digital world, your business deserves to shine online. Is your brand missing a powerful digital impact? Are your revenue goals hampered due to a drab marketing strategy? With Impulse Digital, your digital evolution is in the right hands. We are a veteran digital marketing agency in Navi Mumbai with decades of expertise in global marketing. Our team of proficient experts endure 24*7 to see your brand excel in the online landscape. At Impulse Digital, we unleash your business potential to conquer the most challenging goals. As a digital marketing agency in Navi Mumbai, we achieve this by employing thoroughly analysed, cutting-edge digital marketing strategies tailored specifically for your brand. From result-driven SEO strategies and high-performance website development to innovative social media campaigns, PPC, content marketing, employer branding, and more, we seamlessly fulfil all your marketing endeavours within steadfast timelines.`;

  return (
    <main id="main-content">
      <Helmet>
        <title>Digital Marketing Agency in Navi Mumbai | SEO Company | Impulse Digital</title>
<meta name="description" content="Impulse Digital is the best digital marketing agency in Navi Mumbai with decades of expertise in global marketing. Our team of proficient experts endure 24*7 to see your brand excel in the online landscape." />
<meta name="keywords" content="digital marketing agency in navi mumbai, digital marketing company, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/digital-marketing-agency-in-navi-mumbai/" />
<meta property="og:title" content="Digital Marketing Agency in Navi Mumbai | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is the best digital marketing agency in Navi Mumbai with decades of expertise in global marketing." />
<meta property="og:image" content="https://www.theimpulsedigital.com/uploads/images/content/contact.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/digital-marketing-agency-in-navi-mumbai/" />
<meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ServiceHero 
        headlineParts={[headline]}
        headlineAccent="Navi Mumbai"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Trusted by Teams in Navi Mumbai & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default NaviMumbaiLocation;
