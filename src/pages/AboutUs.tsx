import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Contact from '../components/Contact';

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');

    const { gsap, ScrollTrigger } = window as any;

    // Final CTA SVG Animation
    if (gsap && ScrollTrigger) {
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

      // Leadership cards animation
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
    let measureFn: () => void = () => { };

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

        linesSvg.querySelectorAll('line').forEach((l: Element) => l.remove());
        chipPositions.forEach((p) => {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', String(p.x));
          line.setAttribute('y1', String(p.y));
          line.setAttribute('x2', String(p.tx));
          line.setAttribute('y2', String(p.ty));
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
        headlineParts={["About Impulse", " Digital"]}
        headlineAccent="Momentum for brands with appetite."
        description="The best brands are never truly still. They question what has become routine. They improve what is already working. They move before marketing turns into maintenance.<br><br>Impulse Digital helps such brands turn ambition into commercial momentum by bringing strategy, creativity, content, search, performance, technology, AI, and execution into formation."
        buttons={[
          { text: "Start the conversation", link: "#connect", cursor: "HI" },
          { text: "See how we think", link: "#cases-pin", cursor: "EXPLORE" }
        ]}
      />
      <ServiceHandoff />

      {/* Section 1: Maintenance - Manifesto Style */}
      <section style={{ padding: '12rem 0 8rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="split-text" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.05, marginBottom: '4rem', letterSpacing: '-0.02em', color: 'var(--white)' }}>
            Marketing becomes<br />maintenance quietly.
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div style={{ padding: '3.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px' }}>
              <p style={{ fontSize: '1.25rem', color: 'var(--soft-grey)', lineHeight: 1.7 }}>
                It rarely fails all at once. The calendar keeps moving. Campaigns keep launching. Reports keep getting made. Meetings keep happening.
              </p>
              <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)', margin: '2.5rem 0' }}></div>
              <p style={{ fontSize: '1.3rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.7 }}>
                But somewhere along the way, the work starts needing more explanation than it creates movement. Leadership starts asking harder questions.
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '3rem' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--white)', lineHeight: 1.2 }}>
                  That is the drift<br />
                  <span style={{ color: 'var(--accent)' }}>Impulse exists to resist.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(138, 92, 246, 0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1, pointerEvents: 'none' }}></div>
      </section>

      {/* Section 2: Appetite - High Contrast Statement */}
      <section style={{ padding: '8rem 0', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="split-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em', color: 'var(--white)' }}>
              Appetite is not size.<br /><span style={{ color: 'var(--impulse-violet)' }}>It is willingness.</span>
            </h2>
            
            <p style={{ fontSize: '1.4rem', color: 'var(--soft-grey)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '5rem' }}>
              Appetite is the willingness to move, question, improve, experiment, challenge default thinking, and expect more from marketing.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', width: '100%', marginBottom: '6rem' }}>
              {[
                { num: '01', title: 'A startup can have it' },
                { num: '02', title: 'A legacy business can have it' },
                { num: '03', title: 'A founder-led company can have it' }
              ].map(item => (
                <div key={item.num} style={{ padding: '3.5rem 2.5rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--accent)', marginBottom: '1.5rem', opacity: 0.8 }}>{item.num}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--white)' }}>{item.title}</h3>
                </div>
              ))}
            </div>

            <div style={{ width: '2px', height: '100px', background: 'linear-gradient(180deg, transparent, var(--accent), transparent)', margin: '0 auto 4rem auto' }}></div>

            <h3 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)' }}>That is who we work best with.</h3>
            <p style={{ fontSize: '1.25rem', color: 'var(--soft-grey)', marginTop: '1rem' }}>Brands that do not want marketing to simply continue. Brands that want it to create momentum.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Formation - Diagonal Staggered Layout */}
      <section style={{ padding: '10rem 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <h2 className="split-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--white)' }}>Teams go further<br />in formation.</h2>
              <div style={{ width: '60px', height: '4px', background: 'var(--accent)', marginBottom: '2.5rem' }}></div>
              <p style={{ fontSize: '1.2rem', color: 'var(--soft-grey)', lineHeight: 1.7, marginBottom: '1.5rem' }}>A brand rarely moves because one channel performs in isolation. Momentum is built when the thinking, the story, the search presence, the media, the website, the data, the technology, and the execution pull in the same direction.</p>
              <p style={{ fontSize: '1.2rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.7 }}>That is why we do not treat strategy as a document and execution as a handoff. The work has to move together. Otherwise, it becomes activity.</p>
            </div>
            
            <div style={{ order: 1, position: 'relative' }}>
              <div style={{ width: '120%', aspectRatio: '1/1', background: 'radial-gradient(circle at center, rgba(144, 98, 245, 0.15) 0%, transparent 70%)', position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', zIndex: -1 }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--impulse-violet)', borderRadius: '0 24px 24px 0', backdropFilter: 'blur(10px)' }}>
                  <p style={{ fontSize: '1.25rem', color: 'var(--white)', fontWeight: 600 }}>Less chasing. More clarity.</p>
                  <p style={{ fontSize: '1.05rem', color: 'var(--soft-grey)', marginTop: '0.8rem', lineHeight: 1.5 }}>You get fewer loose ends, fewer avoidable calls, and fewer rounds caused by unclear thinking.</p>
                </div>
                <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--impulse-violet)', borderRadius: '0 24px 24px 0', marginLeft: '3rem', backdropFilter: 'blur(10px)' }}>
                  <p style={{ fontSize: '1.25rem', color: 'var(--white)', fontWeight: 600 }}>Strategy before work.</p>
                  <p style={{ fontSize: '1.05rem', color: 'var(--soft-grey)', marginTop: '0.8rem', lineHeight: 1.5 }}>Not as a post-rationalisation after the work is questioned.</p>
                </div>
                <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--impulse-violet)', borderRadius: '0 24px 24px 0', marginLeft: '6rem', backdropFilter: 'blur(10px)' }}>
                  <p style={{ fontSize: '1.25rem', color: 'var(--white)', fontWeight: 600 }}>Built to perform.</p>
                  <p style={{ fontSize: '1.05rem', color: 'var(--soft-grey)', marginTop: '0.8rem', lineHeight: 1.5 }}>Content, campaigns, websites, search systems, and AI workflows built to perform, not just exist.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Momentum - White Bento Grid */}
      <section style={{ padding: '10rem 0', background: 'var(--white)', color: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 className="split-text" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>The service is not the story.<br />The movement is.</h2>
            <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>Used separately, these can become tasks. Used with intent, they become momentum.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', background: 'rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '32px', overflow: 'hidden' }}>
            {[
              { svc: 'Brand Strategy', desc: 'Gives the work a commercial foundation.' },
              { svc: 'Content', desc: 'Builds authority, not just output.' },
              { svc: 'Search', desc: 'Compounds visibility that the brand owns.' },
              { svc: 'Performance', desc: 'Makes spend more accountable.' },
              { svc: 'Social Media', desc: 'Builds relevance, not just a posting rhythm.' },
              { svc: 'Websites', desc: 'The place where intent either lands or leaks.' },
              { svc: 'Analytics', desc: 'Turns data into clearer decisions.' },
              { svc: 'AI Integration', desc: 'Makes the work faster, sharper, and more scalable.' }
            ].map(item => (
              <div key={item.svc} style={{ background: 'var(--white)', padding: '3.5rem 3rem', transition: 'all 0.3s ease' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--impulse-violet)', fontFamily: 'var(--font-heading)' }}>{item.svc}</h3>
                <p style={{ fontSize: '1.15rem', color: 'rgba(0,0,0,0.7)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Senior Thinking - Clean Typography Focus */}
      <section style={{ padding: '10rem 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="split-text" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--white)' }}>Senior thinking<br />stays close to the work.</h2>
          <p style={{ fontSize: '1.4rem', color: 'var(--soft-grey)', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>Impulse is not built on the idea that strategy happens once and execution figures itself out.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
            {[
              "A campaign may need a sharper thought.",
              "A website may need a clearer path.",
              "A search strategy may need stronger commercial context.",
              "An AI workflow may need a human filter.",
              "A client conversation may need more honesty than polish."
            ].map((text, i) => (
              <div key={i} style={{ padding: '1.5rem 3rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '1.2rem', color: 'var(--white)', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)' }}>
                {text}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '7rem', padding: '5rem', background: 'var(--accent)', color: '#000', borderRadius: '40px' }}>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '1rem' }}>That is why senior thinking stays close.</h3>
            <p style={{ fontSize: '1.3rem', fontWeight: 500, opacity: 0.8 }}>Not to slow the work down. To keep it pointed in the right direction.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Founders - Premium Profile Grid */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }} id="leadership">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="split-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', textAlign: 'center', marginBottom: '5rem', color: 'var(--white)' }}>Our Leadership</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            
            {/* Founder 1 */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '32px', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', padding: '8px', background: 'linear-gradient(135deg, var(--impulse-violet), var(--accent))', marginBottom: '2rem' }}>
                <img src={`${import.meta.env.BASE_URL}images/Sairam Krishnamurthy.png`} alt="Founder 1" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--white)', marginBottom: '0.5rem' }}>Founder 1 Name</h3>
              <div style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>Co-Founder</div>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6 }}>Insert separate founder bio here. Describe their strategic vision, their background, and how they contribute to the momentum of the brands they work with.</p>
            </div>
            
            {/* Founder 2 */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '32px', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', padding: '8px', background: 'linear-gradient(135deg, var(--impulse-violet), var(--accent))', marginBottom: '2rem' }}>
                <img src={`${import.meta.env.BASE_URL}images/Pratik Shetty.png`} alt="Founder 2" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--white)', marginBottom: '0.5rem' }}>Founder 2 Name</h3>
              <div style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>Co-Founder</div>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6 }}>Insert separate founder bio here. Describe their operational expertise, creative leadership, and how they ensure execution meets the high standards of the agency.</p>
            </div>
            
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 7: Fit / CTA */}
      <section className="svc-final-cta glass-panel">
        <div className="svc-final-cta-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
            <path className="svc-final-cta-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" />
          </svg>
        </div>
        <div className="container">
          <style>{`.svc-final-cta .svc-final-cta-heading { font-size: clamp(2.8rem, 5vw, 5.5rem) !important; line-height: 1.1 !important; }`}</style>
          <h2 className="split-text svc-final-cta-heading">
            Built for<br />brands that<br /><span style={{ color: 'var(--impulse-violet)' }}>expect more.</span>
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="svc-final-cta-body" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>We are not the right fit for teams looking for a vendor to simply fulfil briefs.</p>
            <p className="svc-final-cta-body" style={{ color: 'var(--white)', marginBottom: '3rem', textAlign: 'center' }}>We work best with brands that want a partner who can think with them, build with them, challenge weak assumptions, and reduce the weight marketing places on their internal team.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <span style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: '30px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)' }}>A sharper question.</span>
              <span style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: '30px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)' }}>A higher standard.</span>
              <span style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: '30px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)' }}>A willingness to improve.</span>
            </div>

            <p style={{ fontSize: '1.25rem', color: 'var(--soft-grey)', marginBottom: '3rem', textAlign: 'center' }}>A need for marketing to move the business, not just fill the calendar.<br /><span style={{ color: 'var(--white)' }}>That is where Impulse fits best.</span></p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '4rem', background: 'var(--accent)', color: 'var(--bg-dark)', padding: '3rem', borderRadius: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'rgba(0,0,0,0.6)' }}>Move sharper.</h3>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'rgba(0,0,0,0.8)' }}>Move together.</h3>
              <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#000', marginTop: '0.5rem' }}>Move the business.</h3>
            </div>
          </div>

          <div className="svc-final-cta-actions">
            <a href="#connect" className="btn" data-cursor="HI">
              <span className="btn-text">Start the conversation</span>
              <div className="btn-fill"></div>
            </a>
          </div>
        </div>
      </section>

      <Contact title="Let's talk about<br>what your<br>brand needs." />
    </main>
  );
};

export default AboutUs;
