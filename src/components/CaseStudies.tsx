import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  return (
    <section className="cosmos-section" id="cases-pin">
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '4rem' }}>
        <h2 className="section-heading split-text">Work that earned its numbers</h2>
      </div>
      <div className="cosmos-wrapper">
        <Link to="/case-studies/abg-brut-india/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/ABG x Brut India/ABG Brut India Title.png`} className="hs-card-img" alt="Aditya Birla Group x Brut India Digital Marketing Campaign Case Study" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">ABG × Brut India</h3>
            <p className="hs-desc">10 changemakers. 27M+ views. One purpose made human.</p>
          </div>
        </Link>

        <Link to="/case-studies/abg-kbc/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/ABG x KBC/ABG x KBC Title.png`} className="hs-card-img" alt="Aditya Birla Group x KBC CSR Campaign Case Study" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">ABG × KBC</h3>
            <p className="hs-desc">A question on KBC became a child’s shot at education.</p>
          </div>
        </Link>

        <Link to="/case-studies/automag-india/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Automag India/Automag SEO/Automag Title.jpg`} className="hs-card-img" alt="Automag India B2B SEO and Lead Generation Case Study" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Automag India</h3>
            <p className="hs-desc">45-50 qualified B2B leads a month from buyers already searching.</p>
          </div>
        </Link>

        <Link to="/case-studies/automag-bajaj-auto/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Automag India/Automag x Bajaj Auto title.png`} className="hs-card-img" alt="Automag x Bajaj Auto B2B Case Study" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Automag × Bajaj Auto</h3>
            <p className="hs-desc">The system worked. The film made buyers understand what changed.</p>
          </div>
        </Link>

        <Link to="/case-studies/dmart/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Dmart/Dmart Title.png`} className="hs-card-img" alt="DMart Retail Footfall Generation Campaign Case Study" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">DMart</h3>
            <p className="hs-desc">13.43 lakh Pune shoppers reached for a sale built to move from scroll to store.</p>
          </div>
        </Link>

        <Link to="/case-studies/electromech/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/ElectroMech/ElectroMech title.png`} className="hs-card-img" alt="ElectroMech B2B Website Development and SEO Growth" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">ElectroMech</h3>
            <p className="hs-desc">When serious buyers found the right path, verified leads grew 20x.</p>
          </div>
        </Link>

        <Link to="/case-studies/fours-for-good/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Fours for good/Fours for good title.png`} className="hs-card-img" alt="Aditya Birla Group Fours for Good CSR Campaign" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Fours for Good</h3>
            <p className="hs-desc">Every four became a chance for 200+ children to train like cricketers.</p>
          </div>
        </Link>

        <Link to="/case-studies/hul/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/HUL 1/HUL 1 Title.png`} className="hs-card-img" alt="Hindustan Unilever Performance Marketing and Coupon Campaign" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">HUL</h3>
            <p className="hs-desc">12,548+ coupon journeys built to move people from click to store.</p>
          </div>
        </Link>

        <Link to="/case-studies/lg-hing/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/LG/LG title.png`} className="hs-card-img" alt="LG Hing Diwali Social Media Campaign" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">LG Hing</h3>
            <p className="hs-desc">A Diwali story with 507K impressions and a 5% sales lift in 24 hours.</p>
          </div>
        </Link>

        <Link to="/case-studies/mastercard/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Mastercard/Mastercard Title.png`} className="hs-card-img" alt="Mastercard WhatsApp Marketing and Merchant Outreach Strategy" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Mastercard</h3>
            <p className="hs-desc">101 merchant queries through a channel they already trusted.</p>
          </div>
        </Link>

        <Link to="/case-studies/qure-ai/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Qure.ai/QureAI Title.png`} className="hs-card-img" alt="Qure.ai Healthcare AI SEO Traffic Case Study" loading="lazy" decoding="async" />
          <div className="hs-card-inner">
            <h3 className="hs-client">Qure.ai</h3>
            <p className="hs-desc">737% increase in organic traffic from healthcare buyers who search with intent.</p>
          </div>
        </Link>

        <Link to="/case-studies/uppercase/" className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={`${import.meta.env.BASE_URL}case studies/Written Content/Uppercase/Uppercase Title.png`} className="hs-card-img" alt="Uppercase AI-Led Social Media Campaign Case Study" loading="lazy" decoding="async" />
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
