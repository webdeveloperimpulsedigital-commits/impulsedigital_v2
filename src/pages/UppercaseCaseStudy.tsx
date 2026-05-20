import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const UppercaseCaseStudy: React.FC = () => {
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
        <title>Uppercase – Carry Your Resolution Campaign Case Study | Impulse Digital</title>
        <meta name="description" content="How Impulse Digital created an AI-led New Year social film for Uppercase that achieved 5.49M plays, 868K+ views, and 100K+ likes." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/uppercase/" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Uppercase</h1>
          <h2 className="cs-hero-subtitle">Carry Your Resolution.<br />A New Year idea that gave the product a reason to belong.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/Uppercase/Uppercase Title.png`} alt="Uppercase Carry Your Resolution campaign - Impulse Digital Marketing Case Study" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">New Year is crowded with the same kind of brand talk.<br /><span style={{ color: 'var(--soft-grey)', display: 'block', marginTop: '1rem' }}>New goals. New habits. New beginnings. New you.</span></p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>Uppercase needed a film that could enter that moment without becoming another seasonal post.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>The idea came from a simple shift: resolutions are not just made at the start of the year. They are carried into work, travel, routines, ambition, and everyday life.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="5.49">0</span><span className="cs-result-suffix">M</span></div><div className="cs-result-label">plays</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="868">0</span><span className="cs-result-suffix">K+</span></div><div className="cs-result-label">views</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="100">0</span><span className="cs-result-suffix">K+</span></div><div className="cs-result-label">likes</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span>AI</span></div><div className="cs-result-label">led social film</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>Created for a crowded New Year content window</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">A familiar<br />seasonal moment</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Every January, brands try to attach themselves to resolutions.</p>
            <p className="cs-p split-text">Most of them sound familiar within seconds.</p>
            <p className="cs-p split-text">Uppercase had to do something more specific to the brand. The film needed to feel timely, social-first, and easy to understand, while giving the product a natural role in the story.</p>
            <p className="cs-p highlight split-text">A good New Year line was not enough.<br />The bag had to feel like it belonged there.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The campaign<br />challenge</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign had to solve three things at once.</p>
            <ul className="cs-list">
              <li className="gsap-item">Avoid the usual New Year language</li>
              <li className="gsap-item">Make the product feel native to the idea</li>
              <li className="gsap-item">Create a film strong enough for Instagram attention</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '4rem' }}><strong>If the product felt inserted, people would feel it immediately. The story had to earn the bag's presence.</strong></p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The idea</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Most resolution stories focus on the promise.</p>
            <p className="cs-p highlight split-text">We focused on what happens after the promise.</p>
            <p className="cs-p split-text">People carry their resolutions into the year. To work. To airports. To gyms. To meetings. To routines. To the version of themselves they are trying to build.</p>
            <p className="cs-p split-text">That gave Uppercase a clean role: a campaign about carrying things forward, and a product made to be carried through real life.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Building<br />the campaign</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The line gave the campaign its spine. The film then had to make that thought feel lived-in.</p>
            <p className="cs-p split-text">Each moment was built around a resolution people could recognise: move more, travel more, work better, learn something new, show up sharper.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">The campaign thought</li>
              <li className="gsap-item">The resolution-led moments</li>
              <li className="gsap-item">The product role in each frame</li>
              <li className="gsap-item">The pace of the film</li>
              <li className="gsap-item">The social-first narrative flow</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/Uppercase/Supporting 1.webp`} alt="Uppercase campaign visual proof - Impulse Digital Marketing Case Study" />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">The film had to move quickly. But the idea had to stay clear.</h2>
          <p className="cs-proof-text split-text">The product appeared inside recognisable resolution-led moments, without slowing the story down.</p>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Carry</h2>
            <p className="cs-journey-desc split-text">The campaign worked because the product already had a natural place inside the idea.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / PROMISE</div><div className="cs-journey-text">A person makes a resolution.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / MOVEMENT</div><div className="cs-journey-text">That resolution moves into real life.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / ROUTINE</div><div className="cs-journey-text">Work, travel, gyms, meetings, and everyday ambition.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / PRODUCT</div><div className="cs-journey-text">The bag belongs inside those moments.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">05 / FORMAT</div><div className="cs-journey-text">The story is shaped as a social-first film.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / OUTCOME</div><div className="cs-journey-text">The campaign travels because the thought is simple and the product connection is honest.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The role of<br />the product</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The product fit because the thought fit.</p>
            <p className="cs-p split-text">Uppercase did not need to force the bag into the film. The campaign was about carrying a resolution forward, and the product already had a natural place in that idea.</p>
            <p className="cs-p highlight split-text">The bag was visible.<br />The story stayed intact.<br />The brand had a reason to be there.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Where AI<br />came in</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The film was built using AI across script, visuals, models, video, voiceover, music, and editing.</p>
            <p className="cs-p split-text">AI helped create speed, range, and production flexibility. But the campaign still needed human judgement at every important point.</p>
            <p className="cs-p highlight split-text">AI helped build the film.<br />The idea led it.</p>
          </div>
        </div>
      </section>
      <section className="cs-proof-module reverse">
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">Speed mattered. Judgement mattered more.</h2>
          <p className="cs-proof-text split-text">The team still had to decide what the idea should be, which moments the film should show, where the product should appear, and what the final piece should feel like.</p>
        </div>
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/Uppercase/Supporting 2.webp`} alt="Uppercase AI-led campaign execution visual - Impulse Digital Marketing Case Study" />
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What changed</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The reel went live on Instagram in December 2025 and delivered strong traction.</p>
            <p className="cs-p highlight split-text">5.49M plays.<br />868K+ views.<br />100K+ likes.</p>
            <p className="cs-p split-text">For a seasonal campaign, those numbers matter because the film was competing inside one of the noisiest content windows of the year.</p>
            <p className="cs-p split-text">The campaign travelled because the thought was simple, the product connection was honest, and the format was built for social attention.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text" style={{ color: 'var(--impulse-violet)' }}>Carry Your<br />Resolution</h2>
        <p className="cs-final-text split-text">The strongest product campaigns do not beg for attention. They find the moment where the product naturally belongs. For Uppercase, that moment was the space between making a resolution and living it.</p>
        <div className="cs-final-punch gsap-fade-up">The bag became part of that movement.<br />Not as decoration.<br /><span>As the thing that carries the year forward.</span></div>
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
export default UppercaseCaseStudy;
