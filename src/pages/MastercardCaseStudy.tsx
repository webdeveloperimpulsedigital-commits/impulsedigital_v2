import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const MastercardCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);
  const base = import.meta.env.BASE_URL;
  const svgPath = "M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z";
  return (
    <main id="main-content">
      <Helmet>
        <title>Mastercard WhatsApp Marketing Case Study | 90.9% Merchant Response Rate</title>
<meta name="description" content="See how Mastercard used WhatsApp marketing and cluster-head influence to drive merchant engagement, achieving a 90.9% response rate and 101 product inquiries." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/mastercard/" />
<meta property="og:title" content="Mastercard WhatsApp Marketing Case Study | 90.9% Merchant Response Rate" />
<meta property="og:description" content="See how Mastercard used WhatsApp marketing and cluster-head influence to drive merchant engagement, achieving a 90.9% response rate and 101 product inquiries." />
<meta property="og:image" content="https://www.theimpulsedigital.com/14_mastercard.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/mastercard/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Mastercard WhatsApp Marketing Case Study | 90.9% Merchant Response Rate" />
<meta name="twitter:description" content="See how Mastercard used WhatsApp marketing and cluster-head influence to drive merchant engagement, achieving a 90.9% response rate and 101 product inquiries." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/14_mastercard.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Mastercard</h1>
          <h2 className="cs-hero-subtitle">Helping merchants respond through<br />a channel they already use.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/Mastercard/Mastercard Title.webp`} alt="Mastercard WhatsApp-led merchant outreach case study" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">For a merchant, a payment device is not just another product.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>It sits close to money. Close to customers. Close to daily business.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>Mastercard needed to increase interest in its payment processing devices across merchant segments, from grassroots to enterprise level.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="101">0</span></div><div className="cs-result-label">merchant queries received</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="90.9">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">response rate</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span>24/7</span></div><div className="cs-result-label">monitoring for real-time query handling</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="cs-result-word">WhatsApp</span></div><div className="cs-result-label">used as the direct response channel</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>Video content built around real cluster-head testimonials</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The situation</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Mastercard needed to support sales of payment processing devices through digital outreach.</p>
            <p className="cs-p split-text">The audience was not limited to one type of merchant. It ranged from grassroots businesses to enterprise-level merchants.</p>
            <p className="cs-p highlight split-text">A broad message could reach people.<br />But it may not make them respond.</p>
            <p className="cs-p split-text">The campaign needed a route that felt closer to the merchant's world.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The challenge</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Merchants do not usually act because a brand says something.</p>
            <p className="cs-p split-text">They act when the message feels useful, credible, and easy to respond to.</p>
            <p className="cs-p highlight split-text">The response path had to be simple.<br />No long forms. No cold, distant funnel. No extra friction.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign had to move away from speaking at merchants.</p>
            <p className="cs-p highlight split-text">It had to create a conversation merchants could enter easily.</p>
            <p className="cs-p split-text">That meant finding the right messenger and the right channel.</p>
            <p className="cs-p split-text">Cluster heads became important because they carried community influence. WhatsApp became important because merchants already use it every day.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />worked on</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse shaped the campaign around influence, simplicity, and response.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Reviewing brand goals and sales targets</li>
              <li className="gsap-item">Identifying cluster heads as key merchant influencers</li>
              <li className="gsap-item">Choosing WhatsApp as the direct communication channel</li>
              <li className="gsap-item">Creating custom video content with real cluster-head testimonials</li>
              <li className="gsap-item">Setting up a unique WhatsApp number for merchant conversations</li>
              <li className="gsap-item">Enabling continuous monitoring for quick query responses</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Response Path</h2>
            <p className="cs-journey-desc split-text">The goal was to make the message credible and the next step effortless.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / TRUST</div><div className="cs-journey-text">Cluster heads carried influence inside merchant communities.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / MESSAGE</div><div className="cs-journey-text">Video content featured cluster heads explaining the product benefits.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / CHANNEL</div><div className="cs-journey-text">A unique WhatsApp number gave interested merchants a direct place to respond.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / SPEED</div><div className="cs-journey-text">Continuous monitoring helped keep merchant queries from going cold.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>05 / RESPONSE</div><div className="cs-journey-text">A merchant could watch the message, understand the value, and ask a question without leaving a familiar platform.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">How it came<br />together</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The video content featured cluster heads explaining the product benefits.</p>
            <p className="cs-p split-text">That made the message easier to trust because it came through people with influence in merchant communities.</p>
            <p className="cs-p highlight split-text">The WhatsApp number gave interested merchants a direct place to respond.</p>
            <p className="cs-p split-text">The faster the path from interest to response, the lower the chance of losing the merchant.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What changed</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign turned digital outreach into merchant conversation.</p>
            <p className="cs-p split-text">The testimonial videos made the product easier to understand. WhatsApp made the response feel natural.</p>
            <p className="cs-p highlight split-text">Continuous monitoring helped keep queries from going cold.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Business impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign received 101 product inquiries and delivered a 90.9% response rate.</p>
            <p className="cs-p highlight split-text">Merchants were not just seeing the message.<br />They were willing to engage with it.</p>
            <p className="cs-p split-text">The campaign worked because it respected how merchants actually make decisions.</p>
            <p className="cs-p split-text">They trust people close to their business environment. They prefer channels that feel familiar. They respond faster when the next step is clear.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">Remove<br />the distance.</h2>
        <p className="cs-final-text split-text">This was not about making the loudest campaign. It was about removing distance.</p>
        <div className="cs-final-punch gsap-fade-up">Between message and trust.<br />Between interest and response.<br /><span>Between a product pitch and a real merchant conversation.</span></div>
      </section>
      <section className="svc-final-cta" id="connect">
        <div className="svc-final-cta-mark" aria-hidden="true" style={{ width: 'min(60vw, 800px)', height: 'min(60vw, 800px)' }}>
          <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
            <path className="svc-final-cta-path" d={svgPath} fill="none" />
          </svg>
        </div>
        <div className="container">
          <h2 className="split-text">Your Problem Next?</h2>
          <div className="svc-final-cta-actions gsap-fade-up">
            <a href="/contact-us" className="btn" data-cursor="START"><span className="btn-text">START A CONVERSATION</span><div className="btn-fill"></div></a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MastercardCaseStudy;
