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
    "question": "What does Impulse Digital do for brands in Navi Mumbai?",
    "answer": "As a trusted digital marketing agency in Navi Mumbai, Impulse Digital plans and executes digital marketing strategies that align closely with business goals. Our team blends strategy, creative, media, web, content, and analytics to build strong visibility, meaningful engagement, and consistent conversions."
  },
  {
    "question": "How do you create a strategy that matches our goals and timelines?",
    "answer": "We begin with discovery and an audit of your market and current performance, define clear objectives, and build a roadmap that prioritizes actions by expected impact and required effort."
  },
  {
    "question": "Which services can you manage within one engagement?",
    "answer": "We manage performance marketing, search engine optimization, social media, content creation, branding, website design and development, video production, and analytics under one coordinated plan."
  },
  {
    "question": "Do you work only with brands in Navi Mumbai or across regions as well?",
    "answer": "While we are a digital marketing agency in Navi Mumbai, we partner with clients across India and overseas. Our collaborations are supported through shared workspaces, regular reviews, and clear points of contact to ensure seamless communication and execution across regions."
  },
  {
    "question": "How do you measure success and report progress?",
    "answer": "Success is defined through agreed KPIs such as reach, engagement, qualified leads, sales, and return on investment. Dashboards and review calls translate data into actions for the next cycle."
  },
  {
    "question": "How quickly can we expect results after launch?",
    "answer": "Paid campaigns can show early signals within days once tracking is verified, while organic growth builds over weeks and months as technical fixes, content, and community programs take effect."
  },
  {
    "question": "Will you handle content creation and production or do we need other partners?",
    "answer": "Our in-house teams produce copy, design, and video so execution stays consistent with strategy. We can also collaborate with your existing partners where preferred."
  },
  {
    "question": "Can you share case studies and learning resources before we decide?",
    "answer": "Yes. Public case studies and knowledge resources are available, and additional references can be shared on request subject to confidentiality. We can outline expected benchmarks for similar categories."
  },
  {
    "question": "How do you ensure brand safety and data privacy?",
    "answer": "We request only the access required, follow your privacy and compliance policies, and document permissions in the agreement. Creative and placements follow platform guidelines and category norms."
  },
  {
    "question": "How do we get a proposal tailored to our needs?",
    "answer": "As a digital marketing agency in Navi Mumbai, we start by understanding your objectives, timelines, target markets, and any past reports shared through our contact form. We then set up a discovery call and return with a clear plan that outlines scope, milestones, and measurement."
  }
];

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
      <FAQ data={locationFaqs} />
      <Contact />
    </main>
  );
};

export default NaviMumbaiLocation;
