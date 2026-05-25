import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  return (
    <section className="cosmos-section" id="cases-pin">
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '8rem' }}>
        <h2 className="section-heading split-text">Work that earned its numbers</h2>
      </div>
      <div className="cosmos-wrapper">
        <Link to="/case-studies/mastercard/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Mastercard/Mastercard Title.webp`} className="hs-card-img" alt="Mastercard WhatsApp Marketing and Merchant Outreach Strategy" loading="lazy" decoding="async"  width="600" height="400" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Mastercard</h3>
            <p className="hs-desc">101 merchant queries through a channel they already trusted.</p>
          </div>
        </Link>

        <Link to="/case-studies/hul/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/HUL 1/HUL 1 Title.webp`} className="hs-card-img" alt="Hindustan Unilever Performance Marketing and Coupon Campaign" loading="lazy" decoding="async"  width="600" height="400" />
          <div className="hs-card-inner">
            <h3 className="hs-client">HUL</h3>
            <p className="hs-desc">12,548+ coupon journeys built to move people from click to store.</p>
          </div>
        </Link>

        <Link to="/case-studies/shaking-things-up/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}images/case-study-image/salt/shaking-things-up.png`} className="hs-card-img" alt="Tata Consumer Products Case Study" loading="lazy" decoding="async"  width="600" height="400" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Tata Consumer Products</h3>
            <p className="hs-desc">Decoding category transformation for staple ingredients and mapping diaspora demand to market launch.</p>
          </div>
        </Link>

        <Link to="/case-studies/abg-kbc/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/ABG x KBC/ABG x KBC Title.webp`} className="hs-card-img" alt="Aditya Birla Group x KBC CSR Campaign Case Study" loading="lazy" decoding="async"  width="600" height="400" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Aditya Birla Group × KBC</h3>
            <p className="hs-desc">A question on KBC became a child’s shot at education.</p>
          </div>
        </Link>

        <Link to="/case-studies/qure-ai/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Qure.ai/QureAI Title.webp`} className="hs-card-img" alt="Qure.ai Healthcare AI SEO Traffic Case Study" loading="lazy" decoding="async"  width="600" height="400" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Qure.ai</h3>
            <p className="hs-desc">737% increase in organic traffic from healthcare buyers who search with intent.</p>
          </div>
        </Link>

        <Link to="/case-studies/uppercase/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Uppercase/Uppercase Title.webp`} className="hs-card-img" alt="Uppercase AI-Led Social Media Campaign Case Study" loading="lazy" decoding="async"  width="600" height="400" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Uppercase</h3>
            <p className="hs-desc">5.49M plays for a New Year idea built with AI, led by human instinct.</p>
          </div>
        </Link>
      </div>
      <div className="cosmos-cta" style={{ position: 'absolute', bottom: '12vh', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <Link to="/case-studies/" className="btn" data-cursor="EXPLORE">SEE THE WORK BEHIND THE NUMBERS</Link>
      </div>
    </section>
  );
};

export default CaseStudies;
