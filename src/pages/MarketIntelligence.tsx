import { Helmet } from 'react-helmet-async';
import React from 'react';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { marketIntelligenceData } from '../data/marketIntelligenceData';

const MarketIntelligence: React.FC = () => {
  return <ServiceTemplate data={marketIntelligenceData} />;
};

export default MarketIntelligence;
