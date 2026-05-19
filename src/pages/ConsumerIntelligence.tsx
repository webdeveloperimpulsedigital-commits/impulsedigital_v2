import React from 'react';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { consumerIntelligenceData } from '../data/consumerIntelligenceData';

const ConsumerIntelligence: React.FC = () => {
  return <ServiceTemplate data={consumerIntelligenceData} />;
};

export default ConsumerIntelligence;
