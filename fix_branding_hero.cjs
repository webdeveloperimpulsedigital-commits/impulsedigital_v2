const fs = require('fs');
let f = fs.readFileSync('src/data/brandingData.ts', 'utf8');
f = f.replace(/"headlineHtml": "Forgotten Brands Don.*?Get Chosen\.",/, '"headlineHtml": ""');
f = f.replace(/"headlineParts": \[\],/, '"headlineParts": ["Forgotten Brands Don\'t"],');
f = f.replace(/"headlineAccent": "",/, '"headlineAccent": "Get Chosen.",');
fs.writeFileSync('src/data/brandingData.ts', f);
