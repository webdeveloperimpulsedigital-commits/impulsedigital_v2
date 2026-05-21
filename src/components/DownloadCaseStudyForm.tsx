import React, { useState } from 'react';

interface DownloadCaseStudyFormProps {
  ctaText: string;
  pdfLink?: string;
}

const DownloadCaseStudyForm: React.FC<DownloadCaseStudyFormProps> = ({ ctaText, pdfLink }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (pdfLink) {
      const link = document.createElement('a');
      link.href = pdfLink;
      link.download = 'case-study.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section
      className="cs-download-form"
      style={{
        margin: '6rem auto 2rem',
        maxWidth: '600px',
        padding: '3rem 2.5rem',
        borderRadius: '20px',
        background: 'rgba(7, 3, 20, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(138, 92, 246, 0.25)',
        boxShadow: '0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      {/* Top glow edge */}
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(138,92,246,0.6), transparent)',
      }} />

      {!submitted ? (
        <>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontWeight: 700,
              lineHeight: 1.4,
              margin: 0,
            }}>
              {ctaText}
            </h3>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{
                fontSize: '0.78rem', fontWeight: 700,
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase', letterSpacing: '1.5px',
              }}>
                Full Name <span style={{ color: '#8a5cf6' }}>*</span>
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="John Smith"
                style={{
                  width: '100%', padding: '0.9rem 1rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px', color: '#fff', fontSize: '1rem',
                  outline: 'none', transition: 'border-color 0.25s, box-shadow 0.25s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => { e.target.style.borderColor = '#8a5cf6'; e.target.style.boxShadow = '0 0 0 3px rgba(138,92,246,0.15)'; }}
                onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{
                fontSize: '0.78rem', fontWeight: 700,
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase', letterSpacing: '1.5px',
              }}>
                Business Email <span style={{ color: '#8a5cf6' }}>*</span>
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="john@company.com"
                style={{
                  width: '100%', padding: '0.9rem 1rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px', color: '#fff', fontSize: '1rem',
                  outline: 'none', transition: 'border-color 0.25s, box-shadow 0.25s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => { e.target.style.borderColor = '#8a5cf6'; e.target.style.boxShadow = '0 0 0 3px rgba(138,92,246,0.15)'; }}
                onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </label>

            <button type="submit" className="btn" style={{ marginTop: '0.5rem', width: '100%' }}>
              <span className="btn-text">SEND ME THE CASE STUDY</span>
              <div className="btn-fill" />
            </button>
          </form>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{
            width: '72px', height: '72px',
            background: 'rgba(138,92,246,0.1)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.75rem', border: '1.5px solid #8a5cf6',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.75rem', fontWeight: 800 }}>
            On its way!
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Case study sent to <strong style={{ color: '#8a5cf6' }}>{email}</strong>
          </p>
        </div>
      )}
    </section>
  );
};

export default DownloadCaseStudyForm;
