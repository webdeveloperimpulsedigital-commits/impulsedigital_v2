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
    "question": "What services does a digital marketing agency in Thane like Impulse Digital offer?",
    "answer": "Impulse Digital offers a wide range of digital marketing services including Search Engine Optimization (SEO), Social Media Marketing, Website Development, Pay-Per-Click Advertising (PPC), Content Marketing, Branding & Creatives, Employer Branding, and Corporate Communication."
  },
  {
    "question": "Why choose a digital marketing agency based in Thane?",
    "answer": "Choosing a Thane-based agency ensures you work with experts who understand the local market and consumer behavior. Impulse Digital combines local insights with national and international digital strategies to deliver real results."
  },
  {
    "question": "How much experience does Impulse Digital have in digital marketing?",
    "answer": "Impulse Digital brings over 34 years of experience in advertising and marketing. We’ve helped startups, SMEs, and large corporations grow their digital presence with customized, result-driven strategies."
  },
  {
    "question": "What kind of results can clients expect from Impulse Digital?",
    "answer": "Our clients have seen results like a 200-300% increase in organic traffic and 50 to 100+ leads generated per month. We focus on measurable growth, ROI, and long-term brand building."
  },
  {
    "question": "Which industries does Impulse Digital serve?",
    "answer": "We work with clients from a wide range of industries including FMCG, education, manufacturing, real estate, health care, e-commerce, and professional services."
  },
  {
    "question": "Can Impulse Digital work with clients outside of Thane?",
    "answer": "Yes, we work with clients across Mumbai, Pune, and other cities in India. Our team is equipped to manage projects remotely while maintaining seamless communication and performance tracking."
  },
  {
    "question": "How long does it take to see results from digital marketing?",
    "answer": "It depends on the service. SEO typically takes 3 to 6 months to show significant results, while PPC, social media ads, and email marketing can generate leads and traffic in a matter of weeks."
  },
  {
    "question": "Do you offer a free consultation or strategy session?",
    "answer": "Yes, we offer a free consultation to understand your business goals and recommend the best digital marketing strategy tailored to your needs."
  },
  {
    "question": "How is your pricing structured?",
    "answer": "Our pricing is flexible and based on the services required, campaign goals, and business size. We offer customized packages that align with your marketing objectives and budget."
  },
  {
    "question": "Is there a clear process for tracking performance and ROI?",
    "answer": "Absolutely. We provide transparent performance reports using tools like Google Analytics, Search Console, and ad dashboards. You'll always know what’s working, what’s not, and how your investment is performing."
  }
];

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
      <FAQ data={locationFaqs} />
      <Contact />
    </main>
  );
};

export default ThaneLocation;
