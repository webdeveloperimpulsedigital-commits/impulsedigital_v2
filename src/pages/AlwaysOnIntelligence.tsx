import { Helmet } from 'react-helmet-async';
import React from 'react';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { alwaysOnIntelligenceData } from '../data/alwaysOnIntelligenceData';

const AlwaysOnIntelligence: React.FC = () => {
  return <ServiceTemplate data={alwaysOnIntelligenceData} />;
};

export default AlwaysOnIntelligence;
