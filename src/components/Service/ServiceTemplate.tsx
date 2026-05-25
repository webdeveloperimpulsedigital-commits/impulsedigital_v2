import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceHero from './ServiceHero';
import ServiceHandoff from './ServiceHandoff';
import Logos from '../Logos';
import Testimonials from '../Testimonials';
import Contact from '../Contact';
import { useServicePageBackground } from '../../hooks/useServicePageBackground';

const { ScrollTrigger } = window as any;

export const ServiceProblem: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;
    
    const triggers: any[] = [];
    
    const gapItems = document.querySelectorAll('.svc-problem-gaps li');
    if (gapItems.length) {
      gsap.set(gapItems, { opacity: 0, x: -16 });
      triggers.push(ScrollTrigger.create({
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
      }));
    }    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="svc-problem" id="warp-start">
      <div className="container">
        <div className="svc-problem-grid">
          <div>
            <h2 className="svc-h2 split-text" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: data.title }} />
          </div>
          <div className="svc-problem-body">
            {Array.isArray(data.intro) ? data.intro.map((p: string, i: number) => <p key={i}>{p}</p>) : <p>{data.intro}</p>}
            {data.pivot && <p className="pivot">{data.pivot}</p>}
            {data.gaps && data.gaps.length > 0 && (
              <ul className="svc-problem-gaps">
                {data.gaps.map((gap: string, i: number) => (
                  <li key={i}>
                    {data.gapIconSvg !== 'none' && (
                      <span className="gap-mark">
                        {data.gapIconSvg ? (
                          <svg viewBox={data.gapIconViewBox || "0 0 24 24"} dangerouslySetInnerHTML={{ __html: data.gapIconSvg }} />
                        ) : (
                          <svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg>
                        )}
                      </span>
                    )}
                    <span className="gap-text">{gap}</span>
                  </li>
                ))}
              </ul>
            )}
            {data.outro && data.outro.map((p: any, i: number) => 
              typeof p === 'string' 
                ? <p key={i} dangerouslySetInnerHTML={{ __html: p }} /> 
                : <p key={i} className={p.className} dangerouslySetInnerHTML={{ __html: p.text }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceLargeText: React.FC<{ data: any }> = ({ data }) => (
  <section className="svc-section glass-panel">
    <div className="container">
      <h2 className="svc-h2 split-text" style={{ marginBottom: '2.5rem' }} dangerouslySetInnerHTML={{ __html: data.title }} />
      <p className="split-text" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.3rem)', maxWidth: '860px', marginBottom: '3rem', opacity: 0.8 }} dangerouslySetInnerHTML={{ __html: data.intro }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
        {data.lines.map((line: string, i: number) => (
          <p key={i} className="split-text" style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.8rem)', fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.2 }}>{line}</p>
        ))}
      </div>
      <p className="split-text" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.3rem)', color: 'var(--impulse-violet)', fontStyle: 'italic' }}>{data.outro}</p>
    </div>
  </section>
);

