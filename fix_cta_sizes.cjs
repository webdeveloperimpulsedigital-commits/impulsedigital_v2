const fs = require('fs');
const path = require('path');
const dir = 'd:/impulsedigital_v2/src/pages';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('CaseStudy.tsx') || file === 'CaseStudiesPage.tsx' || file === 'ABGKBCCaseStudy.tsx' || file === 'ABGBrutIndiaCaseStudy.tsx') {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    const targetStr = ` style={{ width: 'min(60vw, 800px)', height: 'min(60vw, 800px)' }}`;
    if (content.includes(targetStr)) {
      content = content.replace(targetStr, '');
      fs.writeFileSync(p, content);
      console.log('Updated ' + file);
    }
  }
});
