import React from 'react';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { campaignIntelligenceData } from '../data/campaignIntelligenceData';

const CampaignIntelligence: React.FC = () => {
  return <ServiceTemplate data={campaignIntelligenceData} />;
};

export default CampaignIntelligence;
