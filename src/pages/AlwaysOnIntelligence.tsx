import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceTemplate } from '../components/Service/ServiceTemplate';
import { alwaysOnIntelligenceData } from '../data/alwaysOnIntelligenceData';

const AlwaysOnIntelligence: React.FC = () => {
  return (
    <>
      <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/#service","name":"Always-On Intelligence Services","url":"https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/","description":"Impulse Digital provides Always-On Intelligence services that continuously monitor brand mentions, category movement, competitor activity, reviews, reputation signals, and digital market risks.","serviceType":["Always-On Intelligence","Reputation Tracking","Crisis Monitoring","Social Listening","E-Commerce Review Intelligence","Brand Health Monitoring"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}) }} />
    </Helmet>
      <ServiceTemplate data={alwaysOnIntelligenceData} />
    </>
  );
};

export default AlwaysOnIntelligence;
