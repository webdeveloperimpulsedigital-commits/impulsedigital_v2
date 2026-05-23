const fs = require('fs');
const path = require('path');

// I will just read the TS file and parse it.

const tsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'seoLocationsList.ts'), 'utf-8');
const match = tsContent.match(/export const seoLocations = (\[[\s\S]*?\]);/);
const seoLocs = JSON.parse(match[1]);

// 1. Update App.tsx
const appPath = path.join(__dirname, 'src', 'App.tsx');
let appCode = fs.readFileSync(appPath, 'utf-8');

const imports = seoLocs.map(l => `const ${l.compName} = lazy(() => import('./pages/seo-locations/${l.compName}'));`).join('\n');
const routes = seoLocs.map(l => `        <Route path="/brand-infrastructure/search-engine-optimisation/${l.slug}/" element={<${l.compName} />} />`).join('\n');

// Insert imports right before "const ScrollToTop = () => {"
appCode = appCode.replace('const ScrollToTop = () => {', imports + '\n\nconst ScrollToTop = () => {');

// Insert routes right before "</Routes>"
appCode = appCode.replace('      </Routes>', routes + '\n      </Routes>');

fs.writeFileSync(appPath, appCode);

// 2. Update scripts/prerender.js
const prerenderPath = path.join(__dirname, 'scripts', 'prerender.js');
let preCode = fs.readFileSync(prerenderPath, 'utf-8');

const preRoutes = seoLocs.map(l => `  '/brand-infrastructure/search-engine-optimisation/${l.slug}/'`).join(',\n');

preCode = preCode.replace('  \'/digital-marketing-agency-in-pune/\'\n];', '  \'/digital-marketing-agency-in-pune/\',\n' + preRoutes + '\n];');

fs.writeFileSync(prerenderPath, preCode);
console.log("Updated App.tsx and prerender.js successfully");
