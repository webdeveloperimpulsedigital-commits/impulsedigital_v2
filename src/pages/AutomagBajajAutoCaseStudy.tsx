import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const AutomagBajajAutoCaseStudy: React.FC = () => {
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
        <title>Automag x Bajaj Auto – Industrial Film Case Study | Impulse Digital</title>
        <meta name="description" content="How Impulse Digital turned Automag's conveyor deployment at Bajaj Auto's Akurdi plant into compelling business proof through a technical case study film." />
      
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/automag-bajaj-auto/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Automag x Bajaj Auto</h1>
          <h2 className="cs-hero-subtitle">The system worked. Now the story had to.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/Automag India/Automag x Bajaj Auto title.webp`} alt="Automag conveyor system case study film for Bajaj Auto" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">On a factory floor, good engineering does not always look dramatic.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>It shows up in smaller, sharper ways.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>Automag had delivered a major conveyor system at Bajaj Auto's Akurdi plant in Pune. The engineering had already proved itself.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">What the film captured</h2>
        <div className="cs-result-item"><div className="cs-result-number"><span>1.3</span><span className="cs-result-suffix">km</span></div><div className="cs-result-label">integrated conveyor network</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>960</span></div><div className="cs-result-label">frames per shift, up from 600</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>&lt;30</span><span className="cs-result-suffix">s</span></div><div className="cs-result-label">cycle time, down from 48 seconds</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>7</span><span className="cs-result-suffix">to 2</span></div><div className="cs-result-label">manual transfer points reduced</div></div>
        <div className="cs-result-banner"><span>These were Automag's deployment outcomes. Impulse turned them into usable business proof.</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The situation</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Automag builds material handling systems for manufacturing environments where every second matters.</p>
            <p className="cs-p split-text">At Bajaj Auto's Akurdi plant, Automag connected pretreatment, top coat, and assembly through an integrated conveyor network.</p>
            <p className="cs-p highlight split-text">It was a powerful proof point. But proof hidden inside a plant can only travel so far.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The challenge</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">A conveyor system can look impressive and still leave people asking one question: what changed?</p>
            <p className="cs-p split-text">The real value was not just in the machinery. It was in the movement it improved, the handling it reduced, the time it saved, the flow it created, and the safety it protected.</p>
            <p className="cs-p highlight split-text">The film had to make that visible without making the engineering feel small.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">This could not be a factory walkthrough.</p>
            <p className="cs-p highlight split-text">It had to become business proof.</p>
            <p className="cs-p split-text">The audience needed to see the system, but also understand the consequence of the system: what moved faster, what became safer, and what became easier to scale.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Impulse role<br />snapshot</h2></div>
          <div className="cs-split-right">
            <ul className="cs-list" style={{ marginTop: 0 }}>
              <li className="gsap-item">Technical recce and site understanding</li>
              <li className="gsap-item">Conversations with Automag and Bajaj engineering teams</li>
              <li className="gsap-item">Case study narrative development</li>
              <li className="gsap-item">Scripting and shoot planning</li>
              <li className="gsap-item">Two-day on-site shoot</li>
              <li className="gsap-item">Editing and final film structuring</li>
              <li className="gsap-item">Technical storytelling inside a live plant environment</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Film System</h2>
            <p className="cs-journey-desc split-text">Impulse built the film around understanding before production.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / UNDERSTAND</div><div className="cs-journey-text">Study the plant flow and the key process points before shaping the shoot.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / MAP</div><div className="cs-journey-text">Follow how the conveyor network connected production areas and improved movement across the line.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / LISTEN</div><div className="cs-journey-text">Speak to the engineering teams so the film carried real operational clarity.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / STRUCTURE</div><div className="cs-journey-text">Build the narrative around movement, scale, and outcome.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>05 / PROVE</div><div className="cs-journey-text">Make Automag's value impossible to miss.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">How the film<br />came together</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The story followed the system through the plant.</p>
            <p className="cs-p split-text">It showed how the conveyor network connected production areas and improved movement across the line.</p>
            <p className="cs-p highlight split-text">1.3 km of integrated movement.<br />960 frames per shift, up from 600.<br />Cycle time down from 48 seconds to under 30 seconds.<br />Manual transfer points reduced from 7 to 2.</p>
            <p className="cs-p split-text">Not specs. Reasons to trust the engineering.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The value<br />created</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">For Automag, the film became a credibility asset.</p>
            <p className="cs-p split-text">It gave the team a sharper way to show the scale of the deployment, the complexity they can handle, and the kind of operating improvement future buyers care about.</p>
            <p className="cs-p highlight split-text">Industrial buyers are not only buying equipment. They are buying confidence.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">Strong Work,<br />Seen Clearly</h2>
        <p className="cs-final-text split-text">Automag had already done the hard engineering work.</p>
        <div className="cs-final-punch gsap-fade-up">The line moved better.<br />The numbers improved.<br /><span>The story became easier to believe.</span></div>
      </section>
      <section className="svc-final-cta" id="connect">
        <div className="svc-final-cta-mark" aria-hidden="true">
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
export default AutomagBajajAutoCaseStudy;
