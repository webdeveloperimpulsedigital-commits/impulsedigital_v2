const fs = require('fs');

const missingCSS = `
.stats-cosmos-card {
    justify-content: center !important;
    align-items: center !important;
    text-align: center;
    background: radial-gradient(circle at center, rgba(138, 92, 246, 0.1) 0%, rgba(2, 0, 24, 0.95) 100%) !important;
}

.hs-card-big-stat {
    font-family: var(--font-heading);
    font-size: clamp(4rem, 8vw, 8rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--white);
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
}

.stats-cosmos-card .hs-card-inner {
    background: none !important;
    padding: 0 3rem !important;
}

.stats-cosmos-card .hs-desc {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    color: rgba(255,255,255,0.85);
    font-weight: 500;
}
`;

fs.appendFileSync('public/css/styles.css', '\n' + missingCSS);
console.log('Appended stats cosmos card CSS successfully!');
