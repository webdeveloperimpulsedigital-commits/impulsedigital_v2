const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const seoDataList = JSON.parse(fs.readFileSync('locations_seo_data.json', 'utf8'));

const locationsDir = path.join(__dirname, 'locations-pdf');
const dataDir = path.join(__dirname, 'src', 'data');
const pagesDir = path.join(__dirname, 'src', 'pages', 'seo-locations');

// Create directories if they don't exist
if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
}

const docxFiles = fs.readdirSync(locationsDir).filter(f => f.endsWith('.docx'));

const toCamelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};

const toPascalCase = (str) => {
    const camel = toCamelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
};

function extractText(filePath) {
    try {
        const zip = new AdmZip(filePath);
        const zipEntries = zip.getEntries();
        const documentXmlEntry = zipEntries.find(entry => entry.entryName === 'word/document.xml');
        
        if (documentXmlEntry) {
            const xml = zip.readAsText(documentXmlEntry);
            const lines = [];
            const paragraphs = xml.match(/<w:p(?: [^>]*)?>(.*?)<\/w:p>/g);
            if (paragraphs) {
                paragraphs.forEach(p => {
                    const texts = p.match(/<w:t(?: [^>]*)?>(.*?)<\/w:t>/g);
                    if (texts) {
                        const paraText = texts.map(t => t.replace(/<[^>]+>/g, '')).join('');
                        if (paraText.trim()) {
                            lines.push(paraText.trim());
                        }
                    }
                });
            }
            return lines;
        }
    } catch (e) {
        console.error("Error reading", filePath, e);
    }
    return [];
}

