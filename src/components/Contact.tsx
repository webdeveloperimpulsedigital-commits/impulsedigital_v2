import React, { useEffect, useRef } from 'react';

interface ContactProps {
  title?: string;
}

const Contact: React.FC<ContactProps> = ({ title }) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const fields = formRef.current.querySelectorAll('input, textarea');
      const handleFocus = (e: Event) => {
        const field = e.target as HTMLInputElement | HTMLTextAreaElement;
        field.closest('label')?.classList.add('active');
      };
      const handleBlur = (e: Event) => {
        const field = e.target as HTMLInputElement | HTMLTextAreaElement;
        field.closest('label')?.classList.toggle('active', Boolean(field.value));
      };

      fields.forEach((field) => {
        field.addEventListener('focus', handleFocus);
        field.addEventListener('blur', handleBlur);
      });

      return () => {
        fields.forEach((field) => {
          field.removeEventListener('focus', handleFocus);
          field.removeEventListener('blur', handleBlur);
        });
      };
    }
  }, []);

  return (
    <section id="connect" className="contact glass-panel">
      <div className="container" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        <div className="contact-left" style={{ flex: '1 1 400px', position: 'relative', overflow: 'visible' }}>
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
        <div className="contact-right contact-page" style={{ flex: '1 1 500px' }}>
            <form className="contact-shell-form" id="contact-form" encType="multipart/form-data" ref={formRef}>
              <div className="contact-form-grid">
                <label>
                  <span>Company name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" name="company" autoComplete="organization" required />
                </label>
                <label>
                  <span>Your name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>Email <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  <span>Phone number <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="tel" name="phone" autoComplete="tel" required />
                </label>
              </div>
              <label className="contact-message-field">
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="What is the problem you want us to understand?"></textarea>
              </label>
              <label className="contact-upload-field">
                <span>Upload brief, RFQ, deck, or note, optional</span>
                <input type="file" name="brief" />
                <strong>Have a brief, RFQ, deck, or note? Attach it here.</strong>
                <em>No brief yet? That is fine. The problem is enough.</em>
              </label>
              <button type="submit" className="contact-submit">
                <span>Start a Conversation</span>
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
