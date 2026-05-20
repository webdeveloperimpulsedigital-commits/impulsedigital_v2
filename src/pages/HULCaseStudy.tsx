import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const HULCaseStudy: React.FC = () => {
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
        <title>HUL FMCG Digital Campaign Success | Impulse Digital Case Study</title>
<meta name="description" content="Explore how Impulse Digital executed a geo-targeted digital coupon campaign for Hindustan Unilever Limited (HUL) across Pune and Delhi, driving 90% higher CTR, 41.8% more clicks, and 12.5K+ landing page sessions." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/hul/" />
<meta property="og:title" content="HUL FMCG Digital Campaign Success | Impulse Digital Case Study" />
<meta property="og:description" content="Explore how Impulse Digital executed a geo-targeted digital coupon campaign for Hindustan Unilever Limited (HUL) across Pune and Delhi, driving 90% higher CTR, 41.8% more clicks, and 12.5K+ landing page sessions." />
<meta property="og:image" content="https://www.theimpulsedigital.com/hul-map.png" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/hul/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="HUL FMCG Digital Campaign Success | Impulse Digital Case Study" />
<meta name="twitter:description" content="Explore how Impulse Digital executed a geo-targeted digital coupon campaign for Hindustan Unilever Limited (HUL) across Pune and Delhi, driving 90% higher CTR, 41.8% more clicks, and 12.5K+ landing page sessions." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/hul-map.png" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">HUL</h1>
          <h2 className="cs-hero-subtitle">Turning digital interest into<br />store-level traction.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/HUL 1/HUL 1 Title.png`} alt="HUL FMCG coupon campaign" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">A coupon campaign sounds simple until it has to work in the real world.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>People have to see the offer. Care enough to click. Share their details. Verify their number. Receive the coupon. And then use it offline.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>HUL needed a campaign that could connect those steps across Pune and Delhi, without losing people along the way.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="90">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">higher CTR against benchmark</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="41.8">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">increase in clicks</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="79.7">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">impression growth</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="12548">0</span><span className="cs-result-suffix">+</span></div><div className="cs-result-label">landing page sessions</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>Campaign executed across Pune and Delhi</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">National scale.<br />Local precision.</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">HUL brought the scale of India's largest consumer goods manufacturer, with 90+ years of heritage and 50+ FMCG brands.</p>
            <p className="cs-p highlight split-text">But this campaign needed local precision.</p>
            <p className="cs-p split-text">The task was not just to create visibility for an offer. It was to get the right consumers in selected locations to generate coupons online and redeem them offline.</p>
            <p className="cs-p split-text">That made the campaign part media, part user journey, part backend coordination.</p>
            <p className="cs-p split-text">If any one step felt loose, intent could drop.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Reach was not<br />enough</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign had to solve three problems at once.</p>
            <p className="cs-p highlight split-text">Reach consumers within selected geo-locations.<br />Encourage online coupon generation.<br />Support offline store redemption.</p>
            <p className="cs-p split-text">Broad reach alone would not be enough.</p>
            <p className="cs-p split-text">The campaign needed targeting sharp enough to matter, messaging flexible enough for different product categories, and a journey simple enough for people to complete.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign could not treat every consumer, location, and product the same way.</p>
            <p className="cs-p split-text">Premium products needed more focused messaging. Non-premium products needed broader mass appeal.</p>
            <p className="cs-p highlight split-text">Both had to move through the same coupon journey without friction.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Location</li>
              <li className="gsap-item">Product category</li>
              <li className="gsap-item">Consumer behaviour</li>
              <li className="gsap-item">Landing page action</li>
              <li className="gsap-item">Backend coupon delivery</li>
            </ul>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />worked on</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse structured the campaign around local relevance and action.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Facebook and Instagram campaign planning</li>
              <li className="gsap-item">3 km radius targeting</li>
              <li className="gsap-item">Audience behaviour inputs</li>
              <li className="gsap-item">Geo-targeting across Pune and Delhi</li>
              <li className="gsap-item">Product bifurcation across premium and non-premium categories</li>
              <li className="gsap-item">Landing page flow for user detail capture</li>
              <li className="gsap-item">Phone number authentication</li>
              <li className="gsap-item">Backend transfer to HUL</li>
              <li className="gsap-item">Instant SMS coupon delivery</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '4rem' }}>The goal was simple: make the journey easy for the user and useful for the campaign.</p>
          </div>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Coupon Path</h2>
            <p className="cs-journey-desc split-text">The user journey had to keep the next step obvious.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / LAND</div><div className="cs-journey-text">A consumer landed on the campaign page.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / DETAILS</div><div className="cs-journey-text">Entered their details.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / VERIFY</div><div className="cs-journey-text">Verified their phone number.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / TRANSFER</div><div className="cs-journey-text">The data moved to HUL's backend.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">05 / COUPON</div><div className="cs-journey-text">An SMS coupon was delivered instantly.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / ACTION</div><div className="cs-journey-text">The user had a clear path from digital intent to offline redemption.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The sharper<br />layer</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The product strategy was split instead of flattened.</p>
            <p className="cs-p split-text">Premium products were supported with targeted messaging for high-value categories.</p>
            <p className="cs-p split-text">Non-premium products used broader communication for everyday relevance and mass appeal.</p>
            <p className="cs-p highlight split-text">That made the campaign more responsive to different FMCG buying contexts.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign performed strongly against the internal benchmark set for the activity.</p>
            <p className="cs-p highlight split-text">90% higher CTR showed stronger audience response.<br />41.8% more clicks showed more people were choosing to act.<br />79.7% impression growth expanded visibility across the selected markets.</p>
            <p className="cs-p split-text">12,548+ landing page sessions showed that users were moving beyond the ad and entering the coupon journey.</p>
            <p className="cs-p split-text">The numbers matter because they point to a working connection between media, message, and action.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">From coupon<br />to conversion path.</h2>
        <p className="cs-final-text split-text">A coupon only works when the journey around it works. For HUL, the campaign connected digital targeting with offline redemption through a clear, local, measurable path.</p>
        <div className="cs-final-punch gsap-fade-up">From visibility.<br />To click. To verification. To coupon delivery.<br /><span>To store-level action.</span></div>
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
export default HULCaseStudy;
