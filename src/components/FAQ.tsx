import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How do I choose the right digital marketing agency in Mumbai for my business?",
    answer: "The decision should start with how well the agency understands your category, your data environment, and the specific growth levers available to you. Look for a partner that diagnoses before it prescribes. At Impulse Digital, every engagement begins with a strategic audit: understanding your current campaign architecture, identifying where decisions are being made without evidence, and defining measurable outcomes before any execution begins."
  },
  {
    question: "What are the benefits of hiring a digital marketing company to leverage your business?",
    answer: "The right partner gives you access to strategic depth, analytical infrastructure, and execution capability that would take 18 to 24 months to build in-house. With Impulse Digital, you gain a team that has operated inside the marketing environments of Amazon India, HUL, Mastercard, and Aditya Birla Group, bringing pattern recognition from enterprise-scale campaigns directly into your growth strategy."
  },
  {
    question: "What is the role of a result-oriented digital marketing agency in elevating your business?",
    answer: "A results-oriented digital marketing agency ties every channel, every campaign, and every creative decision back to a business outcome that your leadership team cares about. At Impulse Digital, we define KPIs at the business level, not the channel level. The question is never \"did impressions go up?\" It is \"did the right decisions get made faster?\""
  },
  {
    question: "What are the top services an agency should offer for your business?",
    answer: "The capabilities matter less than how they are integrated. A fragmented approach to digital marketing creates activity without direction. Impulse Digital organises capability into three layers: Growth Intelligence (analytics, campaign intelligence, competitive sensing), AI Agency (agentic AI, cinematic AI production, Generative Search Optimisation), and Performance Studios (social media marketing, performance marketing, content, web development, branding). Intelligence leads. AI differentiates. Execution scales."
  },
  {
    question: "What are the advantages of hiring a leading digital marketing agency in Mumbai?",
    answer: "A proven digital marketing agency in Mumbai brings tested frameworks, specialised teams, enterprise-grade analytical tools, and the pattern recognition that comes from working across categories and scales. With Impulse Digital, you also get direct access to the founding team, and the agility of a focused operation with the client portfolio of a much larger agency."
  },
  {
    question: "Can I expect instant results after hiring an agency?",
    answer: "Some digital marketing channels produce visible movement quickly. Performance marketing can show early signal within weeks. Intelligence-led SEO and Generative Search Optimisation compound over quarters. The most durable outcome is decision quality: when your marketing team starts allocating budget based on evidence rather than habit, the return is structural, not episodic."
  },
  {
    question: "Is it possible to measure the efficacy of your digital marketing agency's strategies?",
    answer: "Measurement is not optional; it is the starting point. Impulse Digital implements proper tracking infrastructure, defines conversion events tied to revenue, and builds attribution models that your team can interrogate independently. Every engagement includes regular performance reviews with full transparency. No vanity metrics. No dashboards designed to look impressive without being useful."
  },
  {
    question: "What is the budget to hire a digital marketing agency in Mumbai for my business?",
    answer: "The scope of a growth intelligence engagement varies based on the complexity of your data environment, the number of digital marketing channels in play, and the strategic depth of the mandate. Impulse Digital works with marketing teams to scope engagements that reflect the actual decision value being unlocked. The conversation starts with what you are trying to solve, not a rate card."
  },
  {
    question: "Before signing up with an agency, should I consider geographic factors like location?",
    answer: "No. Digital marketing capability is not bound by geography. Impulse Digital is headquartered in Mumbai and has served clients across India, the United States, and Japan. What matters is domain expertise, strategic alignment, communication cadence, and the ability to embed into your team's workflow, regardless of where either party is based."
  },
  {
    question: "What skills are necessary for an agency before onboarding?",
    answer: "Look for strategic depth over tactical breadth. The digital marketing agency should demonstrate the ability to diagnose before prescribing, show named outcomes from comparable engagements, communicate with the same rigour they bring to execution, and operate as a thinking partner rather than a task-taker. At Impulse Digital, every engagement is led by people who understand the business problem first and the marketing channel second."
  }
];

const FAQ: React.FC<FAQProps> = ({ data = defaultFaqs }) => {
  const isDefault = data === defaultFaqs;
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="faq glass-panel">
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Helmet>
      <div className="container">
        <h2 className="section-heading split-text">Questions we hear<br />from growth leaders.</h2>
        <div className="accordion">
          {data.map((item, index) => (
            <div className="acc-item" key={index}>
              <div className="acc-header">
                <h3>{item.question}</h3><span className="acc-icon">+</span>
              </div>
              <div className="acc-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
