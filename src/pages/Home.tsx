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
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com" />
<meta property="og:type" content="website" />
      
<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.theimpulsedigital.com/#organization",
  "name": "Impulse Digital",
  "url": "https://www.theimpulsedigital.com/",
  "logo": "https://www.theimpulsedigital.com/header-logo.png",
  "description": "Impulse Digital is a digital marketing agency offering social media marketing, performance marketing, content, website development, branding, Agentic AI, AI video production, and generative search optimisation services.",
  "telephone": "+91-9769285224",
  "email": "collabs@theimpulsedigital.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "304 - 305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate",
    "addressLocality": "Thane",
    "addressRegion": "Maharashtra",
    "postalCode": "400604",
    "addressCountry": "IN"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "City",
      "name": "Thane"
    },
    {
      "@type": "City",
      "name": "Navi Mumbai"
    },
    {
      "@type": "City",
      "name": "Pune"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/theimpulsedigital",
    "https://twitter.com/impulsedigi",
    "https://www.instagram.com/_impulse_digital/",
    "https://www.linkedin.com/company/impulse-digital-marketing-mumbai",
    "https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9769285224",
    "email": "collabs@theimpulsedigital.com",
    "contactType": "business enquiries",
    "areaServed": "IN",
    "availableLanguage": [
      "English",
      "Hindi"
    ]
  }
}
`}
</script>
<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.theimpulsedigital.com/#webpage",
  "url": "https://www.theimpulsedigital.com/",
  "name": "Impulse Digital: Best Digital Marketing Agency in Mumbai",
  "description": "Impulse Digital is a digital marketing agency helping brands with social media, performance marketing, content, website development, branding, Agentic AI, AI video production, and generative search optimisation.",
  "isPartOf": {
    "@id": "https://www.theimpulsedigital.com/#website"
  },
  "about": {
    "@id": "https://www.theimpulsedigital.com/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.theimpulsedigital.com/header-logo.png"
  },
  "publisher": {
    "@id": "https://www.theimpulsedigital.com/#organization"
  }
}
`}
</script>
<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.theimpulsedigital.com/#website",
  "url": "https://www.theimpulsedigital.com/",
  "name": "Impulse Digital",
  "alternateName": "Impulse Digital Marketing Agency",
  "description": "Impulse Digital is a digital marketing agency offering social media, performance marketing, content, website development, branding, Agentic AI, AI video production, and generative search optimisation services.",
  "publisher": {
    "@id": "https://www.theimpulsedigital.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.theimpulsedigital.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
`}
</script>
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
