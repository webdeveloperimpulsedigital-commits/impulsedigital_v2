import React, { useRef, useState } from 'react';

const Blog: React.FC = () => {
  const blogSliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (blogSliderRef.current) {
      const slider = blogSliderRef.current;
      const scrollLeft = slider.scrollLeft;
      const sliderWidth = slider.clientWidth;
      const scrollWidth = slider.scrollWidth;
      const children = Array.from(slider.children);

      if (scrollLeft <= 10) {
        setActiveIndex(0);
        return;
      }

      if (scrollLeft + sliderWidth >= scrollWidth - 10) {
        setActiveIndex(children.length - 1);
        return;
      }

      const sliderCenter = scrollLeft + sliderWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const htmlChild = child as HTMLElement;
        const childCenter = htmlChild.offsetLeft + htmlChild.offsetWidth / 2;
        const distance = Math.abs(sliderCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (blogSliderRef.current) {
      const slider = blogSliderRef.current;
      const children = Array.from(slider.children);
      const targetChild = children[index] as HTMLElement;
      if (targetChild) {
        const sliderWidth = slider.clientWidth;
        const childCenter = targetChild.offsetLeft + targetChild.offsetWidth / 2;
        const targetScrollLeft = childCenter - sliderWidth / 2;
        slider.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  };


  return (
    <section className="blog glass-panel">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-heading split-text" style={{ marginBottom: 0 }}>The read before the next decision.</h2>
          <a href="#" className="btn" data-cursor="READ"><span className="btn-text">Go beyond the headline</span></a>
        </div>
        <div className="blog-grid" ref={blogSliderRef} onScroll={handleScroll}>
          <div className="blog-card blog-card--featured">
            <img src={`${import.meta.env.BASE_URL}images/dashboard.webp`} alt="Dashboarding is Not Intelligence" className="blog-card-img" />
            <div className="blog-card-inner">
              <div className="blog-card-top">
                <span className="blog-category">Growth Intelligence</span>
              </div>
              <h3 className="blog-title">Why Dashboarding is Not Intelligence</h3>
              <p className="blog-excerpt">Most analytics tools tell you what happened. Intelligence tells you what to do next. There is a distance between the two that most marketing teams have learned to ignore.</p>
              <div className="blog-card-footer">
                <a href="#" className="blog-read">Read</a>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <img src={`${import.meta.env.BASE_URL}images/agency_office.webp`} alt="Agentic Workflows" className="blog-card-img" />
            <div className="blog-card-inner">
              <div className="blog-card-top">
                <span className="blog-category">AI Agency</span>
              </div>
              <h3 className="blog-title">Agentic Workflows for Enterprise Content</h3>
              <p className="blog-excerpt">The shift is not from human to AI. It is from isolated tasks to coordinated systems. Here is what that looks like in a live marketing operation.</p>
              <div className="blog-card-footer">
                <a href="#" className="blog-read">Read</a>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <img src={`${import.meta.env.BASE_URL}images/glass_shape.webp`} alt="Generative Search" className="blog-card-img" />
            <div className="blog-card-inner">
              <div className="blog-card-top">
                <span className="blog-category">Generative Search</span>
              </div>
              <h3 className="blog-title">Generative Search Optimisation in 2026</h3>
              <p className="blog-excerpt">The page one that matters is no longer a list of blue links. Brands that are not optimised for AI-generated answers are already invisible to half their audience.</p>
              <div className="blog-card-footer">
                <a href="#" className="blog-read">Read</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="blog-slider-controls">
          <button className="blog-slider-btn" onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))} aria-label="Previous Blog">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="slider-dots">
            {[0, 1, 2].map((idx) => (
              <span
                key={idx}
                className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>

          <button className="blog-slider-btn" onClick={() => scrollToSlide(Math.min(2, activeIndex + 1))} aria-label="Next Blog">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Blog;
