import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ConsumerIntelligence from './pages/ConsumerIntelligence';
import MarketIntelligence from './pages/MarketIntelligence';
import AlwaysOnIntelligence from './pages/AlwaysOnIntelligence';
import CampaignIntelligence from './pages/CampaignIntelligence';
import ArcherAI from './pages/ArcherAI';
import AgenticAI from './pages/AgenticAI';
import GenerativeSearchOptimisation from './pages/GenerativeSearchOptimisation';
import SearchEngineOptimisation from './pages/SearchEngineOptimisation';
import Branding from './pages/Branding';
import EmployerBranding from './pages/EmployerBranding';
import SocialMediaManagement from './pages/SocialMediaManagement';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import AIVideoProduction from './pages/AIVideoProduction';
import ECommerceSEO from './pages/ECommerceSEO';
import LocalSEO from './pages/LocalSEO';
import EnterpriseSEO from './pages/EnterpriseSEO';
import B2BSEO from './pages/B2BSEO';
import ServicesIndex from './pages/ServicesIndex';
import CaseStudies from './pages/CaseStudies';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const forceScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      if ((window as any).globalLenis) {
        (window as any).globalLenis.stop();
        (window as any).globalLenis.scrollTo(0, { immediate: true, force: true });
        (window as any).globalLenis.start();
      }
    };

    // Fire immediately
    forceScrollToTop();
    
    // Fire after React finishes DOM mounting to override late-rendering height changes
    setTimeout(forceScrollToTop, 50);
    setTimeout(forceScrollToTop, 150);
    
    // Re-initialize SplitType for new page sections
    setTimeout(() => {
      const { gsap, ScrollTrigger, SplitType } = window as any;
      if (gsap && SplitType && ScrollTrigger) {
        document.querySelectorAll('.split-text:not(.split-done)').forEach((text: any) => {
          text.classList.add('split-done');
          const split = new SplitType(text, { types: 'lines, words' });
          split.lines?.forEach((line: any) => {
              const wrapper = document.createElement('div');
              wrapper.classList.add('line-wrapper');
              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);
          });
          
          const splitStart = document.body.classList.contains('service-page') ? 'top 68%' : 'top 95%';
          gsap.fromTo(split.words,
              { yPercent: 120, opacity: 0 },
              {
                  scrollTrigger: { trigger: text, start: splitStart, toggleActions: 'play none none reverse' },
                  yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
              }
          );
        });
        ScrollTrigger.refresh();
      }
    }, 150);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // We append the script here to ensure it runs after all React components
    // have been fully mounted and their DOM nodes exist.
    const script = document.createElement('script');
    script.src = `${import.meta.env.BASE_URL}js/script.js?v=54`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/consumer-intelligence" element={<ConsumerIntelligence />} />
        <Route path="/services/market-intelligence" element={<MarketIntelligence />} />
        <Route path="/services/always-on-intelligence" element={<AlwaysOnIntelligence />} />
        <Route path="/services/campaign-intelligence" element={<CampaignIntelligence />} />
        <Route path="/services/archer-ai" element={<ArcherAI />} />
        <Route path="/services/agentic-ai" element={<AgenticAI />} />
        <Route path="/services/generative-search-optimisation" element={<GenerativeSearchOptimisation />} />
        <Route path="/services/search-engine-optimisation" element={<SearchEngineOptimisation />} />
        <Route path="/services/search-engine-optimisation/local-seo" element={<LocalSEO />} />
        <Route path="/local seo" element={<LocalSEO />} />
        <Route path="/local%20seo" element={<LocalSEO />} />
        <Route path="/services/search-engine-optimisation/ecommerce-seo" element={<ECommerceSEO />} />
        <Route path="/services/search-engine-optimisation/enterprise-seo" element={<EnterpriseSEO />} />
        <Route path="/services/search-engine-optimisation/b2b-seo" element={<B2BSEO />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/employer-branding" element={<EmployerBranding />} />
        <Route path="/services/ai-video-production" element={<AIVideoProduction />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
