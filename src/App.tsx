import React, { useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ConsumerIntelligence = lazy(() => import('./pages/ConsumerIntelligence'));
const MarketIntelligence = lazy(() => import('./pages/MarketIntelligence'));
const AlwaysOnIntelligence = lazy(() => import('./pages/AlwaysOnIntelligence'));
const CampaignIntelligence = lazy(() => import('./pages/CampaignIntelligence'));
const ArcherAI = lazy(() => import('./pages/ArcherAI'));
const AgenticAI = lazy(() => import('./pages/AgenticAI'));
const GenerativeSearchOptimisation = lazy(() => import('./pages/GenerativeSearchOptimisation'));
const SearchEngineOptimisation = lazy(() => import('./pages/SearchEngineOptimisation'));
const Branding = lazy(() => import('./pages/Branding'));
const EmployerBranding = lazy(() => import('./pages/EmployerBranding'));
const SocialMediaManagement = lazy(() => import('./pages/SocialMediaManagement'));
const WebsiteDevelopment = lazy(() => import('./pages/WebsiteDevelopment'));
const AIVideoProduction = lazy(() => import('./pages/AIVideoProduction'));
const VideoProduction = lazy(() => import('./pages/VideoProduction'));
const GrowthIntelligence = lazy(() => import('./pages/GrowthIntelligence'));
const AIMarketingSystems = lazy(() => import('./pages/AIMarketingSystems'));
const BrandInfrastructure = lazy(() => import('./pages/BrandInfrastructure'));
const ECommerceSEO = lazy(() => import('./pages/ECommerceSEO'));
const LocalSEO = lazy(() => import('./pages/LocalSEO'));
const EnterpriseSEO = lazy(() => import('./pages/EnterpriseSEO'));
const B2BSEO = lazy(() => import('./pages/B2BSEO'));
const ServicesIndex = lazy(() => import('./pages/ServicesIndex'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const UppercaseCaseStudy = lazy(() => import('./pages/UppercaseCaseStudy'));
const QureAICaseStudy = lazy(() => import('./pages/QureAICaseStudy'));
const MastercardCaseStudy = lazy(() => import('./pages/MastercardCaseStudy'));
const LGHingCaseStudy = lazy(() => import('./pages/LGHingCaseStudy'));
const HULCaseStudy = lazy(() => import('./pages/HULCaseStudy'));
const FoursForGoodCaseStudy = lazy(() => import('./pages/FoursForGoodCaseStudy'));
const ElectroMechCaseStudy = lazy(() => import('./pages/ElectroMechCaseStudy'));
const DMartCaseStudy = lazy(() => import('./pages/DMartCaseStudy'));
const ABGBrutIndiaCaseStudy = lazy(() => import('./pages/ABGBrutIndiaCaseStudy'));
const ABGKBCCaseStudy = lazy(() => import('./pages/ABGKBCCaseStudy'));
const AutomagBajajAutoCaseStudy = lazy(() => import('./pages/AutomagBajajAutoCaseStudy'));
const AutomagIndiaCaseStudy = lazy(() => import('./pages/AutomagIndiaCaseStudy'));
const EmployerBrandingCaseStudy = lazy(() => import('./pages/EmployerBrandingCaseStudy'));
const SaltCaseStudy = lazy(() => import('./pages/SaltCaseStudy'));
const TataSoulfullCaseStudy = lazy(() => import('./pages/TataSoulfullCaseStudy'));
const TcplCaseStudy = lazy(() => import('./pages/TcplCaseStudy'));
const ChingsKurkureCaseStudy = lazy(() => import('./pages/ChingsKurkureCaseStudy'));
const ChingsFoodfarmerCaseStudy = lazy(() => import('./pages/ChingsFoodfarmerCaseStudy'));
import { useLocation } from 'react-router-dom';
const Careers = lazy(() => import('./pages/Careers'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const IndiaLocation = lazy(() => import('./pages/IndiaLocation'));
const ThaneLocation = lazy(() => import('./pages/ThaneLocation'));
const NaviMumbaiLocation = lazy(() => import('./pages/NaviMumbaiLocation'));
const PuneLocation = lazy(() => import('./pages/PuneLocation'));

const SeoAiroliLocation = lazy(() => import('./pages/seo-locations/SeoAiroliLocation'));
const SeoAndheriLocation = lazy(() => import('./pages/seo-locations/SeoAndheriLocation'));
const SeoBandraLocation = lazy(() => import('./pages/seo-locations/SeoBandraLocation'));
const SeoBorivaliLocation = lazy(() => import('./pages/seo-locations/SeoBorivaliLocation'));
const SeoDadarLocation = lazy(() => import('./pages/seo-locations/SeoDadarLocation'));
const SeoGhansoliLocation = lazy(() => import('./pages/seo-locations/SeoGhansoliLocation'));
const SeoGhatkoparLocation = lazy(() => import('./pages/seo-locations/SeoGhatkoparLocation'));
const SeoGoregaonLocation = lazy(() => import('./pages/seo-locations/SeoGoregaonLocation'));
const SeoJogeshwariLocation = lazy(() => import('./pages/seo-locations/SeoJogeshwariLocation'));
const SeoKandivaliLocation = lazy(() => import('./pages/seo-locations/SeoKandivaliLocation'));
const SeoKhargharLocation = lazy(() => import('./pages/seo-locations/SeoKhargharLocation'));
const SeoKoparkhairaneLocation = lazy(() => import('./pages/seo-locations/SeoKoparkhairaneLocation'));
const SeoMaladLocation = lazy(() => import('./pages/seo-locations/SeoMaladLocation'));
const SeoMansarovarLocation = lazy(() => import('./pages/seo-locations/SeoMansarovarLocation'));
const SeoMiraRoadLocation = lazy(() => import('./pages/seo-locations/SeoMiraRoadLocation'));
const SeoMulundLocation = lazy(() => import('./pages/seo-locations/SeoMulundLocation'));
const SeoMumbaiLocation = lazy(() => import('./pages/seo-locations/SeoMumbaiLocation'));
const SeoNaviMumbaiLocation = lazy(() => import('./pages/seo-locations/SeoNaviMumbaiLocation'));
const SeoNerulLocation = lazy(() => import('./pages/seo-locations/SeoNerulLocation'));
const SeoPanvelLocation = lazy(() => import('./pages/seo-locations/SeoPanvelLocation'));
const SeoSanpadaLocation = lazy(() => import('./pages/seo-locations/SeoSanpadaLocation'));
const SeoTurbheLocation = lazy(() => import('./pages/seo-locations/SeoTurbheLocation'));
const SeoVashiLocation = lazy(() => import('./pages/seo-locations/SeoVashiLocation'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset title immediately on navigation so the previous page's title
    // never lingers in the rendered DOM while Suspense loads the next page
    document.title = '';
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', '');

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

const RouteAnimationState = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.body.dataset.impulseRoute = pathname;

    const background = (window as any).impulseBackground;
    if (background?.resetForRoute) {
      background.resetForRoute(pathname);
    }

    window.dispatchEvent(new CustomEvent('impulse:route-change', { detail: { pathname } }));
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Dynamically load Three.js to prevent it from blocking the initial page load (LCP/FCP)
    if (!document.querySelector('script[src*="three.min.js"]')) {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      threeScript.async = true;
      document.body.appendChild(threeScript);
    }

    const existingScript = document.querySelector('script[src*="js/script.js"]');
    if (existingScript) {
      return;
    }

    const checkThreeAndLoadScript = () => {
      // Wait for dependencies then defer heavy 3D background to free up the main thread
      if ((window as any).THREE && (window as any).gsap && (window as any).ScrollTrigger && (window as any).SplitType) {
        const load = () => {
          const script = document.createElement('script');
          script.src = `${import.meta.env.BASE_URL}js/script.js?v=59`; // bump version
          script.async = true;
          document.body.appendChild(script);
        };
        
        if ('requestIdleCallback' in window) {
          requestIdleCallback(load, { timeout: 2000 });
        } else {
          setTimeout(load, 500);
        }
      } else {
        setTimeout(checkThreeAndLoadScript, 50);
      }
    };

    checkThreeAndLoadScript();
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <RouteAnimationState />
      <Background />
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#020018' }}></div>}>
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
        <Route path="/brand-infrastructure/social-media-marketing/" element={<SocialMediaManagement />} />
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
        <Route path="/case-studies/shaking-things-up/" element={<SaltCaseStudy />} />
        <Route path="/case-studies/tata-soulfull/" element={<TataSoulfullCaseStudy />} />
        <Route path="/case-studies/tcpl/" element={<TcplCaseStudy />} />
        <Route path="/case-studies/chings-kurkure/" element={<ChingsKurkureCaseStudy />} />
        <Route path="/case-studies/chings-foodfarmer/" element={<ChingsFoodfarmerCaseStudy />} />
        <Route path="/careers/" element={<Careers />} />
        <Route path="/contact-us/" element={<ContactUs />} />
        <Route path="/thank-you/" element={<ThankYou />} />
        <Route path="/digital-marketing-agency-in-india/" element={<IndiaLocation />} />
        <Route path="/digital-marketing-agency-in-thane/" element={<ThaneLocation />} />
        <Route path="/digital-marketing-agency-in-navi-mumbai/" element={<NaviMumbaiLocation />} />
        <Route path="/digital-marketing-agency-in-pune/" element={<PuneLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/airoli/" element={<SeoAiroliLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/andheri/" element={<SeoAndheriLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/bandra/" element={<SeoBandraLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/borivali/" element={<SeoBorivaliLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/dadar/" element={<SeoDadarLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/ghansoli/" element={<SeoGhansoliLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/ghatkopar/" element={<SeoGhatkoparLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/goregaon/" element={<SeoGoregaonLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/jogeshwari/" element={<SeoJogeshwariLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/kandivali/" element={<SeoKandivaliLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/kharghar/" element={<SeoKhargharLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/koparkhairane/" element={<SeoKoparkhairaneLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/malad/" element={<SeoMaladLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/mansarovar/" element={<SeoMansarovarLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/mira-road/" element={<SeoMiraRoadLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/mulund/" element={<SeoMulundLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/mumbai/" element={<SeoMumbaiLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/navi-mumbai/" element={<SeoNaviMumbaiLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/nerul/" element={<SeoNerulLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/panvel/" element={<SeoPanvelLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/sanpada/" element={<SeoSanpadaLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/turbhe/" element={<SeoTurbheLocation />} />
        <Route path="/brand-infrastructure/search-engine-optimisation/vashi/" element={<SeoVashiLocation />} />
      </Routes>
        </Suspense>
      <Footer />
    </Router>
  );
};

export default App;




