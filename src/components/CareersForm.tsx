import React, { useEffect, useRef } from 'react';

interface CareersFormProps {
  title?: string;
}

const CareersForm: React.FC<CareersFormProps> = ({ title }) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const fields = formRef.current.querySelectorAll('input, textarea, select');
      const handleFocus = (e: Event) => {
        const field = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        field.closest('label')?.classList.add('active');
      };
      const handleBlur = (e: Event) => {
        const field = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        field.closest('label')?.classList.toggle('active', Boolean(field.value) && field.value !== '');
      };

      fields.forEach((field) => {
        field.addEventListener('focus', handleFocus);
        field.addEventListener('blur', handleBlur);
        field.addEventListener('change', handleBlur);
      });

      return () => {
        fields.forEach((field) => {
          field.removeEventListener('focus', handleFocus);
          field.removeEventListener('blur', handleBlur);
          field.removeEventListener('change', handleBlur);
        });
      };
    }
  }, []);

  return (
    <section id="contact-form" className="contact glass-panel">
      <div className="container" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        <div className="contact-left" style={{ flex: '1 1 400px', position: 'relative', overflow: 'visible' }}>
          <h2 className="section-heading split-text" style={{ position: 'relative', zIndex: 1 }} dangerouslySetInnerHTML={{ __html: title || "Join the<br>team." }}>
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
            <a href="mailto:hr@theimpulsedigital.com" className="contact-channel">
              <div className="contact-channel-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-label">Email HR</span>
                <span className="contact-channel-value">hr@theimpulsedigital.com</span>
              </div>
              <div className="contact-channel-arrow"><i className="fas fa-arrow-right"></i></div>
            </a>
          </div>
        </div>
        <div className="contact-right contact-page" style={{ flex: '1 1 500px' }}>
            <form className="contact-shell-form" encType="multipart/form-data" ref={formRef}>
              <div className="contact-form-grid">
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
                <label>
                  <span>Select position <span style={{color: '#ff4d4d'}}>*</span></span>
                  <select name="position" required defaultValue="">
                    <option value="" disabled></option>
                    <option value="digital-marketing-manager">Digital Marketing Manager</option>
                    <option value="hr-executive">HR Executive</option>
                    <option value="social-media-intern">Social Media Intern</option>
                  </select>
                </label>
              </div>
              <label className="contact-message-field">
                <span>Message (Optional)</span>
                <textarea name="message" rows={5}></textarea>
              </label>
              <label className="contact-upload-field">
                <span>Attach your resume <span style={{color: '#ff4d4d'}}>*</span></span>
                <input type="file" name="resume" required accept=".pdf,.doc,.docx" />
                <strong>Have your resume ready? Attach it here.</strong>
                <em>Accepted formats: PDF, DOC, DOCX</em>
              </label>
              <button type="submit" className="contact-submit">
                <span>Submit Application</span>
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default CareersForm;
