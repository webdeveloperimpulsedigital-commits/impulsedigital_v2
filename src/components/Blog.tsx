import React, { useRef } from 'react';

const Blog: React.FC = () => {
  const blogSliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (blogSliderRef.current) {
      blogSliderRef.current.scrollBy({ left: -window.innerWidth * 0.85, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (blogSliderRef.current) {
      blogSliderRef.current.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="blog glass-panel">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-heading split-text" style={{ marginBottom: 0 }}>The read before the next decision.</h2>
          <a href="#" className="btn" data-cursor="READ"><span className="btn-text">Go beyond the headline</span></a>
        </div>
        <div className="blog-grid" ref={blogSliderRef}>
          <div className="blog-card blog-card--featured">
            <img src={`${import.meta.env.BASE_URL}images/dashboard.png`} alt="Dashboarding is Not Intelligence" className="blog-card-img" />
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
            <img src={`${import.meta.env.BASE_URL}images/agency_office.png`} alt="Agentic Workflows" className="blog-card-img" />
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
            <img src={`${import.meta.env.BASE_URL}images/glass_shape.png`} alt="Generative Search" className="blog-card-img" />
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
          <button className="blog-slider-btn" onClick={scrollLeft} aria-label="Previous Blog">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="blog-slider-btn" onClick={scrollRight} aria-label="Next Blog">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Blog;
