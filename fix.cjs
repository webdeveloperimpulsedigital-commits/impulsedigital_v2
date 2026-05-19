const fs = require('fs');

const files = ['IndiaLocation.tsx', 'ThaneLocation.tsx', 'NaviMumbaiLocation.tsx', 'PuneLocation.tsx'];

files.forEach(file => {
  const path = 'src/pages/' + file;
  let content = fs.readFileSync(path, 'utf8');
  
  // Fix 'interface const ...'
  content = content.replace(/interface const/g, 'const');
  
  // Fix 'headlineAccent=India' etc.
  content = content.replace(/headlineAccent=([a-zA-Z\s]+)\n/g, 'headlineAccent="$1"\n');
  
  fs.writeFileSync(path, content);
});
