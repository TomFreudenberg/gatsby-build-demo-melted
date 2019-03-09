const args = process.argv;
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

// const locator for base and root URL
const fileURL = 'file://';
const publicURL = 'file://' + process.cwd() + '/public/';
const rootURL = 'file:///';

const input_html_file = args[2];
const output_pdf_path = args[3];
const output_pdf_file = output_pdf_path + '/' + path.basename(path.dirname(input_html_file)) + '.pdf';

console.log('Convert ' + input_html_file + ' into ' + output_pdf_file);

// test output path but ignore errors
fs.mkdir(output_pdf_path, function(e) {});

// convert html into pdf
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // make sure that we fill-up any SSR image file:/// rootURL with path to "public" folder
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (req.resourceType() === 'image' && req.url().startsWith(fileURL) && !req.url().startsWith(publicURL)) {
      req.continue({ url: req.url().replace(rootURL, publicURL) });
    } else {
      req.continue();
    }
  })

  await page.goto('file://' + process.cwd() + '/' + input_html_file, {waitUntil: 'networkidle2'});
  await page.pdf({path: output_pdf_file, format: 'A4', landscape: true, preferCSSPageSize: true, ignoreInvalidPageRanges: true});
  await browser.close();
})();
