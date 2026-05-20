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
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ
} from '../components/Service/ServiceTemplate';

import { archerAiData } from '../data/archerAiData';

const ArcherAI: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    return () => document.body.classList.remove('service-page');
  }, []);

  useEffect(() => {
    const { gsap } = window as any;
    const stage = document.getElementById('channels-stage');
    const linesSvg = document.getElementById('channels-orbit-lines');
    const reticle = stage ? stage.querySelector('.archer-reticle') : null;
    const chips = stage ? Array.from(stage.querySelectorAll('.svc-channel-chip')) : [];

    if (stage && linesSvg && reticle && chips.length && gsap) {
      let cx = 0, cy = 0;

      const drawSightlines = () => {
        const sr = stage.getBoundingClientRect();
        if (!sr.width || !sr.height) return;
        linesSvg.setAttribute('viewBox', `0 0 ${sr.width} ${sr.height}`);
        cx = sr.width / 2;
        cy = sr.height / 2;

        // Clear any existing sightlines
        linesSvg.querySelectorAll('.archer-sightline').forEach(l => l.remove());

        chips.forEach((chip) => {
          const cr = chip.getBoundingClientRect();
          const x = cr.left - sr.left + cr.width / 2;
          const y = cr.top - sr.top + cr.height / 2;
          const dx = cx - x;
          const dy = cy - y;
          if (dx === 0 && dy === 0) return;
          
          const halfW = cr.width / 2 + 6;
          const halfH = cr.height / 2 + 6;
          const tx = dx !== 0 ? halfW / Math.abs(dx) : Infinity;
          const ty = dy !== 0 ? halfH / Math.abs(dy) : Infinity;
          const t = Math.min(tx, ty);
          const sx = x + dx * t;
          const sy = y + dy * t;

          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', String(sx));
          line.setAttribute('y1', String(sy));
          line.setAttribute('x2', String(cx));
          line.setAttribute('y2', String(cy));
          line.setAttribute('class', 'archer-sightline');
          linesSvg.appendChild(line);
        });
      };

      const outerGroup = reticle.querySelector('.reticle-outer');
      const midGroup = reticle.querySelector('.reticle-mid');
      const innerGroup = reticle.querySelector('.reticle-inner');
      const dot = reticle.querySelector('.reticle-dot');

      if (outerGroup) {
        gsap.to(outerGroup, { rotation: 360, duration: 42, repeat: -1, ease: 'none', transformOrigin: 'center center' });
      }
      if (midGroup) {
        gsap.to(midGroup, { rotation: -360, duration: 56, repeat: -1, ease: 'none', transformOrigin: 'center center' });
      }
      if (innerGroup) {
        gsap.to(innerGroup, { rotation: 360, duration: 28, repeat: -1, ease: 'none', transformOrigin: 'center center' });
      }
      if (dot) {
        gsap.to(dot, { attr: { r: 5.5 }, duration: 1.6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      drawSightlines();
      setTimeout(drawSightlines, 250);
      setTimeout(drawSightlines, 800);
      window.addEventListener('resize', drawSightlines);

      return () => {
        window.removeEventListener('resize', drawSightlines);
        if (outerGroup) gsap.killTweensOf(outerGroup);
        if (midGroup) gsap.killTweensOf(midGroup);
        if (innerGroup) gsap.killTweensOf(innerGroup);
        if (dot) gsap.killTweensOf(dot);
      };
    }
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>Archer AI: AI Outbound Sales Agent | Impulse Digital</title>
<meta name="description" content="Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/" />
<meta property="og:title" content="Archer AI: AI Outbound Sales Agent | Impulse Digital" />
<meta property="og:description" content="Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/services/archer-ai/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Archer AI: AI Outbound Sales Agent | Impulse Digital" />
<meta name="twitter:description" content="Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      <ServiceHero 
        headlineParts={archerAiData.hero.headlineParts}
        headlineAccent={archerAiData.hero.headlineAccent}
        description={archerAiData.hero.description}
        buttons={archerAiData.hero.buttons}
      />
      <ServiceHandoff />
      
      <ServiceProblem data={archerAiData.problem} />
      <ServiceHandoff />
      
      <ServiceVs data={archerAiData.vs} />
      <ServiceHandoff />
      
      <ServiceUses data={archerAiData.uses} />
      <ServiceHandoff />
      
      {/* CHANNELS — Built for Businesses Where Every Conversation Counts */}
      <section className="svc-channels">
        <div className="container">
          <h2 className="svc-h2 split-text">Built for Businesses Where<br/>Every Conversation Counts</h2>
          <p className="svc-channels-intro">Archer AI is not for blasting thousands of people. It is built for B2B businesses where the buyer is specific, the deal size justifies precision, and the sales cycle depends on real decision-makers.</p>
          <div className="svc-channels-stage" id="channels-stage">
            <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
            <div className="svc-channels-center" aria-hidden="true">
              <svg className="archer-reticle" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <g className="reticle-outer">
                  <circle cx="0" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="0" y1="-80" x2="0" y2="-92" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="0" y1="80" x2="0" y2="92" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="-80" y1="0" x2="-92" y2="0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="80" y1="0" x2="92" y2="0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </g>
                <g className="reticle-mid">
                  <circle cx="0" cy="0" r="55" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
                </g>
                <g className="reticle-inner">
                  <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="-50" x2="0" y2="-15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="0" y1="15" x2="0" y2="50" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="-50" y1="0" x2="-15" y2="0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="15" y1="0" x2="50" y2="0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </g>
                <circle className="reticle-dot" cx="0" cy="0" r="4" fill="currentColor" />
              </svg>
            </div>
            <div className="svc-channels-orbit">
              <span className="svc-channel-chip" style={{ left: '50%', top: '10%', transform: 'translate(-50%, -50%)' }}>Your referrals work, but do not scale.</span>
              <span className="svc-channel-chip" style={{ left: '80%', top: '30%', transform: 'translate(-50%, -50%)' }}>Your closers convert, but the top of the funnel is thin.</span>
              <span className="svc-channel-chip" style={{ left: '80%', top: '70%', transform: 'translate(-50%, -50%)' }}>Your ICP is narrow, senior, technical, or hard to reach.</span>
              <span className="svc-channel-chip" style={{ left: '50%', top: '90%', transform: 'translate(-50%, -50%)' }}>Your offer needs context before someone takes it seriously.</span>
              <span className="svc-channel-chip" style={{ left: '20%', top: '70%', transform: 'translate(-50%, -50%)' }}>Your sales team spends too much time finding the next right account.</span>
              <span className="svc-channel-chip" style={{ left: '20%', top: '30%', transform: 'translate(-50%, -50%)' }}>Your next stage of growth needs a system, not just a network.</span>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.1rem', color: 'var(--soft-grey)', opacity: 0.85 }}>The point is not more outreach.</p>
          <p style={{ textAlign: 'center', fontSize: '1.3rem', color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 600, marginTop: '0.5rem' }}>The point is better reasons to start the right conversation.</p>
        </div>
      </section>

      <ServiceHandoff />

      {/* CONNECTED SYSTEMS — AI Runs the Engine. Humans Steer It. */}
      <section className="svc-section glass-panel">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 4rem' }}>
            <h2 className="svc-h2 split-text" style={{ marginBottom: '2rem' }}>AI Runs the Engine. Humans Steer It.</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-grey)', marginBottom: '0.4rem' }}>Outbound fails when it becomes too manual or too robotic.</p>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-grey)', marginBottom: '1.5rem' }}>Archer AI is built to avoid both.</p>
            <p className="closer" style={{ fontSize: '1.15rem', color: 'var(--white)', lineHeight: 1.55 }}>The AI handles the heavy lift. Human strategists guide the market logic, message quality, and judgment calls.</p>
          </div>

          <div className="archer-split">
            <div className="archer-split-side">
              <div className="archer-split-label">AI handles</div>
              <div className="archer-pill-cluster">
                <span className="archer-pill">Signal detection</span>
                <span className="archer-pill">Prospect discovery</span>
                <span className="archer-pill">Contact enrichment</span>
                <span className="archer-pill">Pattern recognition</span>
                <span className="archer-pill">Copy variations</span>
                <span className="archer-pill">Sequence timing</span>
                <span className="archer-pill">Performance analysis</span>
              </div>
            </div>
            <div className="archer-split-divider" aria-hidden="true"></div>
            <div className="archer-split-side">
              <div className="archer-split-label">Humans handle</div>
              <div className="archer-pill-cluster">
                <span className="archer-pill">ICP strategy</span>
                <span className="archer-pill">Positioning</span>
                <span className="archer-pill">Messaging tone</span>
                <span className="archer-pill">Brand alignment</span>
                <span className="archer-pill">Quality review</span>
                <span className="archer-pill">Optimisation</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '4rem auto 0', paddingTop: '3rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--soft-grey)', opacity: 0.85, marginBottom: '0.5rem' }}>The result</p>
            <p style={{ fontSize: '1.35rem', color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.4 }}>Outbound that scales without sounding mass-produced.</p>
          </div>
        </div>
      </section>

      <ServiceHandoff />
      
      <ServiceProcess data={archerAiData.process} />
      
      <Logos title="Trusted by Teams That Need Pipeline With Precision" />
      
      <Testimonials />
      <ServiceHandoff />
      
      <ServiceFit data={archerAiData.fit} />
      <ServiceHandoff />
      
      <ServiceFinalCTA data={archerAiData.finalCta} />
      <Contact title={archerAiData.contactTitle} />
      <ServiceFAQ data={archerAiData.faq} />
    </main>
  );
};

export default ArcherAI;
