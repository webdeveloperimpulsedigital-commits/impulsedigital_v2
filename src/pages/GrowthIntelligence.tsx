import { Helmet } from 'react-helmet-async';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

/* ── Impulse mark path ─────────────────────────────────── */
const MARK =
  'M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z';

/* ── Services ─────────────────────────────────────────── */
const SERVICES = [
  {
    index: '01',
    label: 'Find the signal before you make the move.',
    title: 'Consumer Intelligence',
    desc: 'Decode the motivations, tensions, and behavioural patterns driving your target consumer — far beyond what any survey can surface. The output goes directly into briefs, messaging hierarchies, and category strategy.',
    to: '/growth-intelligence/consumer-intelligence',
  },
  {
    index: '02',
    label: 'Know what your competitors are planning before they execute.',
    title: 'Market & Competitive Intelligence',
    desc: 'Surface competitor moves, market gaps, and strategic vulnerabilities before they become threats. We monitor messaging, campaign activity, positioning shifts, and category trends — giving you the intelligence to respond with confidence.',
    to: '/growth-intelligence/market-intelligence',
  },
  {
    index: '03',
    label: 'Find out what the campaign actually changed.',
    title: 'Campaign Intelligence',
    desc: 'Go beyond delivery metrics. Measure recall, sentiment, message clarity, and influencer fit — then turn every post-campaign learning into a sharper next brief, better creator choices, and stronger budget decisions.',
    to: '/growth-intelligence/campaign-intelligence',
  },
  {
    index: '04',
    label: 'Real-time market signal. Continuously.',
    title: 'Always-On Intelligence',
    desc: 'Continuous brand monitoring and competitive tracking so your intelligence stays current — not updated once a quarter. Detect category shifts, sentiment drifts, and emerging competitor moves before they become problems.',
    to: '/growth-intelligence/always-on-intelligence',
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
const GrowthIntelligence: React.FC = () => {
  const pageRef = useRef<HTMLElement>(null);
  useServicePageBackground('.gi2-split');

  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger || !pageRef.current) return;

    /* ── Cards reveal ── */
    const cards = pageRef.current.querySelectorAll('.gi2-card');
    let cardsTrigger: any = null;
    if (cards.length) {
      gsap.set(cards, { opacity: 0, y: 48 });
      cardsTrigger = ScrollTrigger.create({
        trigger: '.gi2-split',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(cards, { opacity: 1, y: 0, duration: 1.0, stagger: 0.14, ease: 'power3.out' });
        },
      });
    }

    /* ── Stroke-trace logo on hover ── */
    cards.forEach((card) => {
      const path = card.querySelector('.gi2-card-mark path') as SVGPathElement | null;
      if (!path) return;
      const len = path.getTotalLength?.() ?? 2000;
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      card.addEventListener('mouseenter', () =>
        gsap.to(path, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.out' })
      );
      card.addEventListener('mouseleave', () =>
        gsap.to(path, { strokeDashoffset: len, duration: 1.0, ease: 'power2.in' })
      );
    });

    /* ── 3-D tilt ── */
    cards.forEach((card) => {
      card.addEventListener('pointermove', (e: any) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
        const y = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
        gsap.to(card, {
          rotationY:  x * 6,
          rotationX: -y * 6,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 1000,
          transformOrigin: 'center center',
        });
      });
      card.addEventListener('pointerleave', () =>
        gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.8, ease: 'elastic.out(1,0.5)' })
      );
    });

    return () => {
      if (cardsTrigger) cardsTrigger.kill();
    };
  }, []);

  return (
    <main id="main-content" ref={pageRef}>
      <Helmet>
        <title>Growth Intelligence | Impulse Digital</title>
        <meta name="description" content="Consumer, Market, Campaign and Always-On Intelligence — four disciplines that turn market data into competitive advantage." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/growth-intelligence/" />
      </Helmet>

      {/* ══ SPLIT LAYOUT ═══════════════════════════════════ */}
      <section className="gi2-split" id="warp-start">
        {/* Left: Sticky Title */}
        <div className="gi2-split-left">
          <h1 className="gi2-main-title">Growth<br />Intelligence.</h1>
          <p className="gi2-main-desc">Four disciplines that turn market data into competitive advantage.</p>
        </div>

        {/* Right: Scrolling List */}
        <div className="gi2-split-right">
          <div className="gi2-list">
            {SERVICES.map((svc, i) => (
              <Link
                key={i}
                to={svc.to}
                className="gi2-card"
                data-cursor="EXPLORE"
              >
                {/* Hover bg wash */}
                <div className="gi2-card-bg" aria-hidden="true" />

                {/* Hover glow */}
                <div className="gi2-card-glow" aria-hidden="true" />

                {/* Impulse mark — traces on hover */}
                <div className="gi2-card-mark" aria-hidden="true">
                  <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d={MARK} />
                  </svg>
                </div>

                {/* Number */}
                <div className="gi2-card-left">
                  <span className="gi2-card-index">{svc.index}</span>
                </div>

                {/* Content */}
                <div className="gi2-card-center">
                  <h2 className="gi2-card-title">{svc.title}</h2>
                  <p className="gi2-card-desc">{svc.desc}</p>
                  
                  {/* CTA */}
                  <div className="gi2-card-cta-wrapper" aria-hidden="true">
                    <span className="btn-nav">Know More</span>
                  </div>
                </div>

                {/* Hover bottom line */}
                <div className="gi2-card-line" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GrowthIntelligence;
