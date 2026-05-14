import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

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
  useEffect(() => {
    document.body.classList.add('service-page');
    
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

    if (stage && linesSvg && centerEl && centerPath && gsap && ScrollTrigger) {
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
      document.body.classList.remove('service-page');
      window.removeEventListener('resize', measureFn);
      if (pulseTimer) clearInterval(pulseTimer);
      clearTimeout(measureTimeout1);
      clearTimeout(measureTimeout2);
      if (sectionObs) sectionObs.disconnect();
    };
  }, []);

  return (
    <main id="main-content">
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
      <section className="svc-channels gso-understanding">
        <div className="container">
          <h2 className="svc-h2 split-text">{data.channels.title}</h2>
          <p className="svc-channels-intro">{data.channels.intro1}</p>
          <p className="svc-channels-intro gso-clarity-intro-secondary">{data.channels.intro2}</p>
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
        </div>
      </section>

      <ServiceHandoff />

      {/* Connected Systems */}
      <section className="svc-section glass-panel">
        <div className="container">
          <div className="svc-systems-grid">
            <div className="svc-systems-intro">
              <h2 className="svc-h2 split-text" style={{ marginBottom: '2.5rem' }}>{data.channels.systemsTitle}</h2>
              {data.channels.systemsParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              <p className="closer">{data.channels.closer}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--impulse-violet)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{data.channels.pillsHeading}</p>
              <div className="svc-systems-pills">
                {data.channels.pills.map((pill, i) => {
                  if (typeof pill === 'string' && pill.includes(':')) {
                    const [label, desc] = pill.split(':');
                    return (
                      <div className="svc-system-pill" key={i}>
                        <strong>{label.trim()}:</strong>
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
