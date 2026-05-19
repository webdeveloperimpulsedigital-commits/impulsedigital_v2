const fs = require('fs');
let css = fs.readFileSync('public/css/styles.css', 'utf8');

// Remove mangled parts
css = css.replace(/    fill: none;\r?\n    stroke: var\(--white\);\r?\n    stroke-width: 2;\r?\n    stroke-dasharray: 2000;\r?\n    stroke-dashoffset: 2000;\r?\n\}/g, '');
css = css.replace(/    stroke: var\(--white\);\r?\n    stroke-width: 2;\r?\n    stroke-dasharray: 2000;\r?\n    stroke-dashoffset: 2000;\r?\n\}/g, '');

// Remove incorrectly placed inside media query
css = css.replace(/\/\* Stats Cosmos Cards Enhancements \*\/[\s\S]*?stroke-dashoffset: 2000;\s*\}/g, '');

const correctCSS = `
/* Stats Cosmos Cards Enhancements */
.cosmos-card-bg-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 85%;
    opacity: 0.2;
    z-index: 1;
    pointer-events: none;
}
.cosmos-card-bg-logo svg {
    width: 100%;
    height: 100%;
    overflow: visible;
}
.cosmos-card-bg-logo path {
    fill: transparent !important;
    stroke: rgba(255, 255, 255, 0.4) !important;
    stroke-width: 2 !important;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
}
`;

fs.writeFileSync('public/css/styles.css', css + correctCSS);
console.log('Fixed styles.css successfully!');
