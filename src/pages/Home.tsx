import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Logos from '../components/Logos';
import BrandFilm from '../components/BrandFilm';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    const { ScrollTrigger } = window as any;
    // Re-initialize GSAP DOM animations specifically for the Home page
    // when navigating back from a Service page
    if (typeof window !== 'undefined' && (window as any).initHomeDOMAnimations) {
      setTimeout(() => {
        (window as any).initHomeDOMAnimations();
      }, 100); // Slight delay to ensure DOM is fully painted
    }

    return () => {
      // Cleanup Home page specific ScrollTriggers when navigating away
      if (ScrollTrigger) {
        // Kill triggers associated with home page elements to prevent memory leaks
        // and duplicate animations on re-entry.
        ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger && (t.trigger.closest('#cases-pin') || t.trigger.closest('.scrub-item') || t.trigger.closest('.logos') || t.trigger.closest('#connect'))) {
            t.kill();
          }
        });
      }
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>Best Digital Marketing Agency in Mumbai | Impulse Digital</title>
<meta name="description" content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more." />
<meta name="keywords" content="digital marketing agency in mumbai, digital marketing company, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/" />
<meta property="og:title" content="Best Digital Marketing Agency in Mumbai | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:url" content="https://www.theimpulsedigital.com" />
<meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <CaseStudies />
      <Logos />
      <BrandFilm />
      <Services />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
