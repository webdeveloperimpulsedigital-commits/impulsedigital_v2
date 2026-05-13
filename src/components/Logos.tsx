import React from 'react';

interface LogosProps {
  title?: string | null;
}

const Logos: React.FC<LogosProps> = ({ title }) => {
  return (
    <section className="logos">
      <div className="container">
        <h2 className="section-heading text-center split-text" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--white)', marginBottom: '5rem' }} dangerouslySetInnerHTML={{ __html: title || 'Trusted by marketing teams at' }} />

        <div className="logo-grid">
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Aditya Birla Group.svg" alt="Aditya Birla Group" style={{ '--base-scale': 1.25 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Amazon.png" alt="Amazon" style={{ '--base-scale': 1.25 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Unilever.avif" alt="Hindustan Unilever" className="fix-logo-grid" style={{ '--base-scale': 1.3 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Himalaya.png" alt="Himalaya" />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/HDFC Securities.webp" alt="HDFC Securities" style={{ '--base-scale': 1.3 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Mastercard.png" alt="Mastercard" style={{ '--base-scale': 1.3 } as React.CSSProperties} />
            </div>
          </div>

          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Uppercase.png" alt="Uppercase" />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Tata Consumer.png" alt="Tata Consumer Products" style={{ '--base-scale': 1.5 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Tata Soulfull.png" alt="Tata Soulful" className="fix-logo-grid" style={{ '--base-scale': 1.6 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Bajaj.png" alt="Bajaj Group" className="fix-logo-grid" style={{ '--base-scale': 1.7 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Dmart.svg" alt="Dmart" style={{ '--base-scale': 1.8 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Ola.png" alt="Ola" className="fix-logo-grid" />
            </div>
          </div>

          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Chings.png" alt="Chings" className="fix-logo-grid" style={{ '--base-scale': 1.7 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/More.png" alt="More" className="fix-logo-grid" style={{ '--base-scale': 1.7 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/ABG Chemicals.png" alt="Aditya Birla Chemicals" className="fix-logo-grid" style={{ '--base-scale': 1.6 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Almex.jpg" alt="Hindalco Almex" className="fix-logo-grid" style={{ '--base-scale': 1.6 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Godrej.png" alt="Godrej Construction" className="fix-logo-grid" style={{ '--base-scale': 1.7 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Birla Cellulose.png" alt="Birla Cellulose" className="fix-logo-grid" style={{ '--base-scale': 1.8 } as React.CSSProperties} />
            </div>
          </div>

          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/ABPS.png" alt="Aditya Birla Public Schools" className="fix-logo-grid" style={{ '--base-scale': 1.8 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/TJSB.png" alt="TJSB" className="fix-logo-grid" style={{ '--base-scale': 1.7 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Navyasa.png" alt="Navyasa" className="fix-logo-grid" style={{ '--base-scale': 1.7 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Croda.png" alt="Croda" className="fix-logo-grid" style={{ '--base-scale': 1.8 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Qure.png" alt="Qure" className="fix-logo-grid" style={{ '--base-scale': 2.0 } as React.CSSProperties} />
            </div>
          </div>
          <div className="logo-card" data-cursor="VIEW">
            <div className="logo-pane">
              <img src="/logos/Electromech.png" alt="Electromech" className="fix-logo-grid" style={{ '--base-scale': 2.0 } as React.CSSProperties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
