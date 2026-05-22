const xlsx = require('xlsx');
const wb = xlsx.readFile('d:/impulsedigital_v2/locations-pdf/impulse_digital_location_seo_titles_descriptions.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);
console.log(JSON.stringify(data.slice(0, 5), null, 2));
