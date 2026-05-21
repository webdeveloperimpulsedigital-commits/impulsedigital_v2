import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { initCaseStudyAnimations } from '../utils/caseStudyAnimations';

const AutomagIndiaCaseStudy: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const totalSlides = 7;

  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();

    return () => {
      document.body.classList.remove('case-study-page');
      cleanup();
    };
  }, []);

  const handlePrev = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.cs-search-card') as HTMLElement;
    if (card) {
      trackRef.current.scrollBy({ left: -(card.offsetWidth + 20), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.cs-search-card') as HTMLElement;
    if (card) {
      trackRef.current.scrollBy({ left: card.offsetWidth + 20, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const card = trackRef.current.querySelector('.cs-search-card') as HTMLElement;
    if (card) {
      const cardW = card.offsetWidth + 20; // CSS gap is ~1.25rem = 20px
      const newIndex = Math.round(scrollLeft / cardW);
      if (newIndex >= 0 && newIndex < totalSlides) {
        setActiveIndex(newIndex);
      }
    }
  };

  const base = import.meta.env.BASE_URL;
  const svgPath = "M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z";

  return (
    <main id="main-content">
      <Helmet>
        <title>Automag India SEO Case Study | 2400% B2B Lead Growth in 4 Months</title>
<meta name="description" content="Explore how Impulse Digital transformed Automag India’s website into a B2B lead generation engine, achieving 48% organic traffic growth and increasing leads from 1-2 to 45-50 per month through strategic SEO." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/automag-india/" />
<meta property="og:title" content="Automag India SEO Case Study | 2400% B2B Lead Growth in 4 Months" />
<meta property="og:description" content="Explore how Impulse Digital transformed Automag India’s website into a B2B lead generation engine, achieving 48% organic traffic growth and increasing leads from 1-2 to 45-50 per month through strategic SEO." />
<meta property="og:image" content="https://www.theimpulsedigital.com/Industrial%20automation%20line%20with%20robotic%20arms.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/automag-india/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Automag India SEO Case Study | 2400% B2B Lead Growth in 4 Months" />
<meta name="twitter:description" content="Explore how Impulse Digital transformed Automag India’s website into a B2B lead generation engine, achieving 48% organic traffic growth and increasing leads from 1-2 to 45-50 per month through strategic SEO." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/Industrial%20automation%20line%20with%20robotic%20arms.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Automag India</h1>
          <h2 className="cs-hero-subtitle">From invisible in search to 45+<br />leads a month.</h2>
        </div>
      </section>

      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img src={`${base}case studies/Written Content/Automag India/Automag SEO/Automag Title.webp`} alt="Automag India B2B SEO case study" fetchPriority="high" decoding="async" />
        </div>
      </div>

      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Automag India had a website.<br /><span style={{ color: 'var(--soft-grey)', display: 'block', marginTop: '1rem' }}>But the website was not yet working like a business channel.</span></p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>Automag's buyers were searching. Automag was not visible enough to meet them.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>In under four months, focused B2B SEO helped turn that gap into a lead-generation engine.</p>
      </section>

      <section className="cs-results-module automag-results">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="45">0</span><span className="cs-result-suffix">+</span></div><div className="cs-result-label">leads a month</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="2400">0</span><span className="cs-result-suffix">%+</span></div><div className="cs-result-label">growth in lead volume</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="48">0</span><span className="cs-result-suffix">%</span></div><div className="cs-result-label">organic traffic increase in 90 days</div></div>
        <div className="cs-result-item gsap-fade-up"><div className="cs-result-number"><span className="counter" data-target="4">0</span></div><div className="cs-result-label">months to consistent qualified leads</div></div>
        <div className="cs-result-banner gsap-fade-up"><span>High-intent money keywords started appearing on page one</span></div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Invisible where<br />it mattered</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Automag was not visible where it needed to be.</p>
            <p className="cs-p split-text">The website had four clear problems.</p>
            <ul className="cs-list">
              <li className="gsap-item">No keywords were ranking in Google's Top 10</li>
              <li className="gsap-item">The website was bringing in only 1-2 inbound B2B leads per month</li>
              <li className="gsap-item">The career page was the biggest traffic driver instead of revenue-driving product pages</li>
              <li className="gsap-item">High-intent product queries, including conveyor searches, were not showing Automag anywhere</li>
            </ul>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The objective</h2></div>
          <div className="cs-split-right">
            <p className="cs-p highlight split-text">Build strong organic visibility.<br />Attract qualified B2B buyers.<br />Convert the website into a reliable lead-generation channel.</p>
            <p className="cs-p split-text">This was not about getting more traffic for the sake of traffic. It was about making Automag visible for searches that had business value.</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The strategic<br />shift</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The work focused on connecting Automag's conveyor and automation offerings with high-intent B2B search terms, then improving the website so those visitors could move closer to enquiry.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">What we did</h2></div>
          <div className="cs-split-right">
            <ul className="cs-list" style={{ marginTop: 0 }}>
              <li className="gsap-item">Keyword research focused on high-intent B2B search terms</li>
              <li className="gsap-item">On-page optimisation across key pages, copy, and metadata</li>
              <li className="gsap-item">Technical SEO for crawlability, internal linking, and site architecture</li>
              <li className="gsap-item">Content optimisation to answer real customer questions</li>
              <li className="gsap-item">Blog and support content to build topical authority</li>
              <li className="gsap-item">Monitoring and refinement as rankings moved</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Timeline</h2>
            <p className="cs-journey-desc split-text">In under four months, focused B2B SEO helped turn that gap into a lead-generation engine.</p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">MONTH 1</div><div className="cs-journey-text">Strategy and SEO foundation.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">MONTH 2</div><div className="cs-journey-text">Implementation and optimisation.</div></div>
            <div className="cs-journey-step gsap-fade-up"><div className="cs-journey-num">MONTH 3</div><div className="cs-journey-text">Ranking and traffic lift-off.</div></div>
            <div className="cs-journey-step highlight gsap-fade-up"><div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>MONTH 4</div><div className="cs-journey-text">Consistent qualified leads.</div></div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The breakthrough</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Between Dec 2024 and Mar 2025, Automag moved from practically invisible to consistently present for high-intent industry searches.</p>
            <p className="cs-p highlight split-text">Top 50 rankings: 0% to 75%.<br />Top 20 rankings: 0% to 50%.<br />Top 10 rankings: 0% to 25%.</p>
            <p className="cs-p split-text">High-intent money keywords started appearing on page one.</p>
            <p className="cs-p split-text">Organic visibility became a predictable growth lever.</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The traffic<br />shift</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Organic traffic increased by 48% in 90 days.</p>
            <p className="cs-p split-text">But the better result was where that traffic started going.</p>
            <p className="cs-p highlight split-text">Product, home, and contact pages now drive the bulk of traffic, not the career section.</p>
            <p className="cs-p split-text">In short, traffic is now aligned with revenue goals instead of vanity metrics.</p>
          </div>
        </div>
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The lead<br />transformation</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Before: 1-2 leads per month.</p>
            <p className="cs-p highlight split-text">After: 45+ leads per month.</p>
            <p className="cs-p split-text">That is 2,400%+ growth in lead volume.</p>
            <p className="cs-p split-text">The website moved from static brochure to predictable lead-generation engine.</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">Ranking wins</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Automag now ranks on the first page of Google for core commercial keywords such as:</p>
            <p className="cs-p highlight split-text">"belt conveyor manufacturer"<br />"slat conveyor manufacturer"<br />"conveyor manufacturer in Pune"</p>
          </div>
        </div>
      </section>

      {/* Search Proof Gallery */}
      <section className="cs-search-proof">
        <div className="cs-search-header">
          <div className="cs-search-controls" aria-label="Ranking proof gallery controls">
            <button 
              className="cs-search-nav-btn" 
              type="button" 
              onClick={handlePrev} 
              disabled={activeIndex === 0}
              aria-label="Previous ranking proof"
            >
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
            </button>
            <span className="cs-search-count" aria-live="polite">{activeIndex + 1} / {totalSlides}</span>
            <button 
              className="cs-search-nav-btn" 
              type="button" 
              onClick={handleNext}
              disabled={activeIndex === totalSlides - 1}
              aria-label="Next ranking proof"
            >
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div 
          className="cs-search-track" 
          ref={trackRef} 
          onScroll={handleScroll}
        >
          {[1,2,3,4,5,6,7].map(n => (
            <div key={n} className="cs-search-card gsap-fade-up">
              <img src={`${base}case studies/Written Content/Automag India/Automag SEO/automag images upscaled/Supporting ${n}.webp`} alt={`Automag ranking proof ${n}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
        <div className="cs-search-progress" aria-hidden="true">
          <div 
            className="cs-search-progress-fill"
            style={{ transform: `scaleX(${(activeIndex + 1) / totalSlides})`, transformOrigin: 'left center', transition: 'transform 0.3s ease' }}
          ></div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left"><h2 className="cs-h2 split-text">The impact</h2></div>
          <div className="cs-split-right">
            <p className="cs-p split-text">The website is now a consistent source of high-intent B2B enquiries.</p>
            <p className="cs-p split-text">Automag now appears prominently for multiple money keywords in its niche.</p>
            <p className="cs-p split-text">Organic traffic now compounds month on month, unlike paid campaigns that stop when budgets do.</p>
          </div>
        </div>
      </section>

      <section className="cs-final">
        <h2 className="cs-final-heading split-text">From zero visibility<br />to qualified leads.</h2>
        <p className="cs-final-text split-text">Focused B2B SEO does not just boost traffic. It changes what the website is capable of.</p>
        <div className="cs-final-punch gsap-fade-up">From zero online visibility.<br />To meaningful search presence.<br /><span>To 45+ leads a month.</span></div>
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
export default AutomagIndiaCaseStudy;