const parseLines = (lines, locationName) => {
    const data = {
        location: locationName,
        hero: {
            title: '',
            headline: '',
            subHeadline: '',
            description: []
        },
        services: { title: '', items: [] },
        whyUs: { title: '', items: [] },
        process: { title: '', items: [] },
        deliverables: { title: '', items: [] },
        faq: { title: '', items: [] }
    };

    let state = 'HERO';
    let currentItem = null;

    const pushCurrentItem = (currentState, currentData, item) => {
        if (!item) return;
        if (currentState === 'SERVICES') currentData.services.items.push(item);
        if (currentState === 'WHY_US') currentData.whyUs.items.push(item);
        if (currentState === 'PROCESS') currentData.process.items.push(item);
        if (currentState === 'DELIVERABLES') currentData.deliverables.items.push(item);
        if (currentState === 'FAQ') currentData.faq.items.push(item);
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].replace(/&amp;/g, '&');

        // Ignore generic headers that we render statically
        if (line.match(/^Brands That Trust/i) || 
            line.match(/^Testimonial/i) || 
            line.match(/^Let's Put Your Auto-fill/i)) {
            continue;
        }

        // State Transitions
        if (line.match(/^SEO That.*Practical/i) || line.match(/^SEO That/i)) {
            if (currentItem) pushCurrentItem(state, data, currentItem);
            currentItem = null;
            state = 'SERVICES';
            data.services.title = line;
            continue;
        } else if (line.match(/^Why Businesses/i)) {
            if (currentItem) pushCurrentItem(state, data, currentItem);
            currentItem = null;
            state = 'WHY_US';
            data.whyUs.title = line;
            continue;
        } else if (line.match(/^How We (Usually )?Approach SEO/i) || line.match(/^Our SEO Approach/i) || line.match(/^No Fixed Approach/i) || line.match(/^No One-Size-Fits-All Approach/i)) {
            if (currentItem) pushCurrentItem(state, data, currentItem);
            currentItem = null;
            state = 'PROCESS';
            data.process.title = line;
            continue;
        } else if (line.match(/^What Our SEO Work Covers/i) || line.match(/^Our( Proven)? SEO Framework/i)) {
            if (currentItem) pushCurrentItem(state, data, currentItem);
            currentItem = null;
            state = 'DELIVERABLES';
            data.deliverables.title = line;
            continue;
        } else if (line.match(/^FAQ/i)) {
            if (currentItem) pushCurrentItem(state, data, currentItem);
            currentItem = null;
            state = 'FAQ';
            data.faq.title = line;
            continue;
        }

        // Processing based on state
        if (state === 'HERO') {
            if (i === 0) data.hero.title = line;
            else if (i === 1) data.hero.headline = line.replace(/^#1\s+/i, '');
            else if (i === 2) data.hero.subHeadline = line;
            else data.hero.description.push(line);
        } else if (state === 'FAQ') {
            if (line.endsWith('?')) {
                if (currentItem) data.faq.items.push(currentItem);
                currentItem = { question: line, answer: [] };
            } else if (currentItem) {
                currentItem.answer.push(line);
            }
        } else {
            // For SERVICES, WHY_US, PROCESS, DELIVERABLES
            // Usually the structure is: Short Title -> Paragraph(s)
            // We can guess it's a title if it's relatively short and doesn't end with a period
            if (line.length < 60 && !line.endsWith('.') && !line.endsWith(',')) {
                if (currentItem) pushCurrentItem(state, data, currentItem);
                currentItem = { title: line, text: [] };
            } else if (currentItem) {
                currentItem.text.push(line);
            } else {
                // Orphan text, just append it to the last item or create a dummy
                currentItem = { title: '', text: [line] };
            }
        }
    }
    
    // Push the last item
    if (currentItem) {
        pushCurrentItem(state, data, currentItem);
    }

    return data;
};

const allLocations = [];

docxFiles.forEach(file => {
    console.log(`Processing ${file}...`);
    const match = file.match(/SEO Agency in (.*?)\.docx/);
    if (!match) return;
    
    const locationName = match[1].trim();
    const seoMatch = seoDataList.find(d => d.Location.toLowerCase() === locationName.toLowerCase());
    const slug = locationName.toLowerCase().replace(/\s+/g, '-');
    const varName = toCamelCase(`seo ${locationName} Data`);
    const compName = toPascalCase(`seo ${locationName} Location`);
    
    allLocations.push({ name: locationName, slug, compName, varName });

    const lines = extractText(path.join(locationsDir, file));
    const data = parseLines(lines, locationName);

    // Write Data File
    const dataContent = `export const ${varName} = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(path.join(dataDir, `${varName}.ts`), dataContent);

    // Write Page Component
    const pageContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceHero from '../../components/Service/ServiceHero';
import CaseStudies from '../../components/CaseStudies';
import Logos from '../../components/Logos';
import BrandFilm from '../../components/BrandFilm';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import SEOLocationTemplate from '../../components/Service/SEOLocationTemplate';
import { ${varName} } from '../../data/${varName}';

const ${compName}: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    if (typeof window !== 'undefined' && (window as any).initHomeDOMAnimations) {
      setTimeout(() => {
        (window as any).initHomeDOMAnimations();
      }, 100);
    }
    return () => {
      document.body.classList.remove('service-page');
      const { ScrollTrigger } = window as any;
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger && (t.trigger.closest('.scrub-item') || t.trigger.closest('.logos') || t.trigger.closest('#connect') || t.trigger.closest('#cases-pin'))) {
            t.kill();
          }
        });
      }
    };
  }, []);

  const { hero } = ${varName};

  return (
    <main id="main-content">
      <Helmet>
        <title>{${seoMatch ? `\`${seoMatch["SEO Title"].replace(/`/g, '\\`')}\`` : 'hero.title + " | Impulse Digital"'}}</title>
        <meta name="description" content={${seoMatch ? `\`${seoMatch["Meta Description"].replace(/`/g, '\\`').replace(/"/g, '&quot;')}\`` : 'hero.description.join(" ")'}} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={\`https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/\${"${slug}"}/\`} />
      </Helmet>

      <ServiceHero 
        headlineParts={[hero.headline]}
        headlineAccent="${locationName}"
        description={hero.description.join('\\n\\n')}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title="Trusted by Teams in ${locationName} & Beyond" />
      <BrandFilm />
      
      <SEOLocationTemplate data={${varName}} />

      <Testimonials />
      <Contact />
    </main>
  );
};

export default ${compName};
`;
    fs.writeFileSync(path.join(pagesDir, `${compName}.tsx`), pageContent);
});

// Generate routes to inject into App.tsx or use in SEOLocationTemplate
fs.writeFileSync(path.join(dataDir, 'seoLocationsList.ts'), `export const seoLocations = ${JSON.stringify(allLocations, null, 2)};\n`);

console.log("Done extracting and generating.");
