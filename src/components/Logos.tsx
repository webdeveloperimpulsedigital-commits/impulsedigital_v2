import React from 'react';

interface LogosProps {
  title?: string | null;
}

const LOGOS = [
  { src: 'Aditya Birla Group.svg', alt: 'Aditya Birla Group', scale: 1.25 },
  { src: 'Amazon.png', alt: 'Amazon', scale: 1.25 },
  { src: 'Unilever.avif', alt: 'Hindustan Unilever', scale: 1.3, fixGrid: true },
  { src: 'Himalaya.png', alt: 'Himalaya' },
  { src: 'HDFC Securities.webp', alt: 'HDFC Securities', scale: 1.3 },
  { src: 'Mastercard.png', alt: 'Mastercard', scale: 1.3 },
  { src: 'Uppercase.png', alt: 'Uppercase' },
  { src: 'Tata Consumer.png', alt: 'Tata Consumer Products', scale: 1.5 },
  { src: 'Tata Soulfull.png', alt: 'Tata Soulful', scale: 1.6, fixGrid: true },
  { src: 'Bajaj.png', alt: 'Bajaj Group', scale: 1.7, fixGrid: true },
  { src: 'Dmart.svg', alt: 'Dmart', scale: 1.8 },
  { src: 'Ola.png', alt: 'Ola', fixGrid: true },
  { src: 'Chings.png', alt: 'Chings', scale: 1.7, fixGrid: true },
  { src: 'More.png', alt: 'More', scale: 1.7, fixGrid: true },
  { src: 'ABG Chemicals.png', alt: 'Aditya Birla Chemicals', scale: 1.6, fixGrid: true },
  { src: 'Almex.jpg', alt: 'Hindalco Almex', scale: 1.6, fixGrid: true },
  { src: 'Godrej.png', alt: 'Godrej Construction', scale: 1.7, fixGrid: true },
  { src: 'Birla Cellulose.png', alt: 'Birla Cellulose', scale: 1.8, fixGrid: true },
  { src: 'ABPS.png', alt: 'Aditya Birla Public Schools', scale: 1.8, fixGrid: true },
  { src: 'TJSB.png', alt: 'TJSB', scale: 1.7, fixGrid: true },
  { src: 'Navyasa.png', alt: 'Navyasa', scale: 1.7, fixGrid: true },
  { src: 'Croda.png', alt: 'Croda', scale: 1.8, fixGrid: true },
  { src: 'Qure.png', alt: 'Qure', scale: 2.0, fixGrid: true },
  { src: 'Electromech.png', alt: 'Electromech', scale: 2.0, fixGrid: true }
];

const Logos: React.FC<LogosProps> = ({ title }) => {
  return (
    <section className="logos">
      <style>{`
        @media (min-width: 769px) {
          .logo-duplicate { display: none !important; }
        }
      `}</style>
      <div className="container">
        <h2 className="section-heading text-center split-text" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--white)', marginBottom: '5rem' }} dangerouslySetInnerHTML={{ __html: title || 'Trusted by marketing teams at' }} />

        <div className="logo-slider">
          <div className="logo-grid">
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <div key={idx} className={`logo-card ${idx >= LOGOS.length ? 'logo-duplicate' : ''}`} data-cursor="VIEW">
                <div className="logo-pane">
                  <img
                    src={`${import.meta.env.BASE_URL}logos/${logo.src}`}
                    alt={logo.alt}
                    className={logo.fixGrid ? 'fix-logo-grid' : ''}
                    style={logo.scale ? { '--base-scale': logo.scale } as React.CSSProperties : undefined}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
