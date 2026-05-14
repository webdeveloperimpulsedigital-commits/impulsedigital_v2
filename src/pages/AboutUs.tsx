import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import Contact from '../components/Contact';

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');

    const { gsap, ScrollTrigger } = window as any;

    if (gsap && ScrollTrigger) {
      gsap.utils.toArray('.animate-up').forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 60, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1.2, 
            ease: 'power3.out', 
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });
      
      gsap.to('.float-element', {
        y: -20,
        rotation: 2,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: 0.5
      });
    }

    return () => {
      document.body.classList.remove('service-page');
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

      <style>{`
        .stitch-ui {
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.08);
          --accent-glow: rgba(138, 92, 246, 0.5);
          font-family: 'Inter', sans-serif;
        }
        .glass-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          transition: all 0.4s ease;
          position: relative;
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(138, 92, 246, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(138, 92, 246, 0.1);
        }
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .split-heading {
          font-family: var(--font-heading), 'Inter', sans-serif;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .neon-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 0;
          pointer-events: none;
        }
        .section-padding {
          padding: 8rem 2rem;
        }
        @media (min-width: 1024px) {
          .section-padding {
            padding: 12rem 4rem;
          }
        }
        .container-stitch {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        .flex-col-gap { display: flex; flex-direction: column; gap: 2rem; }
        .grid-2 { display: grid; gap: 4rem; }
        @media (min-width: 1024px) { .grid-2 { grid-template-columns: 1fr 1fr; } }
      `}</style>

      <div className="stitch-ui">

        {/* Section 1: Maintenance vs Momentum */}
        <section className="section-padding" style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
          <div className="container-stitch grid-2" style={{ alignItems: 'center' }}>
            <div className="animate-up">
              <h2 className="split-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '2rem' }}>
                Marketing becomes<br/>maintenance quietly.
              </h2>
              <p style={{ fontSize: '1.5rem', color: '#a5b4fc', fontWeight: 500, marginBottom: '3rem' }}>It rarely fails all at once.</p>
              
              <div className="flex-col-gap" style={{ fontSize: '1.25rem', color: '#9ca3af', fontWeight: 300, lineHeight: 1.6 }}>
                <p>The calendar keeps moving. Campaigns keep launching. Reports keep getting made. Meetings keep happening.</p>
                <p>But somewhere along the way, the work starts needing more explanation than it creates movement.</p>
                
                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.5rem', marginBottom: '1.5rem' }}>Leadership starts asking harder questions.</p>
                  <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(138, 92, 246, 0.5)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li>What is this doing for the brand?</li>
                    <li>What is this building over time?</li>
                    <li>What is this helping us decide?</li>
                    <li>What is this moving for the business?</li>
                  </ul>
                </div>
                <p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 500, marginTop: '2rem' }}>That is the drift Impulse exists to resist.</p>
              </div>
            </div>
            
            <div className="glass-card animate-up" style={{ height: '600px', overflow: 'hidden', padding: 0 }}>
              <img src={`${import.meta.env.BASE_URL}images/momentum_energy.png`} alt="Abstract Energy" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #050505, transparent)' }}></div>
              <img src={`${import.meta.env.BASE_URL}images/glass_shape.png`} alt="Floating Glass" className="float-element" style={{ position: 'absolute', top: '25%', left: '25%', width: '200px', opacity: 0.8, mixBlendMode: 'screen' }} />
            </div>
          </div>
        </section>

        {/* Section 2: Appetite */}
        <section className="section-padding" style={{ backgroundColor: '#0a0a0a', position: 'relative' }}>
          <div className="neon-circle" style={{ background: 'rgba(138, 92, 246, 0.15)', width: '800px', height: '800px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
          
          <div className="container-stitch animate-up" style={{ textAlign: 'center' }}>
            <h2 className="split-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '3rem' }}>
              Appetite is not size.<br/><span className="gradient-text">It is willingness.</span>
            </h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
              {['A startup', 'A legacy business', 'A conglomerate', 'A founder-led company'].map((type, i) => (
                <div key={i} style={{ padding: '0.8rem 1.5rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', fontSize: '1.2rem', color: '#d1d5db' }}>
                  {type} can have it
                </div>
              ))}
            </div>
            
            <p style={{ fontSize: '1.5rem', color: '#9ca3af', fontWeight: 300, maxWidth: '800px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>
              Appetite is the willingness to move, question, improve, experiment, challenge default thinking, and expect more from marketing.
            </p>
            
            <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem', textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>That is who we work best with.</h3>
              <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Brands that do not want marketing to simply continue.</p>
              <p style={{ fontSize: '1.25rem', color: '#a5b4fc', fontWeight: 500 }}>Brands that want it to create momentum.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Formation & Clarity */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container-stitch grid-2" style={{ alignItems: 'center' }}>
            
            {/* Left side: Images and abstract layers */}
            <div className="animate-up" style={{ position: 'relative', height: '600px', order: 2 }}>
              <div className="glass-card" style={{ position: 'absolute', inset: '0 2rem 2rem 0', overflow: 'hidden', padding: 0 }}>
                <img src={`${import.meta.env.BASE_URL}images/team_formation.png`} alt="Team Formation" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,5,5,0.2), rgba(138, 92, 246, 0.2))' }}></div>
              </div>
              <div className="glass-card" style={{ position: 'absolute', bottom: '0', right: '0', width: '80%', padding: '2rem' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ display: 'block', width: '2rem', height: '2px', background: '#8b5cf6' }}></span> Built to perform.
                </h4>
                <p style={{ color: '#9ca3af', fontSize: '1.15rem', lineHeight: 1.6 }}>You get content, campaigns, websites, search systems, and AI-enabled workflows built to perform, not just exist.</p>
              </div>
            </div>
            
            <div className="animate-up" style={{ order: 1 }}>
              <h2 className="split-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '2rem' }}>
                Teams go further<br/>in formation.
              </h2>
              <div className="flex-col-gap" style={{ fontSize: '1.25rem', color: '#9ca3af', fontWeight: 300, lineHeight: 1.6 }}>
                <p>A brand rarely moves because one channel performs in isolation.</p>
                <p style={{ color: '#fff' }}>Momentum is built when the thinking, the story, the search presence, the media, the website, the data, the technology, and the execution pull in the same direction.</p>
                <p>That is why we do not treat strategy as a document and execution as a handoff.</p>
                <p style={{ color: '#a5b4fc', fontWeight: 500, fontSize: '1.5rem', paddingTop: '1rem' }}>The work has to move together. Otherwise, it becomes activity.</p>
              </div>

              <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
                <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid rgba(138, 92, 246, 0.5)' }}>
                  <h4 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600 }}>Less chasing. More clarity.</h4>
                  <p style={{ color: '#9ca3af', marginTop: '0.5rem' }}>You get fewer loose ends, fewer avoidable calls, and fewer rounds caused by unclear thinking.</p>
                </div>
                <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid rgba(138, 92, 246, 0.5)' }}>
                  <h4 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600 }}>Strategy before the work.</h4>
                  <p style={{ color: '#9ca3af', marginTop: '0.5rem' }}>Not as a post-rationalisation after the work is questioned.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3.5: Senior Thinking */}
        <section className="section-padding" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
          <div className="container-stitch grid-2" style={{ alignItems: 'center' }}>
            
            <div className="animate-up" style={{ order: 2 }}>
              <div className="glass-card" style={{ height: '500px', overflow: 'hidden', padding: 0 }}>
                <img src={`${import.meta.env.BASE_URL}images/senior_thinking.png`} alt="Senior Thinking" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.8), transparent)' }}></div>
              </div>
            </div>

            <div className="animate-up" style={{ order: 1 }}>
              <h3 className="split-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Senior thinking stays<br/>close to the work.</h3>
              <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '2.5rem', lineHeight: 1.6 }}>Impulse is not built on the idea that strategy happens once and execution figures itself out. The work often needs judgment.</p>
              
              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                {['A campaign may need a sharper thought.', 'A website may need a clearer path.', 'A search strategy may need stronger commercial context.', 'An AI workflow may need a human filter.', 'A client conversation may need more honesty than polish.'].map((txt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6', marginTop: '6px', flexShrink: 0 }}></div>
                    <span style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.4 }}>{txt}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '1.35rem', color: '#fff', fontWeight: 500, paddingLeft: '1.5rem', borderLeft: '4px solid #8b5cf6' }}>
                That is why senior thinking stays close. Not to slow the work down. To keep it pointed in the right direction.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Services Bento */}
        <section className="section-padding" style={{ backgroundColor: '#030303', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container-stitch animate-up">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 className="split-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
                The service is not the story.<br/><span className="gradient-text">The movement is.</span>
              </h2>
              <p style={{ fontSize: '1.5rem', color: '#9ca3af', maxWidth: '800px', margin: '0 auto' }}>
                Used separately, these can become tasks. <span style={{ color: '#fff' }}>Used with intent, they become momentum.</span>
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              
              <div className="glass-card" style={{ gridColumn: '1 / -1', height: '400px', padding: 0, overflow: 'hidden' }}>
                <img src={`${import.meta.env.BASE_URL}images/growth_dashboard.png`} alt="Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, filter: 'brightness(0.8)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,3,3,0.9) 0%, rgba(3,3,3,0.4) 50%, transparent 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '3rem', left: '3rem', right: '3rem', zIndex: 10 }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>Connected Growth Systems</h3>
                  <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '800px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Behind the scenes, there is process, data, automation, judgment, and senior thinking. On the surface, it should feel simple. The right work. Moving in the right direction. With fewer things falling through the cracks.
                  </p>
                </div>
              </div>

              {[
                { title: 'Brand Strategy', desc: 'Gives the work a commercial foundation.' },
                { title: 'Content', desc: 'Builds authority, not just output.' },
                { title: 'Search', desc: 'Compounds visibility that the brand owns.' },
                { title: 'Performance', desc: 'Makes spend more accountable.' },
                { title: 'Social Media', desc: 'Builds relevance, not just a posting rhythm.' },
                { title: 'Websites', desc: 'The place where intent either lands or leaks.' },
                { title: 'Analytics', desc: 'Turns data into clearer decisions.' },
                { title: 'AI', desc: 'Makes the work faster, sharper, and more scalable without lowering the bar.' },
              ].map((svc, i) => (
                <div key={i} className="glass-card" style={{ padding: '2rem', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '1rem' }}>{svc.desc}</p>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#a5b4fc'} onMouseOut={e => e.currentTarget.style.color = '#fff'}>
                    {svc.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Leadership */}
        <section className="section-padding" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="neon-circle" style={{ background: 'rgba(138, 92, 246, 0.1)', width: '1000px', height: '1000px', top: '0', left: '-20%' }}></div>
          <div className="container-stitch animate-up">
            <h2 className="split-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '5rem', textAlign: 'center' }}>Our Leadership</h2>
            
            <style>
              {`
                .leader-card {
                  position: relative;
                  border-radius: 32px;
                  overflow: hidden;
                  aspect-ratio: 3/4;
                  cursor: pointer;
                  border: 1px solid rgba(255,255,255,0.08);
                  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .leader-card:hover {
                  border-color: rgba(138, 92, 246, 0.5);
                  transform: translateY(-10px);
                  box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(138, 92, 246, 0.2);
                }
                .leader-img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                  filter: grayscale(20%) contrast(1.1);
                }
                .leader-card:hover .leader-img {
                  transform: scale(1.08);
                  filter: grayscale(0%) contrast(1.1);
                }
                .leader-overlay {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.3) 50%, transparent 100%);
                  transition: background 0.6s ease;
                }
                .leader-card:hover .leader-overlay {
                  background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(138, 92, 246, 0.4) 60%, transparent 100%);
                }
                .leader-content {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  padding: 3rem;
                  transform: translateY(40px);
                  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .leader-card:hover .leader-content {
                  transform: translateY(0);
                }
                .leader-bio {
                  opacity: 0;
                  max-height: 0;
                  overflow: hidden;
                  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                  color: rgba(255,255,255,0.8);
                  line-height: 1.6;
                  font-size: 1.15rem;
                }
                .leader-card:hover .leader-bio {
                  opacity: 1;
                  max-height: 200px;
                  margin-top: 1.5rem;
                }
              `}
            </style>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
              {[
                {
                  name: 'Adwait Joshi',
                  role: 'Founder',
                  bio: 'Adwait brings visionary leadership and strategic direction, transforming how brands connect with their audiences in a digital-first world.',
                  img: 'Adwait Joshi.png'
                },
                {
                  name: 'Abhishek Arekar',
                  role: 'Co-Founder',
                  bio: 'Abhishek oversees operational excellence and ensures that creative ideation is matched with flawless execution across all channels.',
                  img: 'Abhishek Arekar.png'
                }
              ].map((leader, i) => (
                <div key={i} className="leader-card">
                  <img src={`${import.meta.env.BASE_URL}images/${leader.img}`} alt={leader.name} className="leader-img" />
                  <div className="leader-overlay"></div>
                  <div className="leader-content">
                    <div style={{ color: '#a5b4fc', fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>{leader.role}</div>
                    <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.1 }}>{leader.name}</h3>
                    <div className="leader-bio">
                      {leader.bio}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="section-padding" style={{ backgroundColor: '#100826', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'radial-gradient(circle at center, rgba(138,92,246,0.8) 0%, transparent 70%)' }}></div>
          <div className="container-stitch animate-up" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h2 className="split-heading" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 700, marginBottom: '2.5rem', lineHeight: 1.05 }}>
              Built for brands<br/>that <span className="gradient-text">expect more.</span>
            </h2>
            <p style={{ fontSize: '1.5rem', color: '#d1d5db', marginBottom: '2rem', fontWeight: 300 }}>
              We are not the right fit for teams looking for a vendor to simply fulfil briefs.
            </p>
            <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '4rem', lineHeight: 1.6 }}>
              We work best with brands that want a partner who can think with them, build with them, challenge weak assumptions, and reduce the weight marketing places on their internal team. The size of the brand matters less than the appetite behind it.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
              {['A sharper question.', 'A higher standard.', 'A willingness to improve.', 'A need to move the business.'].map((item, i) => (
                <div key={i} style={{ padding: '0.8rem 1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', borderRadius: '50px', color: '#c4b5fd' }}>
                  {item}
                </div>
              ))}
            </div>

            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '3rem' }}>That is where Impulse fits best.</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#9ca3af' }}>Move sharper.</span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }}></span>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#9ca3af' }}>Move together.</span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }}></span>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Move the business.</span>
            </div>

            <a href="#contact" style={{ display: 'inline-block', padding: '1.2rem 3rem', background: '#8b5cf6', color: '#fff', fontSize: '1.25rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', boxShadow: '0 0 40px rgba(138,92,246,0.4)', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Start the conversation
            </a>
          </div>
        </section>

      </div>
      <Contact />
    </main>
  );
};

export default AboutUs;
