import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { consumerIntelligenceData } from '../data/consumerIntelligenceData';

const ConsumerIntelligence: React.FC = () => {
  return (
    <>
      <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/#service","name":"Consumer Intelligence Services","url":"https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/","description":"Impulse Digital provides Consumer Intelligence services to help brands understand consumer behaviour, motivations, triggers, barriers, expectations, and decision-making patterns.","serviceType":["Consumer Intelligence","Usage and Attitude Studies","Trigger and Barrier Analysis","Consumer Behaviour Research","Innovation Funnel Support"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}) }} />
    </Helmet>
      <ServiceTemplate data={consumerIntelligenceData} />
    </>
  );
};

export default ConsumerIntelligence;
