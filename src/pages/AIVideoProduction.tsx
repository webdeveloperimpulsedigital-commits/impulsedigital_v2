import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

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

const aiVideoChannels = [
  'Reels & Shorts',
  'Training Modules',
  'Employer Branding',
  'YouTube Videos',
  'LinkedIn Ads',
  'Website Banners',
  'Multilingual Updates',
  'Digital Ads',
  'Internal Communication',
  'Product Explainers',
  'Sales Decks'
];

type ChannelPositionStyle = React.CSSProperties & Record<'--chip-left-desktop' | '--chip-top-desktop', string>;

const aiVideoChannelPositions: ChannelPositionStyle[] = [
  { '--chip-left-desktop': '50%', '--chip-top-desktop': '5%' },
  { '--chip-left-desktop': '74%', '--chip-top-desktop': '12%' },
  { '--chip-left-desktop': '91%', '--chip-top-desktop': '31%' },
  { '--chip-left-desktop': '94%', '--chip-top-desktop': '56%' },
  { '--chip-left-desktop': '84%', '--chip-top-desktop': '79%' },
  { '--chip-left-desktop': '62%', '--chip-top-desktop': '93%' },
  { '--chip-left-desktop': '37%', '--chip-top-desktop': '93%' },
  { '--chip-left-desktop': '16%', '--chip-top-desktop': '79%' },
  { '--chip-left-desktop': '5%', '--chip-top-desktop': '56%' },
  { '--chip-left-desktop': '9%', '--chip-top-desktop': '31%' },
  { '--chip-left-desktop': '25%', '--chip-top-desktop': '12%' }
];

