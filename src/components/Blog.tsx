import React from 'react';

const Blog: React.FC = () => {
  return (
    <section className="blog glass-panel">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-heading split-text" style={{ marginBottom: 0 }}>The read before the next decision.</h2>
          <a href="#" className="btn" data-cursor="READ"><span className="btn-text">Go beyond the headline</span></a>
        </div>
        <div className="blog-grid">
          <div className="blog-card blog-card--featured">
            <img src="/images/dashboard.png" alt="Dashboarding is Not Intelligence" className="blog-card-img" />
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
            <img src="/images/agency_office.png" alt="Agentic Workflows" className="blog-card-img" />
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
            <img src="/images/glass_shape.png" alt="Generative Search" className="blog-card-img" />
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
      </div>
    </section>
  );
};

export default Blog;
