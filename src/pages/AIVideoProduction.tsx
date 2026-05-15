import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

import {
  ServiceProblem,
  ServiceVs,
  ServiceUses,
  ServiceGuardrails,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ
} from '../components/Service/ServiceTemplate';

import { aiVideoProductionData as data } from '../data/aiVideoProductionData';

const { gsap, ScrollTrigger } = window as any;

const AIVideoProduction: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');

    // Add specific style for this page
    const style = document.createElement('style');
    style.textContent = `
      .svc-problem-gaps .gap-text::after {
        top: 100% !important;
        height: 2px !important;
      }
    `;
    document.head.appendChild(style);
    
    // Stats reveal sequence
    const statsGrid = document.querySelector('.svc-stats-grid');
    const statsCols = document.querySelectorAll('.svc-stat');
    if (statsGrid && statsCols.length && gsap && ScrollTrigger) {
      gsap.set(statsCols, { opacity: 0, y: 32 });
      ScrollTrigger.create({
        trigger: statsGrid,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.to(statsCols, {
            opacity: 1, y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            onComplete: () => {
              statsCols.forEach((col) => {
                const numEl = col.querySelector('[data-stat-target]');
                if (!numEl) return;
                const target = parseFloat(numEl.getAttribute('data-stat-target') || '0');
                const suffix = numEl.getAttribute('data-stat-suffix') || '';
                const decimals = parseInt(numEl.getAttribute('data-stat-decimals') || '0', 10);
                const proxy = { v: 0 };
                gsap.to(proxy, {
                  v: target,
                  duration: 2.2,
                  ease: 'power3.out',
                  delay: 0.1,
                  onUpdate: () => {
                    const val = decimals > 0 ? proxy.v.toFixed(decimals) : Math.round(proxy.v).toLocaleString();
                    numEl.textContent = val + suffix;
                  }
                });
              });
            }
          });
        }
      });
    }

    // Problem gaps broken-chain specific animation for AI Video
    const gapItems = document.querySelectorAll('.svc-problem-gaps li');
    if (gapItems.length && gsap && ScrollTrigger) {
      // Clear any generic ScrollTriggers on this element from other scripts
      // Then re-init for specific animation
      ScrollTrigger.create({
        trigger: '.svc-problem-gaps',
        start: 'top 65%',
        once: true,
        onEnter: () => {
          gapItems.forEach((item, i) => {
            gsap.to(item, {
              opacity: 0.85,
              x: 0,
              duration: 0.5,
              delay: i * 0.18,
              ease: 'power2.out',
              onStart: () => {
                setTimeout(() => item.classList.add('struck'), 200);
              }
            });
          });
        }
      });
    }

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
      if (document.head.contains(style)) document.head.removeChild(style);
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
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>A I Video Production | Impulse Digital</title>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="generator" content="N/A" />

        <meta property="og:title" content="A I Video Production | Impulse Digital" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://www.theimpulsedigital.com/aivideo-production" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:creator" content="@impulsedigi" />
        <meta name="twitter:title" content="A I Video Production | Impulse Digital" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta name="twitter:url" content="https://www.theimpulsedigital.com/aivideo-production" />

        <link rel="canonical" href="https://www.theimpulsedigital.com/aivideo-production" />
      </Helmet>
      <ServiceHero 
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />

      {/* STATS */}
      <section className="svc-stats" id="warp-start">
        <div className="container">
          <h2 className="svc-h2 split-text">{data.stats.title}</h2>
          <div className="svc-stats-grid">
            {data.stats.metrics.map((stat, i) => (
              <div className="svc-stat" key={i}>
                <div className="svc-stat-mark mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
                <div className="svc-stat-number" data-stat-target={stat.target} data-stat-suffix={stat.suffix} data-stat-decimals={stat.decimals}>0</div>
                <p className="svc-stat-desc">{stat.desc}</p>
              </div>
            ))}
          </div>
          <p className="svc-stats-footnote">{data.stats.footnote}</p>
        </div>
      </section>

      <ServiceHandoff />
      
      <ServiceProblem data={data.problem} />
      <ServiceHandoff />
      
      <ServiceVs data={data.vs} />
      <ServiceHandoff />
      
      <ServiceUses data={data.uses} />
      <ServiceHandoff />
      
      {/* CHANNELS */}
      <section className="svc-channels">
        <div className="container">
          <h2 className="svc-h2 split-text">Built for the Screens People Actually Watch</h2>
          <p className="svc-channels-intro">AI-led videos can be created and adapted for:</p>
          <div className="svc-channels-stage" id="channels-stage">
            <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
            <div className="svc-channels-center" aria-hidden="true">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="svc-channels-orbit">
              <span className="svc-channel-chip" style={{ left: '18%', top: '20%' }}>Reels & Shorts</span>
              <span className="svc-channel-chip" style={{ left: '82%', top: '20%' }}>YouTube Videos</span>
              <span className="svc-channel-chip" style={{ left: '92%', top: '50%' }}>LinkedIn Ads</span>
              <span className="svc-channel-chip" style={{ left: '82%', top: '80%' }}>Website Banners</span>
              <span className="svc-channel-chip" style={{ left: '50%', top: '92%' }}>Digital Ads</span>
              <span className="svc-channel-chip" style={{ left: '18%', top: '80%' }}>Product Explainers</span>
              <span className="svc-channel-chip" style={{ left: '8%', top: '50%' }}>Sales Decks</span>
              <span className="svc-channel-chip" style={{ left: '35%', top: '35%' }}>Training Modules</span>
              <span className="svc-channel-chip" style={{ left: '65%', top: '35%' }}>Employer Branding</span>
              <span className="svc-channel-chip" style={{ left: '35%', top: '65%' }}>Internal Communication</span>
              <span className="svc-channel-chip" style={{ left: '65%', top: '65%' }}>Multilingual Updates</span>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--soft-grey)', fontSize: '1.15rem', marginTop: '3rem', fontStyle: 'italic' }}>
            One idea can become a film, a teaser, a vertical cut, an internal video, and an ad asset.<br/>That is where AI starts creating scale.
          </p>
        </div>
      </section>

      <ServiceHandoff />

      <ServiceGuardrails data={data.guardrails} />
      <ServiceHandoff />

      <ServiceProcess data={data.process} />
      
      <Logos title="Trusted by Brands Expecting Production Quality" />
      
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

export default AIVideoProduction;
