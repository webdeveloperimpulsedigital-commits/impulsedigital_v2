const AdmZip = require('adm-zip');
const path = require('path');

function extractText(filePath) {
    const zip = new AdmZip(filePath);
    const documentXmlEntry = zip.getEntries().find(e => e.entryName === 'word/document.xml');
    const xml = zip.readAsText(documentXmlEntry);
    const lines = [];
    const paragraphs = xml.match(/<w:p(?: [^>]*)?>(.*?)<\/w:p>/g);
    if (paragraphs) {
        paragraphs.forEach(p => {
            const texts = p.match(/<w:t(?: [^>]*)?>(.*?)<\/w:t>/g);
            if (texts) {
                const paraText = texts.map(t => t.replace(/<[^>]+>/g, '')).join('');
                if (paraText.trim()) lines.push(paraText.trim());
            }
        });
    }
    return lines;
}

const lines = extractText(path.join(__dirname, 'locations-pdf', 'SEO Agency in Vashi.docx'));
console.log(lines.slice(0, 10).join('\n'));
