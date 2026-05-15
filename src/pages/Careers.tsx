import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import ServiceHero from '../components/Service/ServiceHero';

// --- 21st.dev Inspired UI Components ---

const ShinyText = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <span className={`shiny-text ${className}`}>{text}</span>
  );
};

const ShimmerButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <a href={href} className="shimmer-btn">
      <span className="shimmer-btn-content">{children}</span>
      <div className="shimmer-btn-bg"></div>
    </a>
  );
};

const Marquee = ({ children, reverse = false }: { children: React.ReactNode, reverse?: boolean }) => {
  return (
    <div className="marquee-container">
      <div className={`marquee-content ${reverse ? 'reverse' : ''}`}>
        {children}
        {children}
      </div>
    </div>
  );
};

const BentoCard = ({ title, description, index, colSpan = 1, rowSpan = 1 }: any) => {
  return (
    <div className="bento-card reveal-blur" style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}>
      <div className="bento-bg"></div>
      <div className="bento-content">
        <div className="bento-icon">0{index}</div>
        <h3 className="bento-title">{title}</h3>
        <div className="bento-desc" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
};

// --- Main Page Component ---

const Careers: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');

    const { gsap, ScrollTrigger, SplitType } = window as any;

    if (gsap && ScrollTrigger && SplitType) {
      // Blur Reveal Animation
      gsap.utils.toArray('.reveal-blur').forEach((el: any) => {
        gsap.fromTo(el,
          { filter: 'blur(10px)', y: 40, opacity: 0 },
          {
            filter: 'blur(0px)', y: 0, opacity: 1, duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });

      // Split Text Animation
      const headings = document.querySelectorAll('.split-text');
      headings.forEach((heading: any) => {
        const split = new SplitType(heading, { types: 'lines,words' });
        gsap.from(split.words, {
          y: 40,
          opacity: 0,
          rotationX: -40,
          transformOrigin: "0% 50% -50",
          duration: 1,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
          }
        });
      });
    }

    return () => {
      document.body.classList.remove('service-page');
    };
  }, []);

  const values = [
    {
      title: "Care before someone checks.",
      desc: "The best people here do not wait for a senior to notice the issue.<br><br>They notice it first.<br><br>A weak line.<br>A careless typo.<br>A lazy reference.<br>A confusing update.<br>A missing follow-through.<br><br>Details are where seriousness shows up.",
      colSpan: 2, rowSpan: 1
    },
    {
      title: "Think before you make.",
      desc: "Speed matters.<br><br>But work done without thought creates more work for everyone else.<br><br>Before the file opens, the thinking should begin.<br><br>Who is this for?<br>Why should they care?<br>What needs to change?",
      colSpan: 1, rowSpan: 2
    },
    {
      title: "Use AI without losing judgment.",
      desc: "AI is part of how we work.<br><br>It helps us research faster, explore more routes, reduce manual drag, and build better systems.<br><br>But AI does not know when a line is technically correct and emotionally dead.<br><br>That part is still human.<br><br>That part is still yours.",
      colSpan: 1, rowSpan: 1
    },
    {
      title: "Take feedback like someone who wants to grow.",
      desc: "Your first draft may not survive.<br><br>Your idea may be questioned.<br><br>Your line may be rewritten.<br><br>That is not failure.<br><br>That is the work asking to become better.",
      colSpan: 1, rowSpan: 1
    }
  ];

  const fitCheck = [
    "You want to become better at what you do.",
    "You like being trusted.",
    "You ask questions before making assumptions.",
    "You care about the reason behind the work.",
    "You can take feedback without turning it into a personal injury.",
    "You are curious about brands, people, culture, technology, and growth.",
    "You want to use AI as leverage, not as a shortcut."
  ];

  const wallImages = [
    "images/Career Page Images-03.webp",
    "images/Career Page Images-15.webp",
    "images/Career Page Images-14.webp",
    "images/Career Page Images-05.webp",
    "images/Career Page Images-06.webp",
    "images/Untitled-1-01.webp",
    "images/Untitled-1-02.webp",
    "images/Artboard 2 copy 15.webp"
  ];

  const openPositions = [
    {
      title: "Social Media Content Writer",
      type: "Full-Time",
      experience: "4+ years",
      location: "Mumbai, India",
      description: "We’re looking for someone who can write engaging social media content. Your job is simple: take a clear idea and turn it into content people actually want to read, watch, and engage with. You will work closely with our Social Media Head and focus on executing content through strong writing.",
      responsibilities: [
        "Write Instagram captions, reel/video scripts, carousel content, and LinkedIn posts.",
        "Convert briefs into structured content formats.",
        "Adapt one idea into multiple formats (reel, carousel, LinkedIn).",
        "Work across industries like Corporate/B2B, BFSI, Education, and Consumer brands.",
        "Create engaging hooks and scroll-stopping content.",
        "Maintain clarity, structure, and avoid fluff.",
        "Take feedback and iterate quickly."
      ],
      requirements: [
        "Strong English writing skills (clear, simple, engaging).",
        "Understanding of social media hooks and engagement patterns.",
        "Ability to structure short-form and medium-form content.",
        "Good grasp of platform tone (LinkedIn vs Instagram).",
        "Basic Hindi/Marathi understanding is a plus.",
        "Ability to follow briefs and adapt across industries."
      ]
    },
    {
      title: "SEO Executive",
      type: "Full-time",
      experience: "2–3 years",
      location: "Mumbai, India",
      description: "We are looking for an SEO Executive who can manage end-to-end SEO activities, improve website rankings, and drive organic traffic growth. The candidate should have strong knowledge of on-page, off-page, and technical SEO along with hands-on experience in SEO tools.",
      responsibilities: [
        "Perform keyword research, competitor analysis, and search intent analysis.",
        "Execute on-page SEO (meta tags, headings, internal linking, schema).",
        "Plan and implement off-page SEO strategies and link building.",
        "Conduct technical SEO audits and coordinate fixes.",
        "Monitor performance using Google Analytics and Search Console.",
        "Track rankings, traffic, and SEO KPIs.",
        "Optimize website structure, speed, and mobile performance.",
        "Collaborate with content team for SEO-friendly content.",
        "Stay updated with SEO trends and Google algorithm updates."
      ],
      requirements: [
        "2–3 years of SEO experience.",
        "Strong understanding of On-page, Off-page, and Technical SEO.",
        "Experience with tools like Ahrefs, SEMrush, Screaming Frog.",
        "Knowledge of Google Analytics and Search Console.",
        "Basic HTML and schema markup understanding.",
        "Strong analytical and problem-solving skills.",
        "Good communication and teamwork."
      ]
    },
    {
      title: "HR Executive",
      type: "Full-time",
      experience: "1–2 years",
      location: "Mumbai, India",
      description: "We are looking for an HR Executive who can manage end-to-end HR activities, improve employee satisfaction, and drive HR initiatives. The candidate should have strong knowledge of HR policies and procedures along with hands-on experience in HR tools.",
      responsibilities: [
        "Perform HR activities such as recruitment, onboarding, employee relations, performance management, and compensation and benefits.",
        "Execute HR policies and procedures.",
        "Monitor employee satisfaction and engagement.",
        "Collaborate with HR team for HR initiatives.",
        "Stay updated with HR trends and regulations."
      ],
      requirements: [
        "1–2 years of HR experience",
        "Good communication and coordination skills",
        "Ability to manage multiple tasks",
        "Basic understanding of HR processes"
      ],
      notes: [
        "This role is primarily focused on recruitment and engagement, with basic exposure to HR operations."
      ],
      closingText: "Interested candidates are requested to share their updated resume along with current CTC and notice period at hr@theimpulsedigital.com"
    },
    {
      title: "Social Media Intern",
      type: "Internship",
      experience: "Fresher",
      location: "Mumbai, India",
      description: "We are looking for a passionate and creative Social Media Intern to assist in designing and executing social media campaigns, creating engaging content, and tracking engagement metrics.",
      responsibilities: [
        "Researching, designing and execution of social media campaigns",
        "Assisting in monthly calendars to promote brands on social media platforms",
        "Track and analyze social media engagement for various brands and campaigns",
        "Stay up-to date with social media trends and create trendy reels/media content for social media",
        "Curate and assist in creating high-quality and relevant content such as blogs as well as creative copy for social media posts",
        "Ideate and coordinate with in-house teams to ensure smooth designing of campaigns and social media promotions",
        "Creative ideation with Account Managers and Social Media Strategists."
      ],
      requirements: [
        "Passion for social media marketing and its best practices",
        "Basic knowledge of Photoshop, Canva and other editing platforms",
        "Excellent verbal and written communication skills",
        "Ability to work collaboratively in a team environment"
      ]
    }
  ];

  return (
    <main id="main-content" className="careers-modern">

      {/* Custom Careers Hero */}
      <section id="hero" className="svc-hero-page" style={{ height: 'auto', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingBottom: '4rem' }}>
        <div className="neon-circle" style={{ background: 'rgba(138, 92, 246, 0.15)', width: '800px', height: '800px', top: '-20%', left: '50%', transform: 'translateX(-50%)' }}></div>

        <div className="container" style={{ textAlign: 'center', paddingTop: '140px', zIndex: 10, position: 'relative' }}>
          <h1 className="split-text svc-hero-headline" style={{ marginBottom: '4rem' }}>
            For people who want <br />
            <span style={{ color: 'var(--impulse-violet)' }}>more</span> <br />
            from the work.
          </h1>

          <div className="reveal-blur" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto 4rem auto', textAlign: 'left' }}>
            <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', backdropFilter: 'blur(20px)' }}>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--soft-grey)', opacity: 0.8, fontSize: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ textDecoration: 'line-through' }}>Not more noise.</li>
                <li style={{ textDecoration: 'line-through' }}>Not more meetings.</li>
                <li style={{ textDecoration: 'line-through', lineHeight: 1.4 }}>Not more busy days that blur into each other.</li>
              </ul>
            </div>
            <div style={{ padding: '3rem', background: 'rgba(84, 61, 152, 0.15)', border: '1px solid rgba(138, 92, 246, 0.3)', borderRadius: '24px', backdropFilter: 'blur(20px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'rgba(138, 92, 246, 0.4)', filter: 'blur(60px)' }}></div>
              <ul style={{ position: 'relative', zIndex: 10, listStyleType: 'none', padding: 0, margin: 0, color: 'var(--white)', fontSize: '1.5rem', fontWeight: 600, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--impulse-violet)' }}>+</span> More thinking.</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--impulse-violet)' }}>+</span> More ownership.</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--impulse-violet)' }}>+</span> More room to become sharper.</li>
              </ul>
            </div>
          </div>

          <p className="reveal-blur" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', color: 'var(--soft-grey)', maxWidth: '800px', margin: '0 auto 4rem auto', lineHeight: 1.5, fontWeight: 300 }}>
            <span style={{ color: 'var(--white)', fontWeight: 600 }}>Impulse is built for people</span> who want their work to mean something beyond the task.
          </p>

          <div className="reveal-blur svc-hero-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <a href="#culture" className="btn" data-cursor="EXPLORE" style={{ opacity: 1, transform: 'none' }}>
              <span className="btn-text">See how we work</span>
              <div className="btn-fill"></div>
            </a>
            <a href="mailto:hr@theimpulsedigital.com" className="btn" data-cursor="APPLY" style={{ opacity: 1, transform: 'none', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}>
              <span className="btn-text" style={{ color: '#fff' }}>Write to us</span>
              <div className="btn-fill"></div>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .careers-modern {
          --bg-card: rgba(255, 255, 255, 0.03);
          --border: rgba(255, 255, 255, 0.08);
          --text-primary: #ffffff;
          --text-secondary: #9ca3af;
          --accent: #8b5cf6;
          --accent-glow: rgba(138, 92, 246, 0.5);
          
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .neon-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 0;
          pointer-events: none;
        }

        /* Utility */
        .container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 10; }
        .section-padding { padding: 8rem 2rem; position: relative; }
        @media (min-width: 1024px) { .section-padding { padding: 12rem 4rem; } }
        
        /* Shiny Text */
        .shiny-text {
          background: linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%);
          background-size: 200% auto;
          color: rgba(255, 255, 255, 0.9);
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }

        /* Shimmer Button */
        .shimmer-btn {
          position: relative;
          display: inline-flex;
          padding: 1px;
          border-radius: 9999px;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.2s;
        }
        .shimmer-btn:hover { transform: scale(1.02); }
        .shimmer-btn-bg {
          position: absolute;
          inset: 0;
          background: conic-gradient(from 0deg, transparent 0 340deg, #fff 360deg);
          animation: spin 2s linear infinite;
          z-index: 0;
        }
        .shimmer-btn-content {
          background: #0a0a0a;
          color: #fff;
          padding: 12px 32px;
          border-radius: 9999px;
          font-weight: 500;
          font-size: 15px;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Bento Grid */
        .bento-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 60px;
        }
        @media (max-width: 900px) {
          .bento-container { grid-template-columns: 1fr; }
          .bento-card { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        .bento-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex; flex-direction: column; justify-content: flex-end;
          backdrop-filter: blur(20px);
        }
        .bento-card:hover {
          border-color: rgba(138, 92, 246, 0.4);
          background: rgba(255, 255, 255, 0.06);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(138, 92, 246, 0.1);
        }
        .bento-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .bento-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; color: #fff; margin-bottom: 24px; font-size: 14px;
        }
        .bento-title { font-size: 24px; font-weight: 600; margin-bottom: 12px; letter-spacing: -0.02em; }
        .bento-desc { color: var(--text-secondary); font-size: 16px; line-height: 1.6; }

        /* Marquee */
        .marquee-container {
          overflow: hidden; display: flex; width: 100%; padding: 40px 0;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-content {
          display: flex; flex-shrink: 0; gap: 20px;
          animation: scroll 30s linear infinite;
        }
        .marquee-content.reverse { animation-direction: reverse; }
        .marquee-item {
          width: 300px; height: 200px; border-radius: 16px; object-fit: cover;
          filter: grayscale(100%); transition: filter 0.3s ease;
        }
        .marquee-item:hover { filter: grayscale(0%); }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 10px)); }
        }

        /* Typography Exts */
        .sub-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.1; font-weight: 700; letter-spacing: -0.02em;
        }
        .text-muted { color: var(--text-secondary); font-size: 1.125rem; line-height: 1.6; }
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Culture Section - Magazine Grid (21st.dev Inspired) */}
      <section id="culture" className="section-padding" style={{ backgroundColor: '#030303', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
        <div className="neon-circle" style={{ background: 'rgba(138, 92, 246, 0.08)', width: '800px', height: '800px', top: '0', left: '50%', transform: 'translateX(-50%)' }}></div>

        <div className="container" style={{ maxWidth: '1200px' }}>

          {/* Headline */}
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--soft-grey)', opacity: 0.4, display: 'block', marginBottom: '0.5rem', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Some work keeps you busy.</span>
              <span className="shiny-text" style={{ background: 'linear-gradient(120deg, #fff 40%, #a5b4fc 50%, #fff 60%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Some work changes you.</span>
            </h2>
            <div style={{ display: 'inline-block', padding: '0.75rem 2.5rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '100px', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, margin: 0, letterSpacing: '0.02em' }}>We are interested in the second kind.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>

            {/* Left: Magazine Image Card */}
            <div className="reveal-blur" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', minHeight: '600px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <video src={`${import.meta.env.BASE_URL}images/career-new.mp4`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} autoPlay muted loop playsInline />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.6) 40%, transparent 100%)' }}></div>

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem' }}>
                <p style={{ fontSize: '1.35rem', color: '#d1d5db', marginBottom: '1rem', lineHeight: 1.6 }}>That is the work we want people to experience here.</p>
                <p style={{ fontSize: '1.35rem', color: '#d1d5db', marginBottom: '2rem', lineHeight: 1.6 }}>Not because it is always easy.</p>
                <div style={{ display: 'inline-flex', padding: '1rem 2rem', background: '#fff', borderRadius: '100px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                  <p style={{ fontSize: '1.25rem', color: '#000', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Because it makes you better.</p>
                </div>
              </div>
            </div>

            {/* Right: The Questions Stack */}
            <div className="reveal-blur" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
              <div style={{ padding: '0 1rem 1.5rem 1rem' }}>
                <p style={{ fontSize: '1.75rem', color: '#fff', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>The kind where you start asking better questions:</p>
              </div>

              {["Why will someone care?", "What is the real problem?", "What are we trying to change?", "Is this clear enough?", "Is this good enough to leave our name on?"].map((q, i) => (
                <div key={i} style={{ padding: '1.75rem 2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', backdropFilter: 'blur(10px)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'default', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(138,92,246,0.1)'; e.currentTarget.style.borderColor = 'rgba(138,92,246,0.4)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}>

                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(138,92,246,0.15)', border: '1px solid rgba(138,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#a5b4fc', fontSize: '1.1rem', fontWeight: 700 }}>0{i + 1}</span>
                  </div>
                  <p style={{ fontSize: '1.35rem', color: '#f3f4f6', margin: 0, fontWeight: 500 }}>
                    {q}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section - Lamp & Glow Grid (21st.dev Inspired) */}
      <section className="section-padding" style={{ backgroundColor: '#000', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

        {/* CSS Lamp Effect */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '800px', height: '400px', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '100px', background: 'rgba(138, 92, 246, 0.8)', filter: 'blur(60px)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(138, 92, 246, 0.15) 0%, transparent 100%)', clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0 100%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '5rem', paddingTop: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>The work sits close to business.</h2>
            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', color: '#9ca3af', fontWeight: 400 }}>We do not make things for the sake of making things.</p>
          </div>

          <div className="reveal-blur" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
            {[
              { title: "Social & Content", text: "A post has to carry a thought." },
              { title: "Websites", text: "A website has to make action easier." },
              { title: "Search SEO", text: "A search strategy has to build demand." },
              { title: "Video Production", text: "A film has to make a story travel." },
              { title: "Data & Analytics", text: "A report has to make the next decision clearer." },
              { title: "Agentic AI", text: "An AI workflow has to reduce drag, not create theatre." }
            ].map((item, i) => (
              <div key={i} className="hover-card">
                <div className="hover-line"></div>
                <p style={{ fontSize: '0.85rem', color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '1.5rem' }}>{item.title}</p>
                <p style={{ fontSize: '1.5rem', color: '#e5e7eb', fontWeight: 500, lineHeight: 1.4, margin: 0, letterSpacing: '-0.01em' }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal-blur" style={{ textAlign: 'center', background: 'linear-gradient(to right, transparent, rgba(138,92,246,0.1), transparent)', padding: '4rem 0', borderTop: '1px solid rgba(138,92,246,0.2)', borderBottom: '1px solid rgba(138,92,246,0.2)' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 500, color: '#9ca3af', marginBottom: '1rem' }}>The format may change. <span style={{ color: '#fff' }}>The point does not.</span></p>
            <h3 className="shiny-text" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, background: 'linear-gradient(120deg, #fff 40%, #a5b4fc 50%, #fff 60%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
              Make the work clearer. Sharper. More useful.
            </h3>
          </div>
        </div>
      </section>

      {/* What We Value - Image Interlocking Grid (21st.dev Inspired) */}
      <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#030303' }}>
        <div className="container" style={{ maxWidth: '1300px' }}>
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em' }}>What we value</h2>
          </div>

          <style>{`
            .values-bento-grid {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              gap: 2rem;
              grid-auto-rows: minmax(360px, auto);
            }
            .values-bento-grid > div {
              border-radius: 24px;
            }
            @media (max-width: 1024px) {
              .values-bento-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .values-bento-grid > div {
                grid-column: span 1 !important;
              }
            }
            @media (max-width: 768px) {
              .values-bento-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

          <div className="values-bento-grid">

            {/* 1. Care before someone checks (Span 7) */}
            <div className="reveal-blur hover-card" style={{ gridColumn: 'span 7', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '2rem', letterSpacing: '-0.02em' }}>{values[0].title}</h3>
              <div style={{ color: '#d1d5db', fontSize: '1.2rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <p style={{ margin: 0 }}>The best people here do not wait for a senior to notice the issue.</p>
                <p style={{ margin: 0 }}>They notice it first.</p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#8b5cf6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><span style={{ color: '#d1d5db' }}>A weak line.</span></li>
                  <li><span style={{ color: '#d1d5db' }}>A careless typo.</span></li>
                  <li><span style={{ color: '#d1d5db' }}>A lazy reference.</span></li>
                  <li><span style={{ color: '#d1d5db' }}>A confusing update.</span></li>
                  <li><span style={{ color: '#d1d5db' }}>A missing follow-through.</span></li>
                </ul>
                <p style={{ margin: 0 }}>Details are where seriousness shows up.</p>
              </div>
            </div>

            {/* Image 1 (Span 5) */}
            <div className="reveal-blur" style={{ gridColumn: 'span 5', position: 'relative', overflow: 'hidden', minHeight: '400px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img src={`${import.meta.env.BASE_URL}images/Artboard 2 copy 21.webp`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }} alt="Value 1" onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>

            {/* Image 2 (Span 4) */}
            <div className="reveal-blur" style={{ gridColumn: 'span 4', position: 'relative', overflow: 'hidden', minHeight: '400px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img src={`${import.meta.env.BASE_URL}images/Artboard 2 copy 22.webp`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }} alt="Value 2" onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>

            {/* 2. Think before you make (Span 4) */}
            <div className="reveal-blur hover-card" style={{ gridColumn: 'span 4', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{values[1].title}</h3>
              <div style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ margin: 0 }}>Speed matters.</p>
                <p style={{ margin: 0 }}>But work done without thought creates more work for everyone else.</p>
                <p style={{ margin: 0 }}>Before the file opens, the thinking should begin.</p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#8b5cf6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><span style={{ color: '#d1d5db' }}>Who is this for?</span></li>
                  <li><span style={{ color: '#d1d5db' }}>Why should they care?</span></li>
                  <li><span style={{ color: '#d1d5db' }}>What needs to change?</span></li>
                </ul>
              </div>
            </div>

            {/* 3. Use AI without losing judgment (Span 4) */}
            <div className="reveal-blur hover-card" style={{ gridColumn: 'span 4', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{values[2].title}</h3>
              <div style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ margin: 0 }}>AI is part of how we work.</p>
                <p style={{ margin: 0 }}>It helps us:</p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#8b5cf6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><span style={{ color: '#d1d5db' }}>Research faster</span></li>
                  <li><span style={{ color: '#d1d5db' }}>Explore more routes</span></li>
                  <li><span style={{ color: '#d1d5db' }}>Reduce manual drag</span></li>
                  <li><span style={{ color: '#d1d5db' }}>Build better systems</span></li>
                </ul>
                <p style={{ margin: 0 }}>But AI does not know when a line is technically correct and emotionally dead.</p>
                <p style={{ margin: 0 }}>That part is still human. That part is still yours.</p>
              </div>
            </div>

            {/* 4. Take feedback like someone who wants to grow (Span 8) */}
            <div className="reveal-blur hover-card" style={{ gridColumn: 'span 8', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21v-5h5" /></svg>
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '2rem', letterSpacing: '-0.02em' }}>{values[3].title}</h3>
              <div style={{ color: '#d1d5db', fontSize: '1.2rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#8b5cf6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><span style={{ color: '#d1d5db' }}>Your first draft may not survive.</span></li>
                  <li><span style={{ color: '#d1d5db' }}>Your idea may be questioned.</span></li>
                  <li><span style={{ color: '#d1d5db' }}>Your line may be rewritten.</span></li>
                </ul>
                <p style={{ margin: 0 }}>That is not failure.</p>
                <p style={{ margin: 0 }}>That is the work asking to become better.</p>
              </div>
            </div>

            {/* Image 3 (Span 4) */}
            <div className="reveal-blur" style={{ gridColumn: 'span 4', position: 'relative', overflow: 'hidden', minHeight: '400px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img src={`${import.meta.env.BASE_URL}images/Artboard 2 copy 23.webp`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }} alt="Value 4" onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>

          </div>
        </div>
      </section>

      {/* Expectations */}
      {/* Expectations - Glowing Border Cards */}
      <section className="section-padding" style={{ backgroundColor: '#030303', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>

        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '50%', background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.08) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 className="sub-title split-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em' }}>What you can expect here</h2>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>

            {/* Step 1: The Reality */}
            <div className="reveal-blur hover-card" style={{ padding: '3.5rem 3rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #8b5cf6, transparent)' }}></div>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(138,92,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', color: '#a5b4fc', border: '1px solid rgba(138,92,246,0.3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>The Reality</h3>
              <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>You can expect real work.</p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#8b5cf6', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.15rem' }}>
                <li><span style={{ color: '#d1d5db' }}>Not pretend responsibility.</span></li>
                <li><span style={{ color: '#d1d5db' }}>Not decorative exposure.</span></li>
                <li><span style={{ color: '#d1d5db' }}>Not learning that only exists in onboarding documents.</span></li>
              </ul>
            </div>

            {/* Step 2: The Learnings */}
            <div className="reveal-blur hover-card" style={{ padding: '3.5rem 3rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, transparent)' }}></div>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>The Learnings</h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#3b82f6', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.15rem' }}>
                <li><span style={{ color: '#d1d5db' }}>How serious brands think.</span></li>
                <li><span style={{ color: '#d1d5db' }}>Why some ideas travel and others die.</span></li>
                <li><span style={{ color: '#d1d5db' }}>Why clarity beats decoration.</span></li>
                <li><span style={{ color: '#d1d5db' }}>Why speed needs structure.</span></li>
                <li><span style={{ color: '#d1d5db' }}>Why client trust is built in small moments.</span></li>
              </ul>
            </div>

            {/* Step 3: The Promise */}
            <div className="reveal-blur hover-card" style={{ padding: '3.5rem 3rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #ec4899, transparent)' }}></div>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(236,72,153,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>The Promise</h3>
              <p style={{ color: '#d1d5db', fontSize: '1.15rem', marginBottom: '1rem', lineHeight: 1.6 }}>Some days will be heavy. That is the honest part.</p>
              <p style={{ color: '#d1d5db', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: 1.6 }}>The promise is not comfort.</p>
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid #ec4899', borderRadius: '0 12px 12px 0' }}>
                <p style={{ margin: 0, color: '#fff', fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.5 }}>The promise is growth with a standard attached.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Life at Impulse - Focus Cards Grid (21st.dev Inspired) */}
        <div className="container" style={{ marginTop: '10rem', paddingBottom: '4rem', position: 'relative', zIndex: 10 }}>
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="sub-title split-text" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff' }}>Life at Impulse</h2>
            <p style={{ color: '#9ca3af', fontSize: '1.25rem', marginTop: '1rem' }}>Hover to focus</p>
          </div>

          <style>{`
            .focus-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
              grid-auto-rows: 280px;
              gap: 1.5rem;
              grid-auto-flow: dense;
            }
            .focus-grid-item {
              border-radius: 24px;
              overflow: hidden;
              position: relative;
              transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: crosshair;
              background: #050505;
              border: 1px solid rgba(255,255,255,0.05);
            }
            .focus-grid-item img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
              opacity: 0.85;
            }
            
            /* The Focus Blur Effect */
            .focus-grid:hover .focus-grid-item {
              filter: blur(8px) brightness(0.4);
              transform: scale(0.98);
            }
            .focus-grid .focus-grid-item:hover {
              filter: blur(0px) brightness(1.2);
              transform: scale(1.02);
              z-index: 10;
              box-shadow: 0 30px 60px rgba(0,0,0,0.6);
              border-color: rgba(255,255,255,0.2);
            }
            .focus-grid .focus-grid-item:hover img {
              transform: scale(1.1);
              opacity: 1;
            }
            
            /* Masonry Bento Spans */
            .focus-grid-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
            .focus-grid-item:nth-child(4) { grid-column: span 2; }
            .focus-grid-item:nth-child(6) { grid-row: span 2; }
            .focus-grid-item:nth-child(8) { grid-column: span 2; }
            .focus-grid-item:nth-child(9) { grid-column: span 2; }
            
            @media (max-width: 768px) {
              .focus-grid-item { grid-column: span 1 !important; grid-row: span 1 !important; }
              .focus-grid:hover .focus-grid-item { filter: none; transform: none; }
              .focus-grid .focus-grid-item:hover { transform: none; box-shadow: none; border-color: rgba(255,255,255,0.05); }
            }
          `}</style>

          <div className="focus-grid reveal-blur">
            {wallImages.slice(0, 10).map((img, i) => (
              <div key={i} className="focus-grid-item">
                <img src={`${import.meta.env.BASE_URL}${img}`} alt={`Life at Impulse ${i}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit Check List - Glass Bento Grid */}
      <section className="section-padding" style={{ backgroundColor: '#050505', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="neon-circle" style={{ background: 'rgba(138, 92, 246, 0.08)', width: '1000px', height: '1000px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="sub-title split-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff', letterSpacing: '-0.04em' }}>You may fit here if</h2>
          </div>

          <style>{`
            .fit-row-list {
              max-width: 1000px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
            }
            .fit-row-item {
              display: flex;
              align-items: center;
              padding: 3rem 0;
              border-bottom: 1px solid rgba(255,255,255,0.05);
              transition: all 0.5s ease;
              position: relative;
              cursor: default;
            }
            .fit-row-item:first-child {
              border-top: 1px solid rgba(255,255,255,0.05);
            }
            .fit-row-item::before {
              content: '';
              position: absolute;
              top: 0; left: 0; width: 0; height: 100%;
              background: linear-gradient(90deg, rgba(138, 92, 246, 0.05) 0%, transparent 100%);
              transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              z-index: -1;
            }
            .fit-row-item:hover::before {
              width: 100%;
            }
            .fit-row-num {
              font-size: clamp(2rem, 4vw, 3.5rem);
              font-family: monospace;
              color: rgba(255,255,255,0.4);
              font-weight: 700;
              width: 120px;
              flex-shrink: 0;
              transition: all 0.4s ease;
              line-height: 1;
            }
            .fit-row-text {
              font-size: clamp(1.5rem, 2.5vw, 2.25rem);
              color: rgba(255,255,255,0.35);
              font-weight: 500;
              letter-spacing: -0.02em;
              margin: 0;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              flex-grow: 1;
              line-height: 1.3;
            }
            .fit-row-icon {
              width: 56px;
              height: 56px;
              border-radius: 50%;
              background: rgba(138, 92, 246, 0);
              color: #8b5cf6;
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transform: translateX(-20px) scale(0.8);
              transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              flex-shrink: 0;
              margin-left: 2rem;
            }
            
            .fit-row-item:hover .fit-row-num {
              color: #8b5cf6;
              transform: scale(1.05);
            }
            .fit-row-item:hover .fit-row-text {
              color: #fff;
              transform: translateX(15px);
            }
            .fit-row-item:hover .fit-row-icon {
              opacity: 1;
              transform: translateX(0) scale(1);
              background: rgba(138, 92, 246, 0.15);
              box-shadow: 0 0 30px rgba(138, 92, 246, 0.4);
            }
            
            @media (max-width: 768px) {
              .fit-row-item { padding: 2rem 0; }
              .fit-row-num { width: 60px; font-size: 1.5rem; }
              .fit-row-icon { display: none; }
              .fit-row-item:hover .fit-row-text { transform: none; }
            }
          `}</style>

          <div className="fit-row-list reveal-blur">
            {[
              {
                text: "You want to become better at what you do.",
                icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              },
              {
                text: "You like being trusted.",
                icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
              },
              {
                text: "You ask questions before making assumptions.",
                icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              },
              {
                text: "You care about the reason behind the work.",
                icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              },
              {
                text: "You can take feedback without turning it into a personal injury.",
                icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
              },
              {
                text: "You are curious about brands, people, culture, technology, and growth.",
                icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              },
              {
                text: "You want to use AI as leverage, not as a shortcut.",
                icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              }
            ].map((item, i) => (
              <div key={i} className="fit-row-item">
                <div className="fit-row-num">0{i + 1}</div>
                <p className="fit-row-text">{item.text}</p>
                <div className="fit-row-icon">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Cinematic Appetite Banner */}
          <div className="reveal-blur" style={{ marginTop: '8rem', padding: '6rem 2rem', background: 'radial-gradient(ellipse at center, rgba(138, 92, 246, 0.1) 0%, transparent 60%)', textAlign: 'center', borderTop: '1px solid rgba(138,92,246,0.1)', borderBottom: '1px solid rgba(138,92,246,0.1)', borderRadius: '32px' }}>
            <h3 className="shiny-text" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '-0.04em', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              You have appetite.
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <span style={{ color: '#d1d5db', fontSize: '1.2rem', fontWeight: 500 }}>Quiet appetite is fine.</span>
              </div>
              <div style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <span style={{ color: '#d1d5db', fontSize: '1.2rem', fontWeight: 500 }}>Loud appetite is fine.</span>
              </div>
            </div>
            <p style={{ color: '#a5b4fc', fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '6px', margin: 0 }}>
              But there has to be appetite.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding" style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="sub-title split-text">Current Openings</h2>
            <p className="text-muted mt-4" style={{ fontSize: '1.25rem' }}>Join the team building momentum.</p>
          </div>

          <style>{`
            .job-card-wrapper {
              background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%);
              border: 1px solid rgba(255,255,255,0.05);
              border-radius: 24px;
              overflow: hidden;
              transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
            }
            .job-card-wrapper:hover {
              border-color: rgba(138, 92, 246, 0.4);
              background: linear-gradient(180deg, rgba(138, 92, 246, 0.05) 0%, transparent 100%);
              box-shadow: 0 20px 40px -10px rgba(138, 92, 246, 0.15);
            }
            .job-card-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 2rem 3rem;
              cursor: pointer;
              position: relative;
              z-index: 2;
            }
            .job-card-content {
              max-height: 0;
              opacity: 0;
              padding: 0 3rem;
              transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
              color: var(--text-secondary);
            }
            .job-card-wrapper:hover .job-card-content {
              max-height: 1200px;
              opacity: 1;
              padding: 0 3rem 3rem 3rem;
            }
            .job-section-title {
              color: #fff;
              font-size: 1.1rem;
              font-weight: 600;
              margin: 1.5rem 0 0.75rem 0;
              letter-spacing: 0.5px;
              text-transform: uppercase;
            }
            .job-list {
              list-style-type: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            .job-list li {
              position: relative;
              padding-left: 1.25rem;
              line-height: 1.5;
            }
            .job-list li::before {
              content: '•';
              position: absolute;
              left: 0;
              color: #8b5cf6;
              font-weight: bold;
            }
            .job-expand-icon {
              width: 32px; height: 32px;
              display: flex; align-items: center; justify-content: center;
              border-radius: 50%;
              background: rgba(255,255,255,0.05);
              transition: all 0.4s ease;
              color: #a5b4fc;
            }
            .job-card-wrapper:hover .job-expand-icon {
              transform: rotate(180deg);
              background: #8b5cf6;
              color: #fff;
              box-shadow: 0 0 15px rgba(138, 92, 246, 0.5);
            }
            @media (max-width: 768px) {
              .job-card-header, .job-card-wrapper:hover .job-card-content {
                padding: 1.5rem;
              }
              .job-card-header { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
              .job-card-actions { width: 100%; display: flex; justify-content: space-between; align-items: center; }
            }
          `}</style>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {openPositions.map((job, i) => (
              <div key={i} className="job-card-wrapper reveal-blur">
                <div className="job-card-header">
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                      <span style={{ padding: '0.25rem 0.75rem', border: '1px solid var(--border)', borderRadius: '50px', fontSize: '0.85rem' }}>{job.type}</span>
                      <span style={{ padding: '0.25rem 0.75rem', border: '1px solid var(--border)', borderRadius: '50px', fontSize: '0.85rem' }}>{job.location}</span>
                      {job.experience && <span style={{ padding: '0.25rem 0.75rem', border: '1px solid var(--border)', borderRadius: '50px', fontSize: '0.85rem', color: '#a5b4fc', borderColor: 'rgba(138, 92, 246, 0.3)' }}>{job.experience}</span>}
                    </div>
                  </div>
                  <div className="job-card-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <a href={`mailto:hr@theimpulsedigital.com?subject=Application for ${job.title}`} style={{ display: 'inline-flex', padding: '0.75rem 2rem', background: '#fff', color: '#000', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                      Apply
                    </a>
                    {job.description && (
                      <div className="job-expand-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    )}
                  </div>
                </div>

                {job.description && (
                  <div className="job-card-content">
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#d1d5db', marginBottom: '1.5rem' }}>{job.description}</p>

                    {job.responsibilities && (
                      <>
                        <h4 className="job-section-title">Key Responsibilities</h4>
                        <ul className="job-list">
                          {job.responsibilities.map((req: string, idx: number) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {job.requirements && (
                      <>
                        <h4 className="job-section-title">Candidate Requirements</h4>
                        <ul className="job-list">
                          {job.requirements.map((req: string, idx: number) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {job.notes && (
                      <>
                        <h4 className="job-section-title">Notes</h4>
                        <ul className="job-list">
                          {job.notes.map((note: string, idx: number) => (
                            <li key={idx}>{note}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {job.closingText && (
                      <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(138, 92, 246, 0.05)', borderRadius: '12px', border: '1px dashed rgba(138, 92, 246, 0.3)' }}>
                        <p style={{ color: '#a5b4fc', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>
                          {job.closingText}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA - Floating Icons & Glow Card */}
      <section className="section-padding" style={{ backgroundColor: '#050505', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

        <style>{`
          .bg-icons-container {
            position: absolute;
            inset: -100px;
            overflow: hidden;
            z-index: 0;
            pointer-events: none;
          }
          .floating-icon {
            position: absolute;
            color: rgba(138, 92, 246, 0.05);
            animation: float-up linear infinite;
          }
          @keyframes float-up {
            0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-30vh) rotate(360deg); opacity: 0; }
          }
          
          .cta-glow-card {
            background: linear-gradient(180deg, rgba(20, 20, 25, 0.8) 0%, rgba(10, 10, 15, 0.95) 100%);
            border: 1px solid rgba(138, 92, 246, 0.25);
            border-radius: 32px;
            padding: 4rem;
            position: relative;
            backdrop-filter: blur(20px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
            overflow: hidden;
            text-align: left;
          }
          .cta-glow-card::before {
            content: '';
            position: absolute;
            top: 0; left: 50%; transform: translateX(-50%);
            width: 70%; height: 3px;
            background: linear-gradient(90deg, transparent, #8b5cf6, #d946ef, transparent);
            filter: blur(1px);
          }
          .cta-list li {
            position: relative;
            padding-left: 1.5rem;
          }
          .cta-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #8b5cf6;
          }
          
          @media (max-width: 768px) {
            .cta-glow-card { padding: 2.5rem 1.5rem; }
          }
        `}</style>

        {/* Floating Background Icons */}
        <div className="bg-icons-container">
          <div className="floating-icon" style={{ left: '10%', animationDuration: '25s', animationDelay: '0s', width: '200px', height: '200px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2L2 22l10-4 10 4L12 2z" /></svg>
          </div>
          <div className="floating-icon" style={{ left: '85%', animationDuration: '35s', animationDelay: '5s', width: '300px', height: '300px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <div className="floating-icon" style={{ left: '50%', animationDuration: '28s', animationDelay: '2s', width: '150px', height: '150px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"></path></svg>
          </div>
          <div className="floating-icon" style={{ left: '25%', animationDuration: '40s', animationDelay: '10s', width: '250px', height: '250px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </div>
          <div className="floating-icon" style={{ left: '70%', animationDuration: '30s', animationDelay: '15s', width: '180px', height: '180px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
          </div>
          <div className="floating-icon" style={{ left: '5%', animationDuration: '45s', animationDelay: '7s', width: '400px', height: '400px', color: 'rgba(138, 92, 246, 0.03)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
        </div>

        {/* Ambient Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(138,92,246,0.12) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 1, pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px' }}>

          <div className="reveal-blur">
            <h2 className="split-heading" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, marginBottom: '2.5rem', lineHeight: 1.1, letterSpacing: '-0.04em' }}>
              <span style={{ color: '#fff' }}>Bring appetite.</span><br />
              <span style={{ background: 'linear-gradient(135deg, #a5b4fc 0%, #d946ef 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We will bring the standard.</span>
            </h2>

            <div style={{ maxWidth: '700px', margin: '0 auto 5rem auto', fontSize: '1.35rem', lineHeight: 1.7, color: '#d1d5db' }}>
              <p style={{ marginBottom: '1.5rem' }}>We are not looking for people who are simply available.</p>
              <p style={{ marginBottom: '3rem' }}>We are looking for people who read this and feel something familiar.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem', fontFamily: 'monospace', color: '#a5b4fc', fontSize: '1.4rem', fontWeight: 600 }}>
                <span>&gt; A little discomfort.</span>
                <span>&gt; A little excitement.</span>
                <span>&gt; A little sense that this may ask more.</span>
              </div>

              <p style={{ color: '#fff', fontWeight: 700, marginBottom: '3rem', fontSize: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>That is intentional.</p>

              <p style={{ marginBottom: '1rem' }}>Impulse is not being built for people who only want a place to work.</p>
              <p style={{ color: '#fff', fontWeight: 600 }}>It is being built for people who want a place to grow sharper.</p>
            </div>
          </div>

          {/* Application Glow Card */}
          <div className="cta-glow-card reveal-blur" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(239,68,68,0.2)' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <div>
                <p style={{ color: '#ef4444', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', margin: 0, fontSize: '0.9rem' }}>Critical Instruction</p>
                <p style={{ color: '#fff', fontWeight: 600, margin: 0, fontSize: '1.25rem' }}>Do not send a template.</p>
              </div>
            </div>

            <p style={{ color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Send us your resume, portfolio, or a short note about the kind of work you want to do. Make sure to cover:
            </p>

            <ul className="cta-list" style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem', color: '#a5b4fc', fontSize: '1.15rem' }}>
              <li>What you are exceptionally good at.</li>
              <li>What you are actively trying to get better at.</li>
              <li>Why this feels like the exact room you want to be in.</li>
            </ul>

            <div style={{ textAlign: 'center' }}>
              <ShimmerButton href="mailto:hr@theimpulsedigital.com?subject=I want to build sharper work at Impulse">
                Email hr@theimpulsedigital.com
              </ShimmerButton>
            </div>
          </div>

        </div>
      </section>

      <Contact />
    </main>
  );
};

export default Careers;
