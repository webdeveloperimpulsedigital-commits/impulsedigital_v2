import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const ABGKBCCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);
  const base = import.meta.env.BASE_URL;
  return (
    <main id="main-content">
      <Helmet>
        <title>How Impulse Digital Powered the ‘A Force For Good’ Campaign | Case Study</title>
<meta name="description" content="A case study on the ‘A Force For Good’ campaign by Impulse Digital, showcasing creative branding, storytelling, and digital marketing impact." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/abg-kbc/" />
<meta property="og:title" content="How Impulse Digital Powered the ‘A Force For Good’ Campaign | Case Study" />
<meta property="og:description" content="A case study on the ‘A Force For Good’ campaign by Impulse Digital, showcasing creative branding, storytelling, and digital marketing impact." />
<meta property="og:image" content="https://www.theimpulsedigital.com/ffg-main.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/aforceforgood/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="How Impulse Digital Powered the ‘A Force For Good’ Campaign | Case Study" />
<meta name="twitter:description" content="A case study on the ‘A Force For Good’ campaign by Impulse Digital, showcasing creative branding, storytelling, and digital marketing impact." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/ffg-main.webp" />
<meta name="twitter:site" content="@impulsedigi" />\n      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">ABG x KBC</h1>
          <h2 className="cs-hero-subtitle">Introducing a new purpose through a moment<br />India already trusted.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/ABG x KBC/ABG x KBC Title.webp`} alt="ABG A Force for Good x KBC campaign - Impulse Digital Marketing Case Study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Aditya Birla Group was moving from "Big in Your Life" to "A Force for Good."</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>That shift needed more than a new line.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>It needed a moment people could understand quickly, believe instinctively, and remember after the campaign had passed.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item"><div className="cs-result-number"><span>4.3</span><span className="cs-result-suffix">Mn+</span></div><div className="cs-result-label">TV reach</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>1</span><span className="cs-result-suffix">Mn+</span></div><div className="cs-result-label">digital reach</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>1</span></div><div className="cs-result-label">trusted national platform</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>1</span></div><div className="cs-result-label">purpose made visible</div></div>
        <div className="cs-result-banner"><span>Brand recall enhanced through purpose-linked storytelling</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The situation</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">A purpose narrative can sound distant when it stays inside brand language.</p>
            <p className="cs-p split-text">For ABG, the task was to introduce A Force for Good to the nation with credibility, scale, and emotional clarity.</p>
            <p className="cs-p highlight split-text">The campaign could not feel like a corporate announcement.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The challenge</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">It had to feel human. It had to feel participative. It had to show impact without needing a long explanation.</p>
            <p className="cs-p highlight split-text">One question.<br />One child's education.<br />One purpose made visible.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign used KBC's question format to create a direct emotional connection.</p>
            <p className="cs-p split-text">Every question on the show became more than part of the game. It stood for the education of a child.</p>
            <p className="cs-p highlight split-text">A question could lead to knowledge.<br />Knowledge could lead to opportunity.<br />And ABG's purpose could be seen through that chain.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />worked on</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse supported the campaign by strengthening the creative and executional ecosystem around the launch.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Digital and television-ready creative assets</li>
              <li className="gsap-item">Visual communication across television, social media, and corporate channels</li>
              <li className="gsap-item">Real-time coordination across stakeholders for rollout</li>
              <li className="gsap-item">Consistent translation of the Force for Good narrative across touchpoints</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '4rem' }}>The goal was to keep the idea clear at scale.</p>
            <p className="cs-p highlight split-text">Not louder.<br />Clearer.</p>
          </div>
        </div>
      </section>
      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/ABG x KBC/Supporting 1.webp`} alt="ABG x KBC campaign visual - Impulse Digital Marketing Case Study" loading="lazy" decoding="async" />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">KBC made the purpose easier to understand in one viewing moment.</h2>
          <p className="cs-proof-text split-text">People already understand the value of a question on that stage. By connecting that format to a child's education, the campaign made ABG's purpose feel less abstract.</p>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The System</h2>
            <p className="cs-journey-desc split-text">The campaign had to make a purpose shift feel clear across television, digital, social, and corporate channels.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / PURPOSE</div><div className="cs-journey-text">A Force for Good needed credibility, scale, and emotional clarity.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / PLATFORM</div><div className="cs-journey-text">KBC gave the campaign a trusted cultural setting.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / DEVICE</div><div className="cs-journey-text">Every question symbolised the education of a child sponsored by Aditya Birla Group.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / EXECUTION</div><div className="cs-journey-text">Creative assets carried the message across television, social media, and corporate channels.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">05 / COORDINATION</div><div className="cs-journey-text">Real-time stakeholder coordination kept the rollout consistent.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / OUTCOME</div><div className="cs-journey-text">The campaign turned a brand shift into something people could feel in one viewing moment.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The role of<br />the platform</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">KBC gave the campaign a powerful cultural setting.</p>
            <p className="cs-p split-text">People already understand the value of a question on that stage. It carries curiosity, ambition, knowledge, and possibility.</p>
            <p className="cs-p highlight split-text">By connecting that format to a child's education, the campaign made ABG's purpose feel less abstract.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign delivered strong national visibility while reinforcing ABG's purpose-led identity.</p>
            <p className="cs-p split-text">4.3 Mn+ TV reach. 1 Mn+ digital reach. Brand recall enhanced through purpose-linked storytelling.</p>
            <p className="cs-p highlight split-text">The numbers mattered because the campaign was not built for reach alone.<br />Reach helped the message travel.<br />The idea helped it stay.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What this<br />made possible</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">When a large organisation introduces a new purpose, the hardest part is not saying it.</p>
            <p className="cs-p split-text">The hardest part is making people believe it.</p>
            <p className="cs-p highlight split-text">For Aditya Birla Group, A Force for Good became easier to understand because it was tied to something real: education.</p>
            <p className="cs-p split-text">And it was carried through something familiar: a question on KBC.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">A Force<br />for Good</h2>
        <p className="cs-final-text split-text">A brand shift became something people could understand, believe, and remember.</p>
        <div className="cs-final-punch gsap-fade-up">Not a slogan asking to be admired.<br />A simple connection<br /><span>people could remember.</span></div>
      </section>
      <section className="svc-final-cta" id="connect">
        <div className="svc-final-cta-mark" aria-hidden="true" style={{ width: 'min(60vw, 800px)', height: 'min(60vw, 800px)' }}>
          <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
            <path className="svc-final-cta-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" />
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
export default ABGKBCCaseStudy;
