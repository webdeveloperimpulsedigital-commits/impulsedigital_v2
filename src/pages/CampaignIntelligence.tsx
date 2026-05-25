import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { campaignIntelligenceData } from '../data/campaignIntelligenceData';

const CampaignIntelligence: React.FC = () => {
  return (
    <>
      <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/#service","name":"Campaign and Performance Intelligence Services","url":"https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/","description":"Impulse Digital provides Campaign and Performance Intelligence services to evaluate campaign impact, audience response, brand perception movement, influencer fit, engagement quality, and marketing decision value.","serviceType":["Campaign Intelligence","Performance Intelligence","Campaign Effectiveness Evaluation","Influencer Fit Analysis","Strategic Insight Reports","Marketing Performance Analysis"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}) }} />
    </Helmet>
      <ServiceTemplate data={campaignIntelligenceData} />
    </>
  );
};

export default CampaignIntelligence;
