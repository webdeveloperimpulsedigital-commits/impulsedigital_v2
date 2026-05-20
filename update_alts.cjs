const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    for (const [search, replace] of replacements) {
        content = content.replace(search, replace);
    }
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

const baseDir = path.join(__dirname, 'src');

// 1. Navbar
replaceInFile(path.join(baseDir, 'components', 'Navbar.tsx'), [
    ['alt="Impulse Digital Logo"', 'alt="Impulse Digital - Leading Digital Marketing Agency in Mumbai"']
]);

// 2. Logos
replaceInFile(path.join(baseDir, 'components', 'Logos.tsx'), [
    ["alt: 'Amazon'", "alt: 'Amazon - Digital Marketing Client of Impulse Digital'"],
    ["alt: 'Hindustan Unilever'", "alt: 'Hindustan Unilever - FMCG Client of Impulse Digital'"],
    ["alt: 'Dmart'", "alt: 'Dmart - Retail Client of Impulse Digital'"]
]);

// 3. Testimonials
replaceInFile(path.join(baseDir, 'components', 'Testimonials.tsx'), [
    [/alt="([^"]+)" className="author-img"/g, 'alt="$1 - Client Review for Impulse Digital Marketing Agency" className="author-img"']
]);

// 4. CaseStudies component
replaceInFile(path.join(baseDir, 'components', 'CaseStudies.tsx'), [
    ['alt="ABG × Brut India"', 'alt="Aditya Birla Group x Brut India Digital Marketing Campaign Case Study"'],
    ['alt="ABG × KBC"', 'alt="Aditya Birla Group x KBC CSR Campaign Case Study"'],
    ['alt="Automag India"', 'alt="Automag India B2B SEO and Lead Generation Case Study"'],
    ['alt="Automag × Bajaj Auto"', 'alt="Automag x Bajaj Auto B2B Case Study"'],
    ['alt="DMart"', 'alt="DMart Retail Footfall Generation Campaign Case Study"'],
    ['alt="ElectroMech"', 'alt="ElectroMech B2B Website Development and SEO Growth"'],
    ['alt="Fours for Good"', 'alt="Aditya Birla Group Fours for Good CSR Campaign"'],
    ['alt="HUL"', 'alt="Hindustan Unilever Performance Marketing and Coupon Campaign"'],
    ['alt="LG Hing"', 'alt="LG Hing Diwali Social Media Campaign"'],
    ['alt="Mastercard"', 'alt="Mastercard WhatsApp Marketing and Merchant Outreach Strategy"'],
    ['alt="Qure.ai"', 'alt="Qure.ai Healthcare AI SEO Traffic Case Study"'],
    ['alt="Uppercase"', 'alt="Uppercase AI-Led Social Media Campaign Case Study"']
]);

// 5. CaseStudies pages
replaceInFile(path.join(baseDir, 'pages', 'CaseStudies.tsx'), [
    ['alt={`${study.client} slide ${imgIdx + 1}`}', 'alt={`${study.client} Digital Marketing Campaign Case Study by Impulse Digital - Slide ${imgIdx + 1}`}']
]);
replaceInFile(path.join(baseDir, 'pages', 'CaseStudiesPage.tsx'), [
    ['alt={`${cs.client} case study ${i + 1}`}', 'alt={`${cs.client} Digital Marketing Campaign Case Study - ${i + 1}`}'],
    ['alt={cs.client}', 'alt={`${cs.client} Digital Marketing Campaign Case Study`}']
]);

// 6. AboutUs
replaceInFile(path.join(baseDir, 'pages', 'AboutUs.tsx'), [
    ['alt="Adwait Joshi"', 'alt="Adwait Joshi - Founder and CEO of Impulse Digital Marketing Agency"'],
    ['alt="Abhishek Arekar"', 'alt="Abhishek Arekar - Co-Founder of Impulse Digital Marketing Agency"']
]);

// 7. Careers
replaceInFile(path.join(baseDir, 'pages', 'Careers.tsx'), [
    [/alt="Inside Impulse Digital"/g, 'alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency"']
]);

// 8. Individual Case Studies
const pagesDir = path.join(baseDir, 'pages');
const files = fs.readdirSync(pagesDir);
for (const file of files) {
    if (file.endsWith('CaseStudy.tsx')) {
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;
        
        // Append SEO suffix to literal string alts in case studies, avoid if already there
        content = content.replace(/alt="([^"]+)"/g, (match, p1) => {
            if (p1.includes('Impulse Digital') || p1.includes('Case Study') || p1.includes('case study')) {
                return match;
            }
            return `alt="${p1} - Impulse Digital Marketing Case Study"`;
        });
        
        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated Case Study: ${file}`);
        }
    }
}

console.log("Alt tag update complete.");
