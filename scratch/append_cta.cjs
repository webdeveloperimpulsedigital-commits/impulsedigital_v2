const fs = require('fs');

const ctaCSS = `
/* Universal Case Study CTA Block */
.case-study-cta-block {
    margin-top: 6rem;
    padding: 5rem;
    background: rgba(170, 59, 255, 0.05);
    border: 1px solid rgba(170, 59, 255, 0.2);
    border-radius: 8px 56px 8px 56px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.case-study-cta-block h3 {
    font-family: var(--font-heading, sans-serif);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    margin-bottom: 3rem;
    color: #fff;
    position: relative;
    z-index: 10;
}

.case-study-cta-button {
    display: inline-block;
    margin-top: 3rem;
    padding: 1.5rem 3rem;
    background: #aa3bff;
    color: #fff;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
    border-radius: 40px;
    text-transform: uppercase;
    transition: all 0.3s;
    position: relative;
    z-index: 10;
}

.case-study-cta-button:hover {
    background: #fff;
    color: #aa3bff;
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(170, 59, 255, 0.3);
}

.cta-bg-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    opacity: 0.15;
    z-index: 1;
    pointer-events: none;
}
.cta-bg-logo svg {
    width: 100%;
    height: 100%;
    overflow: visible;
}
.cta-bg-logo path {
    fill: transparent !important;
    stroke: var(--white, #ffffff) !important;
    stroke-width: 2 !important;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
}
`;

let css = fs.readFileSync('public/css/styles.css', 'utf8');
if (!css.includes('.case-study-cta-block')) {
    fs.appendFileSync('public/css/styles.css', '\n' + ctaCSS);
    console.log('Appended CTA CSS.');
} else {
    console.log('CTA CSS already exists.');
}
