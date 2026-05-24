import React, { useEffect } from 'react';

export interface ZohoFormConfig {
  formId: string;
  xnQsjsdp: string;
  xmIwtLD: string;
  leadSource: string;
  analyticsRid: string;
  /** Reference only — the PDF path to configure in Zoho CRM's email workflow. Not used by the frontend. */
  pdfPath?: string;
}

interface DownloadCaseStudyFormProps {
  ctaText: string;
  pdfLink?: string;
  zoho: ZohoFormConfig;
}

const DownloadCaseStudyForm: React.FC<DownloadCaseStudyFormProps> = ({ ctaText, zoho }) => {
  const formName = `WebToLeads${zoho.formId}`;

  useEffect(() => {
    // Inject analytics tracking script (required by Zoho, do not remove)
    const analScriptId = `zoho-anal-${zoho.formId}`;
    if (!document.getElementById(analScriptId)) {
      const analScript = document.createElement('script');
      analScript.id = analScriptId;
      analScript.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=${zoho.analyticsRid}`;
      document.body.appendChild(analScript);
    }
    return () => {
      const s = document.getElementById(`zoho-anal-${zoho.formId}`);
      if (s) s.remove();
    };
  }, [zoho.formId, zoho.analyticsRid]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    // Mandatory field validation
    const mandatoryFields = ['Company', 'Last Name', 'Designation', 'Email', 'Phone', 'Website'];
    const fieldLabels = ['Company Name', 'Full Name', 'Designation / Role', 'Work Email', 'Phone Number', 'Company Website'];

    for (let i = 0; i < mandatoryFields.length; i++) {
      const field = form.elements.namedItem(mandatoryFields[i]) as HTMLInputElement | null;
      if (field && field.value.trim().length === 0) {
        alert(`${fieldLabels[i]} cannot be empty`);
        field.focus();
        e.preventDefault();
        return;
      }
    }

    // LEADCF21 dropdown validation
    const select = form.elements.namedItem('LEADCF21') as HTMLSelectElement | null;
    if (select && select.options[select.selectedIndex]?.value === '-None-') {
      alert('Pick List 1 cannot be none');
      select.focus();
      e.preventDefault();
      return;
    }

    // Email format validation
    const emailField = form.elements.namedItem('Email') as HTMLInputElement | null;
    if (emailField) {
      const v = emailField.value.trim();
      if (v.length > 0) {
        const at = v.indexOf('@');
        const dot = v.lastIndexOf('.');
        if (at < 1 || dot < at + 2 || dot + 2 >= v.length) {
          alert('Please enter a valid email address.');
          emailField.focus();
          e.preventDefault();
          return;
        }
      }
    }

    // Zoho SalesIQ visitor tracking (do not remove)
    try {
      const $zohoObj = (window as any).$zoho;
      if ($zohoObj?.salesiq) {
        const lduvidField = form.elements.namedItem('LDTuvid') as HTMLInputElement | null;
        if (lduvidField) lduvidField.value = $zohoObj.salesiq.visitor.uniqueid?.() ?? '';
        const nameField = form.elements.namedItem('Last Name') as HTMLInputElement | null;
        if (nameField) $zohoObj.salesiq.visitor.name(nameField.value);
        if (emailField) $zohoObj.salesiq.visitor.email(emailField.value);
      }
    } catch (_) {}

    // Disable submit to prevent duplicate submissions
    const submitBtn = form.querySelector('.formsubmit-btn') as HTMLButtonElement | null;
    if (submitBtn) submitBtn.disabled = true;

    // Allow native POST to Zoho CRM (form submits and redirects to /thank-you/)
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.9rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px', color: '#fff', fontSize: '1rem',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.25s, box-shadow 0.25s',
    fontFamily: 'inherit',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#8a5cf6';
    e.target.style.boxShadow = '0 0 0 3px rgba(138,92,246,0.15)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
    e.target.style.boxShadow = 'none';
  };

  const labelSpanStyle: React.CSSProperties = {
    fontSize: '0.78rem', fontWeight: 700,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase', letterSpacing: '1.5px',
    display: 'block', marginBottom: '0.5rem',
  };

  const selectArrowStyle: React.CSSProperties = {
    ...inputStyle,
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%238a5cf6%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem top 50%',
    backgroundSize: '0.65rem auto',
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

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 style={{
          fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
          fontFamily: 'var(--font-heading)',
          color: '#fff', fontWeight: 700, lineHeight: 1.4, margin: 0,
        }}>
          {ctaText}
        </h3>
      </div>

      <form
        id={`webform${zoho.formId}`}
        action="https://crm.zoho.in/crm/WebToLeadForm"
        name={formName}
        method="POST"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
      >
        {/* ── Zoho hidden security / routing fields (do not remove) ── */}
        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue={zoho.xnQsjsdp} readOnly />
        <input type="hidden" name="zc_gad" defaultValue="" />
        <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue={zoho.xmIwtLD} readOnly />
        <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM=" readOnly />
        <input
          type="text"
          style={{ display: 'none' }}
          name="returnURL"
          defaultValue="https://www.theimpulsedigital.com/thank-you/?source=case-study"
          readOnly
        />
        {/* Do not remove these two */}
        <input type="text" style={{ display: 'none' }} id="ldeskuid" name="ldeskuid" />
        <input type="text" style={{ display: 'none' }} id="LDTuvid" name="LDTuvid" />
        {/* Honeypot spam trap (do not remove) */}
        <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" defaultValue="" />
        {/* Pre-selected lead source (hidden) */}
        <input type="hidden" name="Lead Source" value={zoho.leadSource} />

        {/* ── Visible fields ── */}

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelSpanStyle}>Full Name <span style={{ color: '#ef4444' }}>*</span></span>
          <input
            type="text"
            id={`Last_Name_${zoho.formId}`}
            name="Last Name"
            aria-required="true"
            maxLength={80}
            placeholder="John Smith"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelSpanStyle}>Work Email <span style={{ color: '#ef4444' }}>*</span></span>
          <input
            type="text"
            {...{ ftype: 'email' }}
            id={`Email_${zoho.formId}`}
            name="Email"
            aria-required="true"
            maxLength={100}
            placeholder="john@company.com"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelSpanStyle}>Company Name <span style={{ color: '#ef4444' }}>*</span></span>
          <input
            type="text"
            id={`Company_${zoho.formId}`}
            name="Company"
            aria-required="true"
            maxLength={200}
            placeholder="Your Company"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelSpanStyle}>Designation / Role <span style={{ color: '#ef4444' }}>*</span></span>
          <input
            type="text"
            id={`Designation_${zoho.formId}`}
            name="Designation"
            aria-required="true"
            maxLength={100}
            placeholder="e.g. Marketing Manager"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelSpanStyle}>Phone Number <span style={{ color: '#ef4444' }}>*</span></span>
          <input
            type="text"
            id={`Phone_${zoho.formId}`}
            name="Phone"
            aria-required="true"
            maxLength={30}
            placeholder="+91 98765 43210"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelSpanStyle}>What are you looking to improve? <span style={{ color: '#ef4444' }}>*</span></span>
          <select
            id={`LEADCF21_${zoho.formId}`}
            name="LEADCF21"
            aria-required="true"
            defaultValue="-None-"
            style={selectArrowStyle}
            onFocus={handleFocus}
            onBlur={(e) => {
              handleBlur(e);
              e.target.style.color = e.target.value !== '-None-' ? '#fff' : 'rgba(255,255,255,0.5)';
            }}
            onChange={(e) => {
              e.target.style.color = e.target.value !== '-None-' ? '#fff' : 'rgba(255,255,255,0.5)';
            }}
          >
            <option value="-None-" disabled style={{ color: '#000' }}>Select an option</option>
            <option value="Generate more qualified leads" style={{ color: '#000' }}>Generate more qualified leads</option>
            <option value="Improve SEO and organic visibility" style={{ color: '#000' }}>Improve SEO and organic visibility</option>
            <option value="Build stronger brand storytelling" style={{ color: '#000' }}>Build stronger brand storytelling</option>
            <option value="Create AI-led video or campaign assets" style={{ color: '#000' }}>Create AI-led video or campaign assets</option>
            <option value="Improve website conversion" style={{ color: '#000' }}>Improve website conversion</option>
            <option value="Strengthen social media and content" style={{ color: '#000' }}>Strengthen social media and content</option>
            <option value="Build employer brand visibility" style={{ color: '#000' }}>Build employer brand visibility</option>
          </select>
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={labelSpanStyle}>Company Website <span style={{ color: '#ef4444' }}>*</span></span>
          <input
            type="text"
            id={`Website_${zoho.formId}`}
            name="Website"
            aria-required="true"
            maxLength={255}
            placeholder="https://company.com"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <button
          type="submit"
          className="btn formsubmit-btn"
          style={{ marginTop: '0.5rem', width: '100%' }}
        >
          <span className="btn-text">SEND ME THE CASE STUDY</span>
          <div className="btn-fill" />
        </button>
      </form>
    </section>
  );
};

export default DownloadCaseStudyForm;
