import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const ABGBrutIndiaCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => { document.body.classList.remove('case-study-page'); cleanup(); };
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <main id="main-content">
      <Helmet>
        <title>Aditya Birla Group × Brut India Campaign | Force for Good Case Study</title>
<meta name="description" content="Discover how Impulse Digital helped Aditya Birla Group and Brut India bring the “Force for Good” campaign to life by showcasing real changemakers and generating 27M+ campaign views through impactful storytelling." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/abg-brut-india/" />
<meta property="og:title" content="Aditya Birla Group × Brut India Campaign | Force for Good Case Study" />
<meta property="og:description" content="Discover how Impulse Digital helped Aditya Birla Group and Brut India bring the “Force for Good” campaign to life by showcasing real changemakers and generating 27M+ campaign views through impactful storytelling." />
<meta property="og:image" content="https://www.theimpulsedigital.com/brut-abg.jfif" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/brutindia/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Aditya Birla Group × Brut India Campaign | Force for Good Case Study" />
<meta name="twitter:description" content="Discover how Impulse Digital helped Aditya Birla Group and Brut India bring the “Force for Good” campaign to life by showcasing real changemakers and generating 27M+ campaign views through impactful storytelling." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/brut-abg.jfif" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">ABG x Brut India</h1>
          <h2 className="cs-hero-subtitle">Turning corporate purpose into 10 human stories<br />India could recognise.</h2>
        </div>
      </section>

      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/ABG x Brut India/ABG Brut India Title.png`} alt="ABG x Brut India Force for Good campaign - Impulse Digital Marketing Case Study" />
        </div>
      </div>

      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Aditya Birla Group wanted Force for Good to move beyond a brand idea.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>It had to feel lived.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>Not as a corporate message. As real people doing meaningful work across India.</p>
      </section>

      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item"><div className="cs-result-number"><span>10</span></div><div className="cs-result-label">changemakers</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>27</span><span className="cs-result-suffix">M+</span></div><div className="cs-result-label">views across platforms</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>10</span></div><div className="cs-result-label">human stories</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>1</span></div><div className="cs-result-label">message</div></div>
        <div className="cs-result-banner"><span>Built as an evergreen digital storytelling property</span></div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The situation</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Purpose can sound distant when it stays at the level of the institution.</p>
            <p className="cs-p split-text">Force for Good needed a more human centre.</p>
            <p className="cs-p split-text">The campaign had to show how the idea lives through people, communities, and everyday action.</p>
            <p className="cs-p highlight split-text">With Brut India as the platform partner, the campaign had to turn ABG's purpose narrative into digital storytelling with scale and emotional credibility.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The challenge</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign needed reach, but not at the cost of depth.</p>
            <p className="cs-p split-text">Each story had to stand on its own. Each film had to hold attention. Each asset had to work across platforms. And all 10 stories had to return to one message.</p>
            <p className="cs-p highlight split-text">10 individuals.<br />10 stories.<br />1 message.</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The story had to move from proclamation to participation.</p>
            <p className="cs-p split-text">Instead of only saying what Force for Good stands for, the campaign had to show people already living that idea.</p>
            <p className="cs-p highlight split-text">Purpose becomes stronger when people can see it in action.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />worked on</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse helped shape the campaign as a connected story system.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Story prioritisation matrix to identify high-potential stories</li>
              <li className="gsap-item">Narrative structuring for hero films</li>
              <li className="gsap-item">Creative supervision across assets</li>
              <li className="gsap-item">Short-format content for platform amplification</li>
              <li className="gsap-item">A/B testing of assets and creative inputs</li>
              <li className="gsap-item">Long and short-format storytelling across platforms</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '4rem' }}>The focus was to keep each story emotionally clear, digitally sharp, and tied to the larger Force for Good narrative.</p>
          </div>
        </div>
      </section>

      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/ABG x Brut India/Supporting 1.png`} alt="ABG x Brut India storytelling visual - Impulse Digital Marketing Case Study" />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">Real people made the purpose easier to feel.</h2>
          <p className="cs-proof-text split-text">The campaign spotlighted changemakers from across India, giving Force for Good a human centre instead of leaving it as an institutional message.</p>
        </div>
      </section>

      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The System</h2>
            <p className="cs-journey-desc split-text">Each story had to stand alone while still returning to the same purpose platform.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / PURPOSE</div><div className="cs-journey-text">Force for Good needed to feel lived, not only stated.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / PEOPLE</div><div className="cs-journey-text">10 changemakers gave the campaign a recognisable human centre.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / DEPTH</div><div className="cs-journey-text">Long-format films gave each story room to breathe.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / SCALE</div><div className="cs-journey-text">Short-format edits made those stories easier to discover, share, and amplify.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">05 / PLATFORM</div><div className="cs-journey-text">Brut India brought the social-first format. ABG brought the purpose platform.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / OUTCOME</div><div className="cs-journey-text">Impulse connected the stories into one campaign architecture.</div></div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">How the campaign<br />came together</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign spotlighted real changemakers from across India.</p>
            <p className="cs-p split-text">The long-format films gave their stories depth. The short-format edits made those stories easier to discover, share, and scale.</p>
            <p className="cs-p highlight split-text">Brut India brought the social-first format.<br />ABG brought the purpose platform.<br />Impulse helped connect the stories.</p>
          </div>
        </div>
      </section>

      <section className="cs-proof-module reverse">
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">The formats carried the stories beyond one campaign burst.</h2>
          <p className="cs-proof-text split-text">Long and short-format storytelling helped the campaign hold depth while still moving across social platforms with scale.</p>
        </div>
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/ABG x Brut India/Supporting 2.png`} alt="ABG x Brut India amplification visual - Impulse Digital Marketing Case Study" />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign generated 27M+ views across platforms.</p>
            <p className="cs-p split-text">It also built positive sentiment around ABG's Force for Good message and earned a feature on Social Samosa.</p>
            <p className="cs-p highlight split-text">More importantly, it gave ABG an evergreen digital IP: a storytelling property that could keep the purpose narrative active beyond one campaign burst.</p>
          </div>
        </div>
      </section>

      <section className="cs-final">
        <h2 className="cs-final-heading split-text">A Force<br />for Good</h2>
        <p className="cs-final-text split-text">For ABG, Force for Good moved from a brand message to a people-led story system.</p>
        <div className="cs-final-punch gsap-fade-up">Real individuals.<br />Real impact.<br /><span>One purpose, made visible.</span></div>
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

export default ABGBrutIndiaCaseStudy;
