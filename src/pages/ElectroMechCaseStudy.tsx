import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const ElectroMechCaseStudy: React.FC = () => {
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
        <title>ElectroMech Digital Transformation Case Study | 20× Lead Growth</title>
<meta name="description" content="Explore how Impulse Digital transformed ElectroMech’s digital ecosystem with SEO, website restructuring, and social media strategy, doubling first-page rankings, achieving 20× verified leads, and increasing engagement by 300%." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/electromech/" />
<meta property="og:title" content="ElectroMech Digital Transformation Case Study | 20× Lead Growth" />
<meta property="og:description" content="Explore how Impulse Digital transformed ElectroMech’s digital ecosystem with SEO, website restructuring, and social media strategy, doubling first-page rankings, achieving 20× verified leads, and increasing engagement by 300%." />
<meta property="og:image" content="https://www.theimpulsedigital.com/electromech-website-revamp.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/electromech/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="ElectroMech Digital Transformation Case Study | 20× Lead Growth" />
<meta name="twitter:description" content="Explore how Impulse Digital transformed ElectroMech’s digital ecosystem with SEO, website restructuring, and social media strategy, doubling first-page rankings, achieving 20× verified leads, and increasing engagement by 300%." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/electromech-website-revamp.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">ElectroMech</h1>
          <h2 className="cs-hero-subtitle">When buyers are ready, your website<br />cannot make them hunt.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/ElectroMech/ElectroMech title.webp`} alt="ElectroMech website and SEO case study" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Industrial buyers do not browse for fun.<br /><span style={{ color: 'var(--soft-grey)', display: 'block', marginTop: '1rem' }}>They come looking for answers. The right product. The right region. The right proof.</span></p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>ElectroMech did not need more content. It needed a clearer path for serious buyers.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>ElectroMech already had strong real-world credibility in cranes and material-handling solutions. But online, that strength was harder to reach. One domain was carrying multiple countries, business lines, verticals, and buyer needs.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="20">0</span><span className="cs-result-suffix">x</span></div><div className="cs-result-label">growth in verified leads</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="200">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">increase in first-page rankings</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="300">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">increase in social engagement</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span>SEO</span></div><div className="cs-result-label">website and social system</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>Clearer structure across regions, verticals, and business lines</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Strong business.<br />Scattered path.</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">ElectroMech had scale, trust, and category strength. The digital presence had to carry that properly.</p>
            <p className="cs-p split-text">In industrial B2B, the website often becomes the first serious evaluation point. Buyers search, compare, shortlist, and form an opinion before they ever speak to sales.</p>
            <p className="cs-p highlight split-text">The business was strong.<br />The digital system needed to catch up.</p>
            <p className="cs-p split-text">If the path is unclear, enquiries drop. If the wrong pages surface, buyers lose time. If the brand feels scattered online, confidence takes a hit.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Friction, not<br />activity</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">ElectroMech's online presence had to support multiple business lines, countries, products, and buyer journeys through one stretched structure.</p>
            <ul className="cs-list">
              <li className="gsap-item">One domain serving too many roles</li>
              <li className="gsap-item">Important pages not being discovered effectively</li>
              <li className="gsap-item">Spam backlinks affecting authority signals</li>
              <li className="gsap-item">Limited organic visibility compared to market strength</li>
              <li className="gsap-item">Inconsistent social media messaging and design</li>
              <li className="gsap-item">Regional and vertical-specific needs not clearly supported online</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '4rem' }}><strong>For a buyer with a real requirement, every extra click becomes doubt.</strong></p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">ElectroMech needed a cleaner digital structure.</p>
            <p className="cs-p split-text">Buyers had to reach the right information faster. Search engines had to understand the site better. Social content had to show up with more consistency.</p>
            <p className="cs-p highlight split-text">Make the brand easier to choose before the sales conversation begins.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />worked on</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse approached the work as one connected system across website, SEO, content, and social.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Technical audit and competitive research</li>
              <li className="gsap-item">Website restructuring across countries and verticals</li>
              <li className="gsap-item">UX and content organisation</li>
              <li className="gsap-item">SEO-led page improvements</li>
              <li className="gsap-item">Keyword gap analysis</li>
              <li className="gsap-item">Backlink and indexing improvements</li>
              <li className="gsap-item">Social media content strategy</li>
              <li className="gsap-item">Performance tracking and ongoing optimisation</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Path</h2>
            <p className="cs-journey-desc split-text">Every layer had to serve the same outcome: bring serious buyers closer to enquiry.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / SEARCH</div><div className="cs-journey-text">A buyer looks for a serious industrial solution.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / DISCOVERY</div><div className="cs-journey-text">The right product, region, and business-line pages need to surface.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / EVALUATION</div><div className="cs-journey-text">The website has to make capability easy to understand.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / TRUST</div><div className="cs-journey-text">Consistent search, website, and social signals reduce doubt.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">05 / ENQUIRY</div><div className="cs-journey-text">The buyer moves closer to a real conversation.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / OUTCOME</div><div className="cs-journey-text">Less confusion. Clearer discovery. Stronger visibility. More verified leads.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What changed</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The website became easier to move through. Product, regional, and business-line information was organised more clearly.</p>
            <p className="cs-p split-text">SEO improvements helped important pages become more discoverable. Keyword gaps were addressed. Indexing issues were improved. Backlink quality was worked on.</p>
            <p className="cs-p highlight split-text">The brand started showing up with more order.<br />That matters because order builds trust.</p>
            <p className="cs-p split-text">A serious buyer should not have to work hard to understand a serious business.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Business<br />impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The numbers showed movement where it mattered.</p>
            <p className="cs-p highlight split-text">Verified leads grew 20x.<br />First-page rankings increased by 200%.<br />Social engagement increased by 300%.</p>
            <p className="cs-p split-text">These numbers are not just marketing wins. They show that the digital system started doing what it was meant to do.</p>
            <p className="cs-p split-text">Help the right buyers find ElectroMech, understand its capability, and take the next step.</p>
          </div>
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">Help buyers<br />move.</h2>
        <p className="cs-final-text split-text">For industrial businesses, trust is built before the enquiry form is filled. A buyer looks at your website and quietly asks whether you handle their kind of requirement, whether they can find the right product quickly, and whether you are worth a conversation.</p>
        <div className="cs-final-punch gsap-fade-up">ElectroMech already had the strength.<br />Impulse helped reduce the distance between that strength and the buyer.<br /><span>That is the job of a serious digital presence.</span></div>
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
export default ElectroMechCaseStudy;
