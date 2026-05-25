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

import { brandingData as data } from '../data/brandingData';

const { gsap, ScrollTrigger } = window as any;

const Branding: React.FC = () => {
  useServicePageBackground();

  useEffect(() => {
    document.body.classList.add('branding-page');
    
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
      document.body.classList.remove('branding-page');
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
        <title>Best Branding Agency & Company in Mumbai | Impulse Digital</title>
<meta name="description" content="Looking for the best branding agency in Mumbai? Impulse Digital is a premium & leading branding company in Mumbai, crafting authentic, human-centric brand identities." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/branding/" />
<meta property="og:title" content="Best Branding Agency & Company in Mumbai | Impulse Digital" />
<meta property="og:description" content="Looking for the best branding agency in Mumbai? Impulse Digital is a premium & leading branding company in Mumbai, crafting authentic, human-centric brand identities." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/branding/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Best Branding Agency & Company in Mumbai | Impulse Digital" />
<meta name="twitter:description" content="Looking for the best branding agency in Mumbai? Impulse Digital is a premium & leading branding company in Mumbai, crafting authentic, human-centric brand identities." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does Impulse Digital offer in branding services?","acceptedAnswer":{"@type":"Answer","text":"We create brand strategy, visual identity, logo systems, brand guidelines, lookbooks, packaging, collaterals, campaign design assets, and communication systems that help brands show up consistently."}},{"@type":"Question","name":"How is branding different from logo design?","acceptedAnswer":{"@type":"Answer","text":"A logo is one part of your identity. Branding is the complete system that defines how your business is recognised, remembered, and understood across touchpoints."}},{"@type":"Question","name":"What is included in a brand style guide?","acceptedAnswer":{"@type":"Answer","text":"A brand style guide usually includes logo usage, colour palette, typography, layout rules, imagery direction, tone guidance, iconography, templates, and usage examples."}},{"@type":"Question","name":"Can you refresh an existing brand instead of creating one from scratch?","acceptedAnswer":{"@type":"Answer","text":"Yes. We can audit the current identity, identify what should be retained, refined, or retired, and modernise the brand without losing useful existing equity."}},{"@type":"Question","name":"Do you design product packaging?","acceptedAnswer":{"@type":"Answer","text":"Yes. We design packaging that supports brand recognition, product clarity, shelf presence, claim hierarchy, and customer experience."}},{"@type":"Question","name":"What are brand collaterals?","acceptedAnswer":{"@type":"Answer","text":"Brand collaterals are communication assets such as brochures, presentations, business cards, social templates, print material, sales decks, ads, and other branded touchpoints."}},{"@type":"Question","name":"How do you keep the brand consistent after launch?","acceptedAnswer":{"@type":"Answer","text":"We create guidelines, templates, usage rules, and handover assets so internal teams, external partners, and future campaigns can apply the brand correctly."}},{"@type":"Question","name":"How do you measure branding success?","acceptedAnswer":{"@type":"Answer","text":"Branding can be evaluated through recognition, engagement, branded search, consistency across touchpoints, conversion movement on key pages, and audience recall where measurement is required."}},{"@type":"Question","name":"Who should be involved from our side?","acceptedAnswer":{"@type":"Answer","text":"Leadership, marketing, communications, product, sales, and any team responsible for applying the brand should usually be involved in the process."}}],"@id":"https://www.theimpulsedigital.com/brand-infrastructure/branding/#faq","url":"https://www.theimpulsedigital.com/brand-infrastructure/branding/"}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.theimpulsedigital.com/brand-infrastructure/branding/#service",
          "name": "Branding Services",
          "url": "https://www.theimpulsedigital.com/brand-infrastructure/branding/",
          "description": "Impulse Digital provides branding services that help businesses build a clear, consistent, and memorable brand identity through brand strategy, visual identity, logo systems, brand guidelines, packaging, collaterals, campaign design assets, and communication systems.",
          "serviceType": [
            "Branding",
            "Brand Strategy",
            "Visual Identity Design",
            "Logo Design",
            "Brand Guidelines",
            "Packaging Design",
            "Brand Collaterals",
            "Campaign Design Assets",
            "Communication Systems"
          ],
          "areaServed": [
            "IN",
            "US"
          ],
          "provider": {
            "@type": "Organization",
            "name": "Impulse Digital",
            "url": "https://www.theimpulsedigital.com/"
          }
        }) }} />
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
      
      {/* CHANNELS */}
      {data.channels && (
        <section className="svc-channels has-mobile-signal">
          <div className="container">
            <h2 className="svc-h2 split-text">{data.channels.title}</h2>
            {data.channels.intro.split('\n').map((p: string, i: number) => (
              <p className="svc-channels-intro" key={i}>{p}</p>
            ))}
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
            {data.channels.outro && data.channels.outro.split('\n').map((p: string, i: number) => (
              <p className="svc-channels-intro" key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
          </div>
        </section>
      )}

      <ServiceHandoff />
      
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />

      {data.guardrails && <ServiceGuardrails data={data.guardrails} />}
      <ServiceHandoff />

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands That Need to Stand Apart" />
      
      <Testimonials />
      <ServiceHandoff />
      
      {data.fit && <ServiceFit data={data.fit} />}
      <ServiceHandoff />
      
      {data.finalCta && <ServiceFinalCTA data={data.finalCta} />}
      <Contact />
      {data.faq && data.faq.items.length > 0 && <ServiceFAQ data={data.faq} />}
    </main>
  );
};

export default Branding;
