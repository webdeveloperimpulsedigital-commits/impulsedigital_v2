import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import MobileSignalPipeline from '../components/Service/MobileSignalPipeline';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

import {
  ServiceStats,
  ServiceProblem,
  ServiceVs,
  ServiceUses,
  ServiceGuardrails,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ
} from '../components/Service/ServiceTemplate';

import { generativeSearchOptimisationData as data } from '../data/generativeSearchOptimisationData';

const { gsap, ScrollTrigger } = window as any;

const GenerativeSearchOptimisation: React.FC = () => {
  useServicePageBackground();

  useEffect(() => {
    
    // GSO Clarity Stage Animation
    const clarityStage = document.getElementById('gso-clarity-stage');
    const clarityLines = document.getElementById('gso-clarity-lines');
    const signalChips = document.querySelectorAll('.gso-signal-chip');
    const lens = document.querySelector('.gso-clarity-lens');
    const ringProgress = document.querySelector('.gso-ring-progress');
    const answerCard = document.querySelector('.gso-answer-card');
    const answerProof = document.querySelectorAll('.gso-answer-proof span');

    let measureFn: () => void = () => {};
    let measureTimeout: number | undefined;
    let clarityTrigger: any = null;
    const isMobileClarity = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobileClarity && clarityStage && clarityLines && signalChips.length && lens && ringProgress && answerCard && gsap && ScrollTrigger) {
      const ringLength = 2 * Math.PI * 68;
      gsap.set(ringProgress, { strokeDasharray: ringLength, strokeDashoffset: ringLength });
      gsap.set(signalChips, { opacity: 0, x: -20 });
      gsap.set(answerCard, { opacity: 0, y: 30 });
      gsap.set(answerProof, { opacity: 0, x: -10 });

      let signalLines: any[] = [];
      let outputLine: any = null;

      measureFn = () => {
        const stageRect = clarityStage.getBoundingClientRect();
        clarityLines.setAttribute('viewBox', `0 0 ${stageRect.width} ${stageRect.height}`);
        clarityLines.innerHTML = '';

        const lensRect = lens.getBoundingClientRect();
        const lensX = lensRect.left - stageRect.left + lensRect.width / 2;
        const lensY = lensRect.top - stageRect.top + lensRect.height / 2;
        const lensRadius = lensRect.width * (68 / 160);

        signalLines = Array.from(signalChips).map(chip => {
          const cr = chip.getBoundingClientRect();
          const startX = cr.right - stageRect.left;
          const startY = cr.top - stageRect.top + cr.height / 2;
          
          const endX = lensX - lensRadius;
          const endY = lensY;
          const dx = endX - startX;
          const dy = endY - startY;
          const len = Math.sqrt(dx * dx + dy * dy);

          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', String(startX));
          line.setAttribute('y1', String(startY));
          line.setAttribute('x2', String(endX));
          line.setAttribute('y2', String(endY));
          
          line.setAttribute('stroke-dasharray', String(len));
          line.setAttribute('stroke-dashoffset', String(len));
          line.setAttribute('class', 'gso-signal-line');
          
          clarityLines.appendChild(line);
          return { line, len, x1: startX, y1: startY, x2: endX, y2: endY };
        });

        const cardRect = answerCard.getBoundingClientRect();
        const outStartX = lensX + lensRadius;
        const outStartY = lensY;
        const outEndX = cardRect.left - stageRect.left;
        
        const outLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        outLine.setAttribute('x1', String(outStartX));
        outLine.setAttribute('y1', String(outStartY));
        outLine.setAttribute('x2', String(outEndX));
        outLine.setAttribute('y2', String(outStartY));
        
        const outLen = outEndX - outStartX;
        outLine.setAttribute('stroke-dasharray', String(outLen));
        outLine.setAttribute('stroke-dashoffset', String(outLen));
        outLine.setAttribute('class', 'gso-signal-line');
        
        clarityLines.appendChild(outLine);
        outputLine = { line: outLine, len: outLen, x1: outStartX, y1: outStartY, x2: outEndX, y2: outStartY };
      };

      const sendPulse = (lineData: any, duration = 0.5, onComplete: any = null) => {
        const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        pulse.setAttribute('cx', lineData.x1);
        pulse.setAttribute('cy', lineData.y1);
        pulse.setAttribute('r', '4');
        pulse.setAttribute('class', 'gso-clarity-pulse');
        clarityLines.appendChild(pulse);

        gsap.timeline({ onComplete: () => {
          pulse.remove();
          if (onComplete) onComplete();
        }})
          .to(pulse, {
            attr: { cx: lineData.x2, cy: lineData.y2 },
            duration,
            ease: 'power2.inOut'
          })
          .to(pulse, { opacity: 0, duration: 0.18, ease: 'power2.out' }, '-=0.16');
      };

      const runClarity = () => {
        measureFn();
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        signalLines.forEach((lineData, i) => {
          const chip = signalChips[i];
          tl.to(chip, {
            opacity: 1,
            x: 0,
            duration: 0.42,
            onStart: () => chip.classList.add('understood')
          }, i * 0.16)
            .to(lineData.line, {
              opacity: 1,
              strokeDashoffset: 0,
              duration: 0.58
            }, i * 0.16 + 0.08)
            .to(ringProgress, {
              strokeDashoffset: ringLength * (1 - ((i + 1) / signalLines.length)),
              duration: 0.5
            }, i * 0.16 + 0.24)
            .add(() => sendPulse(lineData, 0.62), i * 0.16 + 0.1);
        });

        tl.to(outputLine.line, {
          opacity: 1,
          strokeDashoffset: 0,
          duration: 0.85,
          ease: 'power2.inOut',
          onStart: () => sendPulse(outputLine, 0.78)
        }, '+=0.18')
          .to(answerCard, {
            opacity: 1,
            y: 0,
            duration: 0.72
          }, '-=0.3')
          .to(answerProof, {
            opacity: 1,
            x: 0,
            duration: 0.42,
            stagger: 0.12
          }, '-=0.15');
      };

      measureFn();
      measureTimeout = window.setTimeout(measureFn, 250);
      window.addEventListener('resize', measureFn);

      clarityTrigger = ScrollTrigger.create({
        trigger: clarityStage,
        start: 'top 58%',
        once: true,
        onEnter: runClarity
      });
    }

    return () => {
      window.removeEventListener('resize', measureFn);
      if (measureTimeout) window.clearTimeout(measureTimeout);
      if (clarityTrigger) clarityTrigger.kill();
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>AI SEO Agency in India | Advanced AI SEO Service</title>
        <meta name="description" content="Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization." />
        <meta name="keywords" content="ai seo agency, ai seo service, ai seo company, mumbai, india, impulse digital" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/" />
        <meta property="og:title" content="AI SEO Agency in India | Advanced AI SEO Service" />
        <meta property="og:description" content="Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization." />
        <meta property="og:image" content="https://www.theimpulsedigital.com/AI-SEO-Agency.webp" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI SEO Agency in India | Advanced AI SEO Service" />
        <meta name="twitter:description" content="Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization." />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/AI-SEO-Agency.webp" />
        <meta name="twitter:site" content="@impulsedigi" />
        <script type="application/ld+json">{`
{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/#service","name":"Generative Search Optimisation Services","url":"https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/","description":"Impulse Digital provides Generative Search Optimisation services to help brands improve visibility across AI search engines, answer engines, large language models, and generative discovery platforms.","serviceType":["Generative Search Optimisation","GEO","AI SEO","Answer Engine Optimisation","Entity SEO","Structured Data Optimisation"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}
        `}</script>
        <script type="application/ld+json">{`
{"@context":"https://schema.org","@type":"FAQPage","@id":"https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/#faq","url":"https://www.theimpulsedigital.com/ai-marketing-systems/generative-search-optimisation/","mainEntity":[{"@type":"Question","name":"What is AI SEO and how is it different from traditional SEO?","acceptedAnswer":{"@type":"Answer","text":"AI SEO applies machine learning, predictive analytics, and automation to decisions that traditionally relied on manual research. It accelerates insight discovery, improves targeting, and adapts in real time while still maintaining the fundamentals of relevance, authority, and user experience."}},{"@type":"Question","name":"What are AEO and GEO and why do they matter now?","acceptedAnswer":{"@type":"Answer","text":"AEO (Answer Engine Optimization) focuses on improving visibility across voice assistants and AI-driven answer experiences. GEO (Generative Engine Optimization) focuses on gaining visibility inside AI summaries, recommendations, and generated responses. Both are essential as users increasingly expect direct answers rather than browsing multiple links."}},{"@type":"Question","name":"How do you use AI for keyword and intent research?","acceptedAnswer":{"@type":"Answer","text":"We analyze intent clusters, entities, query patterns, and user journeys to surface high-intent themes and conversion-ready opportunities. AI-driven models help identify gaps, emerging trends, and supporting topics that guide page structure and internal linking."}},{"@type":"Question","name":"How do you optimize content for AI answers and summaries?","acceptedAnswer":{"@type":"Answer","text":"We create authoritative, conversational, and well-structured content with verified facts, examples, and clear formatting. Content is aligned to common questions, use cases, and real-world outcomes so AI systems can extract accurate, helpful responses."}},{"@type":"Question","name":"What is entity optimization and how does it improve results?","acceptedAnswer":{"@type":"Answer","text":"Entity optimization clarifies your brand's identity, offerings, attributes, and relationships with products, people, and locations. By standardizing this information across your website and profiles, AI systems can better connect your brand with relevant queries."}},{"@type":"Question","name":"Do you implement structured data and schema, and why is it important?","acceptedAnswer":{"@type":"Answer","text":"Yes. We implement schema markup for products, services, FAQs, reviews, how-to guides, and more. Structured data helps AI and search engines understand page meaning clearly, increasing eligibility for rich results and answer experiences."}},{"@type":"Question","name":"How do you align content with large language models like GPT or Gemini?","acceptedAnswer":{"@type":"Answer","text":"We structure content using model-friendly patterns including concise definitions, step-by-step lists, comparisons, and evidence-backed explanations. By removing ambiguity and adding contextual depth, we ensure LLMs interpret and summarize your information accurately."}},{"@type":"Question","name":"How is performance tracked and reported in an AI SEO program?","acceptedAnswer":{"@type":"Answer","text":"We monitor visibility across search and AI answer surfaces, track entity coverage, measure engagement and conversions, and analyze cross-channel impact. Dashboards highlight trends and insights, guiding the next stage of optimization."}}]}
        `}</script>
      </Helmet>
      <ServiceHero 
        headlineHtml={data.hero.headlineHtml}
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />

      <ServiceStats data={data.stats} />

      <ServiceHandoff />
      
      <ServiceProblem data={data.problem} />
      <ServiceHandoff />
      
      <ServiceVs data={data.vs} />
      <ServiceHandoff />
      
      <ServiceUses data={data.uses} />
      <ServiceHandoff />

      {/* CHANNELS Section specifically for GSO */}
      <section className="svc-channels gso-understanding has-mobile-pipeline">
        <div className="container">
          <h2 className="svc-h2 split-text">{data.channels.title}</h2>
          <p className="svc-channels-intro">{data.channels.intro1}</p>
          <p className="svc-channels-intro gso-clarity-intro-secondary">{data.channels.intro2}</p>
          <div className="gso-clarity-stage" id="gso-clarity-stage">
            <svg className="gso-clarity-lines" id="gso-clarity-lines" aria-hidden="true"></svg>
            <div className="gso-signal-field" aria-label="Buyer research signals">
              {data.channels.list.map((item: any, i: number) => (
                <span className="gso-signal-chip" data-row={i + 1} key={i}>{item.label}</span>
              ))}
            </div>
            <div className="gso-clarity-lens" aria-hidden="true">
              <div className="gso-lens-label">AI reads the signals</div>
              <svg className="gso-lens-ring" viewBox="0 0 160 160">
                <circle className="gso-ring-track" cx="80" cy="80" r="68"></circle>
                <circle className="gso-ring-progress" cx="80" cy="80" r="68"></circle>
              </svg>
              <svg className="gso-lens-mark" viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="gso-answer-card">
              <div className="gso-answer-eyebrow">Recommendation layer</div>
              <h3>Your brand becomes easier to find, explain, and recommend.</h3>
              <div className="gso-answer-proof">
                <span>Category is clear</span>
                <span>Proof is visible</span>
                <span>Expertise is structured</span>
                <span>Content answers real questions</span>
              </div>
              <p>Chosen starts with understood.</p>
            </div>
          </div>
          <MobileSignalPipeline
            inputs={data.channels.list.map((item: any) => item.label)}
            centerLabel="AI reads the signals"
            outputEyebrow="Recommendation layer"
            outputTitle="Your brand becomes easier to find, explain, and recommend."
            outputProof={[
              'Category is clear',
              'Proof is visible',
              'Expertise is structured',
              'Content answers real questions'
            ]}
            outputClosing="Chosen starts with understood."
          />
        </div>
      </section>

      <ServiceHandoff />

      {/* Connected Systems */}
      <section className="svc-section glass-panel">
        <div className="container">
          <div className="svc-systems-grid">
            <div className="svc-systems-intro">
              <h2 className="svc-h2 split-text" style={{ marginBottom: '2.5rem' }}>{data.channels.systemsTitle}</h2>
              {data.channels.systemsParagraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
              <p className="closer">{data.channels.closer}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--impulse-violet)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{data.channels.pillsHeading}</p>
              <div className="svc-systems-pills">
                {data.channels.pills.map((pill: any, i: number) => {
                  if (typeof pill === 'string' && pill.includes(':')) {
                    const [label, desc] = pill.split(':');
                    return (
                      <div className="svc-system-pill" key={i}>
                        <strong>{label.trim()}</strong>
                        <span>{desc}</span>
                      </div>
                    );
                  }
                  return <div className="svc-system-pill" key={i}>{pill}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceHandoff />
      
      <ServiceGuardrails data={data.guardrails} />
      <ServiceHandoff />

      <ServiceProcess data={data.process} />
      
      <Logos title="Trusted by Teams That Need More From Search" />
      
      <Testimonials />
      <ServiceHandoff />
      
      <ServiceFit data={data.fit} />
      <ServiceHandoff />

      <ServiceFinalCTA data={data.finalCta} />
      <Contact />
      <ServiceFAQ data={data.faq} />
    </main>
  );
};

export default GenerativeSearchOptimisation;
