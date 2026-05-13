import React from 'react';

interface ContactProps {
  title?: string;
}

const Contact: React.FC<ContactProps> = ({ title }) => {
  return (
    <section id="connect" className="contact glass-panel">
      <div className="container" style={{ display: 'flex', gap: '4rem' }}>
        <div className="contact-left" style={{ width: '50%', position: 'relative', overflow: 'hidden' }}>
          <h2 className="section-heading split-text" style={{ position: 'relative', zIndex: 1 }} dangerouslySetInnerHTML={{ __html: title || "Let's build<br>something<br>together." }}>
          </h2>
          <div className="contact-details" style={{ marginTop: '3rem', position: 'relative', zIndex: 1 }}>
            <a href="tel:+919769285224" className="contact-channel">
              <div className="contact-channel-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-label">Call us</span>
                <span className="contact-channel-value">+91-9769285224</span>
              </div>
              <div className="contact-channel-arrow"><i className="fas fa-arrow-right"></i></div>
            </a>
            <a href="mailto:collabs@theimpulsedigital.com" className="contact-channel">
              <div className="contact-channel-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-label">Email us</span>
                <span className="contact-channel-value">collabs@theimpulsedigital.com</span>
              </div>
              <div className="contact-channel-arrow"><i className="fas fa-arrow-right"></i></div>
            </a>
          </div>
        </div>
        <div className="contact-right" style={{ width: '50%' }}>
          <form className="contact-form">
            <input type="text" placeholder="Company" required />
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Message" rows={4}></textarea>
            <button type="submit" className="btn" data-cursor="SEND" style={{ width: '100%', border: '1px solid var(--impulse-violet)' }}>
              <span className="btn-text">Start the conversation</span>
              <div className="btn-fill" style={{ backgroundColor: 'var(--impulse-violet)' }}></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
