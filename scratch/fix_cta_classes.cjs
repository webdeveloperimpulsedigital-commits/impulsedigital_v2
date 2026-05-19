const fs = require('fs');

const files = [
    'src/pages/QureAICaseStudy.tsx',
    'src/pages/FoursForGoodCaseStudy.tsx',
    'src/pages/ElectroMechCaseStudy.tsx',
    'src/pages/DMartCaseStudy.tsx'
];

const replacements = {
    'QureAICaseStudy.tsx': { block: 'qure-cta-block', btn: 'qure-cta-button' },
    'FoursForGoodCaseStudy.tsx': { block: 'ffg-cta-block', btn: 'ffg-cta-button' },
    'ElectroMechCaseStudy.tsx': { block: 'em-cta-block', btn: 'em-cta-button' },
    'DMartCaseStudy.tsx': { block: 'dm-cta-block', btn: 'dm-cta-button' }
};

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const filename = file.split('/').pop();
    const rule = replacements[filename];

    // Replace the HTML classes
    content = content.replace(new RegExp(rule.block, 'g'), 'case-study-cta-block');
    content = content.replace(new RegExp(rule.btn, 'g'), 'case-study-cta-button');

    fs.writeFileSync(file, content);
    console.log('Fixed ' + filename);
}
