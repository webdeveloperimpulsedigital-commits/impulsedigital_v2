import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import MobileSignalRail from '../components/Service/MobileSignalRail';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

import {
  ServiceStats,
  ServiceProblem,
  ServiceVs,
  ServiceUses,
  ServiceWhenToUse,
  ServiceGuardrails,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ
} from '../components/Service/ServiceTemplate';

import { employerBrandingData as data } from '../data/employerBrandingData';

const { gsap, ScrollTrigger } = window as any;

const EmployerBranding: React.FC = () => {
  useServicePageBackground();

  useEffect(() => {
    document.body.classList.add('employer-page');
    
    // Channels orbit animation
    const stage = document.getElementById('channels-stage');
    const linesSvg = document.getElementById('channels-orbit-lines');
    const centerEl = document.querySelector('.svc-channels-center');
    const centerPath = centerEl ? centerEl.querySelector('path') : null;

    let pulseTimer: any = null;
    let convergenceActive = false;
    let measureTimeout1: any, measureTimeout2: any;
    let sectionObs: IntersectionObserver | null = null;
    let measureFn: () => void = () => {};

    const isMobileChannels = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobileChannels && stage && linesSvg && centerEl && centerPath && gsap && ScrollTrigger) {
      let chipPositions: any[] = [];
      let cx = 0, cy = 0;
      let markRadius = 80;

      measureFn = () => {
        const sr = stage.getBoundingClientRect();
        linesSvg.setAttribute('viewBox', `0 0 ${sr.width} ${sr.height}`);
        cx = sr.width / 2;
        cy = sr.height / 2;
        const centerRect = centerEl.getBoundingClientRect();
        markRadius = Math.min(centerRect.width, centerRect.height) * 0.46;

        chipPositions = [...stage.querySelectorAll('.svc-channel-chip')].map((chip) => {
          const cr = chip.getBoundingClientRect();
          const x = cr.left - sr.left + cr.width / 2;
          const y = cr.top - sr.top + cr.height / 2;
          const dx = cx - x;
          const dy = cy - y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const tx = x + dx * ((dist - markRadius) / dist);
          const ty = y + dy * ((dist - markRadius) / dist);
          return { x, y, tx, ty };
        });

        linesSvg.querySelectorAll('line').forEach(l => l.remove());
        chipPositions.forEach((p) => {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', p.x);
          line.setAttribute('y1', p.y);
          line.setAttribute('x2', p.tx);
          line.setAttribute('y2', p.ty);
          linesSvg.appendChild(line);
        });
      };

      const flashCenter = () => {
        gsap.fromTo(centerPath,
          { strokeWidth: 6, stroke: 'rgba(138, 92, 246, 0.85)' },
          {
            strokeWidth: 11,
            stroke: 'rgba(220, 200, 255, 1)',
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
          }
        );
      };

      const emitPulse = () => {
        if (!chipPositions.length) return;
        const idx = Math.floor(Math.random() * chipPositions.length);
        const p = chipPositions[idx];
        const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        pulse.setAttribute('cx', String(p.x));
        pulse.setAttribute('cy', String(p.y));
        pulse.setAttribute('r', '4.5');
        pulse.setAttribute('class', 'svc-channels-pulse');
        linesSvg.appendChild(pulse);

        gsap.timeline({ onComplete: () => pulse.remove() })
          .fromTo(pulse, { opacity: 0, attr: { r: 2 } }, { opacity: 1, attr: { r: 5 }, duration: 0.35, ease: 'power2.out' })
          .to(pulse, {
            attr: { cx: p.tx, cy: p.ty },
            duration: 1.3,
            ease: 'power2.in'
          }, 0)
          .to(pulse, { opacity: 0, attr: { r: 2 }, duration: 0.2, ease: 'power2.in' }, '-=0.18')
          .add(flashCenter, '-=0.18');
      };

      const startConvergence = () => {
        if (convergenceActive) return;
        convergenceActive = true;
        gsap.fromTo(centerPath,
          { opacity: 0.15, strokeWidth: 4 },
          { opacity: 1, strokeWidth: 6, duration: 1.6, ease: 'power2.out' }
        );
        pulseTimer = setInterval(emitPulse, 380);
      };

      const stopConvergence = () => {
        convergenceActive = false;
        if (pulseTimer) { clearInterval(pulseTimer); pulseTimer = null; }
      };

      measureFn();
      measureTimeout1 = setTimeout(measureFn, 250);
      measureTimeout2 = setTimeout(measureFn, 800);
      window.addEventListener('resize', measureFn);

      sectionObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startConvergence();
          else stopConvergence();
        });
      }, { threshold: 0.2 });
      sectionObs.observe(stage);

      gsap.set(centerPath, { opacity: 0.15 });
    }

    return () => {
      document.body.classList.remove('employer-page');
      window.removeEventListener('resize', measureFn);
      if (pulseTimer) clearInterval(pulseTimer);
      clearTimeout(measureTimeout1);
      clearTimeout(measureTimeout2);
      if (sectionObs) sectionObs.disconnect();
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>Employer Branding Agency | Impulse Digital</title>
<meta name="description" content="Impulse Digital is a leading employer branding agency in India, which empowers businesses to optimise their brand strategy as an employer. Our employer branding services help you build an integrated and impactful brand story that is portrayed consistently across your web pages, blogs, and career sites." />
<meta name="keywords" content="employer branding agency, employer branding services, employer branding company, employee," />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/" />
<meta property="og:title" content="Employer Branding Agency | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a leading employer branding agency in India, which empowers businesses to optimise their brand strategy as an employer. Our employer branding services help you build an integrated and impactful brand story that is portrayed consistently across your web pages, blogs, and career sites." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/employer-branding-agency/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Employer Branding Agency | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a leading employer branding agency in India, which empowers businesses to optimize their brand strategy as an employer. Our employer branding services help you build an integrated and impactful brand story that is portrayed consistently across your web pages, blogs, and career sites." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      
<script type="application/ld+json">
{`
{  "@context": "https://schema.org",  "@type": "Service",  "@id": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/#service",  "name": "Employer Branding Services",  "url": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/",  "description": "Impulse Digital provides employer branding services including employer value proposition development, recruitment marketing, internal communication campaigns, culture storytelling, employee engagement content, and talent attraction strategy.",  "serviceType": [    "Employer Branding",    "EVP Development",    "Recruitment Marketing",    "Internal Communication Campaigns",    "Culture Storytelling",    "Employee Engagement Content",    "Talent Attraction Strategy"  ],  "areaServed": ["IN", "US"],  "provider": {    "@type": "Organization",    "name": "Impulse Digital",    "url": "https://www.theimpulsedigital.com/"  }}
`}
</script>
<script type="application/ld+json">
{`
{  "@context": "https://schema.org",  "@type": "FAQPage",  "@id": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/#faq",  "url": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/",  "mainEntity": [    {      "@type": "Question",      "name": "What is employer branding and why is it important?",      "acceptedAnswer": {        "@type": "Answer",        "text": "Employer branding defines how your current and potential employees perceive you as a workplace. A strong employer brand increases applicant quality, retention, engagement, and overall satisfaction, while reducing recruitment costs in the long run."      }    },    {      "@type": "Question",      "name": "How does Impulse Digital create an employer branding strategy?",      "acceptedAnswer": {        "@type": "Answer",        "text": "As a result-oriented employer branding agency, we begin with research, surveys, and interviews to understand your existing perception and goals. We then define positioning, messaging, and tone to create a structured strategy supported by creative and communication guidelines."      }    },    {      "@type": "Question",      "name": "What deliverables are included in an employer branding service?",      "acceptedAnswer": {        "@type": "Answer",        "text": "We deliver a comprehensive strategy document, EVP and messaging framework, tone and design guidelines, recruitment marketing plans, leadership content toolkits, internal communication templates, and detailed reporting dashboards."      }    },    {      "@type": "Question",      "name": "How does Impulse Digital ensure internal alignment across teams?",      "acceptedAnswer": {        "@type": "Answer",        "text": "We conduct workshops with leadership, HR, and communication teams to align vision and goals. We also create easy-to-use toolkits and content frameworks to ensure that the brand voice remains consistent across all internal and external touchpoints."      }    },    {      "@type": "Question",      "name": "How do you handle reputation management and online reviews in employer branding?",      "acceptedAnswer": {        "@type": "Answer",        "text": "Our team monitors sentiment across digital platforms, manages responses to reviews, and builds proactive content to enhance brand perception. We focus on transparency and address concerns quickly to maintain trust and credibility."      }    },    {      "@type": "Question",      "name": "How is success measured for employer branding programs?",      "acceptedAnswer": {        "@type": "Answer",        "text": "As a result-oriented employer branding agency, we track metrics such as application quality, offer acceptance rate, time-to-hire, employee referrals, engagement on career platforms, and retention trends. The performance data helps refine strategy and showcase tangible business outcomes."      }    },    {      "@type": "Question",      "name": "How does employer branding connect with recruitment marketing?",      "acceptedAnswer": {        "@type": "Answer",        "text": "Employer branding builds awareness and preference, while recruitment marketing turns that preference into applications. We align both to ensure candidates experience a seamless journey from discovering your brand to applying and joining."      }    },    {      "@type": "Question",      "name": "What types of content are most effective for employer branding?",      "acceptedAnswer": {        "@type": "Answer",        "text": "Authentic employee stories, leadership features, behind-the-scenes visuals, event highlights, and growth journey narratives work best. We tailor the format for each platform to ensure maximum reach and engagement."      }    },    {      "@type": "Question",      "name": "How do we know if our company needs your employer branding services?",      "acceptedAnswer": {        "@type": "Answer",        "text": "Employer Branding Services convey an authentic story about what it is like to be a part of your company and work toward your mission. This lets you attract, engage and retain productive candidates who think and strive for the same goals."      }    }  ]}
`}
</script>
      </Helmet>
      <ServiceHero 
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />

      {data.stats && <ServiceStats data={data.stats} />}
      <ServiceHandoff />
      
      {data.problem && <ServiceProblem data={data.problem} />}
      <ServiceHandoff />
      
      {data.vs && <ServiceVs data={data.vs} />}
      <ServiceHandoff />
      
      {data.uses && <ServiceUses data={data.uses} />}
      <ServiceHandoff />
      
      {/* CHANNELS — When Talent Needs More Than a Job Description */}
      {data.channels && (
        <section className="svc-channels has-mobile-signal">
          <div className="container">
            <h2 className="svc-h2 split-text">{data.channels.title}</h2>
            <p className="svc-channels-intro">{data.channels.intro}</p>
            <div className="svc-channels-stage" id="channels-stage">
              <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
              <div className="svc-channels-center" aria-hidden="true">
                <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                </svg>
              </div>
              <div className="svc-channels-orbit">
                {data.channels.list.map((item: any, i: number) => (
                  <span key={i} className="svc-channel-chip" style={{ '--chip-left': item.pos.left, '--chip-top': item.pos.top } as React.CSSProperties}>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <MobileSignalRail items={data.channels.list.map((item: any) => item.label)} />
          </div>
        </section>
      )}

      <ServiceHandoff />
      
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />

      {data.guardrails && <ServiceGuardrails data={data.guardrails} />}
      <ServiceHandoff />

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands That Put People First" />
      
      <Testimonials />
      <ServiceHandoff />
      
      {data.fit && <ServiceFit data={data.fit} />}
      <ServiceHandoff />
      
      {data.finalCta && <ServiceFinalCTA data={data.finalCta} />}
      <Contact />
      {data.faq && data.faq.length > 0 && <ServiceFAQ data={data.faq} />}
    </main>
  );
};

export default EmployerBranding;
