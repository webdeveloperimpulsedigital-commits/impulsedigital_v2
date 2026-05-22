import React, { useState } from 'react';

interface DownloadCaseStudyFormProps {
  ctaText: string;
  pdfLink?: string;
}

const DownloadCaseStudyForm: React.FC<DownloadCaseStudyFormProps> = ({ ctaText, pdfLink }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [phone, setPhone] = useState('');
  const [improvementArea, setImprovementArea] = useState('');
  const [website, setWebsite] = useState('');

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

  const inputStyle = {
    width: '100%', padding: '0.9rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px', color: '#fff', fontSize: '1rem',
    outline: 'none', transition: 'border-color 0.25s, box-shadow 0.25s',
    boxSizing: 'border-box' as const,
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#8a5cf6';
    e.target.style.boxShadow = '0 0 0 3px rgba(138,92,246,0.15)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
    e.target.style.boxShadow = 'none';
  };

  const labelSpanStyle = {
    fontSize: '0.78rem', fontWeight: 700,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase' as const, letterSpacing: '1.5px',
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
              <span style={labelSpanStyle}>
                Full Name <span style={{ color: '#ef4444' }}>*</span>
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="John Smith"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelSpanStyle}>
                Work Email <span style={{ color: '#ef4444' }}>*</span>
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="john@company.com"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelSpanStyle}>
                Company Name <span style={{ color: '#ef4444' }}>*</span>
              </span>
              <input
                type="text"
                required
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                placeholder="Your Company"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelSpanStyle}>
                Designation / Role <span style={{ color: '#ef4444' }}>*</span>
              </span>
              <input
                type="text"
                required
                value={designation}
                onChange={e => setDesignation(e.target.value)}
                placeholder="e.g. Marketing Manager"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelSpanStyle}>
                Phone Number <span style={{ color: '#ef4444' }}>*</span>
              </span>
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelSpanStyle}>
                What are you looking to improve? <span style={{ color: '#ef4444' }}>*</span>
              </span>
              <select
                required
                value={improvementArea}
                onChange={e => setImprovementArea(e.target.value)}
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%238a5cf6%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem top 50%',
                  backgroundSize: '0.65rem auto',
                  color: improvementArea ? '#fff' : 'rgba(255,255,255,0.5)',
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="" disabled>Select an option</option>
                <option value="Generate more qualified leads" style={{ color: '#000' }}>Generate more qualified leads</option>
                <option value="Improve SEO and organic visibility" style={{ color: '#000' }}>Improve SEO and organic visibility</option>
                <option value="Build stronger brand storytelling" style={{ color: '#000' }}>Build stronger brand storytelling</option>
                <option value="Create AI-led video or campaign assets" style={{ color: '#000' }}>Create AI-led video or campaign assets</option>
                <option value="Improve website conversion" style={{ color: '#000' }}>Improve website conversion</option>
                <option value="Strengthen social media and content" style={{ color: '#000' }}>Strengthen social media and content</option>
                <option value="Build employer brand visibility" style={{ color: '#000' }}>Build employer brand visibility</option>
                <option value="Something else" style={{ color: '#000' }}>Something else</option>
              </select>
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelSpanStyle}>
                Company Website <span style={{ color: '#ef4444' }}>*</span>
              </span>
              <input
                type="url"
                required
                value={website}
                onChange={e => setWebsite(e.target.value)}
                placeholder="https://company.com"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
