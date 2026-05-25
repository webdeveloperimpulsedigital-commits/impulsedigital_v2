import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const QureAICaseStudy: React.FC = () => {
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
        <title>Qure.ai Healthcare AI SEO Case Study | Impulse Digital</title>
        <meta name="description" content="How Impulse Digital rebuilt Qure.ai's US SEO presence from a single page to a multi-page system, generating 20 organic leads in one month with a 31% organic session share." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/qure-ai/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Qure.ai</h1>
          <h2 className="cs-hero-subtitle">When serious buyers search,<br />a single page is not enough.</h2>
        </div>
      </section>
      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/Qure.ai/QureAI Title.webp`} alt="Qure.ai healthcare AI SEO case study" fetchPriority="high" decoding="async" />
        </div>
      </div>
      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">In healthcare AI, search is not casual.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>The people searching are hospitals, radiology teams, clinical decision-makers, and enterprise buyers looking for specific solutions.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>Qure.ai's US presence earlier sat on a one-page structure. That meant one page had to do too much.</p>
      </section>
      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="20">0</span></div><div className="cs-result-label">organic leads in one month</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="31">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">sessions from organic search</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="42">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">organic engagement rate</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span>46</span><span className="cs-result-suffix">to 49</span></div><div className="cs-result-label">Domain Authority improved</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>High-value diagnostic AI keywords moved to Page 1</span></div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">One page was<br />doing too much</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Qure.ai operates in a category where credibility matters before conversion.</p>
            <p className="cs-p split-text">Healthcare buyers need clear language, specific solutions, and enough depth to believe the platform understands their world.</p>
            <p className="cs-p highlight split-text">But a one-page US website limited both discovery and decision-making.</p>
            <p className="cs-p split-text">There was not enough structure for Google. Not enough depth for different buyer intents. Not enough internal linking to build authority. Not enough page-level focus to convert search demand into leads.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Healthcare SEO<br />is not regular SEO</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The language has to be careful. The claims have to stay controlled. The keywords have to reflect how hospitals, radiology teams, and enterprise buyers actually search.</p>
            <p className="cs-p highlight split-text">The job was not to chase traffic. It was to bring the right buyers to the right pages, with enough confidence to take the next step.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What needed<br />to change</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The US website needed to move from a single-page presence to a structured SEO system.</p>
            <p className="cs-p highlight split-text">Each page needed a clear purpose.</p>
            <p className="cs-p split-text">Some had to speak to solutions. Some had to support product discovery. Some had to build evidence and authority. Some had to move users closer to enquiry.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What Impulse<br />worked on</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Impulse rebuilt the SEO foundation around B2B healthcare intent.</p>
            <ul className="cs-list" style={{ marginTop: '4rem' }}>
              <li className="gsap-item">Website and market audit</li>
              <li className="gsap-item">B2B intent keyword research</li>
              <li className="gsap-item">US healthcare keyword validation</li>
              <li className="gsap-item">Keyword-to-page mapping</li>
              <li className="gsap-item">New multi-page US website structure</li>
              <li className="gsap-item">SEO landing page creation</li>
              <li className="gsap-item">On-page SEO across titles, metadata, headings, URLs, schema, alt text, canonicals, and hreflang</li>
              <li className="gsap-item">Content optimisation for healthcare and enterprise buyers</li>
              <li className="gsap-item">Blog strategy around healthcare AI, radiology AI, lung cancer detection, and lung nodule tracking</li>
              <li className="gsap-item">Internal linking across blogs, product pages, solution pages, and landing pages</li>
              <li className="gsap-item">Technical SEO fixes for crawlability, indexability, metadata, sitemap, and page structure</li>
              <li className="gsap-item">Ranking, GA4, search performance, and conversion tracking</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Structure</h2>
            <p className="cs-journey-desc split-text">The keyword work focused on high-intent healthcare AI searches, not broad traffic.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">01 / INTENT</div><div className="cs-journey-text">Healthcare AI, diagnostic AI, radiology AI, and solution-specific searches were validated for serious buyer intent.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">02 / CLUSTERS</div><div className="cs-journey-text">Keyword clusters included lung cancer AI, lung nodule detection, lung nodule tracking software, and chest X-ray nodule detection.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">03 / MAPPING</div><div className="cs-journey-text">Each cluster was mapped to a relevant page so every page had a job.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">04 / DEPTH</div><div className="cs-journey-text">The one-page US presence became a fuller product, solution, evidence, insight, and AI healthcare technology structure.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>05 / CONVERSION</div><div className="cs-journey-text">Search engines had clearer content to crawl. Buyers had more relevant pages to land on.</div></div>
          </div>
        </div>
      </section>
      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/Qure.ai/Supporting 1.webp`} alt="Qure.ai diagnostic scan interface with AI overlay - Impulse Digital Marketing Case Study" loading="lazy" decoding="async" />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">The content had to respect the product reality.</h2>
          <p className="cs-proof-text split-text">This was not a category where vague product language would work. The search structure had to reflect clinical workflows, diagnostic use cases, and the specificity serious healthcare buyers expect before they enquire.</p>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The healthcare<br />layer</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The content needed discipline.</p>
            <p className="cs-p split-text">In healthcare AI, sounding impressive is not enough. In fact, it can be risky.</p>
            <p className="cs-p highlight split-text">Search-friendly, but not inflated.<br />Clinical enough to feel credible.<br />Clear enough for enterprise buyers to act on.</p>
            <p className="cs-p split-text">That balance shaped the keyword validation, page structure, and content optimisation.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What changed</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The US website became easier to find and easier to understand.</p>
            <p className="cs-p split-text">Search engines had more structured content to crawl. Healthcare buyers had more relevant pages to land on. Blogs supported core solution pages instead of standing alone.</p>
            <p className="cs-p highlight split-text">The site was no longer just present in the US market. It had started working as an acquisition channel.</p>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Business impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The rebuild helped Qure.ai turn organic search into measurable business movement.</p>
            <p className="cs-p highlight split-text">20 organic leads were generated in one month.<br />31% of website sessions came from organic search.<br />42% organic engagement rate showed that users from search were meaningfully engaging.</p>
            <p className="cs-p split-text">High-value diagnostic AI keywords moved to Page 1. Several priority keywords entered the Top 10.</p>
            <p className="cs-p split-text">The important point is not only that rankings improved. The website began attracting relevant healthcare buyers and turning that search interest into enquiries.</p>
          </div>
        </div>
      </section>
      <section className="cs-proof-module reverse">
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">The traffic quality changed too.</h2>
          <p className="cs-proof-text split-text">The Google Analytics view showed the movement behind the result: organic sessions increased, engaged sessions improved, engagement rate rose, and bounce rate dropped.</p>
        </div>
        <div className="cs-proof-media gsap-fade-up">
          <img src={`${base}case studies/Written Content/Qure.ai/Supporting 2.webp`} alt="Qure.ai Google Analytics traffic and engagement performance - Impulse Digital Marketing Case Study" loading="lazy" decoding="async" />
        </div>
      </section>
      <section className="cs-final">
        <h2 className="cs-final-heading split-text">From a page<br />to a pipeline.</h2>
        <p className="cs-final-text split-text">A single page can introduce a company. It cannot carry the search demand of a serious healthcare AI platform in the US market.</p>
        <div className="cs-final-punch gsap-fade-up">More pages.<br />Sharper keyword mapping.<br /><span>A search-led path for serious buyers.</span></div>
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
export default QureAICaseStudy;
