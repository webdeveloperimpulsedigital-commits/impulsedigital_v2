import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4173;
const DIST_DIR = path.resolve(__dirname, '../dist');

const app = express();
app.use(express.static(DIST_DIR));
app.use((req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

const server = app.listen(PORT, async () => {
  console.log('Static server started, launching Puppeteer...');
  
  try {
    const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Log console messages
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    // Log page errors
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));

    console.log('Navigating to http://localhost:4173/...');
    await page.goto(`http://localhost:${PORT}/`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });

    // Wait a bit
    await new Promise(resolve => setTimeout(resolve, 2000));

    const html = await page.content();
    console.log('HTML ROOT CONTENT:', html.includes('id="root"') ? html.substring(html.indexOf('id="root"'), html.indexOf('id="root"') + 200) : 'No root div');

    await browser.close();
  } catch (err) {
    console.error('Debug script error:', err);
  } finally {
    server.close();
  }
});
