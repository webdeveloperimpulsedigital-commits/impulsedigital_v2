import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import { ServiceProcess } from '../components/Service/ServiceTemplate';

// --- 21st.dev Inspired UI Components ---

const ShimmerButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <a href={href} className="shimmer-btn">
      <span className="shimmer-btn-content">{children}</span>
      <div className="shimmer-btn-bg"></div>
    </a>
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
      const headings = document.querySelectorAll('.split-text:not(.initialized)');
      headings.forEach((heading: any) => {
        heading.classList.add('initialized');
        const split = new SplitType(heading as HTMLElement, { types: 'lines, words' });
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
            scrollTrigger: { trigger: heading, start: 'top 75%', toggleActions: 'play none none reverse' },
            yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
          }
        );
      });

      // Text Fill scrub effect
      const textFills = document.querySelectorAll('.text-fill');
      textFills.forEach((fill: any) => {
        gsap.to(fill, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: fill,
            scrub: 1,
            start: 'top 85%',
            end: 'top 20%'
          }
        });
      });

      // Hover magnetic orb for AWW3 cards
      const cards = document.querySelectorAll('.aww3-card');
      cards.forEach((card: any) => {
        const orb = card.querySelector('.aww3-orb');
        if (orb) {
          card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            gsap.to(orb, { x, y, duration: 0.6, ease: "power2.out" });
          });
        }
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

  const expectationsData = {
    title: "What you can expect here",
    steps: [
      {
        num: "01",
        title: "The Reality",
        desc: `<p style="color: var(--white); font-size: 1.25rem; font-weight: 600; margin-bottom: 1.5rem;">You can expect real work.</p>
               <ul style="margin: 0; padding-left: 1.5rem; list-style-type: disc; color: var(--impulse-violet); display: flex; flex-direction: column; gap: 1rem; font-size: 1.15rem;">
                 <li><span style="color: var(--soft-grey);">Not pretend responsibility.</span></li>
                 <li><span style="color: var(--soft-grey);">Not decorative exposure.</span></li>
                 <li><span style="color: var(--soft-grey);">Not learning that only exists in onboarding documents.</span></li>
               </ul>`
      },
      {
        num: "02",
        title: "The Learnings",
        desc: `<ul style="margin: 0; padding-left: 1.5rem; list-style-type: disc; color: var(--impulse-violet); display: flex; flex-direction: column; gap: 1rem; font-size: 1.15rem;">
                 <li><span style="color: var(--soft-grey);">How serious brands think.</span></li>
                 <li><span style="color: var(--soft-grey);">Why some ideas travel and others die.</span></li>
                 <li><span style="color: var(--soft-grey);">Why clarity beats decoration.</span></li>
                 <li><span style="color: var(--soft-grey);">Why speed needs structure.</span></li>
                 <li><span style="color: var(--soft-grey);">Why client trust is built in small moments.</span></li>
               </ul>`
      },
      {
        num: "03",
        title: "The Promise",
        desc: `<p style="color: var(--soft-grey); font-size: 1.15rem; margin-bottom: 1rem; line-height: 1.6;">Some days will be heavy. That is the honest part.</p>
               <p style="color: var(--soft-grey); font-size: 1.15rem; margin-bottom: 2rem; line-height: 1.6;">The promise is not comfort.</p>
               <div style="padding: 1.5rem; background: rgba(255,255,255,0.03); border-left: 4px solid var(--impulse-violet); border-radius: 0 12px 12px 0;">
                 <p style="margin: 0; color: var(--white); font-size: 1.25rem; font-weight: 700; line-height: 1.5;">The promise is growth with a standard attached.</p>
               </div>`
      }
    ]
  };

  const wallImages = [
    "images/Career Page Images-03.webp",
    "images/Career Page Images-15.webp",
    "images/Career Page Images-14.webp",
    "images/Career Page Images-05.webp",
    "images/Career Page Images-06.webp",
    "images/Untitled-1-01.webp",
    "images/Untitled-1-02.webp",
    "images/20251017_131126373_iOS.jpg"
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

        <div className="container" style={{ textAlign: 'center', paddingTop: '0px', zIndex: 10, position: 'relative' }}>
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

        /* AWW3 Card Styles for Careers */
        .aww3-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: rgba(10, 10, 15, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          color: #fff;
          transform-style: preserve-3d;
          transition: border-color 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
        }
        .aww3-card-noise {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .aww3-orb {
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          filter: blur(80px);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: screen;
          background: #8b5cf6;
        }
        .aww3-card:hover {
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(138, 92, 246, 0.1);
        }
        .aww3-card:hover .aww3-orb {
          opacity: 0.6;
        }
        .values-bento-grid:hover .aww3-card:not(:hover) {
          opacity: 0.5;
          filter: grayscale(100%);
        }

        /* AWW3 Category Header & Grid */
        .aww3-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 4rem;
        }
        .aww3-header-left { flex: 1; }
        .aww3-cat-num {
          font-family: var(--font-mono, monospace);
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .aww3-cat-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.5rem, 4vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .aww3-cat-title.text-fill {
          background: linear-gradient(to right, #ffffff 50%, rgba(255, 255, 255, 0.1) 50%) !important;
          background-size: 200% 100% !important;
          background-position: 100% 0 !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
        }
        .aww3-header-right { flex: 0 0 450px; }
        .aww3-cat-desc {
          font-size: clamp(1.1rem, 1.2vw, 1.3rem);
          line-height: 1.6;
          color: rgba(255,255,255,0.5);
        }
        .aww3-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (min-width: 1400px) {
          .aww3-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .aww3-section-header { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .aww3-header-right { flex: none; width: 100%; }
        }
        @media (max-width: 768px) {
          .aww3-grid { grid-template-columns: 1fr; }
        }

        .aww3-card-header { display: flex; justify-content: flex-end; align-items: flex-start; }
        .aww3-card-index { font-family: var(--font-mono, monospace); font-size: 1rem; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
        .aww3-card-desc { font-size: clamp(1rem, 1.1vw, 1.15rem); line-height: 1.6; color: rgba(255,255,255,0.6); }
        .aww3-grid:hover .aww3-card:not(:hover) { opacity: 0.4; filter: grayscale(100%); }

        /* Hover Logo Animation */
        .aww3-hover-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          opacity: 0;
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%) rotate(-5deg);
          transition: opacity 0.5s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aww3-hover-logo path {
          fill: none;
          stroke: rgba(255, 255, 255, 0.15); /* Made lighter per request */
          stroke-width: 2;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aww3-card:hover .aww3-hover-logo {
          opacity: 1;
          transform: translate(-50%, -50%) rotate(0deg);
        }
        .aww3-card:hover .aww3-hover-logo path {
          stroke-dashoffset: 0;
        }

        /* Know More Arrow */
        .aww3-card-arrow {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .aww3-card-hover-text {
          position: absolute;
          opacity: 0;
          color: #fff;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.45rem;
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transform: scale(0.8);
          pointer-events: none;
        }

        .aww3-card-arrow svg {
          width: 20px;
          height: 20px;
          position: absolute;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .aww3-card:hover .aww3-card-arrow {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.4);
        }

        .aww3-card:hover .aww3-card-arrow svg {
          opacity: 0;
          transform: scale(0.5);
        }

        .aww3-card:hover .aww3-card-hover-text {
          opacity: 1;
          transform: scale(1);
        }

        .aww3-image-cover {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain; /* Using contain to prevent cropping and blur from stretching */
          padding: 2rem;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aww3-card:hover .aww3-image-cover {
          transform: scale(1.03);
        }
        
        .aww3-photo-cover {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aww3-card:hover .aww3-photo-cover {
          transform: scale(1.03);
        }
        
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
        
        /* Force uniform section title font size across the page */
        h2.svc-h2,
        .svc-process-container h2,
        .svc-final-cta-heading,
        h2.split-heading {
          font-size: clamp(2.2rem, 8vw, 4.5rem) !important;
        }

        /* Mobile specific spacing */
        @media (max-width: 768px) {
          .aww3-card {
            padding: 2rem !important;
          }
          .section-padding {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
          h2.svc-h2, .svc-process-container h2, .svc-final-cta-heading, h2.split-heading {
            margin-bottom: 1.5rem !important;
          }
        }
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Comprehensive Mobile Responsiveness for Careers Page */
        @media (max-width: 768px) {
          .svc-hero-headline { font-size: 3.5rem !important; margin-bottom: 2rem !important; line-height: 1.1 !important; }
          .bento-card { grid-column: span 1 !important; grid-row: span 1 !important; }
          .bento-grid, .values-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .container { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .grid-2, .grid-3 { grid-template-columns: 1fr !important; }
          .aww3-card { min-height: 300px !important; grid-column: span 1 !important; }
          .aww3-card-desc, .aww3-cat-desc { font-size: 1rem !important; }
          .values-bento-grid { grid-template-columns: 1fr !important; display: flex !important; flex-direction: column !important; }
          .values-bento-grid .aww3-card { grid-column: span 1 !important; grid-row: auto !important; height: auto !important; min-height: auto !important; }
          .aww3-cat-title { font-size: 2.5rem !important; }
          .expectations-number { font-size: 3rem !important; }
          .section-padding { padding: 4rem 1.5rem !important; }
          .aww3-hover-logo { width: 80% !important; height: 80% !important; }
          .svc-hero-cta-row { flex-direction: column; gap: 1rem; }
          .svc-hero-cta-row .btn { width: 100%; text-align: center; justify-content: center; }
          .magazine-grid { grid-template-columns: 1fr !important; display: flex !important; flex-direction: column !important; }
          .magazine-grid > div { grid-column: span 1 !important; grid-row: auto !important; height: 300px !important; }
          .job-listing-card { padding: 1.5rem !important; }
          .job-header { flex-direction: column; align-items: flex-start !important; gap: 1rem; }
          .job-actions { width: 100%; }
          .job-actions .btn { width: 100%; justify-content: center; }
          .cta-glow-card { padding: 2.5rem 1.5rem !important; }
          .cta-glow-card h2 { font-size: 2.5rem !important; line-height: 1.2 !important; }
        }
        @media (max-width: 480px) {
          .svc-hero-headline { font-size: 2.5rem !important; }
          .bento-title, .aww3-cat-title, h2.split-heading, .cta-glow-card h2, h2.svc-h2 { font-size: 2rem !important; line-height: 1.2 !important; }
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
          <div className="aww3-section-header reveal-blur" style={{ marginBottom: '5rem', paddingTop: '2rem' }}>
            <div className="aww3-header-left">
              <h2 className="svc-h2 split-text" style={{ color: '#fff', marginBottom: 0 }}>The work sits close to business.</h2>
            </div>
            <div className="aww3-header-right">
              <p className="aww3-cat-desc">We do not make things for the sake of making things.</p>
            </div>
          </div>

          <div className="aww3-grid reveal-blur" style={{ marginBottom: '6rem' }}>
            {[
              { title: "Social & Content", text: "A post has to carry a thought." },
              { title: "Websites", text: "A website has to make action easier." },
              { title: "Search SEO", text: "A search strategy has to build demand." },
              { title: "Video Production", text: "A film has to make a story travel." },
              { title: "Data & Analytics", text: "A report has to make the next decision clearer." },
              { title: "Agentic AI", text: "An AI workflow has to reduce drag, not create theatre." }
            ].map((item, i) => (
              <div key={i} className="aww3-card" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', padding: '3rem', zIndex: 2 }}>
                <div className="aww3-orb"></div>
                <div className="aww3-card-noise"></div>

                {/* Hover Logo Drawing */}
                <svg viewBox="801 344 274 272" className="aww3-hover-logo" preserveAspectRatio="xMidYMid meet">
                  <path pathLength="1" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                </svg>

                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div className="aww3-card-header">
                    <span className="aww3-card-index" style={{ marginRight: 'auto' }}>0{i + 1}</span>
                    <div className="aww3-card-arrow">
                      <span className="aww3-card-hover-text">Know More</span>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 5H19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1rem', color: '#fff', transition: 'color 0.4s ease' }} className="aww3-card-title">{item.title}</h3>
                    <p className="aww3-card-desc">{item.text}</p>
                  </div>
                </div>
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
            <h2 className="svc-h2 split-text" style={{ color: '#fff', marginBottom: 0 }}>What we value</h2>
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
              .values-bento-grid > div {
                min-height: 300px !important;
              }
            }
          `}</style>

          <div className="values-bento-grid">

            {/* 1. Care before someone checks (Span 7) */}
            <div className="reveal-blur aww3-card" style={{ gridColumn: 'span 7', minHeight: '420px', padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
              <div className="aww3-orb"></div>
              <div className="aww3-card-noise"></div>

              {/* Hover Logo Drawing */}
              <svg viewBox="801 344 274 272" className="aww3-hover-logo" preserveAspectRatio="xMidYMid meet">
                <path pathLength="1" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>

              <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div className="aww3-card-header" style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc', margin: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                  <div className="aww3-card-arrow">
                    <span className="aww3-card-hover-text">Value</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 5H19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="aww3-card-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '2rem', letterSpacing: '-0.02em', transition: 'color 0.4s ease' }}>{values[0].title}</h3>
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
              </div>
            </div>

            {/* Image 1 (Span 5) - Full bleed photo */}
            <div className="reveal-blur aww3-card" style={{ gridColumn: 'span 5', minHeight: '420px', padding: 0, overflow: 'hidden', position: 'relative' }}>
              <div className="aww3-orb"></div>
              <img className="aww3-photo-cover" src={`${import.meta.env.BASE_URL}images/20251017_131126373_iOS.jpg`} alt="Team gathering" />
            </div>

            {/* Image 2 (Span 6) - Full bleed photo */}
            <div className="reveal-blur aww3-card" style={{ gridColumn: 'span 6', minHeight: '420px', padding: 0, overflow: 'hidden', position: 'relative' }}>
              <div className="aww3-orb"></div>
              <img className="aww3-photo-cover" src={`${import.meta.env.BASE_URL}images/2025-07-11.webp`} alt="Think before you make" />
            </div>

            {/* 2. Think before you make (Span 6) */}
            <div className="reveal-blur aww3-card" style={{ gridColumn: 'span 6', minHeight: '420px', padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
              <div className="aww3-orb"></div>
              <div className="aww3-card-noise"></div>

              {/* Hover Logo Drawing */}
              <svg viewBox="801 344 274 272" className="aww3-hover-logo" preserveAspectRatio="xMidYMid meet">
                <path pathLength="1" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>

              <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div className="aww3-card-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc', margin: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                  </div>
                  <div className="aww3-card-arrow">
                    <span className="aww3-card-hover-text">Value</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 5H19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="aww3-card-title" style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2, transition: 'color 0.4s ease' }}>{values[1].title}</h3>
                  <div style={{ color: '#d1d5db', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
              </div>
            </div>

            {/* 3. Use AI without losing judgment (Span 7) */}
            <div className="reveal-blur aww3-card" style={{ gridColumn: 'span 7', minHeight: '420px', padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
              <div className="aww3-orb"></div>
              <div className="aww3-card-noise"></div>

              {/* Hover Logo Drawing */}
              <svg viewBox="801 344 274 272" className="aww3-hover-logo" preserveAspectRatio="xMidYMid meet">
                <path pathLength="1" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>

              <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div className="aww3-card-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc', margin: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
                  </div>
                  <div className="aww3-card-arrow">
                    <span className="aww3-card-hover-text">Value</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 5H19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="aww3-card-title" style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2, transition: 'color 0.4s ease' }}>{values[2].title}</h3>
                  <div style={{ color: '#d1d5db', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p style={{ margin: 0 }}>AI is part of how we work.</p>
                    <p style={{ margin: 0 }}>It helps us:</p>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#8b5cf6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <li><span style={{ color: '#d1d5db' }}>Research faster</span></li>
                      <li><span style={{ color: '#d1d5db' }}>Explore more routes</span></li>
                      <li><span style={{ color: '#d1d5db' }}>Reduce manual drag</span></li>
                      <li><span style={{ color: '#d1d5db' }}>Build better systems</span></li>
                    </ul>
                    <p style={{ margin: 0 }}>But AI does not know when a line is technically correct and emotionally dead. That part is still human.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image 3 (Span 5) - Full bleed photo */}
            <div className="reveal-blur aww3-card" style={{ gridColumn: 'span 5', minHeight: '420px', padding: 0, overflow: 'hidden', position: 'relative' }}>
              <div className="aww3-orb"></div>
              <img className="aww3-photo-cover" src={`${import.meta.env.BASE_URL}images/DSC00319.JPG.jpg`} alt="Use AI without losing judgment" />
            </div>

            {/* 4. Take feedback like someone who wants to grow (Span 12) */}
            <div className="reveal-blur aww3-card" style={{ gridColumn: 'span 12', minHeight: '380px', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
              <div className="aww3-orb"></div>
              <div className="aww3-card-noise"></div>

              {/* Hover Logo Drawing */}
              <svg viewBox="801 344 274 272" className="aww3-hover-logo" preserveAspectRatio="xMidYMid meet">
                <path pathLength="1" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>

              <div className="aww3-card-header" style={{ position: 'absolute', top: '3rem', right: '3rem', zIndex: 20 }}>
                <div className="aww3-card-arrow">
                  <span className="aww3-card-hover-text">Value</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 5H19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '4rem', alignItems: 'center' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <div style={{ width: '80px', height: '80px', background: 'rgba(138, 92, 246, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(138, 92, 246, 0.3)', color: '#a5b4fc' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21v-5h5" /></svg>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="aww3-card-title" style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em', transition: 'color 0.4s ease' }}>{values[3].title}</h3>
                  <div style={{ color: '#d1d5db', fontSize: '1.3rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc', color: '#8b5cf6', display: 'flex', gap: '2rem' }}>
                      <li><span style={{ color: '#d1d5db' }}>Your first draft may not survive.</span></li>
                      <li><span style={{ color: '#d1d5db' }}>Your idea may be questioned.</span></li>
                      <li><span style={{ color: '#d1d5db' }}>Your line may be rewritten.</span></li>
                    </ul>
                    <p style={{ margin: 0, fontWeight: 600, color: '#fff', fontSize: '1.5rem' }}>That is not failure. That is the work asking to become better.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Expectations */}
      <ServiceProcess data={expectationsData} />

      {/* Life at Impulse - Focus Cards Grid (21st.dev Inspired) */}
      <section className="section-padding" style={{ backgroundColor: '#030303', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '50%', background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.08) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>

        <div className="container" style={{ marginTop: '10rem', paddingBottom: '4rem', position: 'relative', zIndex: 10 }}>
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="svc-h2 split-text" style={{ color: '#fff', marginBottom: 0 }}>Life at Impulse</h2>
            <p style={{ color: '#9ca3af', fontSize: '1.25rem', marginTop: '1rem' }}>Hover to focus</p>
          </div>

          <style>{`
            .focus-grid {
              column-count: 3;
              column-gap: 1.5rem;
            }
            .focus-grid-item {
              break-inside: avoid;
              margin-bottom: 1.5rem;
              border-radius: 24px;
              overflow: hidden;
              position: relative;
              transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: crosshair;
              background: #050505;
              border: 1px solid rgba(255,255,255,0.05);
              display: block;
            }
            .focus-grid-item img {
              width: 100%;
              height: auto;
              display: block;
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
              border-color: rgba(138, 92, 246, 0.4);
            }
            .focus-grid .focus-grid-item:hover img {
              transform: scale(1.05);
              opacity: 1;
            }
            
            @media (max-width: 1024px) {
              .focus-grid { column-count: 2; }
            }
            @media (max-width: 768px) {
              .focus-grid { column-count: 1; }
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

      {/* Fit Check List - Timeline Design */}
      <section className="section-padding" style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(138, 92, 246, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 className="svc-h2 split-text" style={{ color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}>
              You may fit <span style={{ color: '#8b5cf6' }}>here if</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              We don't care about the pedigree of your resume. We care about the velocity of your thinking and your appetite for great work.
            </p>
          </div>

          <div className="timeline-container" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Center Line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50px', width: '2px', background: 'linear-gradient(to bottom, transparent, rgba(138, 92, 246, 0.3) 10%, rgba(138, 92, 246, 0.3) 90%, transparent)' }} className="timeline-line"></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {fitCheck.map((item, i) => (
                <div key={i} className="timeline-item reveal-blur" style={{ display: 'flex', alignItems: 'center', gap: '3rem', position: 'relative' }}>
                  {/* Node */}
                  <div style={{ width: '100px', flexShrink: 0, display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                    <div className="timeline-node" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#050505', border: '2px solid #8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(138, 92, 246, 0.2)', transition: 'all 0.4s ease' }}>
                      <span style={{ color: '#fff', fontFamily: 'monospace', fontSize: '0.9rem', fontWeight: 700 }}>0{i + 1}</span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="timeline-content" style={{ flexGrow: 1, background: 'rgba(255,255,255,0.02)', padding: '2.5rem 3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden' }}>
                    <div className="timeline-glow" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(138, 92, 246, 0.1) 0%, transparent 100%)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 500, color: '#e5e7eb', margin: 0, lineHeight: 1.4, position: 'relative', zIndex: 2 }}>
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .timeline-item:hover .timeline-node {
            background: #8b5cf6 !important;
            transform: scale(1.2);
            box-shadow: 0 0 30px rgba(138, 92, 246, 0.6) !important;
          }
          .timeline-item:hover .timeline-content {
            transform: translateX(15px);
            border-color: rgba(138, 92, 246, 0.3) !important;
          }
          .timeline-item:hover .timeline-glow {
            opacity: 1 !important;
          }

          @media (max-width: 768px) {
            .timeline-container { padding-left: 10px; }
            .timeline-line { left: 25px !important; }
            .timeline-item { gap: 1.5rem !important; }
            .timeline-item > div:first-child { width: 50px !important; }
            .timeline-node { width: 32px !important; height: 32px !important; }
            .timeline-content { padding: 1.5rem !important; }
            .timeline-item:hover .timeline-content { transform: translateX(5px); }
          }
        `}</style>
      </section>

      {/* Cinematic Appetite Banner */}
      <section className="section-padding" style={{ backgroundColor: '#050505', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <style>{`
          .appetite-banner-card {
            padding: 6rem 2rem;
          }
          @media (max-width: 768px) {
            .appetite-banner-card {
              padding: 3rem 1.5rem;
            }
          }
        `}</style>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="reveal-blur appetite-banner-card" style={{ background: 'radial-gradient(ellipse at center, rgba(138, 92, 246, 0.1) 0%, transparent 60%)', textAlign: 'center', borderTop: '1px solid rgba(138,92,246,0.1)', borderBottom: '1px solid rgba(138,92,246,0.1)', borderRadius: '32px' }}>
            <h3 className="shiny-text" style={{ fontSize: 'clamp(2rem, 8vw, 5.5rem)', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '-0.04em', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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
            <p style={{ color: '#a5b4fc', fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '6px', margin: 0 }}>
              But there has to be appetite.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding" style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="reveal-blur" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="svc-h2 split-text" style={{ color: '#fff', marginBottom: 0 }}>Current Openings</h2>
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

        {/* Animated Background Shapes */}
        <div className="animated-shapes-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 1, pointerEvents: 'none' }}>
          <div className="moving-shape shape-1" style={{ position: 'absolute', width: '60vw', height: '60vw', maxWidth: '700px', maxHeight: '700px', background: '#8b5cf6', opacity: 0.25, borderRadius: '50%', filter: 'blur(100px)' }}></div>
          <div className="moving-shape shape-2" style={{ position: 'absolute', width: '50vw', height: '50vw', maxWidth: '600px', maxHeight: '600px', background: '#d946ef', opacity: 0.2, borderRadius: '50%', filter: 'blur(100px)' }}></div>
        </div>

        <style>{`
          .moving-shape.shape-1 {
            animation: moveShape1 20s infinite alternate ease-in-out;
            top: -10%; left: -10%;
          }
          .moving-shape.shape-2 {
            animation: moveShape2 25s infinite alternate ease-in-out;
            bottom: -10%; right: -10%;
          }
          @keyframes moveShape1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30vw, 30vh) scale(1.3); }
            100% { transform: translate(10vw, 60vh) scale(1); }
          }
          @keyframes moveShape2 {
            0% { transform: translate(0, 0) scale(1.2); }
            50% { transform: translate(-40vw, -40vh) scale(0.8); }
            100% { transform: translate(-20vw, -10vh) scale(1.2); }
          }
        `}</style>

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
