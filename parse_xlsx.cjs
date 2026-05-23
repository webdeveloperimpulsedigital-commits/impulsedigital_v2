const xlsx = require('xlsx');
const fs = require('fs');
const wb = xlsx.readFile('locations-pdf/impulse_digital_location_seo_titles_descriptions.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);
console.log(JSON.stringify(data.slice(0, 5), null, 2));
fs.writeFileSync('locations_seo_data.json', JSON.stringify(data, null, 2));
