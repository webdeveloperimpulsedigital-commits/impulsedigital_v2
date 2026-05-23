const fs = require('fs');
const AdmZip = require('adm-zip');

function extractText(filePath) {
    try {
        const zip = new AdmZip(filePath);
        const zipEntries = zip.getEntries();
        const documentXmlEntry = zipEntries.find(entry => entry.entryName === 'word/document.xml');
        
        if (documentXmlEntry) {
            const xml = zip.readAsText(documentXmlEntry);
            
            // Match each paragraph <w:p>
            const paragraphs = xml.match(/<w:p(?: [^>]*)?>(.*?)<\/w:p>/g);
            if (paragraphs) {
                paragraphs.forEach(p => {
                    // Extract text from <w:t> tags within the paragraph
                    const texts = p.match(/<w:t(?: [^>]*)?>(.*?)<\/w:t>/g);
                    if (texts) {
                        const paraText = texts.map(t => t.replace(/<[^>]+>/g, '')).join('');
                        if (paraText.trim()) {
                            console.log(paraText);
                        }
                    }
                });
            } else {
                console.log("No paragraphs found");
            }
        } else {
            console.log("Not a valid docx file");
        }
    } catch (e) {
        console.error(e);
    }
}

extractText(process.argv[2]);
