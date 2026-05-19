import { Helmet } from 'react-helmet-async';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ── Impulse mark path ─────────────────────────────────── */
const MARK =
  'M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z';

/* ── Services ─────────────────────────────────────────── */
const SERVICES = [
  {
    index: '01',
    label: 'The proprietary growth engine.',
    title: 'Archer AI',
    desc: 'Our proprietary AI platform for total growth intelligence. Uncover deep market signals, predict consumer behavior, and deploy data-driven strategies faster than ever before.',
    to: '/ai-marketing-systems/archer-ai',
  },
  {
    index: '02',
    label: 'Scale your marketing autonomously.',
    title: 'Agentic AI',
    desc: 'Deploy autonomous AI agents to execute and scale your marketing without human bottlenecks. From content distribution to workflow automation, scale effortlessly.',
    to: '/ai-marketing-systems/agentic-ai',
  },
  {
    index: '03',
    label: 'Future-proof visual creation.',
    title: 'AI Video Production',
    desc: 'Cutting-edge video creation powered by advanced generative AI. Produce high-fidelity visual assets, commercial spots, and cinematic content at unprecedented speed.',
    to: '/ai-marketing-systems/ai-video-production',
  },
  {
    index: '04',
    label: 'Dominate the new search ecosystem.',
    title: 'Generative Search Optimisation',
    desc: 'Ensure your brand is recommended by AI models, LLMs, and Generative Search engines. Transition from traditional SEO to AI-first search dominance.',
    to: '/ai-marketing-systems/generative-search-optimisation',
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
const AIMarketingSystems: React.FC = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.add('service-page');

    // Scroll-triggered background transition (Match Agentic AI)
    const { gsap, ScrollTrigger, particlesMaterial } = window as any;
    if (!gsap || !ScrollTrigger || !pageRef.current) return;

    // Transition body to black and fade out hero particles when scrolling down the page
    ScrollTrigger.create({
      trigger: '.gi2-split',
      start: 'top -5%', // Starts fading after scrolling down a little bit
      end: 'top -25%',  // Fully black after a short scroll
      scrub: true,
      animation: gsap.to(document.body, { backgroundColor: '#000000', immediateRender: false })
    });

    if (particlesMaterial) {
      ScrollTrigger.create({
        trigger: '.gi2-split',
        start: 'top -5%',
        end: 'top -25%',
        scrub: true,
        animation: gsap.fromTo(particlesMaterial, { opacity: 0.7 }, { opacity: 0, immediateRender: false })
      });
    }

    /* ── Cards reveal ── */
    const cards = pageRef.current.querySelectorAll('.gi2-card');
    if (cards.length) {
      ScrollTrigger.create({
        trigger: '.gi2-split',
        start: 'top 85%',
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

    /* ── Magnetic 3D Tilt on hover ── */
    cards.forEach((card) => {
      card.addEventListener('pointermove', (e: any) => {
        if (window.innerWidth <= 900) return; // Disable on mobile
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
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
      document.body.classList.remove('service-page');
      // Restore original site background colour and particles
      gsap.set(document.body, { clearProps: 'backgroundColor' });
      if (particlesMaterial) {
        gsap.set(particlesMaterial, { opacity: 0.7 });
      }
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <main id="main-content" ref={pageRef}>
      <Helmet>
        <title>AI Marketing Systems | Impulse Digital</title>
        <meta name="description" content="Deploy autonomous, intelligent systems that scale your marketing exponentially without human bottlenecks." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/ai-marketing-systems/" />
      </Helmet>

      {/* ══ SPLIT LAYOUT ═══════════════════════════════════ */}
      <section className="gi2-split" id="warp-start">
        {/* Left: Sticky Title */}
        <div className="gi2-split-left">
          <h1 className="gi2-main-title">AI Marketing<br />Systems.</h1>
          <p className="gi2-main-desc">Deploy autonomous, intelligent systems that scale your marketing exponentially without human bottlenecks.</p>
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
                style={{ opacity: 0, transform: 'translateY(60px)' }}
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

export default AIMarketingSystems;
