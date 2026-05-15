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
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>Home | Impulse Digital</title>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="generator" content="N/A" />

        <meta property="og:title" content="Home | Impulse Digital" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/home" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:creator" content="@impulsedigi" />
        <meta name="twitter:title" content="Home | Impulse Digital" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta name="twitter:url" content="https://www.theimpulsedigital.com/home" />

        <link rel="canonical" href="https://www.theimpulsedigital.com/home" />
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