export const ServiceVs: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const { gsap } = window as any;
    const vsSection = document.querySelector('.plain-english-section');
    const timers: number[] = [];
    let observer: IntersectionObserver | null = null;

    if (vsSection) {
      const showFinalState = () => {
        vsSection.classList.add('is-copy-visible', 'is-struck', 'is-highlighted');
      };

      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !('IntersectionObserver' in window)
      ) {
        showFinalState();
      } else {
        observer = new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;

          vsSection.classList.add('is-copy-visible');
          timers.push(window.setTimeout(() => vsSection.classList.add('is-struck'), 725));
          timers.push(window.setTimeout(() => vsSection.classList.add('is-highlighted'), 2145));
          observer?.disconnect();
        }, {
          rootMargin: '0px 0px -18%',
          threshold: 0.2,
        });
        observer.observe(vsSection);
      }
    }

    const vsSteps = document.querySelectorAll('.svc-vs-step');
    if (gsap && ScrollTrigger && vsSteps.length) {
      gsap.set(vsSteps, { opacity: 0, x: -16 });
      ScrollTrigger.create({
        trigger: '.svc-vs-pipeline',
        start: 'top 65%',
        once: true,
        onEnter: () => {
          vsSteps.forEach((step, i) => {
            gsap.to(step, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: i * 0.22,
              ease: 'power3.out',
              onStart: () => {
                setTimeout(() => step.classList.add('lit'), 250);
              }
            });
          });
        }
      });
    }

    return () => {
      observer?.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section className="svc-vs plain-english-section">
      <div className="container">
        <h2 className="svc-h2 split-text" style={{ fontSize: 'clamp(2rem, 3.2vw, 3.8rem)' }}>{data.title}</h2>
        <div className="svc-vs-stack">
          <div className="svc-vs-line plain-english-copy line-quiet">
            <div className="svc-vs-label">{data.leftLabel}</div>
            <div className="svc-vs-statement">
              <span className="plain-english-mark plain-english-mark--strike svc-vs-strike">{data.leftStrike}</span>
            </div>
          </div>
          <div className="svc-vs-line plain-english-copy">
            <div className="svc-vs-label">{data.rightLabel}</div>
            <div className="svc-vs-statement-loud">
              <span dangerouslySetInnerHTML={{ __html: data.rightText }} /><span className="plain-english-mark plain-english-mark--highlight svc-vs-highlight" dangerouslySetInnerHTML={{ __html: data.rightHighlight }} />.
            </div>
          </div>
          {data.steps && data.steps.length > 0 && (
            <div className="svc-vs-pipeline">
              {data.steps.map((step: any, i: number) => (
                <div className="svc-vs-step" key={i}>
                  <div className="step-marker"><span className="step-dot"></span></div>
                  <div className="step-content">
                    <span className="step-num">{step.num}</span>
                    <span className="step-label" dangerouslySetInnerHTML={{ __html: step.text }} />
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="svc-vs-closing" dangerouslySetInnerHTML={{ __html: data.closing }} />
        </div>
      </div>
    </section>
  );
};

export const ServiceUses: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const { gsap } = window as any;
    if (!gsap || !ScrollTrigger) return;
    const useCards = document.querySelectorAll('.svc-use-card');
    if (useCards.length) {
      gsap.set(useCards, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: '.svc-uses-grid',
        start: 'top 65%',
        once: true,
        onEnter: () => {
          gsap.to(useCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out'
          });
        }
      });
    }
  }, []);

  return (
    <section className="svc-uses glass-panel" id="use-cases">
      <div className="container">
        <h2 className="svc-h2 split-text" dangerouslySetInnerHTML={{ __html: data.title }} />
        <div className="svc-uses-grid">
          {data.cards.map((card: any, i: number) => (
            <div className="svc-use-card" data-cursor={card.link ? "VIEW" : "DEFAULT"} key={i}>
              <div className="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
              <h3 className="svc-use-title">{card.title}</h3>
              <p className="svc-use-body">{card.body}</p>
              <div className="svc-use-outcome" dangerouslySetInnerHTML={{ __html: card.outcome }} />
              {card.link && (
                <div style={{ marginTop: '2rem' }}>
                  <Link to={card.link} className="btn" data-cursor="VIEW">
                    <span className="btn-text">Know More</span>
                    <div className="btn-fill"></div>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiceWhenToUse: React.FC<{ data: any }> = ({ data }) => (
  <section className={`svc-section glass-panel ${data.customClass || ''}`}>
    <div className="container">
      <div className="svc-systems-grid">
        <div className="svc-systems-intro">
          <h2 className="svc-h2 split-text" style={{ marginBottom: '2.5rem' }} dangerouslySetInnerHTML={{ __html: data.title }} />
          {data.paragraphs && data.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
          {data.closer && <p className="closer">{data.closer}</p>}
        </div>
        <div>
          {data.pillsHeading && <p style={{ fontSize: '0.75rem', color: 'var(--impulse-violet)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{data.pillsHeading}</p>}
          <div className="svc-systems-pills">
            {data.pills && data.pills.map((pill: any, i: number) => (
              <div className="svc-system-pill" key={i}>
                {typeof pill === 'string' ? pill : (
                  <>
                    <strong>{pill.label}</strong>
                    <span>{pill.desc}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {data.punchline && (
        <h3 className="svc-guard-punchline">
          <span className="svc-guard-punchline-line"><span className="inner">{data.punchline[0]}</span></span>
          <span className="svc-guard-punchline-line"><span className="inner accent" style={{ color: 'var(--impulse-violet)' }}>{data.punchline[1]}</span></span>
        </h3>
      )}
    </div>
  </section>
);

export const ServiceGuardrails: React.FC<{ data: any }> = ({ data }) => (
  <section className="svc-guardrails">
    <div className="container">
      <h2 className="svc-h2 split-text" dangerouslySetInnerHTML={{ __html: data.title }} />
      <div className="svc-guard-intro">
        {typeof data.intro === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: data.intro }} />
        ) : (
          <p>{data.intro}</p>
        )}
      </div>
      <div className="svc-guard-list">
        {data.rows.map((row: any, i: number) => (
          <div className="svc-guard-row" key={i}>
            <span className="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div className="svc-guard-title">{row.title}</div>
            <div className="svc-guard-desc">{row.desc}</div>
          </div>
        ))}
      </div>
        <h3 className="svc-guard-punchline">
          <span className="svc-guard-punchline-line" style={data.punchlineLine1Style}><span className="inner" dangerouslySetInnerHTML={{ __html: data.punchlineLine1 }} /></span>
          <span className="svc-guard-punchline-line" style={data.punchlineLine2Style}><span className="inner accent" style={{ color: 'var(--impulse-violet)' }} dangerouslySetInnerHTML={{ __html: data.punchlineLine2 }} /></span>
          {data.punchlineLine3 && (
            <span className="svc-guard-punchline-line" style={data.punchlineLine3Style}><span className="inner accent" style={{ color: 'var(--impulse-violet)' }} dangerouslySetInnerHTML={{ __html: data.punchlineLine3 }} /></span>
          )}
        </h3>
    </div>
  </section>
);

export const ServiceProcess: React.FC<{ data: any }> = ({ data }) => {
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;
    
    const ctx = gsap.context(() => {
      // Animate text fill
      const textFills = gsap.utils.toArray('.scrub-container .text-fill');
      textFills.forEach((fill: any) => {
        gsap.to(fill, {
          backgroundPositionX: '0%', ease: 'none',
          scrollTrigger: { trigger: fill, scrub: 1, start: 'top 80%', end: 'top 20%' }
        });
      });

      // Animate the text reveal
      const items = gsap.utils.toArray('.scrub-item');
      items.forEach((item: any) => {
        const path = item.querySelector('.service-mark-svg-path') as SVGPathElement;
        const numEl = item.querySelector('.service-num');
        const titleEl = item.querySelector('.scrub-title');
        const descEl = item.querySelector('.scrub-desc');

        if (!numEl) return;

        if (path) {
          const pathLen = path.getTotalLength();
          gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
        }

        gsap.set([numEl, titleEl], { opacity: 0, y: 28 });
        gsap.set(descEl, { opacity: 0, y: 28 });

        ScrollTrigger.create({
          trigger: item,
          start: 'top 76%',
          once: true,
          onEnter: () => {
            const tl = gsap.timeline();
            tl.to(titleEl, {
                  opacity: 1, y: 0,
                  duration: 0.55,
                  ease: 'power3.out'
              })
              .to(descEl, {
                  opacity: 0.8, y: 0,
                  duration: 0.5,
                  ease: 'power3.out'
              }, '-=0.32')
              .to(numEl, {
                  opacity: 1, y: 0,
                  duration: 0.45,
                  ease: 'power3.out'
              }, '-=0.3');
              
            if (path) {
              tl.to(path, {
                  strokeDashoffset: 0,
                  duration: 1.15,
                  ease: 'power2.inOut'
              }, '+=0.2');
            }
          }
        });
      });

      setTimeout(() => { if (ScrollTrigger) ScrollTrigger.refresh(); }, 500);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services glass-panel" id="process" ref={sectionRef}>
      <div className="container">
        <h2 className="section-heading split-text">{data.title}</h2>
        <div className="scrub-container">
          {data.steps.map((step: any, i: number) => (
            <div className="scrub-item" key={i}>
              <div className="scrub-left">
                <div className="service-mark-draw" aria-hidden="true">
                  <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path className="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="service-num">{step.num}</span>
              </div>
              <div className="scrub-right">
                <h3 className="scrub-title text-fill" data-text={step.title}>{step.title}</h3>
                <p className="scrub-desc" dangerouslySetInnerHTML={{ __html: step.desc }} />
              </div>
            </div>
          ))}
        </div>
        {data.footer && (
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '5rem auto 0', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {data.footer.split('\n\n').map((p: string, i: number) => (
              <p key={i} style={
                i === 0 
                  ? { fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--soft-grey)', marginBottom: '1rem', opacity: 0.85 }
                  : { fontSize: '1.4rem', lineHeight: 1.5, color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 600 }
              }>{p}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export const ServiceFit: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const { gsap } = window as any;
    if (!gsap || !ScrollTrigger) return;
    const fitItems = document.querySelectorAll('.svc-fit-list li');
    if (fitItems.length) {
      gsap.set(fitItems, { opacity: 0, x: -12 });
      ScrollTrigger.create({
        trigger: '.svc-fit-list',
        start: 'top 65%',
        once: true,
        onEnter: () => {
          gsap.to(fitItems, {
            opacity: 1, x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
          });
        }
      });
    }
  }, []);

  return (
    <section className="svc-fit">
      <div className="container">
        <div className="svc-fit-grid">
          <div>
            <h2 className="svc-h2 split-text" dangerouslySetInnerHTML={{ __html: data.title }} />
            {data.closer && <p className="svc-fit-closer">{data.closer}</p>}
          </div>
          <ul className="svc-fit-list">
            {data.list.map((item: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export const ServiceFinalCTA: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;
    const finalMarkPath = document.querySelector('.svc-final-cta-path') as SVGPathElement;
    if (finalMarkPath) {
      const finalLen = finalMarkPath.getTotalLength();
      gsap.set(finalMarkPath, {
        strokeDasharray: finalLen,
        strokeDashoffset: finalLen
      });
      ScrollTrigger.create({
        trigger: '.svc-final-cta',
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.to(finalMarkPath, {
            strokeDashoffset: 0,
            duration: 3.2,
            ease: 'power2.inOut'
          });
        }
      });
    }
  }, []);

  return (
    <section className="svc-final-cta glass-panel">
      <div className="svc-final-cta-mark" aria-hidden="true">
        <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
          <path className="svc-final-cta-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" />
        </svg>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .svc-final-cta {
            padding: 3rem 0 3rem !important;
          }
          .svc-final-cta h2 {
            font-size: 2.2rem !important;
            margin-bottom: 1.2rem !important;
          }
          .svc-final-cta-body {
            font-size: 0.95rem !important;
            margin-bottom: 2rem !important;
          }
          .svc-final-cta-mark {
            width: 95vw !important;
            height: 95vw !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
            transform-origin: center !important;
          }
        }
      `}</style>
      <div className="container">
        {(data.headingFontSize || data.headingLineHeight) && <style>{`.svc-final-cta .svc-final-cta-heading { ${data.headingFontSize ? `font-size: ${data.headingFontSize} !important;` : ''} ${data.headingLineHeight ? `line-height: ${data.headingLineHeight} !important;` : ''} }`}</style>}
        <h2 className="split-text svc-final-cta-heading" dangerouslySetInnerHTML={{ __html: data.titleParts ? `${data.titleParts[0]}<span style="color: var(--impulse-violet);">${data.accent}</span>` : data.title || '' }} />
        <p className="svc-final-cta-body">{data.body}</p>
        <div className="svc-final-cta-actions">
          {(data.buttons || []).map((btn: any, i: number) => (
            <a key={i} href={btn.link || btn.url || '#'} className={`btn ${btn.primary ? 'btn-primary' : ''}`} data-cursor={btn.cursor || 'START'}>
              <span className="btn-text" dangerouslySetInnerHTML={{ __html: btn.text }} />
              <div className="btn-fill"></div>
            </a>
          ))}
          {!data.buttons && data.btnText && (
            <a href={data.btnUrl || '#'} className="btn btn-primary" data-cursor="START">
              <span className="btn-text">{data.btnText}</span>
              <div className="btn-fill"></div>
            </a>
          )}
        </div>
        <p className="svc-final-cta-footnote">{data.footnote}</p>
      </div>
    </section>
  );
};

export const ServiceTextList: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;
    
    // We scope the query to this specific component instance if possible, 
    // but a unique class or specific selector is better. We'll rely on ScrollTrigger batching or simple fromTo.
    const listItems = document.querySelectorAll('.svc-text-list-wrapper .svc-fit-list li');
    if (listItems.length) {
      gsap.set(listItems, { opacity: 0, x: -12 });
      ScrollTrigger.create({
        trigger: '.svc-text-list-wrapper',
        start: 'top 65%',
        once: true,
        onEnter: () => {
          gsap.to(listItems, {
            opacity: 1, x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
          });
        }
      });
    }
  }, []);

  return (
    <section className="svc-fit svc-text-list-wrapper">
      <div className="container">
        <div className="svc-fit-grid">
          <div>
            <h2 className="svc-h2 split-text" dangerouslySetInnerHTML={{ __html: data.title }} />
            {data.intro && data.intro.split('\n').map((p: string, i: number) => (
              <p key={i} style={{ color: 'var(--impulse-violet)', fontWeight: 600, marginTop: i === 0 ? '1rem' : '0.5rem', fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
          </div>
          <div>
            <ul className="svc-fit-list">
              {data.list.map((item: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
            {data.outro && (
              <div className="svc-fit-closer" style={{ marginTop: '3rem' }}>
                {data.outro.split('\n').map((p: string, i: number) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceFAQ: React.FC<{ data: any }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setTimeout(() => { 
      const { ScrollTrigger } = window as any;
      if (ScrollTrigger) ScrollTrigger.refresh(); 
    }, 350);
  };

  return (
    <section className="faq glass-panel" id="faq">
      <div className="container">
        <h2 className="section-heading split-text">{data.title}</h2>
        <div className="accordion">
          {data.items.map((item: any, i: number) => {
            const isActive = activeIndex === i;
            return (
              <div className={`acc-item ${isActive ? 'active' : ''}`} key={i}>
                <div 
                  className="acc-header" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleAccordion(i)}
                >
                  <h3>{item.q}</h3>
                  <span className="acc-icon" style={{ transform: isActive ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                </div>
                <div 
                  className="acc-content" 
                  style={{ 
                    maxHeight: isActive ? '1000px' : '0px', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.4s ease' 
                  }}
                >
                  <p dangerouslySetInnerHTML={{ __html: item.a }}></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ServiceStats: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;

    // Stats reveal sequence
    const statsGrid = document.querySelector('.svc-stats-grid');
    const statsCols = document.querySelectorAll('.svc-stat');
    if (statsGrid && statsCols.length) {
      gsap.set(statsCols, { opacity: 0, y: 32 });
      ScrollTrigger.create({
        trigger: statsGrid,
        start: 'top 55%',
        once: true,
        onEnter: () => {
          gsap.to(statsCols, {
            opacity: 1, y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
          });
        }
      });
    }

    // Stat counters
    document.querySelectorAll('[data-stat-target]').forEach((el) => {
      const target = parseFloat(el.getAttribute('data-stat-target') || '0');
      const suffix = el.getAttribute('data-stat-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-stat-decimals') || '0', 10);
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const proxy = { v: 0 };
          gsap.to(proxy, {
            v: target,
            duration: 2.0,
            ease: 'power3.out',
            onUpdate: () => {
              const val = decimals > 0 ? proxy.v.toFixed(decimals) : Math.round(proxy.v).toLocaleString();
              el.textContent = val + suffix;
            }
          });
          obs.unobserve(el);
        });
      }, { threshold: 0.4 });
      obs.observe(el);
    });
  }, []);

  return (
    <section className="svc-stats" id="warp-start">
      <div className="container">
        <h2 className="svc-h2 split-text" dangerouslySetInnerHTML={{ __html: data.title }} />
        <div className="svc-stats-grid">
          {data.metrics.map((stat: any, i: number) => (
            <div className="svc-stat" key={i}>
              <div className="svc-stat-mark mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
              <div className="svc-stat-number" data-stat-target={stat.target} data-stat-suffix={stat.suffix} data-stat-decimals={stat.decimals}>0</div>
              <p className="svc-stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
        <p className="svc-stats-footnote">{data.footnote}</p>
      </div>
    </section>
  );
};

export const ServiceTemplate: React.FC<{ data: any }> = ({ data }) => {
  useServicePageBackground();

  useEffect(() => {
    const { gsap, ScrollTrigger, SplitType } = window as any;
    if (gsap && ScrollTrigger && SplitType) {
      setTimeout(() => {
        const splitTexts = document.querySelectorAll('.split-text:not(.initialized)');
        splitTexts.forEach(text => {
          text.classList.add('initialized');
          const split = new SplitType(text as HTMLElement, { types: 'lines, words' });
          if (split.lines) {
            split.lines.forEach((line: HTMLElement) => {
              const wrapper = document.createElement('div');
              wrapper.classList.add('line-wrapper');
              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);
            });
          }
          gsap.fromTo(split.words,
            { yPercent: 120, opacity: 0 },
            {
              scrollTrigger: { trigger: text, start: 'top 75%', toggleActions: 'play none none reverse' },
              yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
            }
          );
        });
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [data]);

  return (
    <main id="main-content">
      {data.seo && (
        <Helmet>
          <title>{data.seo.title}</title>
          <meta name="description" content={data.seo.description} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={data.seo.canonical} />
          <meta property="og:title" content={data.seo.title} />
          <meta property="og:description" content={data.seo.description} />
          <meta property="og:url" content={data.seo.canonical} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Impulse Digital" />
          <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
        </Helmet>
      )}
      <ServiceHero 
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />
      <ServiceHandoff />

      {data.stats && (
        <>
          <ServiceStats data={data.stats} />
          <ServiceHandoff />
        </>
      )}

      {data.problem && (
        <>
          <ServiceProblem data={data.problem} />
          <ServiceHandoff />
        </>
      )}

      {data.largeTextSection && (
        <>
          <ServiceLargeText data={data.largeTextSection} />
          <ServiceHandoff />
        </>
      )}

      {data.vs && (
        <>
          <ServiceVs data={data.vs} />
          <ServiceHandoff />
        </>
      )}

      {data.uses && (
        <>
          <ServiceUses data={data.uses} />
          <ServiceHandoff />
        </>
      )}

      {data.whenToUse && !data.whenToUseAfterGuardrails && (
        <>
          <ServiceWhenToUse data={data.whenToUse} />
          <ServiceHandoff />
        </>
      )}

      {data.guardrails && (
        <>
          <ServiceGuardrails data={data.guardrails} />
          <ServiceHandoff />
        </>
      )}

      {data.whenToUse && data.whenToUseAfterGuardrails && (
        <>
          <ServiceWhenToUse data={data.whenToUse} />
          <ServiceHandoff />
        </>
      )}

      {data.process && (
        <>
          <ServiceProcess data={data.process} />
        </>
      )}
      
      <Logos title={data.logosTitle} />
      <ServiceHandoff />

      {data.fit && (
        <>
          <ServiceFit data={data.fit} />
          <ServiceHandoff />
        </>
      )}

      {data.finalCta && (
        <ServiceFinalCTA data={data.finalCta} />
      )}

      <Testimonials />
      
      {data.contactTitle && (
        <Contact title={data.contactTitle} />
      )}

      {data.faq && (
        <ServiceFAQ data={data.faq} />
      )}
    </main>
  );
};
