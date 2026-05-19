import React, { useEffect, useLayoutEffect } from 'react';
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
import VideoProduction from './pages/VideoProduction';
import GrowthIntelligence from './pages/GrowthIntelligence';
import AIMarketingSystems from './pages/AIMarketingSystems';
import BrandInfrastructure from './pages/BrandInfrastructure';
import ECommerceSEO from './pages/ECommerceSEO';
import LocalSEO from './pages/LocalSEO';
import EnterpriseSEO from './pages/EnterpriseSEO';
import B2BSEO from './pages/B2BSEO';
import ServicesIndex from './pages/ServicesIndex';
import CaseStudies from './pages/CaseStudies';
import UppercaseCaseStudy from './pages/UppercaseCaseStudy';
import QureAICaseStudy from './pages/QureAICaseStudy';
import MastercardCaseStudy from './pages/MastercardCaseStudy';
import LGHingCaseStudy from './pages/LGHingCaseStudy';
import HULCaseStudy from './pages/HULCaseStudy';
import FoursForGoodCaseStudy from './pages/FoursForGoodCaseStudy';
import ElectroMechCaseStudy from './pages/ElectroMechCaseStudy';
import DMartCaseStudy from './pages/DMartCaseStudy';
import ABGBrutIndiaCaseStudy from './pages/ABGBrutIndiaCaseStudy';
import ABGKBCCaseStudy from './pages/ABGKBCCaseStudy';
import AutomagBajajAutoCaseStudy from './pages/AutomagBajajAutoCaseStudy';
import AutomagIndiaCaseStudy from './pages/AutomagIndiaCaseStudy';
import EmployerBrandingCaseStudy from './pages/EmployerBrandingCaseStudy';
import { useLocation } from 'react-router-dom';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import IndiaLocation from './pages/IndiaLocation';
import ThaneLocation from './pages/ThaneLocation';
import NaviMumbaiLocation from './pages/NaviMumbaiLocation';
import PuneLocation from './pages/PuneLocation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
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
        (window as any).globalLenis.scrollTo('top', { immediate: true, force: true });
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
    script.src = `${import.meta.env.BASE_URL}js/script.js?v=55`;
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
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/growth-intelligence/consumer-intelligence/" element={<ConsumerIntelligence />} />
        <Route path="/growth-intelligence/market-intelligence/" element={<MarketIntelligence />} />
        <Route path="/growth-intelligence/always-on-intelligence/" element={<AlwaysOnIntelligence />} />
        <Route path="/growth-intelligence/campaign-intelligence/" element={<CampaignIntelligence />} />
        <Route path="/ai-marketing-systems/archer-ai/" element={<ArcherAI />} />
        <Route path="/ai-marketing-systems/agentic-ai/" element={<AgenticAI />} />
        <Route path="/ai-marketing-systems/generative-search-optimisation/" element={<GenerativeSearchOptimisation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/" element={<SearchEngineOptimisation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/local-seo/" element={<LocalSEO />} />
        <Route path="/local seo" element={<LocalSEO />} />
        <Route path="/local%20seo" element={<LocalSEO />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/ecommerce-seo/" element={<ECommerceSEO />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/enterprise-seo/" element={<EnterpriseSEO />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/b2b-seo/" element={<B2BSEO />} />
        <Route path="/brand-infrastructure/social-media-management/" element={<SocialMediaManagement />} />
        <Route path="/brand-infrastructure/website-development/" element={<WebsiteDevelopment />} />
        <Route path="/brand-infrastructure/branding/" element={<Branding />} />
        <Route path="/brand-infrastructure/employer-branding/" element={<EmployerBranding />} />
        <Route path="/brand-infrastructure/video-production/" element={<VideoProduction />} />
        <Route path="/ai-marketing-systems/ai-video-production/" element={<AIVideoProduction />} />
        <Route path="/growth-intelligence/" element={<GrowthIntelligence />} />
        <Route path="/ai-marketing-systems/" element={<AIMarketingSystems />} />
        <Route path="/brand-infrastructure/" element={<BrandInfrastructure />} />
        <Route path="/services/" element={<ServicesIndex />} />
        <Route path="/case-studies/" element={<CaseStudies />} />
        <Route path="/case-studies/uppercase/" element={<UppercaseCaseStudy />} />
        <Route path="/case-studies/qure-ai/" element={<QureAICaseStudy />} />
        <Route path="/case-studies/mastercard/" element={<MastercardCaseStudy />} />
        <Route path="/case-studies/lg-hing/" element={<LGHingCaseStudy />} />
        {/* Temporary routes for pending case studies */}
        <Route path="/case-studies/dmart/" element={<DMartCaseStudy />} />
        <Route path="/case-studies/hul/" element={<HULCaseStudy />} />
        <Route path="/case-studies/fours-for-good/" element={<FoursForGoodCaseStudy />} />
        <Route path="/case-studies/electromech/" element={<ElectroMechCaseStudy />} />
        {/* New case study routes */}
        <Route path="/case-studies/abg-brut-india/" element={<ABGBrutIndiaCaseStudy />} />
        <Route path="/case-studies/abg-kbc/" element={<ABGKBCCaseStudy />} />
        <Route path="/case-studies/automag-bajaj-auto/" element={<AutomagBajajAutoCaseStudy />} />
        <Route path="/case-studies/automag-india/" element={<AutomagIndiaCaseStudy />} />
        <Route path="/case-studies/employer-branding/" element={<EmployerBrandingCaseStudy />} />
        <Route path="/careers/" element={<Careers />} />
        <Route path="/contact-us/" element={<ContactUs />} />
        <Route path="/digital-marketing-agency-in-india/" element={<IndiaLocation />} />
        <Route path="/digital-marketing-agency-in-thane/" element={<ThaneLocation />} />
        <Route path="/digital-marketing-agency-in-navi-mumbai/" element={<NaviMumbaiLocation />} />
        <Route path="/digital-marketing-agency-in-pune/" element={<PuneLocation />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;






