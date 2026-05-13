import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConsumerIntelligence from './pages/ConsumerIntelligence';
import MarketIntelligence from './pages/MarketIntelligence';
import AlwaysOnIntelligence from './pages/AlwaysOnIntelligence';
import CampaignIntelligence from './pages/CampaignIntelligence';
import ArcherAI from './pages/ArcherAI';
import AgenticAI from './pages/AgenticAI';
import AIVideoProduction from './pages/AIVideoProduction';

const App: React.FC = () => {
  useEffect(() => {
    // We append the script here to ensure it runs after all React components
    // have been fully mounted and their DOM nodes exist.
    const script = document.createElement('script');
    script.src = '/js/script.js?v=54';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consumer-intelligence" element={<ConsumerIntelligence />} />
        <Route path="/market-intelligence" element={<MarketIntelligence />} />
        <Route path="/always-on-intelligence" element={<AlwaysOnIntelligence />} />
        <Route path="/campaign-intelligence" element={<CampaignIntelligence />} />
        <Route path="/archer-ai" element={<ArcherAI />} />
        <Route path="/agentic-ai" element={<AgenticAI />} />
        <Route path="/ai-video-production" element={<AIVideoProduction />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
