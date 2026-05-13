import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <section className="cosmos-section" id="cases-pin">
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '4rem' }}>
        <h2 className="section-heading split-text">Work that earned its numbers</h2>
      </div>
      <div className="cosmos-wrapper">
        <div className="cosmos-card">
          <img src="/case studies/HUL.png" className="hs-card-img" alt="HUL" />
          <div className="hs-card-inner">
            <h3 className="hs-client">HUL</h3>
            <p className="hs-desc">Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.</p>
          </div>
        </div>

        <div className="cosmos-card">
          <img src="/case studies/Brut.png" className="hs-card-img" alt="Brut India" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Brut India</h3>
            <p className="hs-desc">Social impact content partnership for one of India's most-watched digital publishers.</p>
          </div>
        </div>

        <div className="cosmos-card">
          <img src="/case studies/Uppercase.webp" className="hs-card-img" alt="Uppercase" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Uppercase</h3>
            <p className="hs-desc">A complete brand film produced entirely with AI: script, visuals, voice, and edit.</p>
          </div>
        </div>

        <div className="cosmos-card">
          <img src="/case studies/Dmart.png" className="hs-card-img" alt="DMart" />
          <div className="hs-card-inner">
            <h3 className="hs-client">DMart</h3>
            <p className="hs-desc">13.43 lakh unique reach and 53K clicks driving store footfall.</p>
          </div>
        </div>

        <div className="cosmos-card">
          <img src="/case studies/Mastercard.png" className="hs-card-img" alt="Mastercard" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Mastercard</h3>
            <p className="hs-desc">90.9% merchant response rate through WhatsApp-led cluster-head outreach strategy.</p>
          </div>
        </div>

        <div className="cosmos-card">
          <img src="/case studies/Fours for good.png" className="hs-card-img" alt="Force for Good" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Fours for Good</h3>
            <p className="hs-desc">Building an impactful social narrative through high-performance digital production.</p>
          </div>
        </div>
      </div>
      <div className="cosmos-cta" style={{ position: 'absolute', bottom: '12vh', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <a href="#outcomes" className="btn" data-cursor="EXPLORE">SEE THE WORK BEHIND THE NUMBERS</a>
      </div>
    </section>
  );
};

export default CaseStudies;
