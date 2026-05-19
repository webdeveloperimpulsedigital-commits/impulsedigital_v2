const fs = require('fs');
['src/data/ecommerceSEOData.ts', 'src/data/enterpriseSEOData.ts', 'src/data/localSEOData.ts'].forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  let idx = c.indexOf('"uses":');
  let idx2 = c.indexOf('"channels":');
  if (idx > -1 && idx2 > -1 && idx < idx2) {
    fs.writeFileSync(file, c.substring(0, idx) + c.substring(idx2));
    console.log('Removed from ' + file);
  }
});
