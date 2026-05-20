import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const LGHingCaseStudy: React.FC = () => {
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
        <title>LG Hing Brand Campaign Case Study: Empowering Women | Impulse Digital</title>
<meta name="description" content="Read how LG Hing’s purpose-driven Diwali campaign empowered women entrepreneurs and achieved 507K impressions with strong engagement." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/lg-hing/" />
<meta property="og:title" content="LG Hing Brand Campaign Case Study: Empowering Women | Impulse Digital" />
<meta property="og:description" content="Read how LG Hing’s purpose-driven Diwali campaign empowered women entrepreneurs and achieved 507K impressions with strong engagement." />
<meta property="og:image" content="https://www.theimpulsedigital.com/lg-hing-packshot.png" />
<meta property="og:url" content="http://theimpulsedigital.com/casestudies/laljee-godhoo/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="LG Hing Brand Campaign Case Study: Empowering Women | Impulse Digital" />
<meta name="twitter:description" content="Read how LG Hing’s purpose-driven Diwali campaign empowered women entrepreneurs and achieved 507K impressions with strong engagement." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/lg-hing-packshot.png" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">LG Hing</h1>
          <h2 className="cs-hero-subtitle">Giving Diwali a story<br />that felt closer to home.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/LG/LG title.png`} alt="LG Hing Diwali campaign case study" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Diwali is one of the loudest moments in Indian marketing.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>Every brand wants attention. Every feed is full. Every message tries to sound festive.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>For LG Hing, the opportunity was not to add one more Diwali campaign to the noise. The brand had something stronger to lean on: heritage, food, family, community, and the women who quietly keep so much of the festive economy moving.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="5">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">sales increase within 24 hours</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="507">0</span><span className="cs-result-suffix">K</span></div><div className="cs-result-label">impressions during peak festive season</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="4.5">0</span><span className="cs-result-suffix">K</span></div><div className="cs-result-label">engagements</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="cs-result-word">1894</span></div><div className="cs-result-label">brand heritage carried into the Diwali narrative</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>Stronger positive reflection among target audiences</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The context</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">LG Hing has been part of Indian kitchens since 1894.</p>
            <p className="cs-p split-text">That kind of heritage carries memory. It sits inside recipes, homes, habits, and family traditions.</p>
            <p className="cs-p highlight split-text">But during Diwali, even heritage brands have to fight for attention.</p>
            <p className="cs-p split-text">TV, digital, outdoor, festive offers, emotional films, product pushes, everybody is speaking at once.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The challenge</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Traditional Diwali messaging can become predictable very quickly.</p>
            <p className="cs-p split-text">Lights. Families. Food. Festive offers. The same emotional shortcuts.</p>
            <p className="cs-p highlight split-text">For LG Hing, the challenge was to create a campaign that felt genuine to the brand and still worked during a high-pressure festive sales window.</p>
            <p className="cs-p split-text">The message had to feel rooted, not manufactured.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The idea</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The story was already there.</p>
            <p className="cs-p split-text">Local women entrepreneurs were at the heart of Diwali celebrations.</p>
            <p className="cs-p highlight split-text">They were preparing festive food. Selling snacks. Serving communities. Holding tradition and enterprise together in small, powerful ways.</p>
            <p className="cs-p split-text">A Diwali story about food became a story about the women behind it.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Building the<br />campaign</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign was built around emotional authenticity.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Authentic video content</li>
              <li className="gsap-item">Values-first festive messaging</li>
              <li className="gsap-item">Digital-first amplification</li>
              <li className="gsap-item">Storytelling shaped around women entrepreneurs</li>
              <li className="gsap-item">Brand heritage woven into the Diwali narrative</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Role</h2>
            <p className="cs-journey-desc split-text">LG Hing belongs in Indian cooking. That gave the campaign a natural place in the story.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / HERITAGE</div><div className="cs-journey-text">The brand's history gave the campaign memory and cultural familiarity.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / FOOD</div><div className="cs-journey-text">Festive food, homes, snacks, preparation, and tradition made the product context natural.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / PEOPLE</div><div className="cs-journey-text">The campaign let women entrepreneurs lead the story.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / PURPOSE</div><div className="cs-journey-text">The brand entered through the world it has always been part of.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>05 / TRUTH</div><div className="cs-journey-text">The campaign did not need to shout. It needed to feel true.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The brand's<br />place</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">LG Hing belongs in Indian cooking.</p>
            <p className="cs-p split-text">That gave the campaign a natural place in the story.</p>
            <p className="cs-p highlight split-text">The product did not need to be pushed aggressively because the context already made sense.</p>
            <p className="cs-p split-text">The campaign used that connection carefully. It let the people lead.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What changed</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign delivered both emotional resonance and business response.</p>
            <p className="cs-p split-text">The numbers matter because the campaign did not choose between meaning and performance.</p>
            <p className="cs-p highlight split-text">It used one to strengthen the other.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Business impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Diwali campaigns often celebrate the occasion.</p>
            <p className="cs-p highlight split-text">This one celebrated the people who help make the occasion feel alive.</p>
            <p className="cs-p split-text">LG Hing was not placed outside the story, trying to own a festival moment.</p>
            <p className="cs-p split-text">It was placed inside a familiar Indian truth: food, celebration, enterprise, and community often come together through women whose work deserves to be seen.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">A human centre.</h2>
        <p className="cs-final-text split-text">For a heritage food brand, the campaign felt less like advertising and more like recognition.</p>
        <div className="cs-final-punch gsap-fade-up">Food.<br />Celebration.<br /><span>Enterprise and community, brought into the same Diwali story.</span></div>
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
export default LGHingCaseStudy;
