// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const AboutUs: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page', 'about-page');

    const { gsap, ScrollTrigger, SplitType } = window as any;



    // ===== HERO entry choreography =====
    const runHeroAnim = () => {
      const reveal = () => {
        document.querySelectorAll('.ab-hero-h, .ab-hero-tagline, .ab-hero-truths, .ab-hero-foot')
          .forEach(el => el.style.visibility = 'visible');
      };
      if (!window.gsap || !window.SplitType) { reveal(); return; }

      const headline = document.querySelector('.ab-hero-h');
      const tagline = document.querySelector('.ab-hero-tagline');
      const truths = document.querySelectorAll('.ab-truth');
      const foot = document.querySelector('.ab-hero-foot');

      reveal();

      if (headline) {
        const split = new SplitType(headline, { types: 'lines, words' });
        split.lines.forEach((line) => {
          const w = document.createElement('div');
          w.classList.add('line-wrapper');
          line.parentNode.insertBefore(w, line);
          w.appendChild(line);
        });
        gsap.set(split.words, { yPercent: 120, opacity: 0 });
        gsap.to(split.words, {
          yPercent: 0, opacity: 1,
          duration: 0.8, stagger: 0.015, ease: 'power4.out', delay: 0.1
        });
      }
      if (tagline) gsap.fromTo(tagline, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 1.0 });
      if (truths.length) gsap.fromTo(truths, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 1.25 });
      if (foot) gsap.fromTo(foot, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 1.7,
        onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh()
      });
    };

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(runHeroAnim);
    else setTimeout(runHeroAnim, 250);

    // ===== Generic scroll reveals =====
    if (window.gsap && window.ScrollTrigger) {

      const heads = document.querySelectorAll(
        '.ab-drift-pivot, .ab-drift-resist,' +
        '.ab-appetite-head, .ab-appetite-def, .ab-appetite-close p,' +
        '.ab-formation-body p, .ab-formation-close,' +
        '.ab-bridge, .ab-reveal-pre, .ab-reveal-h,' +
        '.ab-clarity-h-sub, .ab-clarity-stack .row,' +
        '.ab-senior-sub, .ab-senior-foot p,' +
        '.ab-fit-close'
      );
      heads.forEach((el) => {
        gsap.fromTo(el, { y: 26, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        });
      });

      const batches = ['.ab-routine-cell', '.ab-drift-q', '.ab-appetite-row', '.ab-senior-row', '.ab-fit-attr'];
      batches.forEach((sel) => {
        const items = gsap.utils.toArray(sel);
        if (!items.length) return;
        gsap.set(items, { y: 24, opacity: 0 });
        ScrollTrigger.batch(items, {
          start: 'top 90%',
          onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out' }),
          once: true
        });
      });

      ['.ab-clarity-pane', '.ab-fit-pane'].forEach((sel) => {
        const items = gsap.utils.toArray(sel);
        if (!items.length) return;
        gsap.set(items, { y: 30, opacity: 0 });
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' }),
          once: true
        });
      });

      // ===== Movement system: keep the structure, add a living sequence =====
      const movementSystem = document.querySelector('.ab-movement-system');
      if (movementSystem) {
        const movementCards = gsap.utils.toArray('.ab-movement-system .ab-task');
        const revealPanel = document.querySelector('.ab-reveal');
        const movementOrder = [0, 3, 1, 2, 4, 5, 6, 7];

        ScrollTrigger.create({
          trigger: movementSystem,
          start: 'top 72%',
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            movementOrder.forEach((idx, i) => {
              const card = movementCards[idx];
              if (!card) return;
              tl.fromTo(card, {
                opacity: 0,
                y: 28,
                scale: 0.96
              }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.62,
                onStart: () => card.classList.add('is-lit'),
                onComplete: () => setTimeout(() => card.classList.remove('is-lit'), 900)
              }, i * 0.08);
            });
            tl.fromTo(revealPanel, {
              opacity: 0,
              y: 24,
              scale: 0.97
            }, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              onStart: () => revealPanel && revealPanel.classList.add('is-lit')
            }, 0.32);
            tl.to(revealPanel, { '--shine-x': '160%', duration: 1.2, ease: 'power2.out' }, 0.62);
          }
        });

        movementCards.forEach((card) => {
          card.addEventListener('pointermove', (event) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
            card.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
          });
        });
      }

      const strike = document.querySelector('.ab-appetite-head .strike');
      if (strike) {
        ScrollTrigger.create({
          trigger: '.ab-appetite-head',
          start: 'top 70%',
          once: true,
          onEnter: () => strike.style.setProperty('--strike-w', '1')
        });
      }

      // ===== Formation V-flock reveal =====
      const order = ['l3', 'r3', 'l2', 'r2', 'l1', 'r1', 'lead'];
      if (document.querySelector('.ab-form-mark')) {
        ScrollTrigger.create({
          trigger: '.ab-formation-stage',
          start: 'top 80%',
          once: true,
          onEnter: () => {
            order.forEach((pos, i) => {
              const el = document.querySelector(`.ab-form-mark[data-pos="${pos}"]`);
              if (!el) return;
              const isLead = el.classList.contains('lead');
              const isTail = (pos === 'l3' || pos === 'r3');
              gsap.fromTo(el,
                { opacity: 0, scale: 0.6, y: 30 },
                {
                  opacity: isLead ? 1 : (isTail ? 0.5 : 0.88),
                  scale: 1, y: 0,
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: 'power3.out'
                }
              );
            });
            gsap.to('.ab-form-mark.lead', {
              y: -6, duration: 2.3, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.2
            });
          }
        });
      }

      // ===== Founder section reveals =====
      document.querySelectorAll('.ab-founder-section').forEach((sec) => {
        const ghost = sec.querySelector('.ab-founder-ghost-name');
        const portrait = sec.querySelector('.ab-founder-portrait img');
        const name = sec.querySelector('.ab-founder-name');
        const head = sec.querySelector('.ab-founder-headline');
        const body = sec.querySelector('.ab-founder-body');
        const founderText = [name, head, body].filter(Boolean);

        gsap.set(ghost, { opacity: 0 });
        gsap.set(portrait, { y: 60, opacity: 0 });
        gsap.set(founderText, { y: 24, opacity: 0 });

        ScrollTrigger.create({
          trigger: sec,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.to(ghost, { opacity: 1, duration: 1.4 }, 0.15)
              .to(portrait, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' }, 0.2)
              .to(name, { y: 0, opacity: 1, duration: 0.9 }, 0.5)
              .to(head, { y: 0, opacity: 1, duration: 0.9 }, 0.65)
              .to(body, { y: 0, opacity: 1, duration: 0.9 }, 0.8);
          }
        });

        gsap.to(ghost, {
          y: -50, ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true }
        });
        gsap.to(portrait, {
          y: -20, ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });
      const finalCard = document.querySelector('.ab-final-card');
      const finalRows = gsap.utils.toArray('.ab-final-stack .row');
      const finalButton = document.querySelector('.ab-final-cta-row');
      if (finalCard && finalButton) {
        ScrollTrigger.create({
          trigger: finalCard,
          start: 'top 84%',
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.fromTo(finalRows, {
              y: 58,
              opacity: 0,
              filter: 'blur(14px)'
            }, {
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 1,
              stagger: 0.13
            })
              .fromTo(finalButton, {
                y: 24,
                opacity: 0
              }, {
                y: 0,
                opacity: 1,
                duration: 0.65
              }, '-=0.25');
          }
        });
      }
    }

    // ===== Hero → drift transition =====
    const waitForGsap = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(waitForGsap);
        const trigger = document.querySelector('.ab-drift');
        if (!trigger) return;
        gsap.to(document.body, {
          backgroundColor: '#000000',
          scrollTrigger: { trigger, start: 'top bottom', end: 'top top', scrub: true }
        });
        if (window.particlesMaterial) {
          gsap.fromTo(window.particlesMaterial,
            { opacity: 0.7 },
            { opacity: 0, scrollTrigger: { trigger, start: 'top 80%', end: 'top 20%', scrub: true } }
          );
        }
      }
    }, 80);
    setTimeout(() => clearInterval(waitForGsap), 6000);


    return () => {
      document.body.classList.remove('service-page', 'about-page');
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <main id="main-content" className="about-page-container">
      <Helmet>
        <title>About Impulse Digital - Creative Digital Marketing Agency</title>
<meta name="description" content="Get to know Impulse Digital, a trusted digital marketing agency delivering SEO, paid media, branding, agentic ai, and website solutions that drive measurable business growth." />
<meta name="keywords" content="digital marketing agency, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/about-us/" />
<meta property="og:title" content="About Impulse Digital - Creative Digital Marketing Agency" />
<meta property="og:description" content="Get to know Impulse Digital, a trusted digital marketing agency delivering SEO, paid media, branding, agentic ai, and website solutions that drive measurable business growth." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:url" content="https://www.theimpulsedigital.com/about-us/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="About Impulse Digital - Creative Digital Marketing Agency" />
<meta name="twitter:description" content="Get to know Impulse Digital, a trusted digital marketing agency delivering SEO, paid media, branding, agentic ai, and website solutions that drive measurable business growth." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>



      {/* ============================================================
         1. HERO — monumental headline + static 3-up "truths"
         (no scrolling ticker — readable instantly).
         ============================================================ */}
      <section className="ab-section ab-hero" id="hero">
        <div className="ab-wrap-full">
          <div className="ab-hero-inner">
            <h1 className="ab-hero-h">Momentum for brands with appetite.</h1>
            <p className="ab-hero-tagline">The best brands are never truly still.</p>

            <div className="ab-hero-truths">
              <div className="ab-truth">
                <p className="ab-truth-text">They question what has become routine.</p>
              </div>
              <div className="ab-truth">
                <p className="ab-truth-text">They improve what is already working.</p>
              </div>
              <div className="ab-truth">
                <p className="ab-truth-text">They move before marketing turns into maintenance.</p>
              </div>
            </div>

            <div className="ab-hero-foot">
              <p className="ab-hero-lede">Impulse Digital helps such brands turn ambition into commercial momentum by bringing
                strategy, creativity, content, search, performance, technology, AI, and execution into formation.</p>
              <div className="ab-hero-cta-row">
                <Link to="/contact-us/" className="btn" data-cursor="START">
                  <span className="btn-text">Start a conversation</span>
                  <div className="btn-fill"></div>
                </Link>
                <Link to="/case-studies/" className="btn" data-cursor="VIEW">
                  <span className="btn-text">Explore Our Work</span>
                  <div className="btn-fill"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         2. DRIFT — billboard headline → static 2×2 "routine" grid
         (no marquee) → asymmetric rhetorical question stack →
         monumental resolution.
         ============================================================ */}
      <section className="ab-section ab-drift" id="think">
        <div className="ab-wrap-full">

          <div className="ab-drift-head">
            <h2 className="ab-drift-h split-text">
              <span className="l1">Marketing becomes maintenance quietly.</span>
              {/* <span className="l2">It rarely fails all at once.</span> */}
            </h2>
          </div>

          {/* Static 2×2 of routine phrases. Each tile feels operational
             on the surface — the outlined type signals the hollowness. */}
          <div className="ab-routine-grid">
            <div className="ab-routine-cell">
              <span className="ab-routine-dot"></span>
              <span className="ab-routine-text">The calendar keeps<br/>moving.</span>
            </div>
            <div className="ab-routine-cell">
              <span className="ab-routine-dot"></span>
              <span className="ab-routine-text">Campaigns keep<br/>launching.</span>
            </div>
            <div className="ab-routine-cell">
              <span className="ab-routine-dot"></span>
              <span className="ab-routine-text">Reports keep<br/>getting made.</span>
            </div>
            <div className="ab-routine-cell">
              <span className="ab-routine-dot"></span>
              <span className="ab-routine-text">Meetings keep<br/>happening.</span>
            </div>
          </div>

          <div className="ab-drift-pivot">
            <p className="loud">But somewhere along the way, the work starts needing more explanation than it creates
              movement.</p>
            <p>Leadership starts asking harder questions.</p>
          </div>

          {/* Rhetorical questions — alternating alignment so they read
             as voices pressing in from different angles, not as FAQ
             items. No numbers, no arrows, no hover transform. */}
          <div className="ab-drift-questions">
            <p className="ab-drift-q" data-align="l">What is this doing for the<br/>brand<span className="q-mark">?</span></p>
            <p className="ab-drift-q" data-align="r2">What is this building over<br/>time<span className="q-mark">?</span></p>
            <p className="ab-drift-q" data-align="l2">What is this helping us<br/>decide<span className="q-mark">?</span></p>
            <p className="ab-drift-q" data-align="r">What is this moving for the<br/>business<span className="q-mark">?</span></p>
          </div>

          <p className="ab-drift-resist">That is the drift <span className="accent">Impulse exists to resist.</span></p>
        </div>
      </section>

      {/* ============================================================
         3. APPETITE — ghost word + monumental rows
         (hover changes color only — no horizontal motion).
         ============================================================ */}
      <section className="ab-section ab-appetite">
        <div className="ab-appetite-ghost" aria-hidden="true">APPETITE</div>
        <div className="ab-wrap-full ab-appetite-inner">
          <div className="ab-appetite-head">
            <span className="l1">Appetite is not <span className="strike">size</span>.</span>
            <span className="l2">It is willingness.</span>
          </div>

          <div className="ab-appetite-list">
            <div className="ab-appetite-row">
              <span className="num">01</span>
              <span className="text">A startup can have it.</span>
            </div>
            <div className="ab-appetite-row">
              <span className="num">02</span>
              <span className="text">A legacy business can have it.</span>
            </div>
            <div className="ab-appetite-row">
              <span className="num">03</span>
              <span className="text">A conglomerate can have it.</span>
            </div>
            <div className="ab-appetite-row">
              <span className="num">04</span>
              <span className="text">A founder-led company can have it.</span>
            </div>
          </div>

          <p className="ab-appetite-def">Appetite is the willingness to move, question, improve, experiment, challenge default
            thinking, and expect more from marketing.</p>

          <div className="ab-appetite-close">
            <p>That is who we work best with.</p>
            <p>Brands that do not want marketing to simply continue.</p>
            <p className="accent">Brands that want it to create momentum.</p>
          </div>
        </div>
      </section>

      {/* ============================================================
         4. FORMATION — HEADLINE LEADS, then the V-flock visual,
         then the body. Tightened padding to remove the dead
         space the user flagged above the headline.
         ============================================================ */}
      <section className="ab-section ab-formation">
        <div className="ab-wrap-narrow">

          <div className="ab-formation-head">
            <h2 className="ab-formation-h split-text">Teams go further in formation.</h2>
          </div>

          <div className="ab-formation-stage" aria-hidden="true">
            <div className="ab-form-mark" data-pos="l3"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="l2"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="l1"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark lead" data-pos="lead"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="r1"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="r2"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="r3"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
          </div>

          <div className="ab-formation-body">
            <p>A brand rarely moves because one channel performs in isolation.</p>
            <p>Momentum is built when the thinking, the story, the search presence, the media, the website, the data, the
              technology, and the execution pull in the same direction.</p>
            <p>That is why we do not treat strategy as a document and execution as a handoff.</p>
            <p className="ab-formation-close">The work has to move together.<em>Otherwise, it becomes activity.</em></p>
          </div>
        </div>
      </section>

      {/* ============================================================
         5. MOVEMENT — services rendered as a quiet itemised list
         (intentionally task-like, NOT a hero service grid), with
         a monumental punchline reveal underneath. The visual
         hierarchy IS the build-up: small list → towering reveal.
         ============================================================ */}
      <section className="ab-section ab-movement" id="movement">
        <div className="ab-wrap-full">
          <div className="ab-movement-head">
            <h2 className="ab-movement-h split-text">The service is not the story.<br /><span className="accent">The movement
              is.</span></h2>
          </div>

          <div className="ab-movement-system">
            <div className="ab-tasks">
              <div className="ab-task">
                <p className="ab-task-text"><strong>Brand strategy</strong>gives the work a commercial foundation.</p>
              </div>
              <div className="ab-task">
                <p className="ab-task-text"><strong>Content</strong>builds authority, not just output.</p>
              </div>
              <div className="ab-task">
                <p className="ab-task-text"><strong>Search</strong>compounds visibility that the brand owns.</p>
              </div>
              <div className="ab-task">
                <p className="ab-task-text"><strong>Performance</strong>makes spend more accountable.</p>
              </div>
              <div className="ab-task">
                <p className="ab-task-text"><strong>Social media</strong>builds relevance, not just a posting rhythm.</p>
              </div>
              <div className="ab-task">
                <p className="ab-task-text"><strong>Websites</strong>become the place where intent either lands or leaks.</p>
              </div>
              <div className="ab-task">
                <p className="ab-task-text"><strong>Analytics</strong>turns data into clearer decisions.</p>
              </div>
              <div className="ab-task">
                <p className="ab-task-text"><strong>AI</strong>makes the work faster, sharper, and more scalable without
                  lowering the bar.</p>
              </div>
            </div>

            <div className="ab-reveal">
              <p className="ab-reveal-pre">Used separately, these can become tasks.</p>
              <h3 className="ab-reveal-h">
                Used with intent,
                <span className="accent-block">they become momentum.</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         6. CLARITY — Less chasing. More clarity.
         ============================================================ */}
      <section className="ab-section ab-clarity">
        <div className="ab-wrap-full">

          <div className="ab-clarity-head">
            <h2 className="ab-clarity-h split-text">Less chasing.<br /><span className="accent">More clarity.</span></h2>
            <p className="ab-clarity-h-sub">You get strategy before the work, not as a post-rationalisation after the work is
              questioned. You get content, campaigns, websites, search systems, and AI-enabled workflows built to perform,
              not just exist.</p>
          </div>

          <div className="ab-clarity-split">
            <div className="ab-clarity-pane behind">
              <span className="ab-clarity-pane-num">01</span>
              <h3>Behind the scenes, there is process, data, automation, judgment, and senior thinking.</h3>
              <ul>
                <li>Process</li>
                <li>Data</li>
                <li>Automation</li>
                <li>Judgment</li>
                <li>Senior thinking</li>
              </ul>
            </div>
            <div className="ab-clarity-pane surface">
              <span className="ab-clarity-pane-num">02</span>
              <h3>On the surface, it should feel simple.</h3>
              <ul>
                <li>You get fewer loose ends.</li>
                <li>Fewer avoidable calls.</li>
                <li>Fewer rounds caused by unclear thinking.</li>
              </ul>
            </div>
          </div>

          <div className="ab-clarity-stack">
            <span className="row">The right work.</span>
            <span className="row">Moving in the right direction.</span>
            <span className="row">With fewer things falling through the cracks.</span>
          </div>
        </div>
      </section>

      {/* ============================================================
         7. SENIOR THINKING
         ============================================================ */}
      <section className="ab-section ab-senior">
        <div className="ab-wrap-full">

          <div className="ab-senior-head">
            <h2 className="ab-senior-h split-text">Senior thinking stays close to the work.</h2>
            <p className="ab-senior-sub">Impulse is not built on the idea that strategy happens once and execution figures
              itself out. The work often needs judgment.</p>
          </div>

          <div className="ab-senior-list">
            <div className="ab-senior-row">
              <div className="ab-senior-trigger">A campaign</div>
              <div className="ab-senior-arrow"><svg viewBox="0 0 24 24">
                <use href="#impulse-arrow" />
              </svg></div>
              <div className="ab-senior-need">may need a sharper thought.</div>
            </div>
            <div className="ab-senior-row">
              <div className="ab-senior-trigger">A website</div>
              <div className="ab-senior-arrow"><svg viewBox="0 0 24 24">
                <use href="#impulse-arrow" />
              </svg></div>
              <div className="ab-senior-need">may need a clearer path.</div>
            </div>
            <div className="ab-senior-row">
              <div className="ab-senior-trigger">A search strategy</div>
              <div className="ab-senior-arrow"><svg viewBox="0 0 24 24">
                <use href="#impulse-arrow" />
              </svg></div>
              <div className="ab-senior-need">may need stronger commercial context.</div>
            </div>
            <div className="ab-senior-row">
              <div className="ab-senior-trigger">An AI workflow</div>
              <div className="ab-senior-arrow"><svg viewBox="0 0 24 24">
                <use href="#impulse-arrow" />
              </svg></div>
              <div className="ab-senior-need">may need a human filter.</div>
            </div>
            <div className="ab-senior-row">
              <div className="ab-senior-trigger">A client conversation</div>
              <div className="ab-senior-arrow"><svg viewBox="0 0 24 24">
                <use href="#impulse-arrow" />
              </svg></div>
              <div className="ab-senior-need">may need more honesty than polish.</div>
            </div>
          </div>

          <div className="ab-senior-foot">
            <p>That is why senior thinking stays close.</p>
            <p className="loud">Not to slow the work down. <em>To keep it pointed in the right direction.</em></p>
          </div>
        </div>
      </section>

      {/* ============================================================
         8. FOUNDERS — cinematic full-bleed.
         The transparent PNGs are cutouts already. The portraits
         now sit against the Impulse brand mark instead of the
         previous circular backdrop.
         ============================================================ */}
      <section className="ab-section ab-founders" id="founders">
        <div className="ab-wrap-full">
          <div className="ab-founders-intro">
            <h2 className="ab-founders-h split-text">Built by people who refuse to <em>simply continue.</em></h2>
          </div>
        </div>

        {/* ADWAIT — portrait left, copy right */}
        <article className="ab-founder-section" data-side="left">
          <span className="ab-founder-ghost-name" aria-hidden="true">ADWAIT</span>

          <div className="ab-founder-grid">
            <div className="ab-founder-portrait-wrap">
              <div className="ab-founder-portrait-mark" aria-hidden="true">
                <svg viewBox="801 344 274 272">
                  <path className="ab-mark-glow ab-mark-glow-outer"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                  <path className="ab-mark-glow ab-mark-glow-mid"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                  <path className="ab-mark-glow ab-mark-glow-inner"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                  <path className="ab-mark-fill"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                </svg>
              </div>
              <div className="ab-founder-portrait" data-portrait>
                <img src={`${import.meta.env.BASE_URL}images/About%20Us/Adwait-cutout-v2.png`} alt="Adwait Joshi - Founder and CEO of Impulse Digital Marketing Agency" />
              </div>
            </div>
            <div className="ab-founder-copy-wrap">
              <h3 className="ab-founder-name">Adwait Joshi</h3>
              <p className="ab-founder-headline">Restless by design, particular by habit.</p>
              <p className="ab-founder-body">Somewhere between simplifying what&rsquo;s complicated, complicating what&rsquo;s
                too simple, and informally holding titles like fixer of things, questioner of norms, and quiet instigator
                at Impulse Digital.</p>
            </div>
          </div>
        </article>

        {/* ABHISHEK — portrait right, copy left */}
        <article className="ab-founder-section" data-side="right">
          <span className="ab-founder-ghost-name" aria-hidden="true">ABHISHEK</span>

          <div className="ab-founder-grid">
            <div className="ab-founder-portrait-wrap">
              <div className="ab-founder-portrait-mark" aria-hidden="true">
                <svg viewBox="801 344 274 272">
                  <path className="ab-mark-glow ab-mark-glow-outer"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                  <path className="ab-mark-glow ab-mark-glow-mid"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                  <path className="ab-mark-glow ab-mark-glow-inner"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                  <path className="ab-mark-fill"
                    d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                </svg>
              </div>
              <div className="ab-founder-portrait" data-portrait>
                <img src={`${import.meta.env.BASE_URL}images/About%20Us/Abhishek-cutout-v2.png`} alt="Abhishek Arekar - Co-Founder of Impulse Digital Marketing Agency" />
              </div>
            </div>
            <div className="ab-founder-copy-wrap">
              <h3 className="ab-founder-name">Abhishek Arekar</h3>
              <p className="ab-founder-headline">The kind of person who can read a dashboard, a room, and a poorly explained
                problem with the same unsettling accuracy.</p>
              <p className="ab-founder-body">Somewhere in the background of every smooth process, sharper insight, and better
                decision at Impulse Digital.</p>
            </div>
          </div>
        </article>
      </section>

      {/* ============================================================
         9. FIT
         ============================================================ */}
      <section className="ab-section ab-fit">
        <div className="ab-wrap-full">

          <div className="ab-fit-head">
            <h2 className="ab-fit-h split-text">Built for brands that <em
              style={{ fontStyle: "italic", fontWeight: 300, color: "var(--impulse-violet)" }}>expect more.</em></h2>
          </div>

          <div className="ab-fit-split">
            <div className="ab-fit-pane warn">
              <p>We are not the right fit for teams looking for a vendor to simply fulfil briefs.</p>
            </div>
            <div className="ab-fit-pane yes">
              <p>Brands that want a partner who can think with them, build with them, challenge weak assumptions, and
                reduce the weight marketing places on their internal team.</p>
            </div>
          </div>

          <p className="ab-clarity-h-sub" style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto 4rem" }}>The size of the
            brand matters less than the appetite behind it.</p>

          <div className="ab-fit-attrs">
            <div className="ab-fit-attr">A sharper question.</div>
            <div className="ab-fit-attr">A higher standard.</div>
            <div className="ab-fit-attr">A willingness to improve.</div>
            <div className="ab-fit-attr">A need for marketing to move the business, not just fill the calendar.</div>
          </div>

          <p className="ab-fit-close">That is where Impulse fits best.</p>
        </div>
      </section>

      {/* ============================================================
        10. FINAL CTA
         ============================================================ */}
      <section className="ab-section ab-final glass-panel" id="connect">
        <div className="ab-final-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272">
            <use href="#impulse-mark" />
          </svg>
        </div>
        <div className="ab-final-inner">
          <div className="ab-wrap-narrow">
            <div className="ab-final-card">
              <div className="ab-final-stack">
                <div className="row">Move sharper.</div>
                <div className="row">Move together.</div>
                <div className="row">Move the business.</div>
              </div>
              <div className="ab-final-cta-row">
                <Link to="/contact-us/" className="btn" data-cursor="START">
                  <span className="btn-text">Start a conversation</span>
                  <div className="btn-fill"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>




    </main>
  );
};

export default AboutUs;
