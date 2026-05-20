import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const FoursForGoodCaseStudy: React.FC = () => {
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
        <title>Fours for Good Campaign Case Study | Aditya Birla Group × Cricket Impact</title>
<meta name="description" content="Explore how Impulse Digital executed Aditya Birla Group’s “Fours for Good” campaign during the Border-Gavaskar Trophy, converting cricket moments into real impact with 200+ children receiving professional training and 8.1M+ digital impressions." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/fours-for-good/" />
<meta property="og:title" content="Fours for Good Campaign Case Study | Aditya Birla Group × Cricket Impact" />
<meta property="og:description" content="Explore how Impulse Digital executed Aditya Birla Group’s “Fours for Good” campaign during the Border-Gavaskar Trophy, converting cricket moments into real impact with 200+ children receiving professional training and 8.1M+ digital impressions." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/fourseforgood/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Fours for Good Campaign Case Study | Aditya Birla Group × Cricket Impact" />
<meta name="twitter:description" content="Explore how Impulse Digital executed Aditya Birla Group’s “Fours for Good” campaign during the Border-Gavaskar Trophy, converting cricket moments into real impact with 200+ children receiving professional training and 8.1M+ digital impressions." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Fours for Good</h1>
          <h2 className="cs-hero-subtitle">Turning a boundary into a better future<br />for a child.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/Fours for good/Fours for good title.webp`} alt="Aditya Birla Group Fours for Good cricket impact campaign - Impulse Digital Marketing Case Study" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">In India, a four is not just a shot.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>It is a sound from the living room. A cheer from the stand. A moment people feel together.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>Aditya Birla Group took that shared cricketing joy and gave it a deeper meaning.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item"><div className="cs-result-number"><span>200</span><span className="cs-result-suffix">+</span></div><div className="cs-result-label">children trained</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>8.1</span><span className="cs-result-suffix">M+</span></div><div className="cs-result-label">audience impressions</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>1</span></div><div className="cs-result-label">live sporting moment</div></div>
        <div className="cs-result-item"><div className="cs-result-number"><span>4</span></div><div className="cs-result-label">runs linked to impact</div></div>
        <div className="cs-result-banner"><span>Force for Good became visible through measurable action</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The situation</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">After the national introduction of Force for Good, ABG wanted to deepen public participation around the idea.</p>
            <p className="cs-p split-text">The purpose had already been stated. Now it needed to move.</p>
            <p className="cs-p highlight split-text">Cricket offered the right cultural stage because few things in India create emotion at this scale, this quickly, and this collectively.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The challenge</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The opportunity was to take a moment fans already cared about and connect it to visible impact.</p>
            <p className="cs-p highlight split-text">Every four scored.<br />A child trained.</p>
            <p className="cs-p split-text">Simple enough to understand instantly. Strong enough to travel across platforms. Emotional enough to make the audience feel included.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Fours for Good turned spectator excitement into collective participation.</p>
            <p className="cs-p split-text">People were no longer only watching the match. They were watching impact build in real time.</p>
            <p className="cs-p highlight split-text">A live sporting moment became a way for people to feel part of something larger.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />worked on</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse Digital shaped the creative and technical system behind the campaign, ensuring the idea could move across television, digital, and registration-led channels without losing its simplicity.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Creative and technical execution of the campaign</li>
              <li className="gsap-item">Microsite design and management for registrations and tracking</li>
              <li className="gsap-item">Digital and television assets, including banners, L-bands, and short-format videos</li>
              <li className="gsap-item">Performance optimisation through engagement analytics and real-time monitoring</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '4rem' }}>The job was to keep the idea clean while making the execution strong enough for a high-pressure live environment.</p>
          </div>
        </div>
      </section>
      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/Fours for good/Supporting 2.webp`} alt="Fours for Good campaign social post featuring Rahul Dravid - Impulse Digital Marketing Case Study" />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">The idea was clear enough to travel through social attention.</h2>
          <p className="cs-proof-text split-text">The campaign used short-format videos and digital assets to keep the live match idea easy to understand outside the match environment too.</p>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The System</h2>
            <p className="cs-journey-desc split-text">The idea had to work inside a live sporting environment with clarity, speed, and measurement across every touchpoint.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / MOMENT</div><div className="cs-journey-text">A boundary already carried instant emotion for cricket fans.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / MEANING</div><div className="cs-journey-text">Every four scored was connected to professional cricket training for a child.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / CHANNELS</div><div className="cs-journey-text">Television, digital, and registration-led channels carried the same simple idea.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / ASSETS</div><div className="cs-journey-text">Banners, L-bands, and short-format videos helped the campaign move quickly.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">05 / TRACKING</div><div className="cs-journey-text">The microsite supported registrations and tracking as the campaign gathered momentum.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / OUTCOME</div><div className="cs-journey-text">Live sporting excitement became measurable action on the ground.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The role of<br />cricket</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Cricket gave the campaign its emotional charge.</p>
            <p className="cs-p split-text">A boundary already carries energy. The crowd reacts. The screen changes. The country pays attention.</p>
            <p className="cs-p highlight split-text">Fours for Good added one more layer to that moment.</p>
            <p className="cs-p split-text">A four now stood for a child getting access to professional training.</p>
          </div>
        </div>
      </section>
      <section className="cs-proof-module reverse">
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">Influence helped the idea move beyond broadcast.</h2>
          <p className="cs-proof-text split-text">The campaign travelled through short-format social content while keeping the core action intact: every boundary made every four count.</p>
        </div>
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/Fours for good/Supporting 3.webp`} alt="Fours for Good campaign social post featuring Smriti Mandhana - Impulse Digital Marketing Case Study" />
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The campaign converted live sporting moments into lasting opportunity.</p>
            <p className="cs-p split-text">200+ children received free professional cricket training. 8.1M+ audience impressions travelled across digital platforms.</p>
            <p className="cs-p highlight split-text">The numbers matter because they show both sides of the campaign: reach at scale and impact on the ground.</p>
          </div>
        </div>
        <div className="cs-proof-module" style={{ padding: 0, marginTop: '-3rem' }}>
          <div className="cs-proof-media gsap-fade-up">
            <img src={`${base}case studies/Written Content/Fours for good/Supporting 1.webp`} alt="Children at Rahul Dravid Academy for Fours for Good cricket training - Impulse Digital Marketing Case Study" />
          </div>
          <div className="cs-proof-copy">
            <h2 className="cs-proof-title split-text">The promise showed up on the field.</h2>
            <p className="cs-proof-text split-text">The campaign linked the energy of the Border-Gavaskar Trophy to access: children receiving professional cricket training at the Rahul Dravid Academy.</p>
          </div>
        </div>
        <div className="cs-split" style={{ marginTop: '4rem' }}>
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What this<br />made possible</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Purpose becomes stronger when people can participate in it.</p>
            <p className="cs-p split-text">Fours for Good gave ABG a simple way to make that happen.</p>
            <p className="cs-p highlight split-text">Every boundary carried excitement for fans.<br />Every boundary also carried possibility for a child.</p>
          </div>
        </div>
      </section>
      <section className="cs-proof-module reverse">
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">The campaign ended where the idea said it would.</h2>
          <p className="cs-proof-text split-text">The training-day visuals made the promise tangible: a cricketing moment converted into access, coaching, and opportunity.</p>
        </div>
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/Fours for good/Supporting 4.webp`} alt="Fours for Good training day collage with young cricket players - Impulse Digital Marketing Case Study" />
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">Every Four<br />Counted</h2>
        <p className="cs-final-text split-text">Fours for Good did not ask people to admire a purpose statement.</p>
        <div className="cs-final-punch gsap-fade-up">It let them watch<br />the purpose unfold,<br /><span>four runs at a time.</span></div>
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
export default FoursForGoodCaseStudy;
