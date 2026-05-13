import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials glass-panel">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-heading split-text">What working with us looked like.</h2>
        <div className="testimonial-grid">
          <div className="test-card-col">
            <div className="test-card">
              <div className="test-content">
                <p className="quote" style={{ fontSize: '1.05rem' }}>"I have worked with Impulse Digital team across different organizations and different kinds of business problems over the years. What I have always valued is that they do not look at a brief as just a task to complete. They try to understand what the brand needs, what the business is trying to achieve, and then come back with ideas that are practical, sharp, and executable.<br /><br />From campaigns and creative work to tech-led implementation, the team has shown strong range, ownership, and consistency. Impulse Digital has been a partner I have gone back to across organizations because they bring both thinking and execution to the table."</p>
                <div className="author-block">
                  <img src="/images/Sairam%20Krishnamurthy.png" alt="Sairam Krishnamurthy" className="author-img" />
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
                <p className="quote" style={{ fontSize: '1.1rem' }}>"Impulse Digital has been a reliable partner in our social media journey. The team is innovative, dependable, humble, and highly collaborative, always taking full ownership of their work. With their creative insights and strong understanding of trends and technology in the social media space, they help us drive campaigns that deliver maximum impact."</p>
                <div className="author-block">
                  <img src="/images/Rukmani%20Vishwanath.png" alt="Rukmani Vishwanath" className="author-img" />
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
                <p className="quote" style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>"Impulse Digital has been a dependable partner for our social listening and category landscape needs. What stands out is their agility and flexibility, they consistently deliver high-quality outputs, often within tight timelines. They’ve also played a key role in tracking and evaluating our main campaign last year - Agent Chings - where their structured weekly updates on social presence, growth, and sentiment were particularly useful. Their approach is practical, client-centric, and focused on delivering actionable insights. Overall, they are reliable and easy to work with."</p>
                <div className="author-block">
                  <img src="/images/Pratik%20Shetty.png" alt="Pratik Shetty" className="author-img" />
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
                <p className="quote" style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>"I have had the opportunity to work with Impulse Digital team across different organizations and mandates over the years. What stands out for me is the way they approach a brief. They do not look at it as just another task to execute. They take the time to understand the business context, ask the right questions, and come back with ideas that are practical as well as well thought through. Across digital strategy, brand communication, content, and performance-led initiatives, the team has consistently brought clarity, creativity, and a strong sense of ownership. They are dependable, collaborative, and easy to work with."</p>
                <div className="author-block">
                  <img src="/images/Ankit%20Meena.png" alt="Ankit Meena" className="author-img" />
                  <div className="author-info">
                    <h4 className="author">Ankit Meena</h4>
                    <span className="role">Lead - Digital Marketing and Transformation</span>
                    <span className="company">Himalaya Wellness Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
