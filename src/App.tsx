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
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll reset for smooth scrolling
    if ((window as any).globalLenis) {
      (window as any).globalLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    
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
        <Route path="/consumer-intelligence" element={<ConsumerIntelligence />} />
        <Route path="/market-intelligence" element={<MarketIntelligence />} />
        <Route path="/always-on-intelligence" element={<AlwaysOnIntelligence />} />
        <Route path="/campaign-intelligence" element={<CampaignIntelligence />} />
        <Route path="/archer-ai" element={<ArcherAI />} />
        <Route path="/agentic-ai" element={<AgenticAI />} />
        <Route path="/generative-search-optimisation" element={<GenerativeSearchOptimisation />} />
        <Route path="/search-engine-optimisation" element={<SearchEngineOptimisation />} />
        <Route path="/local-seo" element={<LocalSEO />} />
        <Route path="/local seo" element={<LocalSEO />} />
        <Route path="/local%20seo" element={<LocalSEO />} />
        <Route path="/ecommerce-seo" element={<ECommerceSEO />} />
        <Route path="/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/employer-branding" element={<EmployerBranding />} />
        <Route path="/ai-video-production" element={<AIVideoProduction />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
