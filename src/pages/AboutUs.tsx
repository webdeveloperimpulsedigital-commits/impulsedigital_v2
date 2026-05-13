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

      {/* Section 1: Maintenance */}
      <section className="svc-channels">
        <div className="container">
          <h2 className="svc-h2 split-text">Marketing becomes maintenance quietly.</h2>
          <p className="svc-channels-intro" style={{ marginBottom: '4rem' }}>It rarely fails all at once. The calendar keeps moving. Campaigns keep launching. Reports keep getting made. Meetings keep happening. But somewhere along the way, the work starts needing more explanation than it creates movement. Leadership starts asking harder questions.</p>

          <div className="svc-channels-stage" id="channels-stage" style={{ minHeight: '400px', marginBottom: '2rem' }}>
            <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
            <div className="svc-channels-center" aria-hidden="true">
              <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="svc-channels-orbit">
              <span className="svc-channel-chip" style={{ left: '15%', top: '25%', padding: '1rem 1.5rem', fontSize: '1.05rem', width: '260px', whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.4 }}>"What is this doing for the brand?"</span>
              <span className="svc-channel-chip" style={{ left: '85%', top: '25%', padding: '1rem 1.5rem', fontSize: '1.05rem', width: '260px', whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.4 }}>"What is this building over time?"</span>
              <span className="svc-channel-chip" style={{ left: '15%', top: '75%', padding: '1rem 1.5rem', fontSize: '1.05rem', width: '260px', whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.4 }}>"What is this helping us decide?"</span>
              <span className="svc-channel-chip" style={{ left: '85%', top: '75%', padding: '1rem 1.5rem', fontSize: '1.05rem', width: '260px', whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.4 }}>"What is this moving for the business?"</span>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.5rem', color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>That is the drift Impulse exists to resist.</p>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 2: Appetite */}
      <section className="svc-section glass-panel">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="svc-h2 split-text" style={{ marginBottom: '3rem' }}>Appetite is not size.<br />It is willingness.</h2>

          <div className="archer-pill-cluster" style={{ justifyContent: 'center', marginBottom: '3rem', gap: '1rem' }}>
            <span className="archer-pill" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>A startup can have it</span>
            <span className="archer-pill" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>A legacy business can have it</span>
            <span className="archer-pill" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>A conglomerate can have it</span>
            <span className="archer-pill" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>A founder-led company can have it</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem', color: 'var(--soft-grey)', lineHeight: 1.6, textAlign: 'center' }}>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>Appetite is the willingness to move, question, improve, experiment, challenge default thinking, and expect more from marketing.</p>

            <div style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', marginTop: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div className="svc-use-corner"><svg viewBox="801 344 274 272" style={{ opacity: 0.15 }}><use href="#impulse-mark" /></svg></div>
              <p style={{ color: 'var(--white)', fontWeight: 600, fontSize: '1.6rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>That is who we work best with.</p>
              <p style={{ fontSize: '1.15rem' }}>Brands that do not want marketing to simply continue.<br />Brands that want it to create momentum.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 3: Formation */}
      <section className="svc-section">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="svc-h2 split-text" style={{ marginBottom: '2rem' }}>Teams go further<br />in formation.</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '1.5rem' }}>A brand rarely moves because one channel performs in isolation.</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '1.5rem' }}>Momentum is built when the thinking, the story, the search presence, the media, the website, the data, the technology, and the execution pull in the same direction.</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.6, marginBottom: '1.5rem' }}>That is why we do not treat strategy as a document and execution as a handoff.</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6 }}>The work has to move together.<br />Otherwise, it becomes activity.</p>
            </div>
            <div style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', borderRadius: '24px', padding: '3rem', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
              <div className="svc-use-corner"><svg viewBox="801 344 274 272" style={{ opacity: 0.2 }}><use href="#impulse-mark" /></svg></div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Less chasing.<br />More clarity.</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--soft-grey)' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', marginTop: '4px', fontSize: '1.2rem' }}>→</span> <span style={{ lineHeight: 1.6 }}>You get fewer loose ends, fewer avoidable calls, and fewer rounds caused by unclear thinking.</span></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', marginTop: '4px', fontSize: '1.2rem' }}>→</span> <span style={{ lineHeight: 1.6 }}>You get strategy before the work, not as a post-rationalisation after the work is questioned.</span></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', marginTop: '4px', fontSize: '1.2rem' }}>→</span> <span style={{ lineHeight: 1.6 }}>You get content, campaigns, websites, search systems, and AI workflows built to perform, not just exist.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 4: Service vs Story */}
      <section className="svc-section glass-panel">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="svc-h2 split-text" style={{ marginBottom: '1.5rem' }}>The service is not the story.<br />The movement is.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--soft-grey)' }}>Used separately, these can become tasks.</p>
            <p style={{ fontSize: '1.4rem', color: 'var(--white)', fontWeight: 600, marginTop: '0.5rem' }}>Used with intent, they become momentum.</p>
          </div>

          <div className="archer-split" style={{ alignItems: 'flex-start' }}>
            <div className="archer-split-side">
              <div className="archer-split-label">The Services</div>
              <div className="archer-pill-cluster">
                <span className="archer-pill">Brand Strategy</span>
                <span className="archer-pill">Content</span>
                <span className="archer-pill">Search</span>
                <span className="archer-pill">Performance</span>
                <span className="archer-pill">Social Media</span>
                <span className="archer-pill">Websites</span>
                <span className="archer-pill">Analytics</span>
                <span className="archer-pill">AI Integration</span>
              </div>
            </div>
            <div className="archer-split-divider" aria-hidden="true" style={{ height: 'auto', alignSelf: 'stretch' }}></div>
            <div className="archer-split-side">
              <div className="archer-split-label">The Momentum</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--soft-grey)', fontSize: '1.05rem', lineHeight: 1.5 }}>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>Brand Strategy</span> gives the work a commercial foundation.</p>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>Content</span> builds authority, not just output.</p>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>Search</span> compounds visibility that the brand owns.</p>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>Performance</span> makes spend more accountable.</p>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>Social Media</span> builds relevance, not just a posting rhythm.</p>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>Websites</span> become the place where intent either lands or leaks.</p>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>Analytics</span> turns data into clearer decisions.</p>
                <p><span style={{ color: 'var(--white)', fontWeight: 500 }}>AI</span> makes the work faster, sharper, and more scalable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 5: Senior Thinking */}
      <section className="svc-section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="svc-h2 split-text" style={{ marginBottom: '2rem' }}>Senior thinking stays close to the work.</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '3rem' }}>Impulse is not built on the idea that strategy happens once and execution figures itself out.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            <span className="archer-pill" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.1)' }}>A campaign may need a sharper thought.</span>
            <span className="archer-pill" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.1)' }}>A website may need a clearer path.</span>
            <span className="archer-pill" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.1)' }}>A search strategy may need stronger commercial context.</span>
            <span className="archer-pill" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.1)' }}>An AI workflow may need a human filter.</span>
            <span className="archer-pill" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.1)' }}>A client conversation may need more honesty than polish.</span>
          </div>

          <div style={{ background: 'var(--accent)', color: 'var(--bg-dark)', padding: '2rem', borderRadius: '16px', display: 'inline-block' }}>
            <p style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>That is why senior thinking stays close.</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 500, opacity: 0.9 }}>Not to slow the work down. To keep it pointed in the right direction.</p>
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 6: Founders */}
      <section className="svc-uses glass-panel" id="leadership">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="svc-h2 split-text" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Leadership</h2>
          <div className="svc-uses-grid">
            
            {/* Founder 1 */}
            <div className="svc-use-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
              <img src={`${import.meta.env.BASE_URL}images/Sairam Krishnamurthy.png`} alt="Founder 1" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '2px solid rgba(255,255,255,0.1)' }} />
              <h3 className="svc-use-title">Founder 1 Name</h3>
              <div className="svc-use-outcome" style={{ marginTop: 0, marginBottom: '1rem', alignSelf: 'flex-start' }}>Co-Founder</div>
              <p className="svc-use-body" style={{ marginTop: 0 }}>Insert separate founder bio here. Describe their strategic vision, their background, and how they contribute to the momentum of the brands they work with.</p>
            </div>
            
            {/* Founder 2 */}
            <div className="svc-use-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
              <img src={`${import.meta.env.BASE_URL}images/Pratik Shetty.png`} alt="Founder 2" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '2px solid rgba(255,255,255,0.1)' }} />
              <h3 className="svc-use-title">Founder 2 Name</h3>
              <div className="svc-use-outcome" style={{ marginTop: 0, marginBottom: '1rem', alignSelf: 'flex-start' }}>Co-Founder</div>
              <p className="svc-use-body" style={{ marginTop: 0 }}>Insert separate founder bio here. Describe their operational expertise, creative leadership, and how they ensure execution meets the high standards of the agency.</p>
            </div>
            
          </div>
        </div>
      </section>

      <ServiceHandoff />

      {/* Section 7: Fit / CTA */}
      <section className="svc-section svc-final-cta glass-panel" style={{ padding: '8rem 0' }}>
        <div className="svc-final-cta-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
            <path className="svc-final-cta-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" />
          </svg>
        </div>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="svc-h2 split-text" style={{ marginBottom: '2rem' }}>Built for brands that expect more.</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--soft-grey)', lineHeight: 1.6, marginBottom: '1.5rem' }}>We are not the right fit for teams looking for a vendor to simply fulfil briefs.</p>
          <p style={{ fontSize: '1.15rem', color: 'var(--white)', lineHeight: 1.6, marginBottom: '3rem' }}>We work best with brands that want a partner who can think with them, build with them, challenge weak assumptions, and reduce the weight marketing places on their internal team.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <span style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: '30px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)' }}>A sharper question.</span>
            <span style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: '30px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)' }}>A higher standard.</span>
            <span style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: '30px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)' }}>A willingness to improve.</span>
          </div>

          <p style={{ fontSize: '1.25rem', color: 'var(--soft-grey)', marginBottom: '3rem' }}>A need for marketing to move the business, not just fill the calendar.<br /><span style={{ color: 'var(--white)' }}>That is where Impulse fits best.</span></p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '4rem', background: 'var(--accent)', color: 'var(--bg-dark)', padding: '3rem', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'rgba(0,0,0,0.6)' }}>Move sharper.</h3>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'rgba(0,0,0,0.8)' }}>Move together.</h3>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#000', marginTop: '0.5rem' }}>Move the business.</h3>
          </div>

          <a href="#connect" className="btn" data-cursor="HI">Start the conversation</a>
        </div>
      </section>

      <Contact title="Let's talk about<br>what your<br>brand needs." />
    </main>
  );
};

export default AboutUs;