const AIVideoProduction: React.FC = () => {
  useServicePageBackground();

  useEffect(() => {

    // Add specific style for this page
    const style = document.createElement('style');
    style.textContent = `
      .svc-problem-gaps .gap-text::after {
        top: 100% !important;
        height: 2px !important;
      }
      .ai-video-orbit .svc-channel-chip {
        --chip-left: var(--chip-left-desktop);
        --chip-top: var(--chip-top-desktop);
      }
      .ai-video-signal-rail-stage {
        display: none;
      }
      @media (max-width: 768px) {
        .ai-video-channels .container {
          width: min(100% - 2rem, 1120px);
        }
        .ai-video-channels .svc-channels-intro {
          margin-bottom: 2.25rem;
        }
        .ai-video-channels-orbit-stage {
          display: none !important;
        }
        body.ai-video-production-page .scroll-to-top {
          display: none !important;
        }
        .ai-video-signal-rail-stage {
          --rail-x: 34px;
          --card-offset: 86px;
          display: block;
          position: relative;
          width: 100%;
          margin: 3rem auto 0;
          padding: 4.5rem 0 0;
          overflow: visible;
        }
        .ai-video-signal-brand {
          position: absolute;
          top: 0;
          left: calc(var(--rail-x) - 31px);
          width: 62px;
          height: 62px;
          border: 1px solid rgba(168, 130, 255, 0.72);
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(4, 0, 24, 0.86);
          box-shadow: 0 0 0 rgba(138, 92, 246, 0);
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 350ms ease, transform 350ms ease, box-shadow 350ms ease;
          z-index: 4;
        }
        .ai-video-signal-brand svg {
          width: 36px;
          height: 36px;
          display: block;
        }
        .ai-video-signal-brand path {
          fill: none;
          stroke: rgba(245, 239, 255, 0.96);
          stroke-width: 20;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .ai-video-signal-brand.is-visible,
        .ai-video-signal-rail-stage.is-reduced .ai-video-signal-brand {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 0 22px rgba(138, 92, 246, 0.62);
        }
        .ai-video-signal-brand.is-pulsing {
          transform: scale(1.08);
          box-shadow: 0 0 34px rgba(187, 156, 255, 0.86);
        }
        .ai-video-signal-rail-line {
          position: absolute;
          top: 3.5rem;
          bottom: 0.65rem;
          left: var(--rail-x);
          width: 2px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(222, 205, 255, 0.98), rgba(138, 92, 246, 0.88) 48%, rgba(93, 40, 220, 0.18));
          box-shadow: 0 0 16px rgba(138, 92, 246, 0.45);
          transform: scaleY(0);
          transform-origin: top;
          opacity: 0;
          transition: opacity 220ms ease, transform 500ms ease;
          z-index: 1;
        }
        .ai-video-signal-rail-line.is-visible,
        .ai-video-signal-rail-stage.is-reduced .ai-video-signal-rail-line {
          opacity: 1;
          transform: scaleY(1);
        }
        .ai-video-signal-list {
          position: relative;
          display: grid;
          gap: 0.95rem;
          margin: 0;
          padding: 0;
          list-style: none;
          z-index: 2;
        }
        .ai-video-signal-item {
          position: relative;
          margin-left: var(--card-offset);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 300ms ease, transform 300ms ease;
        }
        .ai-video-signal-item.is-visible,
        .ai-video-signal-rail-stage.is-reduced .ai-video-signal-item {
          opacity: 1;
          transform: translateY(0);
        }
        .ai-video-signal-connector {
          position: absolute;
          top: 50%;
          left: calc(var(--rail-x) - var(--card-offset));
          width: calc(var(--card-offset) - var(--rail-x));
          height: 2px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: rgba(138, 92, 246, 0.34);
          box-shadow: 0 0 0 rgba(138, 92, 246, 0);
          transition: background 180ms ease, box-shadow 180ms ease;
        }
        .ai-video-signal-connector::before {
          content: "";
          position: absolute;
          left: -5px;
          top: 50%;
          width: 10px;
          height: 10px;
          border: 2px solid rgba(229, 217, 255, 0.86);
          border-radius: 50%;
          background: #050014;
          box-shadow: 0 0 14px rgba(138, 92, 246, 0.58);
          transform: translateY(-50%);
        }
        .ai-video-signal-item.is-active .ai-video-signal-connector {
          background: rgba(208, 187, 255, 0.95);
          box-shadow: 0 0 18px rgba(138, 92, 246, 0.82);
        }
        .ai-video-signal-card {
          min-height: 72px;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 1rem 1rem;
          border: 1px solid rgba(138, 92, 246, 0.34);
          border-radius: 8px;
          background: rgba(3, 0, 20, 0.98);
          box-shadow: inset 0 0 26px rgba(28, 11, 71, 0.2);
          color: var(--white);
          font-family: var(--font-body);
          font-size: clamp(0.88rem, 3.8vw, 1rem);
          font-weight: 650;
          letter-spacing: 0;
          line-height: 1.35;
          transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }
        .ai-video-signal-item.is-active .ai-video-signal-card {
          border-color: rgba(201, 178, 255, 0.92);
          box-shadow: 0 0 20px rgba(138, 92, 246, 0.28), inset 0 0 28px rgba(95, 50, 195, 0.22);
          background: rgba(8, 2, 30, 0.98);
        }
        .ai-video-signal-dot {
          position: absolute;
          top: 0;
          left: 0;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #f5efff;
          box-shadow: 0 0 14px rgba(168, 130, 255, 1), 0 0 26px rgba(138, 92, 246, 0.72);
          opacity: 0;
          pointer-events: none;
          transform: translate3d(var(--rail-x), 0, 0);
          z-index: 5;
        }
        .ai-video-signal-rail-stage.is-complete .ai-video-signal-rail-line {
          box-shadow: 0 0 18px rgba(138, 92, 246, 0.5);
        }
      }
      @media (max-width: 768px) and (prefers-reduced-motion: reduce) {
        .ai-video-signal-brand,
        .ai-video-signal-rail-line,
        .ai-video-signal-item,
        .ai-video-signal-card,
        .ai-video-signal-connector {
          transition: none !important;
          animation: none !important;
        }
        .ai-video-signal-dot {
          display: none !important;
        }
      }
      @media (max-width: 380px) {
        .ai-video-signal-rail-stage {
          --rail-x: 27px;
          --card-offset: 72px;
        }
        .ai-video-signal-brand {
          left: calc(var(--rail-x) - 27px);
          width: 54px;
          height: 54px;
        }
        .ai-video-signal-brand svg {
          width: 31px;
          height: 31px;
        }
        .ai-video-signal-card {
          padding: 0.9rem 0.85rem;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('ai-video-production-page');
    
    const pageScrollTriggers: any[] = [];

    // Stats reveal sequence
    const statsGrid = document.querySelector('.svc-stats-grid');
    const statsCols = document.querySelectorAll('.svc-stat');
    if (statsGrid && statsCols.length && gsap && ScrollTrigger) {
      gsap.set(statsCols, { opacity: 0, y: 32 });
      const statsTrigger = ScrollTrigger.create({
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
      pageScrollTriggers.push(statsTrigger);
    }

    // Problem gaps broken-chain specific animation for AI Video
    const gapItems = document.querySelectorAll('.svc-problem-gaps li');
    if (gapItems.length && gsap && ScrollTrigger) {
      // Clear any generic ScrollTriggers on this element from other scripts
      // Then re-init for specific animation
      const gapTrigger = ScrollTrigger.create({
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
      pageScrollTriggers.push(gapTrigger);
    }

    const isMobileChannels = window.matchMedia('(max-width: 768px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mobile signal rail animation
    const signalStage = document.getElementById('ai-video-signal-rail');
    let signalObs: IntersectionObserver | null = null;
    let signalCancelled = false;
    let signalScrollRaf: number | null = null;
    let checkSignalRailTrigger: () => void = () => {};
    let signalItemObs: IntersectionObserver | null = null;
    let signalDotPlayed = false;
    let visibleSignalCount = 0;
    let lastRevealedSignalItem: HTMLElement | null = null;
    let signalRevealQueue: HTMLElement[] = [];
    let signalRevealTimer: number | null = null;
    const signalTimers: number[] = [];

    const wait = (ms: number) => new Promise<void>((resolve) => {
      const timer = window.setTimeout(resolve, ms);
      signalTimers.push(timer);
    });

    const animateSignalDot = async (item: HTMLElement, dot: HTMLElement, brand: HTMLElement) => {
      const card = item.querySelector<HTMLElement>('.ai-video-signal-card');
      if (!card) {
        await wait(520);
        return;
      }

      const stageRect = signalStage!.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const brandRect = brand.getBoundingClientRect();
      const railX = parseFloat(getComputedStyle(signalStage!).getPropertyValue('--rail-x')) || 34;
      const signalY = cardRect.top - stageRect.top + cardRect.height / 2;
      const brandY = brandRect.top - stageRect.top + brandRect.height / 2;
      const startX = cardRect.left - stageRect.left - 5;

      dot.style.transition = 'none';
      dot.style.opacity = '0';
      dot.style.transform = `translate3d(${startX}px, ${signalY}px, 0)`;
      dot.getBoundingClientRect();

      dot.style.opacity = '1';
      dot.style.transition = 'transform 160ms ease-out, opacity 100ms ease-out';
      dot.style.transform = `translate3d(${railX - 5}px, ${signalY}px, 0)`;
      await wait(160);
      if (signalCancelled) return;

      dot.style.transition = 'transform 420ms cubic-bezier(0.33, 0, 0.2, 1), opacity 120ms ease-out';
      dot.style.transform = `translate3d(${railX - 5}px, ${brandY}px, 0)`;
      await wait(420);
      dot.style.opacity = '0';
      await wait(70);
    };

    const playFinalSignalDot = async (dot: HTMLElement, brand: HTMLElement) => {
      if (signalDotPlayed || !lastRevealedSignalItem) return;
      signalDotPlayed = true;
      await wait(120);
      if (signalCancelled) return;
      await animateSignalDot(lastRevealedSignalItem, dot, brand);
      if (signalCancelled) return;

      brand.classList.add('is-pulsing');
      await wait(220);
      brand.classList.remove('is-pulsing');

      signalStage?.classList.add('is-complete');
    };

    const playSignalRail = async () => {
      if (!signalStage || signalStage.classList.contains('is-running')) return;

      const brand = signalStage.querySelector<HTMLElement>('.ai-video-signal-brand');
      const rail = signalStage.querySelector<HTMLElement>('.ai-video-signal-rail-line');
      const dot = signalStage.querySelector<HTMLElement>('.ai-video-signal-dot');
      const items = [...signalStage.querySelectorAll<HTMLElement>('[data-signal-card]')];
      if (!brand || !rail || !dot || !items.length) return;

      signalStage.classList.add('is-running');
      brand.classList.add('is-visible');
      await wait(180);
      if (signalCancelled) return;

      rail.classList.add('is-visible');
      await wait(180);
      if (signalCancelled) return;

      const revealItem = (item: HTMLElement) => {
        if (item.classList.contains('is-visible')) return;
        item.classList.add('is-visible', 'is-active');
        lastRevealedSignalItem = item;
        visibleSignalCount += 1;
        const activeTimer = window.setTimeout(() => item.classList.remove('is-active'), 260);
        signalTimers.push(activeTimer);

        if (visibleSignalCount >= items.length) {
          signalItemObs?.disconnect();
          playFinalSignalDot(dot, brand);
        }
      };

      const flushRevealQueue = () => {
        signalRevealTimer = null;
        if (signalCancelled) return;

        const nextItem = signalRevealQueue.shift();
        if (nextItem) {
          revealItem(nextItem);
        }

        if (signalRevealQueue.length) {
          signalRevealTimer = window.setTimeout(flushRevealQueue, 90);
          signalTimers.push(signalRevealTimer);
        }
      };

      const queueRevealItem = (item: HTMLElement) => {
        if (item.classList.contains('is-visible') || signalRevealQueue.includes(item)) return;

        signalRevealQueue.push(item);
        if (!signalRevealTimer) {
          signalRevealTimer = window.setTimeout(flushRevealQueue, 60);
          signalTimers.push(signalRevealTimer);
        }
      };

      signalItemObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          queueRevealItem(entry.target as HTMLElement);
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

      items.forEach((item) => {
        signalItemObs?.observe(item);
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.88 && rect.bottom > 0) {
          queueRevealItem(item);
        }
      });
    };

    if (signalStage && isMobileChannels) {
      if (reducedMotion) {
        signalStage.classList.add('is-reduced', 'is-complete');
      } else {
        const triggerSignalRail = () => {
          if (signalStage.classList.contains('is-running')) return;
          if (signalScrollRaf) {
            window.cancelAnimationFrame(signalScrollRaf);
            signalScrollRaf = null;
          }
          window.removeEventListener('scroll', checkSignalRailTrigger);
          window.removeEventListener('resize', checkSignalRailTrigger);
          playSignalRail();
        };

        checkSignalRailTrigger = () => {
          if (signalScrollRaf) return;
          signalScrollRaf = window.requestAnimationFrame(() => {
            signalScrollRaf = null;
            const triggerRect = signalStage.getBoundingClientRect();
            const triggerLine = Math.min(window.innerHeight * 0.68, 620);
            if (triggerRect.top <= triggerLine && triggerRect.bottom > 0) {
              signalObs?.disconnect();
              triggerSignalRail();
            }
          });
        };

        signalObs = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            checkSignalRailTrigger();
          });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
        signalObs.observe(signalStage);

        window.addEventListener('scroll', checkSignalRailTrigger, { passive: true });
        window.addEventListener('resize', checkSignalRailTrigger);
        checkSignalRailTrigger();
      }
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
      if (document.head.contains(style)) document.head.removeChild(style);
      document.body.classList.remove('ai-video-production-page');
      window.removeEventListener('resize', measureFn);
      if (pulseTimer) clearInterval(pulseTimer);
      signalCancelled = true;
      signalTimers.forEach((timer) => clearTimeout(timer));
      signalRevealQueue = [];
      signalRevealTimer = null;
      if (signalScrollRaf) window.cancelAnimationFrame(signalScrollRaf);
      window.removeEventListener('scroll', checkSignalRailTrigger);
      window.removeEventListener('resize', checkSignalRailTrigger);
      if (signalObs) signalObs.disconnect();
      if (signalItemObs) signalItemObs.disconnect();
      clearTimeout(measureTimeout1);
      clearTimeout(measureTimeout2);
      if (sectionObs) sectionObs.disconnect();
      pageScrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>AI Video Production Agency | Production Company | Impulse DIgital</title>
<meta name="description" content="Impulse Digital is a creative AI video production agency offering advanced AI video production services to create scalable, engaging, and high-impact brand videos faster and smarter." />
<meta name="keywords" content="ai video production agency, ai video production services, ai video production company, mumbai, india, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/" />
<meta property="og:title" content="AI Video Production Agency | Impulse DIgital" />
<meta property="og:description" content="Impulse Digital is a creative AI video production agency offering advanced AI video production services to create scalable, engaging, and high-impact brand videos faster and smarter." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/video-production/ai-video-production/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="AI Video Production Agency | Impulse DIgital" />
<meta name="twitter:description" content="Impulse Digital is a creative AI video production agency offering advanced AI video production services to create scalable, engaging, and high-impact brand videos faster and smarter." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      


      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/#service","name":"AI Video Production Services","url":"https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/","description":"Impulse Digital provides AI video production services for brands, including AI-generated videos, product videos, social media videos, campaign films, and scalable visual content for digital marketing.","serviceType":["AI Video Production","AI Generated Videos","Product Videos","Social Media Videos","Campaign Videos","Digital Video Content"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","@id":"https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/#faq","url":"https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/","mainEntity":[{"@type":"Question","name":"What is AI video production?","acceptedAnswer":{"@type":"Answer","text":"AI video production uses AI tools to support or create parts of the video process, including scripting, avatars, visuals, voiceovers, dubbing, editing, subtitles, and format adaptations. The best results still need human creative direction."}},{"@type":"Question","name":"Is AI video a replacement for traditional shoots?","acceptedAnswer":{"@type":"Answer","text":"Not always. Some ideas need a live shoot. Some are better built with AI. Many work best as a hybrid."}},{"@type":"Question","name":"What types of videos can you create?","acceptedAnswer":{"@type":"Answer","text":"Campaign films, explainers, product videos, social media videos, launch assets, training videos, onboarding videos, corporate communication, multilingual videos, and digital ad creatives."}},{"@type":"Question","name":"Will the video look obviously AI-generated?","acceptedAnswer":{"@type":"Answer","text":"Not if it is directed properly. We focus on scripting, visual treatment, editing, sound, and brand checks so the output feels intentional."}},{"@type":"Question","name":"Can one video become multiple formats?","acceptedAnswer":{"@type":"Answer","text":"Yes. One video direction can be adapted into vertical cuts, teasers, short-form edits, ad versions, internal videos, and presentation-ready assets."}},{"@type":"Question","name":"What do you need from us to start?","acceptedAnswer":{"@type":"Answer","text":"We need the objective, audience, message, brand guidelines, references, timelines, platforms, and any mandatory product, legal, or compliance details."}},{"@type":"Question","name":"Is AI video right for every brand?","acceptedAnswer":{"@type":"Answer","text":"AI video is right when the idea benefits from speed, scale, flexibility, multilingual adaptation, or visual imagination. It is not right when real people, live proof, or documentary credibility are essential."}}]}) }} />
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
      <section className="svc-channels ai-video-channels">
        <div className="container">
          <h2 className="svc-h2 split-text">Built for the Screens People Actually Watch</h2>
          <p className="svc-channels-intro">AI-led videos can be created and adapted for:</p>
          <div className="svc-channels-stage ai-video-channels-orbit-stage" id="channels-stage">
            <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
            <div className="svc-channels-center" aria-hidden="true">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="svc-channels-orbit ai-video-orbit">
              {aiVideoChannels.map((channel, i) => (
                <span className="svc-channel-chip" style={aiVideoChannelPositions[i]} key={channel}>{channel}</span>
              ))}
            </div>
          </div>
          <div className="ai-video-signal-rail-stage" id="ai-video-signal-rail">
            <div className="ai-video-signal-brand" aria-hidden="true">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="ai-video-signal-rail-line" aria-hidden="true"></div>
            <ol className="ai-video-signal-list">
              {aiVideoChannels.map((channel) => (
                <li className="ai-video-signal-item" data-signal-card key={channel}>
                  <span className="ai-video-signal-connector" aria-hidden="true"></span>
                  <div className="ai-video-signal-card">{channel}</div>
                </li>
              ))}
            </ol>
            <span className="ai-video-signal-dot" aria-hidden="true"></span>
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
