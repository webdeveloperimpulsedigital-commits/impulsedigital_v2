const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('html/generative-search-optimisation.html', 'utf8');
const $ = cheerio.load(html);

const dataStr = fs.readFileSync('src/data/generativeSearchOptimisationData.ts', 'utf8')
  .replace('export const generativeSearchOptimisationData = ', '')
  .replace(/;\n$/, '');
const data = JSON.parse(dataStr);

const headlineStr = $('.svc-hero-headline').html() || '';
data.hero.headlineParts = headlineStr.split('<br>').map(s => cheerio.load(s).text().trim());
data.hero.headlineAccent = '';
data.hero.description = $('.svc-hero-page-desc').text().trim();
data.hero.buttons = [];
$('.svc-hero-cta-row .btn').each((i, el) => {
  data.hero.buttons.push({ text: $(el).find('.btn-text').text().trim(), url: $(el).attr('href') || '#', primary: i === 0 });
});

fs.writeFileSync('src/data/generativeSearchOptimisationData.ts', 'export const generativeSearchOptimisationData = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('Fixed hero data.');
