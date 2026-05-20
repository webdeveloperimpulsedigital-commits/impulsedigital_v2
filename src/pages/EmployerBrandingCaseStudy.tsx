import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Employer Branding service page converted from employer-branding.html
 * Registered at /case-studies/employer-branding
 */
const EmployerBrandingCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page', 'employer-page');

    const { gsap, ScrollTrigger, SplitType } = window as any;
    if (gsap && ScrollTrigger) {
      // Background transition
      const warpStart = document.querySelector('#warp-start');
      if (warpStart) {
        gsap.to(document.body, {
          backgroundColor: '#000000',
          scrollTrigger: { trigger: warpStart, start: 'top bottom', end: 'top top', scrub: true },
        });
      }
      // Split text
      if (SplitType) {
        document.querySelectorAll('.split-text').forEach((text: Element) => {
          const split = new SplitType(text, { types: 'lines, words' });
          split.lines?.forEach((line: HTMLElement) => {
            const w = document.createElement('div');
            w.classList.add('line-wrapper');
            line.parentNode?.insertBefore(w, line);
            w.appendChild(line);
          });
          gsap.fromTo(split.words, { yPercent: 100, opacity: 0 }, {
            scrollTrigger: { trigger: text, start: 'top 85%' },
            yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power3.out',
          });
        });
      }
      // Stat counters
      document.querySelectorAll('[data-stat-target]').forEach((el: Element, i: number) => {
        const target = parseFloat((el as HTMLElement).getAttribute('data-stat-target') || '0');
        const suffix = (el as HTMLElement).getAttribute('data-stat-suffix') || '';
        const state = { value: 0 };
        ScrollTrigger.create({
          trigger: '.svc-stats', start: 'top 80%', once: true,
          onEnter: () => gsap.to(state, {
            value: target, duration: 2, delay: i * 0.1, ease: 'power4.out',
            onUpdate: () => { el.textContent = Math.round(state.value) + suffix; },
          }),
        });
      });
      // CTA path
      const ctaPath = document.querySelector('.svc-final-cta-path') as SVGPathElement | null;
      if (ctaPath) {
        const len = ctaPath.getTotalLength();
        gsap.set(ctaPath, { strokeDasharray: len, strokeDashoffset: len });
        ScrollTrigger.create({
          trigger: '.svc-final-cta', start: 'top 60%', once: true,
          onEnter: () => gsap.to(ctaPath, { strokeDashoffset: 0, duration: 3.5, ease: 'power2.inOut' }),
        });
      }
      ScrollTrigger.refresh();
    }

    return () => {
      document.body.classList.remove('service-page', 'employer-page');
      const { gsap, ScrollTrigger } = window as any;
      if (gsap) gsap.to(document.body, { backgroundColor: '', duration: 0 });
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  const svgPath = "M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z";
  const ImpulseMark = () => (
    <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
      <path d={svgPath} />
    </svg>
  );

  return (
    <main id="main-content">
      <Helmet>
        <title>Employer Value Proposition Case Study for Amazon India | Impulse Digital</title>
<meta name="description" content="Explore how Impulse Digital crafted a compelling Employer Value Proposition for Amazon India to strengthen employer branding and attract top talent." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/case-studies/employer-branding/" />
<meta property="og:title" content="Employer Value Proposition Case Study for Amazon India | Impulse Digital" />
<meta property="og:description" content="Explore how Impulse Digital crafted a compelling Employer Value Proposition for Amazon India to strengthen employer branding and attract top talent." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/crafting-the-employer-value-proposition-for-amazon-india/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Employer Value Proposition Case Study for Amazon India | Impulse Digital" />
<meta name="twitter:description" content="Explore how Impulse Digital executed a powerful Amazon Employer Branding campaign using targeted digital strategies to enhance brand visibility and attract talent." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      {/* Hidden SVG defs */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <symbol id="impulse-mark" viewBox="801 344 274 272">
            <path d={svgPath} />
          </symbol>
        </defs>
      </svg>

      {/* Hero */}
      <section className="svc-hero-page" id="hero">
        <div className="svc-hero-page-content">
          <h1 className="svc-hero-headline split-text">Talent Chooses the Story<br />Before the Offer.</h1>
          <p className="svc-hero-page-desc split-text">The best candidates are not only comparing salaries. They are reading your culture, your leaders, your people, your purpose, and the way your workplace shows up before they ever apply. Impulse Digital helps brands turn employee experience into a clear employer story, so the right people understand why your company is worth joining, staying with, and growing inside.</p>
          <div className="svc-hero-cta-row">
            <a href="/contact-us" className="btn" data-cursor="BUILD"><span className="btn-text">Build Your Employer Brand</span><div className="btn-fill"></div></a>
            <a href="#use-cases" className="btn" data-cursor="EXPLORE"><span className="btn-text">See How It Works</span><div className="btn-fill"></div></a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="svc-stats" id="warp-start">
        <div className="container">
          <h2 className="svc-h2 split-text">Built to Make Talent See You Clearly</h2>
          <div className="svc-stats-grid">
            <div className="svc-stat">
              <div className="svc-stat-mark mark-glyph"><ImpulseMark /></div>
              <div className="svc-stat-number" data-stat-target="85" data-stat-suffix="%">0%</div>
              <p className="svc-stat-desc">Clients reporting improved employer brand perception within 6 months.</p>
            </div>
            <div className="svc-stat">
              <div className="svc-stat-mark mark-glyph"><ImpulseMark /></div>
              <div className="svc-stat-number" data-stat-target="70" data-stat-suffix="%">0%</div>
              <p className="svc-stat-desc">Increase in application rates through targeted employer branding campaigns.</p>
            </div>
            <div className="svc-stat">
              <div className="svc-stat-mark mark-glyph"><ImpulseMark /></div>
              <div className="svc-stat-number" data-stat-target="25" data-stat-suffix="%">0%</div>
              <p className="svc-stat-desc">Decrease in employee turnover rates within the first year of employer branding implementation.</p>
            </div>
          </div>
          <p className="svc-stats-footnote">A strong employer brand does not just make the company look good. It helps the right talent see the workplace clearly enough to choose it with confidence.</p>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* Problem */}
      <section className="svc-problem">
        <div className="container">
          <div className="svc-problem-grid">
            <div>
              <h2 className="svc-h2 split-text" style={{ marginBottom: 0 }}>The Problem Is Not Hiring. It Is Being Misunderstood.</h2>
            </div>
            <div className="svc-problem-body">
              <p>Most companies have something worth joining.</p>
              <p>But it often stays trapped inside office walls, leadership conversations, internal culture, and employee experiences that never get translated into a clear story.</p>
              <p className="pivot">Candidates see the job description.</p>
              <ul className="svc-problem-gaps">
                <li><span className="gap-mark"><ImpulseMark /></span><span className="gap-text">They do not always see the reason to care.</span></li>
                <li><span className="gap-mark"><ImpulseMark /></span><span className="gap-text">Your culture stays invisible.</span></li>
                <li><span className="gap-mark"><ImpulseMark /></span><span className="gap-text">Your employee stories do not travel.</span></li>
                <li><span className="gap-mark"><ImpulseMark /></span><span className="gap-text">Your workplace sounds like every other employer.</span></li>
                <li><span className="gap-mark"><ImpulseMark /></span><span className="gap-text">The right talent cannot see a future there.</span></li>
              </ul>
              <p>Employer branding closes that gap.</p>
              <p>It helps your company show what it stands for, what people experience inside it, and why the right talent should see a future there.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* VS */}
      <section className="svc-vs">
        <div className="container">
          <h2 className="svc-h2 split-text">Employer Branding, in Plain English</h2>
          <div className="svc-vs-stack">
            <div className="svc-vs-line line-quiet">
              <div className="svc-vs-label">Recruitment</div>
              <div className="svc-vs-statement"><span className="svc-vs-strike">tells people there is a role.</span></div>
            </div>
            <div className="svc-vs-line">
              <div className="svc-vs-label">Employer Branding</div>
              <div className="svc-vs-statement">tells them <span className="svc-vs-highlight">why it matters</span>.</div>
            </div>
            <div className="svc-vs-pipeline">
              {[
                'Define what makes your workplace worth choosing',
                'Turn culture into a clear talent story',
                'Build a stronger Employee Value Proposition',
                'Create communication that attracts the right candidates',
                'Help employees become advocates, not just staff',
              ].map((label, i) => (
                <div key={i} className="svc-vs-step">
                  <div className="step-marker"><span className="step-dot"></span></div>
                  <div className="step-content">
                    <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="step-label">{label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="svc-vs-closing">The output is not a campaign slogan. It is a talent-facing brand system that helps people understand why they should join, stay, and grow with you.</p>
          </div>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* Use Cases */}
      <section className="svc-uses glass-panel" id="use-cases">
        <div className="container">
          <h2 className="svc-h2 split-text">Where Employer Branding Creates Business Leverage</h2>
          <div className="svc-uses-grid">
            {[
              { title: 'Employee Value Proposition', body: 'Define the promise your company makes to its people. Useful when your organisation needs a clear answer to why someone should join, stay, perform, and refer others.', outcome: 'Output: EVP framework, employer brand positioning, messaging pillars, tone guidance, and talent-facing communication direction.' },
              { title: 'Recruitment Marketing', body: 'Turn employer brand clarity into candidate interest. Useful when your hiring pipeline needs stronger awareness, better-fit applicants, and a clearer reason for people to consider your workplace before the hiring process begins.', outcome: 'Output: recruitment campaign ideas, platform-specific content, career communication themes, hiring narratives, and candidate journey messaging.' },
              { title: 'Culture Storytelling', body: 'Show the lived experience of your workplace through real people, real moments, and real proof. Useful when your company has strong internal culture, but not enough of it is visible to potential candidates.', outcome: 'Output: employee stories, leadership features, workplace narratives, behind-the-scenes content, and culture-led campaign assets.' },
              { title: 'Internal Brand Communication', body: 'Help employees understand, believe, and repeat the employer story from inside the organisation. Useful when leadership, HR, communications, and employees need to speak in one clear voice about the workplace.', outcome: 'Output: internal communication templates, employee advocacy themes, leadership content toolkits, and employer brand guidelines.' },
            ].map((card, i) => (
              <div key={i} className="svc-use-card" data-cursor="VIEW">
                <div className="svc-use-corner"><ImpulseMark /></div>
                <h3 className="svc-use-title">{card.title}</h3>
                <p className="svc-use-body">{card.body}</p>
                <div className="svc-use-outcome">{card.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* When Talent Needs More */}
      <section className="svc-channels">
        <div className="container">
          <h2 className="svc-h2 split-text">When Talent Needs More Than a Job Description</h2>
          <p className="svc-channels-intro">Employer branding matters when the role alone is not enough to create preference.</p>
          <div className="svc-channels-stage" id="channels-stage">
            <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
            <div className="svc-channels-center" aria-hidden="true">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg"><path d={svgPath} /></svg>
            </div>
            <div className="svc-channels-orbit">
              {[
                { label: 'Better-fit candidates', style: { left: '18%', top: '20%' } },
                { label: 'Known brand, unclear workplace', style: { left: '50%', top: '8%' } },
                { label: 'Generic hiring communication', style: { left: '82%', top: '20%' } },
                { label: 'Invisible employee stories', style: { left: '92%', top: '50%' } },
                { label: 'Culture not expressed externally', style: { left: '82%', top: '80%' } },
                { label: 'Offer acceptance', style: { left: '50%', top: '92%' } },
                { label: 'Retention alignment', style: { left: '18%', top: '80%' } },
                { label: 'Hiring pride and advocacy', style: { left: '8%', top: '50%' } },
              ].map((chip, i) => (
                <span key={i} className="svc-channel-chip" style={chip.style}>{chip.label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* We Turn Culture */}
      <section className="svc-section glass-panel">
        <div className="container">
          <div className="svc-systems-grid">
            <div className="svc-systems-intro">
              <h2 className="svc-h2 split-text" style={{ marginBottom: '2.5rem' }}>We Turn Culture Into a Talent Story</h2>
              <p>Employer branding becomes weak when it is built from claims instead of lived experience.</p>
              <p>We look for the moments, beliefs, behaviours, and proof points that make your workplace real.</p>
              <p className="closer">The best candidates are not only looking for work. They are looking for a place that feels worth giving their ambition to.</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--impulse-violet)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>We look for:</p>
              <div className="svc-systems-pills">
                {[
                  'Employee experience: what people actually feel, value, learn, and grow through inside the organisation',
                  'Leadership voice: what the company stands for and how that belief is communicated',
                  'Candidate expectation: what talent wants to know before they apply, accept, or commit',
                  'Culture proof: the stories, behaviours, rituals, and outcomes that make the employer promise believable',
                ].map((pill, i) => <div key={i} className="svc-system-pill">{pill}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* Not Just More Applications */}
      <section className="svc-guardrails">
        <div className="container">
          <h2 className="svc-h2 split-text">Not Just More Applications.<br />Better-Fit Talent.</h2>
          <div className="svc-guard-intro">
            <p>The employer brand becomes stronger when it is specific, believable, and lived.</p>
            <p className="pivot">The goal is not to make the company look attractive. The goal is to make the right talent understand why it is worth choosing.</p>
            <p style={{ marginTop: '1.5rem' }}>We shape employer brands around:</p>
          </div>
          <div className="svc-guard-list">
            {[
              { title: 'Employee experience', desc: 'what people actually feel, value, learn, and grow through inside the organisation' },
              { title: 'Leadership voice', desc: 'what the company stands for and how that belief is communicated' },
              { title: 'Candidate expectation', desc: 'what talent wants to know before they apply, accept, or commit' },
              { title: 'Culture proof', desc: 'the stories, behaviours, rituals, and outcomes that make the employer promise believable' },
              { title: 'Strategic interpretation', desc: 'so the employer brand becomes a system, not a one-time hiring campaign' },
            ].map((row, i) => (
              <div key={i} className="svc-guard-row">
                <span className="mark-glyph"><ImpulseMark /></span>
                <div className="svc-guard-title">{row.title}</div>
                <div className="svc-guard-desc">{row.desc}</div>
              </div>
            ))}
          </div>
          <h3 className="svc-guard-punchline">
            <span className="svc-guard-punchline-line"><span className="inner">Applications matter.</span></span>
            <span className="svc-guard-punchline-line"><span className="inner accent" style={{ color: 'var(--impulse-violet)' }}>Fit matters more.</span></span>
          </h3>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* Process */}
      <section className="services glass-panel" id="process">
        <div className="container">
          <h2 className="section-heading split-text">How We Build Employer Brands</h2>
          <div className="scrub-container">
            {[
              { num: '01', title: 'Understand the Workplace Truth', desc: 'We begin by understanding the company, people, culture, leadership ambition, and talent challenge.' },
              { num: '02', title: 'Define the Employer Promise', desc: 'We shape the EVP, positioning, messaging pillars, and reasons to believe.' },
              { num: '03', title: 'Build the Talent Story', desc: 'We turn the employer promise into stories, campaigns, content themes, and platform-ready communication.' },
              { num: '04', title: 'Align the Internal Voice', desc: 'We create frameworks that help HR, leadership, communications, and employees speak consistently.' },
              { num: '05', title: 'Launch, Learn, Improve', desc: 'We track response, engagement, application quality, sentiment, and content performance to refine the employer brand over time.' },
            ].map((item, i) => (
              <div key={i} className="scrub-item">
                <div className="scrub-left">
                  <div className="service-mark-draw" aria-hidden="true">
                    <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path className="service-mark-svg-path" d={svgPath} fill="none" stroke="#543D98" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="service-num">{item.num}</span>
                </div>
                <div className="scrub-right">
                  <h3 className="scrub-title text-fill">{item.title}</h3>
                  <p className="scrub-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '5rem auto 0', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--soft-grey)', marginBottom: '1rem', opacity: 0.85 }}>The aim is not to make the company look attractive.</p>
            <p style={{ fontSize: '1.4rem', lineHeight: 1.5, color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>The aim is to make the right talent understand why it is worth choosing.</p>
          </div>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* Is Right For You */}
      <section className="svc-fit">
        <div className="container">
          <div className="svc-fit-grid">
            <div>
              <h2 className="svc-h2 split-text">Employer Branding Is Right for You If</h2>
              <p className="svc-fit-closer">Your organisation needs people to feel proud inside and interested outside.</p>
            </div>
            <ul className="svc-fit-list">
              <li>Your company is hiring, but not attracting enough of the right candidates.</li>
              <li>Your culture is strong, but hard to explain.</li>
              <li>Your career communication sounds generic.</li>
              <li>Your employee stories are not visible enough.</li>
              <li>Your leadership wants a sharper employer narrative.</li>
              <li>Your recruitment marketing needs more than job posts.</li>
              <li>Your organisation needs people to feel proud inside and interested outside.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="svc-handoff" aria-hidden="true"><div className="svc-handoff-line"></div><div className="svc-handoff-mark"><ImpulseMark /></div></div>

      {/* Final CTA */}
      <section className="svc-final-cta glass-panel">
        <div className="svc-final-cta-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
            <path className="svc-final-cta-path" d={svgPath} fill="none" />
          </svg>
        </div>
        <div className="container">
          <h2 className="split-text">Make Talent See Why You Are Worth Choosing.</h2>
          <p className="svc-final-cta-body">Tell us what kind of people you want to attract and retain. We will help you turn your culture, people, and workplace promise into an employer brand that talent can understand and believe.</p>
          <div className="svc-final-cta-actions">
            <a href="/contact-us" className="btn" data-cursor="START"><span className="btn-text">Build Your Employer Brand</span><div className="btn-fill"></div></a>
            <a href="/contact-us" className="btn" data-cursor="HI"><span className="btn-text">Talk to Impulse Digital</span><div className="btn-fill"></div></a>
          </div>
          <p className="svc-final-cta-footnote">No generic employer-branding claims. No culture theatre. Just a clearer workplace story built to attract, engage, and retain the right people.</p>
        </div>
      </section>
    </main>
  );
};
export default EmployerBrandingCaseStudy;
