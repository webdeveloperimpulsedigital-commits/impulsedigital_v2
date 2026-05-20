import React, { useRef, useState, useEffect } from 'react';

const { gsap, ScrollTrigger, SplitType } = window as any;

const Testimonials: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;
    const ctx = gsap.context(() => {
      // SplitType for Testimonials heading
      const text = sectionRef.current?.querySelector('.split-text') as HTMLElement;
      if (text && SplitType) {
        if (!text.classList.contains('split-done')) {
          const split = new SplitType(text, { types: 'lines, words' });
          split.lines?.forEach((line: any) => {
              const wrapper = document.createElement('div');
              wrapper.classList.add('line-wrapper');
              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);
          });
          text.classList.add('split-done');
          gsap.fromTo(split.words,
            { yPercent: 120, opacity: 0 },
            {
                scrollTrigger: { trigger: text, start: 'top 85%', toggleActions: 'play none none reverse' },
                yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
            }
          );
        }
      }

      // Testimonials Cards Reveal
      const cards = gsap.utils.toArray('.test-card-col');
      if (cards.length) {
        gsap.set(cards, { autoAlpha: 0, y: 40 });
        gsap.to(cards, {
            scrollTrigger: {
                trigger: ".testimonials",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="testimonials glass-panel" ref={sectionRef}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-heading split-text">What Good Work Leaves Behind</h2>
        <div className="testimonial-grid" ref={sliderRef} onScroll={handleScroll}>
          <div className="test-card-col">
            <div className="test-card">
              <div className="test-content">
                <p className="quote">"I have worked with Impulse Digital team across different organizations and different kinds of business problems over the years. What I have always valued is that they do not look at a brief as just a task to complete. They try to understand what the brand needs, what the business is trying to achieve, and then come back with ideas that are practical, sharp, and executable.<br /><br />From campaigns and creative work to tech-led implementation, the team has shown strong range, ownership, and consistency. Impulse Digital has been a partner I have gone back to across organizations because they bring both thinking and execution to the table."</p>
                <div className="author-block">
                  <img src={`${import.meta.env.BASE_URL}images/Sairam%20Krishnamurthy.png`} alt="Sairam Krishnamurthy - Client Review for Impulse Digital Marketing Agency" className="author-img" loading="lazy" />
                  <div className="author-info">
                    <h4 className="author">Sairam Krishnamurthy</h4>
                    <span className="role">Chief Executive Officer</span>
                    <span className="company">Bombay Shirt Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card-col">
            <div className="test-card">
              <div className="test-content">
                <p className="quote">"Impulse Digital has been a reliable partner in our social media journey. The team is innovative, dependable, humble, and highly collaborative, always taking full ownership of their work. With their creative insights and strong understanding of trends and technology in the social media space, they help us drive campaigns that deliver maximum impact."</p>
                <div className="author-block">
                  <img src={`${import.meta.env.BASE_URL}images/Rukmani%20Vishwanath.png`} alt="Rukmani Vishwanath - Client Review for Impulse Digital Marketing Agency" className="author-img" loading="lazy" decoding="async" />
                  <div className="author-info">
                    <h4 className="author">Rukmani Vishwanath</h4>
                    <span className="role">Head of Corporate Communications</span>
                    <span className="company">Grasim Industries Limited | Pulp and Fibre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card-col">
            <div className="test-card">
              <div className="test-content">
                <p className="quote">"Impulse Digital has been a dependable partner for our social listening and category landscape needs. What stands out is their agility and flexibility, they consistently deliver high-quality outputs, often within tight timelines. They’ve also played a key role in tracking and evaluating our main campaign last year - Agent Chings - where their structured weekly updates on social presence, growth, and sentiment were particularly useful. Their approach is practical, client-centric, and focused on delivering actionable insights. Overall, they are reliable and easy to work with."</p>
                <div className="author-block">
                  <img src={`${import.meta.env.BASE_URL}images/Pratik%20Shetty.png`} alt="Pratik Shetty - Client Review for Impulse Digital Marketing Agency" className="author-img" loading="lazy" decoding="async" />
                  <div className="author-info">
                    <h4 className="author">Pratik Shetty</h4>
                    <span className="role">Senior Manager, Consumer Insights</span>
                    <span className="company">Tata Consumer Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card-col">
            <div className="test-card">
              <div className="test-content">
                <p className="quote">"I have had the opportunity to work with Impulse Digital team across different organizations and mandates over the years. What stands out for me is the way they approach a brief. They do not look at it as just another task to execute. They take the time to understand the business context, ask the right questions, and come back with ideas that are practical as well as well thought through. Across digital strategy, brand communication, content, and performance-led initiatives, the team has consistently brought clarity, creativity, and a strong sense of ownership. They are dependable, collaborative, and easy to work with."</p>
                <div className="author-block">
                  <img src={`${import.meta.env.BASE_URL}images/Ankit%20Meena.png`} alt="Ankit Meena - Client Review for Impulse Digital Marketing Agency" className="author-img" loading="lazy" decoding="async" />
                  <div className="author-info">
                    <h4 className="author">Ankit Meena</h4>
                    <span className="role">Lead - Digital Marketing and Transformation</span>
                    <span className="company">Himalaya Wellness Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card-col">
            <div className="test-card">
              <div className="test-content">
                <p className="quote">"Working with Impulse Digital on our corporate video was a very positive experience. The team took the time to understand our business, the technical details behind it, and the message we wanted to communicate. They brought together technical accuracy and storytelling in a way that made the film both credible and engaging."</p>
                <div className="author-block">
                  <img src={`${import.meta.env.BASE_URL}images/Sachin.png`} alt="Sachin Mane - Client Review for Impulse Digital Marketing Agency" className="author-img" loading="lazy" decoding="async" />
                  <div className="author-info">
                    <h4 className="author">Sachin Mane</h4>
                    <span className="role">Marketing Insights Manager</span>
                    <span className="company">Croda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card-col">
            <div className="test-card">
              <div className="test-content">
                <p className="quote">"Working with Impulse Digital on our USA SEO mandate has been a very positive experience. The team took the time to understand our business, our audience, and the complexity of healthcare search before building the strategy. Their approach went beyond rankings and focused on building the right SEO foundation, website structure, content ecosystem, and technical improvements. Their understanding of SEO fundamentals, website architecture, and lead generation made a clear difference. We have seen strong organic growth, and the team has been proactive, thoughtful, and dependable throughout."</p>
                <div className="author-block">
                  <img src={`${import.meta.env.BASE_URL}images/Richa.png`} alt="Richa Dholi - Client Review for Impulse Digital Marketing Agency" className="author-img" loading="lazy" decoding="async" />
                  <div className="author-info">
                    <h4 className="author">Richa Dholi</h4>
                    <span className="role">Global Marketing Director</span>
                    <span className="company">Qure.ai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="test-slider-controls">
          <button className="test-slider-btn" onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))} aria-label="Previous Testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="slider-dots">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <span
                key={idx}
                className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>

          <button className="test-slider-btn" onClick={() => scrollToSlide(Math.min(5, activeIndex + 1))} aria-label="Next Testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
