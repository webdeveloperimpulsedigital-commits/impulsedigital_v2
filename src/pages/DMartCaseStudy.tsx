import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const DMartCaseStudy: React.FC = () => {
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
        <title>DMart Digital Campaign Case Study | Driving Store Footfall with Social Media</title>
<meta name="description" content="See how a targeted social media campaign helped DMart reach 13.43 lakh students in Pune and drive store visits for its Trendy College Wear sale." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/dmart/" />
<meta property="og:title" content="DMart Digital Campaign Case Study | Driving Store Footfall with Social Media" />
<meta property="og:description" content="See how a targeted social media campaign helped DMart reach 13.43 lakh students in Pune and drive store visits for its Trendy College Wear sale." />
<meta property="og:image" content="https://www.theimpulsedigital.com/dmart-challenge.png" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/d-mart/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="DMart Digital Campaign Case Study | Driving Store Footfall with Social Media" />
<meta name="twitter:description" content="See how a targeted social media campaign helped DMart reach 13.43 lakh students in Pune and drive store visits for its Trendy College Wear sale." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/dmart-challenge.png" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">DMart</h1>
          <h2 className="cs-hero-subtitle">Turning a student sale into a measurable<br />store visit journey in Pune.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/Dmart/Dmart Title.png`} alt="DMart Campaign - Impulse Digital Marketing Case Study" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">A student sees a fashion sale online.<br /><span style={{ color: 'var(--soft-grey)', display: 'block', marginTop: '1rem' }}>The offer looks good. The price feels right. The store is nearby.</span></p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>But between that moment and an actual visit, a lot can get lost.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>DMart's Trendy College Wear sale needed to reach students in Pune and make the next step feel simple: find the nearest store and act while the sale was still on. There was no e-commerce checkout to close the loop. So the campaign had to build its own bridge from digital attention to store intent.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="13.43">0</span><span className="cs-result-suffix">L</span></div><div className="cs-result-label">unique reach across Pune</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="53">0</span><span className="cs-result-suffix">K</span></div><div className="cs-result-label">unique landing page clicks</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="55">0</span><span className="cs-result-suffix">K</span></div><div className="cs-result-label">post engagements</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="70">0</span><span className="cs-result-suffix">K</span></div><div className="cs-result-label">video views</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>Campaign built around 13 DMart locations in Pune</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Localizing<br />a national giant</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">DMart is built on everyday value. The brand already had scale, with 196 stores across 72 cities in 11 states. But this campaign was not about national scale.</p>
            <p className="cs-p highlight split-text">It was about one city. One audience. One sale window.</p>
            <p className="cs-p split-text">College students in Pune, aged 16 to 23, had to discover the Trendy College Wear sale and find their way to one of 13 DMart stores. That made the job specific.</p>
            <p className="cs-p split-text">The campaign had to feel young enough for students, local enough for Pune, and useful enough to move people beyond a scroll.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Offline sale.<br />Online intent.</h2></div>
          <div className="cs-split-right">
            <p className="cs-p highlight split-text">The sale lived offline.<br />The attention had to start online.</p>
            <p className="cs-p split-text">That created the main challenge: how do you track and influence store intent when there is no online checkout?</p>
            <p className="cs-p split-text">A regular awareness campaign would not be enough. The campaign needed to:</p>
            <ul className="cs-list">
              <li className="gsap-item">Reach students effectively in Pune</li>
              <li className="gsap-item">Make the sale relevant to their lifestyle</li>
              <li className="gsap-item">Guide users directly to the nearest DMart store</li>
              <li className="gsap-item">Capture digital intent prior to offline visit</li>
              <li className="gsap-item">Maintain measurable tracking without e-commerce</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '4rem' }}><strong>The gap between a social ad and a store visit had to be closed with smarter campaign infrastructure.</strong></p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign needed a digital layer that could behave like a store-facing assistant. Something that could help students engage with the sale, share interest, and quickly locate the closest DMart store.</p>
            <p className="cs-p highlight split-text">The landing page had to do more than sit between the ad and the store. It had to carry the campaign forward.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />built</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse shaped the campaign around a digital-to-store journey. The aim was to make the sale easier to find, easier to act on, and easier to track.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Custom landing page for the sale</li>
              <li className="gsap-item">All 13 Pune store locations dynamically mapped</li>
              <li className="gsap-item">Engagement forms for student interest capture</li>
              <li className="gsap-item">Precision FB/IG targeting</li>
              <li className="gsap-item">Pixel tracking mapping ad-to-page behaviour</li>
              <li className="gsap-item">Static and carousel GIF ads optimized for mobile</li>
              <li className="gsap-item">A/B testing (reach vs. click objectives)</li>
              <li className="gsap-item">Campus-centric lifestyle messaging</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Bridge</h2>
            <p className="cs-journey-desc split-text">The custom landing page became the campaign's bridge. It gave students a place to interact before stepping into the store, capturing the crucial signal that checkout usually provides.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / AWARENESS</div><div className="cs-journey-text">A student saw the campaign.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / ACTION</div><div className="cs-journey-text">Clicked through.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / DESTINATION</div><div className="cs-journey-text">Reached the landing page.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / ENGAGEMENT</div><div className="cs-journey-text">Explored the sale items.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">05 / INTENT</div><div className="cs-journey-text">Found a nearby DMart store.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / OUTCOME</div><div className="cs-journey-text">Moved definitively closer to visiting.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The creative<br />layer</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign had to speak like it belonged in a student's feed. The visuals were built for quick attention: static ads and carousel GIFs shaped for mobile consumption.</p>
            <p className="cs-p split-text">The messaging leaned into student lifestyle, campus fashion, and the seasonal need to refresh a wardrobe without overspending.</p>
            <p className="cs-p highlight split-text">It was retail communication, but it had to feel immediate. Like something a student could see, like, share, click, and act on.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What changed</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign turned a physical retail sale into a measurable digital journey. Instead of only announcing the sale, the campaign helped students move through the next steps.</p>
            <p className="cs-p highlight split-text">From awareness. To interest. To landing page engagement. To store discovery.</p>
            <p className="cs-p split-text">The results showed strong movement across that path: <strong>13.43L people reached across Pune. 53K unique clicks driven to the landing page. 55K post engagements created across campaign content. 70K video views generated through campaign storytelling.</strong></p>
            <p className="cs-p split-text">The campaign also added thousands of new followers while keeping spends highly economical.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">From scroll<br />to store intent.</h2>
        <p className="cs-final-text split-text">Retail campaigns often stop at visibility. This one needed to go further. For DMart, the sale had to live inside a student's digital world before it could pull them toward a physical store. The campaign gave that journey a structure: local targeting, mobile-first creative, a custom landing page, store discovery, and pixel-based tracking.</p>
        <div className="cs-final-punch gsap-fade-up">That is what made the campaign useful.<br />Not just seen. Not just clicked.<br /><span>Built to move people closer to the store.</span></div>
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
export default DMartCaseStudy;
