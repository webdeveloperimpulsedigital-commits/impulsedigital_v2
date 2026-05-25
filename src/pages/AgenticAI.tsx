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

import { agenticAiData } from '../data/agenticAiData';

const { gsap, ScrollTrigger } = window as any;

const agenticChannels = [
  'WhatsApp',
  'Email',
  'Voice notes',
  'Facebook Messenger',
  'Instagram DM',
  'SMS',
  'Website chat',
  'CRM workflows'
];

const AgenticAI: React.FC = () => {
  useServicePageBackground();

  useEffect(() => {
    
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
        <title>Agentic AI Agency | Intelligent Agentic AI Service for Growth</title>
<meta name="description" content="Impulse Digital is a leading agentic ai agency delivering advanced agentic ai service that powers smart, autonomous customer engagement across WhatsApp, email, voice, and social. Boosting conversions, sales efficiency, and ROI with agentic ai service." />
<meta name="keywords" content="agentic ai agency, agentic ai service, agentic ai comapny, multilingual ai agents, lead conversion ai, mumbai, india, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/ai-marketing-systems/agentic-ai/" />
<meta property="og:title" content="Agentic AI Agency | Intelligent Agentic AI Service for Growth" />
<meta property="og:description" content="Impulse Digital is a leading agentic AI agency delivering advanced agentic AI service that powers smart, autonomous customer engagement across WhatsApp, email, voice, and social. Boosting conversions, sales efficiency, and ROI with agentic ai service." />
<meta property="og:image" content="https://www.theimpulsedigital.com/agentic-a.jfif" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/agentic-ai/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Agentic AI Agency | Intelligent Agentic AI Service for Growth" />
<meta name="twitter:description" content="Impulse Digital is a leading agentic AI agency delivering advanced agentic AI service that powers smart, autonomous customer engagement across WhatsApp, email, voice, and social. Boosting conversions, sales efficiency, and ROI with agentic ai service." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/agentic-a.jfif" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <ServiceHero 
        headlineParts={agenticAiData.hero.headlineParts}
        headlineAccent={agenticAiData.hero.headlineAccent}
        description={agenticAiData.hero.description}
        buttons={agenticAiData.hero.buttons}
      />

      {/* STATS — Built to Reduce the Work That Slows Teams Down */}
      <ServiceStats data={agenticAiData.stats} />

      <ServiceHandoff />
      
      <ServiceProblem data={agenticAiData.problem} />
      <ServiceHandoff />
      
      <ServiceVs data={agenticAiData.vs} />
      <ServiceHandoff />
      
      <ServiceUses data={agenticAiData.uses} />
      <ServiceHandoff />
      
      {/* CHANNELS — Built Across the Channels Your Customers Already Use */}
      <section className="svc-channels has-mobile-signal">
        <div className="container">
          <h2 className="svc-h2 split-text">Built Across the Channels Your Customers Already Use</h2>
          <p className="svc-channels-intro">Your customers do not think in channels. They message where it is convenient. Your AI system should keep the experience connected across:</p>
            <div className="svc-channels-stage" id="channels-stage">
            <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
            <div className="svc-channels-center" aria-hidden="true">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="svc-channels-orbit">
              <span className="svc-channel-chip" style={{ '--chip-left': '22%', '--chip-top': '20%' } as React.CSSProperties}>WhatsApp</span>
              <span className="svc-channel-chip" style={{ '--chip-left': '50%', '--chip-top': '12%' } as React.CSSProperties}>Email</span>
              <span className="svc-channel-chip" style={{ '--chip-left': '78%', '--chip-top': '20%' } as React.CSSProperties}>Voice notes</span>
              <span className="svc-channel-chip" style={{ '--chip-left': '85%', '--chip-top': '50%' } as React.CSSProperties}>Facebook Messenger</span>
              <span className="svc-channel-chip" style={{ '--chip-left': '78%', '--chip-top': '80%' } as React.CSSProperties}>Instagram DM</span>
              <span className="svc-channel-chip" style={{ '--chip-left': '50%', '--chip-top': '88%' } as React.CSSProperties}>SMS</span>
              <span className="svc-channel-chip" style={{ '--chip-left': '22%', '--chip-top': '80%' } as React.CSSProperties}>Website chat</span>
              <span className="svc-channel-chip" style={{ '--chip-left': '15%', '--chip-top': '50%' } as React.CSSProperties}>CRM workflows</span>
            </div>
          </div>
          <MobileSignalRail items={agenticChannels} />
        </div>
      </section>

      <ServiceHandoff />
      
      <ServiceWhenToUse data={agenticAiData.whenToUse} />
      <ServiceHandoff />

      <ServiceGuardrails data={agenticAiData.guardrails} />
      <ServiceHandoff />

      <ServiceProcess data={agenticAiData.process} />
      
      <Logos title="Trusted by Teams That Expect Thinking Before Execution" />
      
      <Testimonials />
      <ServiceHandoff />
      
      <ServiceFit data={agenticAiData.fit} />
      <ServiceHandoff />
      
      <ServiceFinalCTA data={agenticAiData.finalCta} />
      <Contact title="Let’s give your team<br/>its time back." />
      <ServiceFAQ data={agenticAiData.faq} />
    </main>
  );
};

export default AgenticAI;
