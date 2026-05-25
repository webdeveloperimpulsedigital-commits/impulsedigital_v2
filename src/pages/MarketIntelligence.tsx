import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { marketIntelligenceData } from '../data/marketIntelligenceData';

const MarketIntelligence: React.FC = () => {
  return (
    <>
      <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/growth-intelligence/market-intelligence/#service","name":"Market and Competitive Intelligence Services","url":"https://www.theimpulsedigital.com/growth-intelligence/market-intelligence/","description":"Impulse Digital provides Market and Competitive Intelligence services to help brands understand category movement, competitor behaviour, e-commerce signals, consumer search patterns, and market opportunities.","serviceType":["Market Intelligence","Competitive Intelligence","Category Trend Mapping","Competitor Communication Analysis","E-Commerce Benchmarking","Search Intelligence"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}) }} />
    </Helmet>
      <ServiceTemplate data={marketIntelligenceData} />
    </>
  );
};

export default MarketIntelligence;
